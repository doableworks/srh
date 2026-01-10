"use client";
// MODULES //
import { useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";

// UTILS //

// STYLES //
import styles from "./Footer.module.scss";

// IMAGES //
import Logo from "@/../public/img/logo.svg";
import facebook from "@/../public/img/home/facebook.png";
import tw from "@/../public/img/home/tw.png";
import you from "@/../public/img/home/you.png";
import instagram from "@/../public/img/home/instagram.png";
import footerBg from "@/../public/img/home/footerBg.png";

// DATA //

/** Footer Component */
export default function Footer() {
	const [success, setSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	/** onSubmit */
	const onSubmit = async (data) => {
		try {
			const formData = new FormData();
			formData.append("email", data.email);

			const response = await fetch(
				"https://script.google.com/macros/s/AKfycbwQNbDXBL-x8_gQd6EEqy0XX8cvx4oOIv3AoquMozORubBrU541dJ4bYhijB9EMQBT0jQ/exec",
				{
					method: "POST",
					body: formData,
				},
			);

			if (response.ok) {
				setSuccess(true); // ✅ Thank you message show
				reset(); // ✅ Input clear
			}
		} catch (error) {
			console.error("Form submission error:", error);
		}
	};

	// const onSubmit = async (data) => {
	// 	try {
	// 		const formData = new FormData();
	// 		formData.append("email", data.email);

	// 		const response = await fetch(
	// 			"https://script.google.com/macros/s/AKfycbwEABXO862J87Q3O8ZgSAhbrc0U5lReApFUIggyWPaNOmVOY41eeBVf-cJi7byZ_Cxeig/exec",
	// 			{
	// 				method: "POST",
	// 				body: formData,
	// 			},
	// 		);

	// 		const result = await response.json();
	// 		console.log("Result:", result);

	// 		reset();
	// 	} catch (error) {
	// 		console.error("Form submission error:", error);
	// 	}
	// };

	return (
		<footer className={`${styles.main_footer} pt_40 pb_60`}>
			<img
				src={footerBg.src}
				alt="facebook"
				className={`${styles.footerBg} img-responsive`}
			/>
			<div className="container">
				<div className={`${styles.topFooter} f_r_aj_between pb_20 m_b_5`}>
					<div className={`${styles.logo}`}>
						<img src={Logo.src} alt="facebook" className="img-responsive" />
					</div>
					<div className={`${styles.Newsletter}`}>
						<h5 className="pb_10 m_b_5">Subscribe to our Newsletter</h5>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className={styles.formWrap}>
								<input
									type="email"
									placeholder="Email*"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^\S+@\S+$/i,
											message: "Invalid email address",
										},
									})}
								/>

								{errors.email && (
									<span className={styles.error}>{errors.email.message}</span>
								)}

								<button type="submit">SUBMIT</button>

								{success && (
									<p className={styles.success}>
										Thank you! Your email has been submitted successfully.
									</p>
								)}
							</div>
						</form>
					</div>
				</div>
				<div className={`${styles.bottomFooter} f_r_aj_between ptb_20`}>
					<p>© {new Date().getFullYear()} Sunrisers Leeds</p>
					{/* <div className={`${styles.socialMedia}`}>
						<ul className="f_w_a_j_center">
							<li>
								<a href="">
									<img src={facebook.src} alt="facebook" className="img-responsive" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={tw.src} alt="tw" className="img-responsive" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={you.src} alt="you" className="img-responsive" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={instagram.src} alt="instagram" className="img-responsive" />
								</a>
							</li>
						</ul>
					</div> */}
					<p className={`${styles.doable}`}>Made by Doable Works</p>
				</div>
			</div>
		</footer>
	);
}
