"use client";
// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./ScrollToTop.module.scss";

// IMAGES //
import topArrow from "@/../public/img/home/topArrow.svg";

// DATA //

/** Scrolltotop Component */
export default function ScrollToTop() {
	const [showTop, setShowTop] = useState(false);

	useEffect(() => {
		/**  */
		const onScroll = () => {
			setShowTop(window.scrollY > 300);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return (
		<div className={styles.ScrollToTop}>
			{showTop && (
				<div
					className={`${styles.backToTop}`}
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				>
					<div className={`${styles.topArrow}`}>
						<img
							src={topArrow.src}
							alt="topArrow"
							className={`${styles.topArrowImage} img-responsive`}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
