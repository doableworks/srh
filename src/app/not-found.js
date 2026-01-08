// MODULES //

// COMPONENTS //
import Link from "next/link";
import Button from "@/components/button/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/404.module.scss";

// IMAGES //

// DATA //

// METADATA //
export const metadata = {
	title: "404 | Page Not Found!",
	description: "404",
};

/** 404 Page */
export default function NotFoundPage() {
	return (
		<div>
			{/* Page Content starts here */}
			<main className={styles.not_found_page}>
				<div className={styles.not_found_wrap}>
					<h2 className={styles.title}>404</h2>
					<p className={`${styles.desp} text_center`}>
						The page that you are
						<br /> looking for does not exist!
					</p>
					<Link href={"/"}>
						<div className={styles.home_btn}>
							<Button color="primary" variant="filled" shape="rounded">
								Go to Homepage
							</Button>
						</div>
					</Link>
				</div>
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
