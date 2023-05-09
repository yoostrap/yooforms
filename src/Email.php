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
     * Parse merge tags.
     *
     * @param array $merge_tags The merge tags.
     */
    public function prepare_for_submission( $submission ) {
        // TODO
    }
}
