<?php

namespace Hizzle\Forms;

/**
 * Container for a single email.
 *
 * @since   1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Container for a single email.
 *
 */
class Email {

    /**
     * @var bool $active Whether the email is active.
     */
    public $active;

    /**
     * @var string $reply_to The reply email recipient.
     */
    public $reply_to;

    /**
     * @var string $sender_name The email sender's name.
     */
    public $sender_name;

    /**
     * @var string $recipient The email recipient.
     */
    public $email;

    /**
     * @var string $subject The email subject.
     */
    public $subject;

    /**
     * @var string $body The email body.
     */
    public $message;

    /**
     * @var string $last_error Last error message.
     */
    public $last_error;

    /**
     * Class Constructor.
     *
     * @param array $args The email arguments.
     */
    public function __construct( $args ) {
        $this->active  = isset( $args['active'] ) ? (bool) $args['active'] : true;
        $this->email   = isset( $args['email'] ) ? $args['email'] : '';
        $this->subject = isset( $args['subject'] ) ? $args['subject'] : '';
        $this->message = isset( $args['message'] ) ? $args['message'] : '';
    }

    /**
     * Checks whether we can send the email.
     *
     * @return bool
     */
    public function can_send() {
        $can_send = $this->active && ! empty( $this->email ) && ! empty( $this->subject ) && ! empty( $this->message );
        return apply_filters( 'hizzle_forms_can_send_email', $can_send, $this );
    }

    /**
     * Sends the email.
     *
     * @param Submission $submission The submission object.
     */
    public function send( $submission ) {

        // Abort if we can't send the email.
        if ( ! $this->can_send() ) {
            return;
        }

        $this->last_error = '';

        do_action( 'hizzle_forms_before_send_email', $this, $submission );

        // Prepare args.
        $email_subject = apply_filters( 'hizzle_forms_email_subject', $this->subject, $this, $submission );
        $email_message = apply_filters( 'hizzle_forms_email_message', $this->message, $this, $submission );
        $recipient     = apply_filters( 'hizzle_forms_email_recipient', $this->email, $this, $submission );

        // Abort if any of the above is now empty.
        if ( empty( $email_subject ) || empty( $email_message ) || empty( $recipient ) ) {
            return;
        }

        $this->before_sending();

		// Send the actual email.
        $result = wp_mail(
            wp_parse_list( $recipient ),
            html_entity_decode( $email_subject, ENT_QUOTES, get_bloginfo( 'charset' ) ),
            $this->wrap_message( $email_message, $submission ),
            $this->prepare_headers(),
			apply_filters( 'hizzle_forms_email_attachments', array(), $this, $submission )
        );

        $this->after_sending();

        if ( false === $result ) {
            $submission->errors->add(
                'email',
                sprintf(
                    // translators: %s is the error message.
                    esc_html__( 'Email failed to send. Error: %s', 'hizzle-forms' ),
                    '<strong>' . esc_html( $this->get_last_error() ) . '</strong>'
                )
            );
        }

        do_action( 'hizzle_forms_after_send_email', $this, $submission, $result );
    }

    /**
	 * Add filters/actions before the email is sent.
	 *
	 * @since 1.0.0
	 */
	public function before_sending() {
        add_filter( 'wp_mail_from', array( $this, 'get_from_email' ) );
		add_filter( 'wp_mail_from_name', array( $this, 'get_from_name' ) );
		add_filter( 'wp_mail_content_type', array( $this, 'get_content_type' ), 1000 );
        add_action( 'wp_mail_failed', array( $this, 'handle_failed_email' ) );
	}

    /**
     * After the email is sent, remove the filters/actions.
     *
     * @since 1.0.0
     */
    public function after_sending() {
        remove_filter( 'wp_mail_from', array( $this, 'get_from_email' ) );
        remove_filter( 'wp_mail_from_name', array( $this, 'get_from_name' ) );
        remove_filter( 'wp_mail_content_type', array( $this, 'get_content_type' ), 1000 );
        remove_action( 'wp_mail_failed', array( $this, 'handle_failed_email' ) );
    }

    /**
     * Prepares the email headers.
     *
     * @return array
     */
    protected function prepare_headers() {
        $name     = $this->get_from_name();
		$reply_to = $this->get_reply_to();
		$headers  = array( 'Content-Type:text/html' );

		if ( ! empty( $reply_to ) && ! empty( $name ) ) {
			$headers = array( "Reply-To:$name <$reply_to>" );
		}

		$headers = implode( "\r\n", $headers );
		return apply_filters( 'hizzle_forms_email_headers', $headers, $this );
    }

    /**
	 * Get the "from" email address address.
	 *
	 * @since 1.7.0
	 *
	 * @return string The "from" email address address.
	 */
	public function get_from_email( $email = '' ) {

        // Do not filter valid email addresses.
        if ( is_email( $email ) ) {
            return $email;
        }

		return get_option( 'admin_email' );
	}

    /**
	 * Get the email reply-to.
	 *
	 * @since 1.0.0
	 *
	 * @return string The email reply-to address.
	 */
	public function get_reply_to() {
        $reply_to = empty( $this->reply_to ) ? get_option( 'admin_email' ) : $this->reply_to;
		return apply_filters( 'hizzle_forms_email_reply_to', $reply_to, $this );
	}

    /**
	 * Get the "from" name.
	 *
	 * @since 1.0.0
	 *
	 * @return string The "from" name.
	 */
	public function get_from_name() {
        $from_name = empty( $this->sender_name ) ? get_option( 'blogname' ) : $this->sender_name;
		return apply_filters( 'hizzle_forms_email_from_name', $from_name, $this );
	}

    /**
     * Retrieves the content type.
     *
     * @return string
     */
    public function get_content_type() {
        return 'text/html';
    }

    /**
     * Handles a failed email.
     *
     * @param \WP_Error $error The error object.
     */
    public function handle_failed_email( $error ) {
        $this->last_error = $error->get_error_message();
    }

    /**
     * Retrieves the last error.
     *
     * @return string
     */
    public function get_last_error() {
        global $phpmailer;

        if ( ! empty( $this->last_error ) ) {
            return $this->last_error;
        }

        /** @var \PHPMailer\PHPMailer\PHPMailer $phpmailer */
		if ( $phpmailer && ! empty( $phpmailer->ErrorInfo ) ) {
			return $phpmailer->ErrorInfo;
		}

        return __( 'Unknown error', 'hizzle-forms' );
    }

    /**
     * Wraps the email message.
     *
     * @param string     $message    The email message.
     * @param Submission $submission The submission object.
     *
     * @return string
     */
    protected function wrap_message( $message, $submission ) {

        // Allow third-party plugins to overide the wrapper.
        $wrapped = apply_filters( 'hizzle_forms_email_message_wrap', null, $message, $submission );

        if ( is_string( $wrapped ) ) {
            return $wrapped;
        }

        // Wrap the message inside HTML tags.
        ob_start();
        require plugin_dir_path( __FILE__ ) . 'template.php';
        return ob_get_clean();
    }
}
