// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./TopBanner.module.scss";

// IMAGES //
import dekstopBanner from "@/../public/img/home/dekstopBanner.jpg";
import bannerDownArrow from "@/../public/img/home/bannerDownArrow.svg";

// DATA //

/** Topbanner Section */
export default function TopBanner() {
	return (
		<div className={styles.TopBanner}>
			<img
				src={dekstopBanner.src}
				className={`${styles.bannerImg} img-responsive`}
			/>
			<div className="container">
				<img
					src={bannerDownArrow.src}
					className={`${styles.bannerDownArrow} img-responsive`}
				/>
				<div className={`${styles.bannerInfo}`}>
					<h2 className="sectionTitle">
						HOME OF <br /> SUNRISERS LEEDS
					</h2>
					<div className={`${styles.title_btn} f_r_aj_between`}>
						<h6 className="smallTitle">BRINGING THE FIRE TO HEADINGLEY</h6>
						{/* <div className={`${styles.btn_section}`}> */}
						<a href="" className="primaryBtn">
							Get Tickets
						</a>
						{/* </div> */}
					</div>
				</div>
			</div>
			<div className={`${styles.overlay}`}></div>
		</div>
	);
}
