<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$logo                           = HF_ASSETS_URL . 'logo.png';
$version                        = 'version' . HIZZLE_FORMS_VERSION;
$plugin_name     = hizzle_forms_plugin_name();
$tagline         = sprintf(
	__(
		'Thank You For choosing %s!', 'hizzle-forms'
		),
	$plugin_name
);
$tagline_content = sprintf( 
    __( 'A lightweight (multisite compatible) and GDPR-compliant contact form plugin. It is fast and does not slow down your website.', 'hizzle-forms' )
);
//allow the variables to be overwritten by other things!
$logo = apply_filters( 'hizzle_forms_admin_help_logo_url', $logo );

?>
<section style="background-color: #333; margin-right: 15px; margin-top: 15px; padding-bottom: 15px; min-height: 100vh; position: relative;">
    <div class="hizzle-forms-plugin-version" style="position: absolute; top: 30px; right: 0; color: white; padding: 5px 10px; transform: rotate(45deg);"><?php esc_html_e( $version, 'hizzle-forms' ); ?></div>
    <div class="hizzle-forms-help-main">
		<img src="<?php echo $logo; ?>" width="200">
		<h1 style="color: whitesmoke;"><?php esc_html_e( $plugin_name, 'hizzle-forms' ); ?></h1>
	</div>
		
	<div class="hizzle-forms-help-tabs">
		<ul class="hizzle-forms-help-tab-links">
			<li class="hizzle-forms-help-tab-active"><a href="#hizzle-forms-welcome-tab"><?php esc_html_e( 'Welcome', 'hizzle-forms' ); ?></a></li>
			<li><a href="#hizzle-forms-support-tab"><?php esc_html_e( 'Support', 'hizzle-forms' ); ?></a></li>
		</ul>

		<div class="hizzle-forms-help-tab-content">
			<div id="hizzle-forms-welcome-tab" class="hizzle-forms-help-tab hizzle-forms-help-tab-active">
				<div style="background-color: #ecf0f1; padding: 20px; margin: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<h2 style="color: purple;"><?php esc_html_e( $tagline, 'hizzle-forms' ); ?></h2>
					<p><?php esc_html_e( $tagline_content, 'hizzle-forms' ); ?></p>
				</div>
				
				<div style="background-color: #ecf0f1; padding: 20px; margin: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<h3 style="color: purple;"><?php esc_html_e( 'Creating Your First Form', 'hizzle-forms' ); ?></h3>
					<div style="background-color: #ecf0f1; padding: 20px; margin: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">						
						<p>
							<?php esc_html_e( 'Open any post or page in the new WordPress block editor then add any of the following blocks:', 'hizzle-forms' ); ?>
						</p>
						<ul>
							<li><?php esc_html_e( 'Contact Form', 'hizzle-forms' ); ?></li>
							<li><?php esc_html_e( 'Newsletter Sign-up', 'hizzle-forms' ); ?></li>
							<li><?php esc_html_e( 'RSVP Form', 'hizzle-forms' ); ?></li>
							<li><?php esc_html_e( 'Registration Form', 'hizzle-forms' ); ?></li>
							<li><?php esc_html_e( 'Appointment Form', 'hizzle-forms' ); ?></li>
							<li><?php esc_html_e( 'Feedback Form', 'hizzle-forms' ); ?></li>
						</ul>
						<p>
							<?php esc_html_e( '**New form templates will be added soon.', 'hizzle-forms' ); ?>
						</p>
					</div>

				</div>
			</div>

			<div id="hizzle-forms-support-tab" class="hizzle-forms-help-tab">
				<h3 style="color: white; margin: 10px;"><?php esc_html_e( '🚑 Require assistance? Our support team is ready to assist you.', 'hizzle-forms' ); ?></h3>
				<div class="hizzle-forms-supp">								
					<p>
						<a href="https://github.com/Frenziecodes/hizzle-forms/issues">
							<?php esc_html_e( 'Bug Report => ', 'hizzle-forms' ); ?>
						</a>
						<?php esc_html_e( 'Stumbled upon an issue or a bug? We appreciate your help in making our product better. Please take a moment to report it, and we will work diligently to address it.', 'hizzle-forms' ); ?>						
					</p>
				</div>
				<div class="hizzle-forms-supp">								
					<p>
						<a href="https://github.com/Frenziecodes/hizzle-forms/issues">
							<?php esc_html_e( 'Feature Request => ', 'hizzle-forms' ); ?>
						</a>
						<?php esc_html_e( 'Have a great idea for a new feature or improvement? We would love to hear your suggestions! Share your thoughts with us, and we will consider implementing it to enhance our product.', 'hizzle-forms' ); ?>						
					</p>
				</div>
				<div class="hizzle-forms-supp">								
					<p>
						<a href="https://wordpress.org/support/plugin/hizzle-forms/">
							<?php esc_html_e( 'WordPress.org Support => ', 'hizzle-forms' ); ?>
						</a>
						<?php esc_html_e( 'We actively monitor and answer all questions posted on WordPress.org for Hizzle forms.', 'hizzle-forms' ); ?>						
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<script>
	document.addEventListener("DOMContentLoaded", function() {
		const tabLinks = document.querySelectorAll(".hizzle-forms-help-tab-links a");
		const tabContents = document.querySelectorAll(".hizzle-forms-help-tab-content .hizzle-forms-help-tab");

		tabLinks.forEach((link) => {
			link.addEventListener("click", function (e) {
				e.preventDefault();
				tabLinks.forEach((l) => l.parentElement.classList.remove("hizzle-forms-help-tab-active"));
				this.parentElement.classList.add("hizzle-forms-help-tab-active");

				const targetTab = document.querySelector(this.getAttribute("href"));
				tabContents.forEach((tab) => tab.classList.remove("hizzle-forms-help-tab-active"));
				targetTab.classList.add("hizzle-forms-help-tab-active");
			});
		});
	});
</script>

<style>
	.hizzle-forms-plugin-version {
		font-size: 12px;
		font-weight: bold;
	}

	.hizzle-forms-help-tabs {
		font-family: Arial, sans-serif;
		padding-left: 10px;
	}
	.hizzle-forms-supp a{
		text-decoration: none;
	}
	.hizzle-forms-supp{
		color: black;
		background-color: #ecf0f1;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	.hizzle-forms-help-main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), black;
		min-height: 100px;
	}

	.hizzle-forms-help-tab-links {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.hizzle-forms-help-tab-links li {
		margin-right: 10px;
	}

	.hizzle-forms-help-tab-links a {
		text-decoration: none;
		background-color: #f2f2f2;
		padding: 10px 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.hizzle-forms-help-tab-links a:hover {
		background-color: #ddd;
	}

	.hizzle-forms-help-tab-links .hizzle-forms-help-tab-active a {
		background-color: purple;
		color: white;
		border: 1px solid #ddd;
	}

	.hizzle-forms-help-tab {
		display: none;
	}

	.hizzle-forms-help-tab-active {
		display: block;
	}
</style>
