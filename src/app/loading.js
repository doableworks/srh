// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/loading.module.scss";

// IMAGES //

// DATA //

/** Loading Screen */
export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className={styles.loading_wrapper}>
			<h2>Loading...</h2>
		</div>
	);
}
