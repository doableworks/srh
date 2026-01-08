// MODULES //

// COMPONENTS //
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

// SECTIONS //
import TopBanner from "@/sections/topBanner/TopBanner";

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

// METADATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} pagePadd`}>
				<TopBanner />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}
