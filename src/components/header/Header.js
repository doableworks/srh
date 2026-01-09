"use client";
// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //
import * as Scroll from "react-scroll";
import {
	Link as ScrollSection,
	// Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

// UTILS //

// STYLES //
import styles from "./Header.module.scss";

// IMAGES //
import Logo from "@/../public/img/logo.svg";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey,
		);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			{/* Logo wrap */}
			<Link href="/">
				<div className={styles.image_wrap}>
					<Image src={Logo} alt="Logo" />
				</div>
			</Link>
			<div className="container">
				<div className={`${styles.header_inside}`}>
					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
						<div className={styles.links}>
							<ScrollSection
								activeClass={styles.active}
								to="tickets"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								tickets
							</ScrollSection>
						</div>
						<div className={styles.links}>
							<ScrollSection
								activeClass={styles.active}
								to="squad"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								Squad
							</ScrollSection>
						</div>
						<div className={styles.links}>
							<ScrollSection
								activeClass={styles.active}
								to="fixtures"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								Fixtures
							</ScrollSection>
						</div>
						<div className={`${styles.links} visible_md`}>
							<ScrollSection
								activeClass={styles.active}
								to="standings"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								Standings
							</ScrollSection>
						</div>
						<div className={`${styles.links} visible_md`}>
							<ScrollSection
								activeClass={styles.active}
								to="fanZone"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								Fan zone
							</ScrollSection>
						</div>
						<div className={`${styles.links} visible_md`}>
							<ScrollSection
								activeClass={styles.active}
								to="spotlight"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								Spotlight
							</ScrollSection>
						</div>
					</div>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap} hidden_xs`}>
						<div className={styles.links}>
							<ScrollSection
								activeClass={styles.active}
								to="standings"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								Standings
							</ScrollSection>
						</div>
						<div className={styles.links}>
							<ScrollSection
								activeClass={styles.active}
								to="fanZone"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								Fan zone
							</ScrollSection>
						</div>
						<div className={styles.links}>
							<ScrollSection
								activeClass={styles.active}
								to="spotlight"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								onClick={toggleSidebar}
								className={styles.link_title}
							>
								Spotlight
							</ScrollSection>
						</div>
					</div>

					{/* Hamburger icon visible in mobile only */}
					<div className={styles.hamburger_icon} onClick={toggleSidebar}>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
					</div>
				</div>
			</div>
		</div>
	);
}
