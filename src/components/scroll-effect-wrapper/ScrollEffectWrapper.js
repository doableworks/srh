"use client";
// MODULES //
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import ScrollOut from "scroll-out";

// UTILS //
import SmoothScrolling from "@/utils/SmoothScrolling";

// STYLES //
import styles from "./ScrollEffectWrapper.module.scss";

// IMAGES //

// DATA //

/** Scroll Effect Wrapper Component */
export default function ScrollEffectWrapper({ children }) {
	const pathname = usePathname();
	/** Initialize smooth scrolling once on mount */
	useEffect(() => {
		SmoothScrolling();
	}, []);

	/** Handle functions on pathname changes */
	useEffect(() => {
		// Initialize ScrollOut animations
		const scrollOutFade = ScrollOut({ targets: ".fadeInUp", once: false });

		return () => {
			scrollOutFade.teardown();
		};
	}, [pathname]);
	return <div className={styles.ScrollEffectWrapper}>{children}</div>;
}
