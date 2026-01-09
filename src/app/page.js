// MODULES //

// COMPONENTS //
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FanZone from "@/sections/fanZone/FanZone";
import Fixtures from "@/sections/fixtures/Fixtures";
import MatchCenter from "@/sections/matchCenter/MatchCenter";
import MatchNews from "@/sections/matchNews/MatchNews";
import Sponsors from "@/sections/sponsors/Sponsors";
import Spotlight from "@/sections/spotlight/Spotlight";
import Squad from "@/sections/squad/Squad";
import Standings from "@/sections/standings/Standings";

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
				<div id="tickets">
					<MatchCenter />
				</div>
				<MatchNews />
				<div id="squad">
					<Squad />
				</div>
				<div id="fixtures">
					<Fixtures />
				</div>
				<div id="standings">
					<Standings />
				</div>
				<div id="fanZone">
					<FanZone />
				</div>
				<div id="spotlight">
					<Spotlight />
				</div>
				<Sponsors />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
