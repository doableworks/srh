// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./MatchNews.module.scss";

// IMAGES //
import matchCenter from "@/../public/img/home/news.jpg";

// DATA //

/** Matchnews Section */
export default function MatchNews() {
	return (
		<div className={`${styles.MatchNews} pt_50 pb_100`}>
			<div className="container">
				<img
					src={matchCenter.src}
					alt="matchCenter"
					className={`${styles.matchCenterImage} img-responsive fadeInUp`}
					data-scroll
				/>
			</div>
			<div className="sectionOverlay">
				<div className="comingSoonBtn">Coming Soon</div>
			</div>
		</div>
	);
}
