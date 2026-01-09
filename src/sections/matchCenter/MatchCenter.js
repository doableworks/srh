// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./MatchCenter.module.scss";

// IMAGES //
import matchCenter from "@/../public/img/home/matchCenter.jpg";

// DATA //

/** Matchcenter Section */
export default function MatchCenter() {
	return (
		<div className={`${styles.MatchCenter} pb_10`}>
			<div className="container">
				<img
					src={matchCenter.src}
					alt="matchCenter"
					className={`${styles.matchCenterImage} img-responsive fadeInUp pt_100 pb_50`}
					data-scroll
				/>
			</div>
			<div className="sectionOverlay">
				<div className="comingSoonBtn">Coming Soon</div>
			</div>
		</div>
	);
}
