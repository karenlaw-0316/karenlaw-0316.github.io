import Title from "@/app/components/title";
import Subtitle from "@/app/components/subtitle";
import "./style.css";

const skillsets = [
	"Java",
	"Python",
	"R",
	"JavaScript",
	"ReactJS",
	"VueJS",
	"React Native",
	"Spring Boot",
	"JUnit",
	"Git",
	"Figma",
	"SQL",
	"PowerBI",
	"Tableau",
	"Google Firebase",
];

export default function About() {
	return (
		<div className="About__main" id="about">
			<Title name="ABOUT ME"></Title>
			{/* <div className="About__description">Let's know more about me!</div> */}
			<div className="About__contentWrapper">
				<div className="About__profilePic">
					<img
						className="About__profilePic"
						src={"/assets/ProfilePic.jpg"}
						alt="Profile picture"
					></img>
				</div>
				<div className="About__bioSection">
					<div className="About__bioSection__littleBio">
						<Subtitle name="LITTLE BIO"></Subtitle>
						<div className="About__bioSection__littleBio__content">
							Hi! I am <b>Karen, Law Hiu Yan. </b>
							<span style={{ fontSize: "20px" }}>
								{" "}
								&#128521;{" "}
							</span>
							<br /> <br />
							Originally from Hong Kong, I am currently a final
							year student at the National Univeristy of Singapore
							(NUS) majoring in Business Analytics (School of
							Computing). My areas of interest are{" "}
							<b>Software Engineering </b> and{" "}
							<b>Data Analysis</b>.
							<span
								style={{ fontSize: "20px", marginLeft: "5px" }}
							>
								&#128105;&#8205;&#128187;
							</span>{" "}
							<br /> <br />
							Feel free to connect me on LinkedIn and or contact
							me via email.{" "}
							<span style={{ fontSize: "20px" }}>&#128518;</span>
						</div>
					</div>

					<div className="About__bioSection__mySkillSet">
						<Subtitle name="MY MAJOR SKILLSET"></Subtitle>
						<div className="About__bioSection__mySkillSet__wrapper">
							{skillsets.map((skillset, i) => {
								return (
									<div
										className="About__bioSection__mySkillSet__tag"
										key={skillset}
									>
										{skillset}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
