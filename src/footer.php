<?php defined('ABSPATH') || exit('Direct script access denied.');
/**
 * The template for displaying theme footer.
 * Close divs started at the header.
 *
 * @since   1.0.0
 * @version 1.0.1
 */

if (!function_exists('elementor_theme_do_location') || !elementor_theme_do_location('footer')) :
	/**
	 * Hook: etheme_prefooter.
	 *
	 * @hooked etheme_prefooter_content - 10
	 *
	 * @version 1.0.0
	 * @since 6.2.12
	 *
	 */
	do_action('etheme_prefooter');

?>
<style>
.footer .footer-content {
    background-color: #000;
    padding: 60px 0 60px;
}

.footer .description {

    margin: 24px 0;
}

.footer .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    margin-left: -5px;
    margin-right: -5px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
}

.footer .info-item .icon {
    padding: 0 5px;
    flex: 0 0 auto;
    max-width: 34px;
}

.list-social {
    display: flex;
    align-items: center;
    margin-left: -6px;
    margin-right: -6px;
    margin-bottom: 30px;
}

.list-social .social-item {
    flex: 0 0 auto;
    padding: 0 6px;
    max-width: 40px;
}

/* 
.footer .divider {
    width: 100%;
    height: 1px;
    background: #434343;
    margin: 15px 0;
} */
.footer .divider {
    display: none;
}

.footer li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px !important;
}

.footer li::before {
    content: url(/wp-content/uploads/2024/01/CaretRight.svg);
    position: absolute;
    left: 0;
    top: 2px;
}

.footer .copyright {
    color: #fff;
    font-size: 14px;
    padding: 12px 0;
    background: #252525;
    text-align: center;
}
</style>
</div> <!-- page wrapper -->

<div class="et-footers-wrapper">
    <div class="footer">
        <div class="footer-content">
            <div class="container">
                <div class="row">

                    <div class="col-md-3">
                        <div class="logo">
                            <a href="/">
                                <img src="/wp-content/uploads/2024/01/Group-7.svg" alt="">
                            </a>
                        </div>
                        <div class="description fz-18 fw-700 color-white">
                            <div class="tw-block">
                                CÔNG TY TNHH GIẢI PHÁP
                            </div> PHẦN MỀM
                            & QUẢNG CÁO QUATA
                        </div>
                        <div class="list-info">
                            <div class="info-item">
                                <div class="icon">
                                    <img src="/wp-content/uploads/2024/01/PhoneCall.png" alt="">
                                </div>
                                <div class="content">
                                    <a href="tel:0768666638">076 8666 638</a>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="icon">
                                    <img src="/wp-content/uploads/2024/01/MapPin-1.png" alt="">
                                </div>
                                <div class="content">
                                    GPKD: 463/85/12 Lê Đức Thọ, Phường 16, Quận Gò Vấp, TP.HCM

                                </div>
                            </div>
                            <div class="info-item">
                                <div class="icon">
                                    <img src="/wp-content/uploads/2024/01/MapPin-1.png" alt="">
                                </div>
                                <div class="content">

                                    Văn phòng: 22 Đường Số 3, TT. Bến Lức, Tỉnh Long An, Việt Nam
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="icon">
                                    <img src="/wp-content/uploads/2024/01/Envelope.png" alt="">
                                </div>
                                <div class="content">
                                    info@quataagency.com
                                </div>
                            </div>
                        </div>
                        <div class="list-social">
                            <div class="social-item">
                                <a href="#">
                                    <img src="/wp-content/uploads/2024/01/Youtube.png" alt="">
                                </a>
                            </div>
                            <div class="social-item">
                                <a href="#">
                                    <img src="/wp-content/uploads/2024/01/Tik-Tok.png" alt="">
                                </a>
                            </div>
                            <div class="social-item">
                                <a href="#">
                                    <img src="/wp-content/uploads/2024/01/Instagram.png" alt="">
                                </a>
                            </div>
                            <div class="social-item">
                                <a href="#">
                                    <img src="/wp-content/uploads/2024/01/Facebook.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="title">
                            <h4 class="fz-18 fw-700 color-white uppercase">LIÊN KẾT NHANH</h4>
                        </div>
                        <!-- <div class="divider">
							</div> -->

                        <?php

							wp_nav_menu([
								'container'      => null,
								'theme_location' => 'footer_menu_1',
								'menu_id'        => 'footer-menu',
							]);

							?>
                    </div>
                    <div class="col-md-3">
                        <div class="title">
                            <h4 class="fz-18 fw-700 color-white uppercase">DỊCH VỤ</h4>
                        </div>
                        <!-- <div class="divider">
							</div> -->

                        <?php
							wp_nav_menu([
								'container'      => null,
								'theme_location' => 'footer_menu_2',
								'menu_id'        => 'footer-menu',
							]);
							?>
                    </div>
                    <div class="col-md-3">
                        <div class="title">
                            <h4 class="fz-18 fw-700 color-white uppercase">KHU VỰC</h4>
                        </div>
                        <!-- <div class="divider">
							</div> -->

                        <?php
							wp_nav_menu([
								'container'      => null,
								'theme_location' => 'footer_menu_3',
								'menu_id'        => 'footer-menu',
							]);
							?>
                    </div>

                </div>

            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        © 2024 Quata Agency. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
        <?php
			/**
			 * Hook: etheme_footer.
			 *
			 * @hooked etheme_footer_content - 10
			 * @hooked etheme_copyrights_content - 20
			 *
			 * @version 1.0.0
			 * @since 6.2.12
			 *
			 */
			do_action('etheme_footer');
			?>
    </div>

</div> <!-- template-content -->

<?php do_action('after_page_wrapper'); ?>
</div> <!-- template-container -->

<?php endif; ?>


<?php
/* Always have wp_footer() just before the closing </body>
 * tag of your theme, or you will break many plugins, which
 * generally use this hook to reference JavaScript files.
 */

wp_footer();
?>
</body>

</html>