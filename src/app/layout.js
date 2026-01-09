// MODULES //

// COMPONENTS //
import ScrollEffectWrapper from "@/components/scroll-effect-wrapper/ScrollEffectWrapper";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import "@/styles/globals/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES //

// DATA //
import defaultMetaData from "@/data/defaultMetaData";

// METADATA //
export const metadata = {
	// metadataBase: new URL(process.env.DOMAIL_URL),
	title: defaultMetaData[0].title,
	description: defaultMetaData[0].description,
	openGraph: {
		images: defaultMetaData[0].ogImage.src,
	},
	icons: {
		icon: defaultMetaData[0].icon.src,
	},
};

/** Root Layout */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ScrollEffectWrapper>{children}</ScrollEffectWrapper>
			</body>
		</html>
	);
}
