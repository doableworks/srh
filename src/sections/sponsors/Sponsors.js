// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./Sponsors.module.scss";

// IMAGES //
import matchCenter from "@/../public/img/home/sponsors.jpg";

// DATA //

/** Sponsors Section */
export default function Sponsors() {
	return (
		<div className={`${styles.Sponsors} pt_100`}>
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
