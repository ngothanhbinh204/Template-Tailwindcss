<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package All_Star_AI
 */
$button_header = get_field('button_header', 'option');
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'all-star-ai'); ?></a>

		<header id="masthead" class="site-header">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="wrap-header">
							<div class="site-branding">
								<?php
								the_custom_logo();
								if (is_front_page() && is_home()) :
								?>
									<h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
								<?php
								else :
								?>
									<p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></p>
								<?php
								endif;
								$all_star_ai_description = get_bloginfo('description', 'display');
								if ($all_star_ai_description || is_customize_preview()) :
								?>
									<p class="site-description"><?php echo $all_star_ai_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
																?></p>
								<?php endif; ?>
							</div><!-- .site-branding -->

							<nav id="site-navigation" class="main-navigation ">
								<div class="box-menu">
									<div class="header-mobile">
										<div class="logo-mobile site-branding">
											<?php the_custom_logo(); ?>
										</div>
										<div class="content-right">
											<?php if (!empty($button_header)) : ?>
												<a href="<?php echo $button_header['url']; ?>" class="button-main"><?php echo $button_header['title']; ?></a>
											<?php endif; ?>
											<div class="menu-toggle-custom">
												<div class="icon-toggle"></div>
											</div>
										</div>
									</div>

									<?php
									wp_nav_menu(
										array(
											'theme_location' => 'menu-1',
											'menu_id'        => 'primary-menu',
										)
									);
									?>
								</div>
								<?php if (!empty($button_header)) : ?>
									<a href="<?php echo $button_header['url']; ?>" class="button-main"><?php echo $button_header['title']; ?></a>
								<?php endif; ?>
								<div class="menu-toggle-custom">
									<div class="icon-toggle"></div>
								</div>
							</nav><!-- #site-navigation -->

						</div>

					</div>
				</div>
			</div>
		</header><!-- #masthead -->