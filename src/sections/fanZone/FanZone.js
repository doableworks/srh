// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./FanZone.module.scss";

// IMAGES //
import matchCenter from "@/../public/img/home/fanZone.jpg";

// DATA //

/** Fanzone Section */
export default function FanZone() {
	return (
		<div className={`${styles.FanZone} pt_100`}>
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
