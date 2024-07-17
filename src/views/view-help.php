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
			<li class="hizzle-forms-help-tab-active"><a href="#hizzle-forms-welcome-tab"><?php esc_html_e( 'Getting Started', 'hizzle-forms' ); ?></a></li>
			<li><a href="#hizzle-forms-support-tab"><?php esc_html_e( 'Community', 'hizzle-forms' ); ?></a></li>
		</ul>

		<div class="hizzle-forms-help-tab-content">
			<div id="hizzle-forms-welcome-tab" class="hizzle-forms-help-tab hizzle-forms-help-tab-active">
				<div class="hizzle-forms-supp">
					<h3><?php esc_html_e( 'Creating Your First Form', 'hizzle-forms' ); ?></h3>
					<div class="hizzle-forms-content-wrapper">
						<div class="hizzle-forms-text">
							<p><?php esc_html_e( 'To create your first form, open any post or page in the new WordPress block editor. Add any of the following blocks: Contact Form, Newsletter Sign-up, RSVP Form, Registration Form, Appointment Form, or Feedback Form. Customize your form as needed, then publish or update your post/page.', 'hizzle-forms' ); ?></p>
							<div class="hizzle-forms-info">
								<p><?php esc_html_e( 'For detailed steps, check out our blog post on creating your first form.', 'hizzle-forms' ); ?></p>
								<a href="<?php echo esc_url( 'https://yoostrap.com/2024/06/21/how-to-add-a-contact-form-to-your-wordpress-site-in-minutes/' ); ?>" class="hizzle-forms-link"><?php esc_html_e( 'Read the Blog Post', 'hizzle-forms' ); ?></a>
							</div>
						</div>
						<div class="hizzle-forms-video">
							<div class="hizzle-forms-video-wrapper">
								<iframe width="560" height="315" src="https://www.youtube.com/embed/sSrUjzSzTEY?si=ag_xsRmxFTJyBDcv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>							
						</div>
					</div>
				</div>
			</div>

			<div id="hizzle-forms-support-tab" class="hizzle-forms-help-tab">
				<div class="hizzle-forms-support-grid">
					<div class="hizzle-forms-support-card">
						<h3><?php esc_html_e( 'YouTube Channel', 'hizzle-forms' ); ?></h3>
						<p><?php esc_html_e( 'Find video tutorials and tips on using Hizzle Forms.', 'hizzle-forms' ); ?></p>
						<a href="https://youtube.com/@yoostrap?si=ucsdO-u7UJc9Acew" target="_blank" class="hizzle-forms-link"><?php esc_html_e( 'Visit Channel', 'hizzle-forms' ); ?></a>
					</div>
					<div class="hizzle-forms-support-card">
						<h3><?php esc_html_e( 'Blog Page', 'hizzle-forms' ); ?></h3>
						<p><?php esc_html_e( 'Explore articles and guides for optimizing your forms.', 'hizzle-forms' ); ?></p>
						<a href="https://yoostrap.com/blog/" target="_blank" class="hizzle-forms-link"><?php esc_html_e( 'Read Blog', 'hizzle-forms' ); ?></a>
					</div>
					<div class="hizzle-forms-support-card">
						<h3><?php esc_html_e( 'Facebook Page', 'hizzle-forms' ); ?></h3>
						<p><?php esc_html_e( 'Join our community discussions and updates.', 'hizzle-forms' ); ?></p>
						<a href="https://www.facebook.com/profile.php?id=61562619223725" target="_blank" class="hizzle-forms-link"><?php esc_html_e( 'Visit Page', 'hizzle-forms' ); ?></a>
					</div>
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

	.hizzle-forms-supp {
        color: black;
        background-color: #ecf0f1;
        padding: 20px;
        margin: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .hizzle-forms-supp h3 {
        color: purple;
        margin-bottom: 15px;
    }

    .hizzle-forms-content-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .hizzle-forms-text {
        background-color: #fff;
        padding: 20px;
        margin-right: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        flex: 1;
    }

    .hizzle-forms-video {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .hizzle-forms-video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .hizzle-forms-video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }

    .hizzle-forms-info {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .hizzle-forms-info p {
        margin-bottom: 10px;
    }

    .hizzle-forms-link {
        text-decoration: none;
        color: purple;
        font-weight: bold;
    }

    .hizzle-forms-link:hover {
        text-decoration: underline;
    }
	.hizzle-forms-support-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .hizzle-forms-support-card {
        background-color: #ecf0f1;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .hizzle-forms-support-card h3 {
        font-size: 18px;
        margin-bottom: 10px;
        color: purple;
    }

    .hizzle-forms-support-card p {
        margin-bottom: 15px;
    }

    .hizzle-forms-link {
        text-decoration: none;
        color: #3498db;
        font-weight: bold;
    }

    .hizzle-forms-link:hover {
        text-decoration: underline;
    }
</style>
