"use client";
// MODULES //

// COMPONENTS //
import ContentFromCms from "../content-from-cms/ContentFromCms";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "./DummyComponent.module.scss";

// IMAGES //

// DATA //

/** DummyComponent Component */
export default function DummyComponent({ title, desc }) {
	return (
		<div className={styles.blog_item}>
			<div>
				<p>{title}</p>
				<div className={`${styles.desc}`}>
					<ContentFromCms>{desc}</ContentFromCms>
				</div>
			</div>
		</div>
	);
}
