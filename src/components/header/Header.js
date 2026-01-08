"use client";
// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

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
							<Link href="">
								<div className={styles.link_title}>tickets</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Squad</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Fixtures</div>
							</Link>
						</div>
					</div>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Standings</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Fan zone</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Spotlight</div>
							</Link>
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
