// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./Spotlight.module.scss";

// IMAGES //
import matchCenter from "@/../public/img/home/spotlight.png";

// DATA //

/** Spotlight Section */
export default function Spotlight() {
	return (
		<div className={`${styles.Spotlight} pt_100`}>
			<img
				src={matchCenter.src}
				alt="matchCenter"
				className={`${styles.matchCenterImage} img-responsive`}
			/>
			<div className="sectionOverlay">
				<div className="comingSoonBtn">Coming Soon</div>
			</div>
		</div>
	);
}
