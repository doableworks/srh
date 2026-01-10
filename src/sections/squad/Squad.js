"use client";
// MODULES //
import { useState, useRef } from "react";

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
import squadBG from "@/../public/img/home/squadBG.png";

// Men
import HarryBrook from "@/../public/img/squad/HarryBrook.png";
import BrydonCarse from "@/../public/img/squad/BrydonCarse.png";
import MitchellMarsh from "@/../public/img/squad/MitchellMarsh.png";
import NathanEllis from "@/../public/img/squad/NathanEllis.png";
import DanielVettori from "@/../public/img/squad/DanielVettori.png";

// Women
import KateCross from "@/../public/img/squad/KateCross.png";
import PhoebeLitchfield from "@/../public/img/squad/PhoebeLitchfield.png";
import AnnabelSutherland from "@/../public/img/squad/AnnabelSutherland.png";
import AdrianBirrell from "@/../public/img/squad/AdrianBirrell.png";

// DATA //

/** Squad Section */
export default function Squad() {
	const [genderFilter, setGenderFilter] = useState("all");
	const [yearFilter, setYearFilter] = useState("");

	/** customNext */
	const NextArrow = ({ onClick }) => {
		return (
			<div className={`${styles.customNext}`} onClick={onClick}>
				<img src={RightArrow.src} alt="next" className="arrow-img" />
			</div>
		);
	};

	/** customPrev */
	const PrevArrow = ({ onClick }) => {
		return (
			<div className={`${styles.customPrev}`} onClick={onClick}>
				<img src={leftArrow.src} alt="prev" className="arrow-img left-rotate" />
			</div>
		);
	};
	const sliderRef = useRef(null);

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
			playerName: "Harry <br> Brook",
			playerImage: HarryBrook.src,
			jerseyNo: "88",
			designation: "",
			totalMatches: "35",
			totalRuns: "902",
			totalWicket: "",
			totlaAverage: "37.58",
			bbi: "",
			couchHead: "",
			men: true,
			women: false,
			coachingStaff: false,
			year: "2026",
		},
		{
			id: 2,
			playerName: "Brydon <br> Carse",
			playerImage: BrydonCarse.src,
			jerseyNo: "92",
			designation: "",
			totalMatches: "13",
			totalRuns: "83",
			totalWicket: "5",
			totlaAverage: "",
			bbi: "",
			couchHead: "",
			men: true,
			women: false,
			year: "2026",
			coachingStaff: false,
		},
		{
			id: 3,
			playerName: "Mitchell <br> Marsh",
			playerImage: MitchellMarsh.src,
			jerseyNo: "8",
			designation: "",
			totalMatches: "Debut",
			totalRuns: "Debut",
			totalWicket: "",
			totlaAverage: "Debut",
			bbi: "",
			couchHead: "",
			men: true,
			women: false,
			year: "2026",
			coachingStaff: false,
		},
		{
			id: 4,
			playerName: "Nathan <br> Ellis",
			playerImage: NathanEllis.src,
			jerseyNo: "12",
			designation: "",
			totalMatches: "22",
			totalRuns: "",
			totalWicket: "181",
			totlaAverage: "",
			bbi: "3/16",
			couchHead: "",
			men: true,
			women: false,
			coachingStaff: false,
			year: "2026",
		},
		{
			id: 5,
			playerName: "Daniel <br> Vettori",
			playerImage: DanielVettori.src,
			jerseyNo: "",
			designation: "",
			totalMatches: "",
			totalRuns: "",
			totalWicket: "",
			totlaAverage: "",
			bbi: "",
			couchHead: "Men’s <br/> Head Coach",
			men: false,
			women: false,
			year: "2026",
			coachingStaff: true,
		},

		{
			id: 1,
			playerName: "Kate <br> Cross",
			playerImage: KateCross.src,
			jerseyNo: "16",
			designation: "",
			totalMatches: "40",
			totalRuns: "",
			totalWicket: "50",
			totlaAverage: "",
			bbi: "4/20",
			couchHead: "",
			men: false,
			women: true,
			year: "2026",
			coachingStaff: false,
		},
		{
			id: 2,
			playerName: "Phoebe <br> Litchfield",
			playerImage: PhoebeLitchfield.src,
			jerseyNo: "18",
			designation: "",
			totalMatches: "27",
			totalRuns: "742",
			totalWicket: "",
			totlaAverage: "33.72",
			bbi: "",
			couchHead: "",
			men: false,
			women: true,
			year: "2026",
			coachingStaff: false,
		},
		{
			id: 3,
			playerName: "Annabel <br> Suther land",
			playerImage: AnnabelSutherland.src,
			jerseyNo: "14",
			designation: "",
			totalMatches: "23",
			totalRuns: "",
			totalWicket: "30",
			totlaAverage: "",
			bbi: "4/11",
			couchHead: "",
			men: false,
			women: true,
			coachingStaff: false,
			year: "2026",
		},
		{
			id: 4,
			playerName: "Adrian <br> Birrell",
			playerImage: AdrianBirrell.src,
			jerseyNo: "",
			designation: "",
			totalMatches: "",
			totalRuns: "",
			totalWicket: "",
			totlaAverage: "",
			bbi: "",
			couchHead: "Women’s <br/> Head Coach",
			men: false,
			women: false,
			year: "2026",
			coachingStaff: true,
		},
	];

	const years = [...new Set(playersData?.map((item) => item?.year))];

	const filteredPlayers = playersData?.filter((item) => {
		// Gender filter
		if (genderFilter === "men" && !item?.men) return false;
		if (genderFilter === "women" && !item?.women) return false;
		if (genderFilter === "coachingStaff" && !item?.coachingStaff) return false;

		// Year filter
		if (yearFilter && item?.year !== yearFilter) return false;

		return true;
	});
	return (
		<div className={`${styles.Squad} ptb_100`}>
			<img
				src={squadBG.src}
				alt="squadBG"
				className={`${styles.squadBG} img-responsive`}
			/>
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
							<li
								className={genderFilter === "coachingStaff" ? styles.active : ""}
								onClick={() => setGenderFilter("coachingStaff")}
							>
								Coaching Staff
							</li>
						</ul>
					</div>

					<div className={`${styles.filterYear}`}>
						<select
							value={yearFilter}
							onChange={(e) => setYearFilter(e.target.value)}
						>
							{years?.map((year, i) => (
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
				{filteredPlayers?.map((item, ind) => {
					return (
						<div className={`${styles.slider_item_wrapper}`} key={ind}>
							<div className={`${styles.slider_item}`}>
								<img
									src={squadGb.src}
									alt="Image"
									className={`${styles.itemBg} img-responsive`}
								/>
								<div className={`${styles.playerName}`}>
									<h4 className="color_white text_center">{parse(item?.playerName)}</h4>
								</div>
								<div className={`${styles.playerImage}`}>
									<img src={item?.playerImage} alt="Image" className="img-responsive" />
									<img
										src={squadGbBottom.src}
										alt="Image"
										className={`${styles.squadGbBottom} img-responsive`}
									/>
								</div>
								<div className={`${styles.couchHead}`}>{parse(item.couchHead)}</div>
								<div className={`${styles.jerseyMatch}`}>
									<div className={`${styles.jersey}`}>
										{item?.designation && (
											<div className={`${styles.position} color_white`}>
												{item?.designation}
											</div>
										)}
										{!item?.designation && <div className="pb_40"></div>}

										{item?.jerseyNo && (
											<>
												<h5>Jersey no.</h5>
												<div className={`${styles.number}`}>{item?.jerseyNo}</div>
											</>
										)}
									</div>
									<div className={`${styles.match}`}>
										{item?.totalMatches && (
											<>
												<h4 className={`${styles.matchs}`}>Matches</h4>
												<h5 className={`${styles.matchsDtails}`}>{item?.totalMatches}</h5>
											</>
										)}
										{item?.totalRuns && (
											<>
												<h4 className={`${styles.matchs}`}>Runs</h4>
												<h5 className={`${styles.matchsDtails}`}>{item?.totalRuns}</h5>
											</>
										)}
										{item?.totalWicket && (
											<>
												<h4 className={`${styles.matchs}`}>Wicket</h4>
												<h5 className={`${styles.matchsDtails}`}>{item?.totalWicket}</h5>
											</>
										)}
										{item?.totlaAverage && (
											<>
												<h4 className={`${styles.matchs}`}>Average</h4>
												<h5 className={`${styles.matchsDtails}`}>{item?.totlaAverage}</h5>
											</>
										)}
										{item?.bbi && (
											<>
												<h4 className={`${styles.matchs}`}>BBI</h4>
												<h5 className={`${styles.matchsDtails}`}>{item?.bbi}</h5>
											</>
										)}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>

			<div className="pt_70 text_center fadeInUp" data-scroll>
				<a
					href=""
					className="primaryBtn disabled"
					onClick={(e) => e.preventDefault()}
				>
					Rising Squad
				</a>
			</div>
		</div>
	);
}
