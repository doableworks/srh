"use client";
// MODULES //

// COMPONENTS //
import Link from "next/link";
import Button from "@/components/button/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/error.module.scss";

// IMAGES //

// DATA //

// METADATA //
// export const metadata = {
// 	title: "Error!",
// 	description: "Error Occured",
// };

/** Error */
export default function Error({ error }) {
	return (
		<main className={styles.error_page}>
			<div className={styles.error_wrap}>
				<h2 className={styles.title}>Oye Oye Oye!!</h2>
				<p className={`${styles.desp} text_center`}>{error.message}</p>
				<Link href={"/"}>
					<div className={styles.home_btn}>
						<Button color="primary" variant="filled" shape="rounded">
							Go to Homepage
						</Button>
					</div>
				</Link>
			</div>
		</main>
	);
}
