// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./Standings.module.scss";

// IMAGES //
import fixturesBg from "@/../public/img/home/standings.jpg";

// DATA //

/** Standings Section */
export default function Standings() {
	return (
		<div className={`${styles.Standings} pt_100`}>
			<div className="container">
				<img
					src={fixturesBg.src}
					alt="matchCenter"
					className={`${styles.matchCenterImage} img-responsive`}
				/>
			</div>
			<div className="sectionOverlay">
				<div className="comingSoonBtn">Coming Soon</div>
			</div>
		</div>
	);
}
