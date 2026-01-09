"use client";
// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import parse from "html-react-parser";

// UTILS //

// STYLES //
import styles from "./Squad.module.scss";

// IMAGES //
import squadGb from "@/../public/img/home/squadGb.png";
import leftArrow from "@/../public/img/home/leftArrow.png";
import RightArrow from "@/../public/img/home/rightArrow.png";
import leftLight from "@/../public/img/home/leftLight.png";
import rightArrow from "@/../public/img/home/rightLight.png";
import squadGbBottom from "@/../public/img/home/squadGbBottom.png";
import liam from "@/../public/img/home/liam.png";
import hannam from "@/../public/img/home/hannam.png";

// DATA //

/** Squad Section */
export default function Squad() {
	const [genderFilter, setGenderFilter] = useState("all");
	const [yearFilter, setYearFilter] = useState("");

	const sliderRef = useRef(null);
	const NextArrow = ({ onClick }) => {
		return (
			<div className={`${styles.customNext}`} onClick={onClick}>
				<img src={RightArrow.src} alt="next" className="arrow-img" />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className={`${styles.customPrev}`} onClick={onClick}>
				<img src={leftArrow.src} alt="prev" className="arrow-img left-rotate" />
			</div>
		);
	};
	const settings = {
		centerMode: true,
		infinite: true,
		speed: 1000,
		swipeToSlide: true,
		arrows: true,
		variableWidth: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 922,
				settings: {
					variableWidth: true,
				},
			},
		],
	};

	const playersData = [
		{
			id: 1,
			playerName: "Liam <br> Livingstone",
			playerImage: liam.src,
			jerseyNo: "17",
			designation: "c",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: true,
			women: false,
			year: "2025",
		},
		{
			id: 2,
			playerName: "Ellyse <br> Perry",
			playerImage: liam.src,
			jerseyNo: "09",
			designation: "w",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: true,
			women: false,
			year: "2025",
		},
		{
			id: 3,
			playerName: "Aneurin <br> Donald",
			playerImage: liam.src,
			jerseyNo: "77",
			designation: "c",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: true,
			women: false,
			year: "2025",
		},
		{
			id: 4,
			playerName: "Hannah <br> Baker",
			playerImage: liam.src,
			jerseyNo: "21",
			designation: "c",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: true,
			women: false,
			year: "2025",
		},
		{
			id: 5,
			playerName: "Trent <br> Boult",
			playerImage: liam.src,
			jerseyNo: "11",
			designation: "c",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: true,
			women: false,
			year: "2025",
		},
		{
			id: 1,
			playerName: "Liam <br> Livingstone",
			playerImage: hannam.src,
			jerseyNo: "17",
			designation: "c",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: false,
			women: true,
			year: "2026",
		},
		{
			id: 2,
			playerName: "Ellyse <br> Perry",
			playerImage: hannam.src,
			jerseyNo: "09",
			designation: "w",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: false,
			women: true,
			year: "2026",
		},
		{
			id: 3,
			playerName: "Aneurin <br> Donald",
			playerImage: hannam.src,
			jerseyNo: "77",
			designation: "c",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: false,
			women: true,
			year: "2026",
		},
		{
			id: 4,
			playerName: "Hannah <br> Baker",
			playerImage: hannam.src,
			jerseyNo: "21",
			designation: "c",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: false,
			women: true,
			year: "2026",
		},
		{
			id: 5,
			playerName: "Trent <br> Boult",
			playerImage: hannam.src,
			jerseyNo: "11",
			designation: "c",
			totalMatches: 10,
			totalRuns: "333",
			totalWicket: "",
			totlaAverage: "71.36",
			men: false,
			women: true,
			year: "2024",
		},
	];

	const years = [...new Set(playersData.map((item) => item.year))];

	const filteredPlayers = playersData.filter((item) => {
		// Gender filter
		if (genderFilter === "men" && !item.men) return false;
		if (genderFilter === "women" && !item.women) return false;

		// Year filter
		if (yearFilter && item.year !== yearFilter) return false;

		return true;
	});
	return (
		<div className={`${styles.Squad} ptb_100`}>
			<img
				src={leftLight.src}
				alt="leftLight"
				className={`${styles.leftLight} img-responsive`}
			/>
			<img
				src={rightArrow.src}
				alt="leftLight"
				className={`${styles.rightArrow} img-responsive`}
			/>
			<div className="container">
				<h2
					className="sectionTitle text_center color_white m_b_5 fadeInUp"
					data-scroll
				>
					BORN OF FIRE
				</h2>
				<h6
					className="smallTitle f_w_r text_center color_white pb_60 fadeInUp"
					data-scroll
				>
					New risers, new colours, new firepower
				</h6>
				<div
					className={`${styles.tabSection} f_r_aj_center pb_60 fadeInUp`}
					data-scroll
				>
					<div className={`${styles.filterMW}`}>
						<ul>
							<li
								className={genderFilter === "all" ? styles.active : ""}
								onClick={() => setGenderFilter("all")}
							>
								All
							</li>
							<li
								className={genderFilter === "men" ? styles.active : ""}
								onClick={() => setGenderFilter("men")}
							>
								Men
							</li>
							<li
								className={genderFilter === "women" ? styles.active : ""}
								onClick={() => setGenderFilter("women")}
							>
								Women
							</li>
						</ul>
					</div>

					<div className={`${styles.filterYear}`}>
						<select
							value={yearFilter}
							onChange={(e) => setYearFilter(e.target.value)}
						>
							<option value="">All Years Squad</option>
							{years.map((year, i) => (
								<option key={i} value={year}>
									{year} Squad
								</option>
							))}
						</select>
					</div>
				</div>
			</div>

			<Slider
				ref={sliderRef}
				{...settings}
				className={`${styles.strikes_slider} fadeInUp`}
				data-scroll
			>
				{filteredPlayers.map((item, ind) => {
					return (
						<div className={`${styles.slider_item_wrapper}`} key={ind}>
							<div className={`${styles.slider_item}`}>
								<img
									src={squadGb.src}
									alt="Image"
									className={`${styles.itemBg} img-responsive`}
								/>
								<div className={`${styles.playerName}`}>
									<h4 className="color_white text_center">{parse(item.playerName)}</h4>
								</div>
								<div className={`${styles.playerImage}`}>
									<img src={item.playerImage} alt="Image" className="img-responsive" />
									<img
										src={squadGbBottom.src}
										alt="Image"
										className={`${styles.squadGbBottom} img-responsive`}
									/>
								</div>
								<div className={`${styles.jerseyMatch}`}>
									<div className={`${styles.jersey}`}>
										{item.designation && (
											<div className={`${styles.position} color_white`}>
												{item.designation}
											</div>
										)}
										{!item.designation && <div className="pb_40"></div>}

										<h5>Jersey no.</h5>
										<div className={`${styles.number}`}>{item.jerseyNo}</div>
									</div>
									<div className={`${styles.match}`}>
										<h4 className={`${styles.matchs}`}>Matches</h4>
										<h5 className={`${styles.matchsDtails}`}>{item.totalMatches}</h5>
										<h4 className={`${styles.matchs}`}>Runs</h4>
										<h5 className={`${styles.matchsDtails}`}>{item.totalRuns}</h5>
										{item.totalWicket && (
											<>
												<h4 className={`${styles.matchs}`}>Wicket</h4>
												<h5 className={`${styles.matchsDtails}`}>{item.totalWicket}</h5>
											</>
										)}
										<h4 className={`${styles.matchs}`}>Average</h4>
										<h5 className={`${styles.matchsDtails}`}>{item.totlaAverage}</h5>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>

			<div className="pt_70 text_center fadeInUp" data-scroll>
				<a href="" className="primaryBtn">
					Rising Squad
				</a>
			</div>
		</div>
	);
}
