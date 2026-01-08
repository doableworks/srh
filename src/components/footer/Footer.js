"use client";
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./Footer.module.scss";

// IMAGES //

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer}`}>
			<p>© {new Date().getFullYear()} Copyright</p>
		</footer>
	);
}
