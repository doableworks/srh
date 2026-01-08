"use client";
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./Footer.module.scss";

// IMAGES //
import Logo from "@/../public/img/home/footerLogo.svg";
import facebook from "@/../public/img/home/facebook.png";
import tw from "@/../public/img/home/tw.png";
import you from "@/../public/img/home/you.png";
import instagram from "@/../public/img/home/instagram.png";
import footerBg from "@/../public/img/home/footerBg.png";

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer} pt_40 pb_60`}>
			<img
				src={footerBg.src}
				alt="facebook"
				className={`${styles.footerBg} img-responsive`}
			/>
			<div className="container">
				<div className={`${styles.topFooter} f_r_aj_between pb_20 m_b_5`}>
					<div className={`${styles.logo}`}>
						<img src={Logo.src} alt="facebook" className="img-responsive" />
					</div>
					<div className={`${styles.Newsletter}`}>
						<h5 className="pb_10 m_b_5">Subscribe to our Newsletter</h5>
						<form>
							<div className={`${styles.formWrap}`}>
								<input type="text" placeholder="Your Name..." />
								<button type="submit">SUBMIT</button>
							</div>
						</form>
					</div>
				</div>
				<div className={`${styles.bottomFooter} f_r_aj_between ptb_20`}>
					<p>© {new Date().getFullYear()} Sunrisers Leeds</p>
					<div className={`${styles.socialMedia}`}>
						<ul className="f_w_a_j_center">
							<li>
								<a href="">
									<img src={facebook.src} alt="facebook" className="img-responsive" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={tw.src} alt="tw" className="img-responsive" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={you.src} alt="you" className="img-responsive" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={instagram.src} alt="instagram" className="img-responsive" />
								</a>
							</li>
						</ul>
					</div>
					<p>Made by Doable Works</p>
				</div>
			</div>
		</footer>
	);
}
