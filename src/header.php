<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Quata
 */

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
        <a class="skip-link screen-reader-text"
            href="#primary"><?php esc_html_e('Skip to content', 'quataagency-com'); ?></a>

        <header id="masthead" class="site-header">
            <div class="container">
                <div class="body-header body_header_up">
                    <div class="site-branding">
                        <?php
						the_custom_logo();
						if (is_front_page() && is_home()) :
						?>
                        <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>"
                                rel="home"><?php bloginfo('name'); ?></a></h1>
                        <?php
						else :
						?>
                        <p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>"
                                rel="home"><?php bloginfo('name'); ?></a></p>
                        <?php
						endif;
						$quataagency_com_description = get_bloginfo('description', 'display');
						if ($quataagency_com_description || is_customize_preview()) :
						?>
                        <p class="site-description"><?php echo $quataagency_com_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
														?></p>
                        <?php endif; ?>
                    </div><!-- .site-branding -->

                    <nav id="site-navigation" class="main-navigation">
                        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                            <div class="icon">
                            </div>
                        </button>
                        <?php
						wp_nav_menu(
							array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
							)
						);
						?>
                    </nav><!-- #site-navigation -->
                    <div class="phone_contact">
                        <!-- <div class="icon">
							<img src="/wp-content/uploads/2024/03/PhoneCall.svg" alt="">
						</div>
						<div class="phone">
							<p>Hotline:</p>
							<a href="tel:0768666638">0768666638</a>
						</div> -->

                        <a class="button_header btn-main btn_header_border" href="tel:0768666638">
                            <span>0768666638</span>
                        </a>

                    </div>
                </div>
            </div>
        </header><!-- #masthead -->