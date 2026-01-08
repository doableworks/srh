// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./Fixtures.module.scss";

// IMAGES //
import fixturesBg from "@/../public/img/home/fixturesBg.jpg";

// DATA //

/** Fixtures Section */
export default function Fixtures() {
	return (
		<div className={`${styles.Fixtures} pb_10`}>
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
