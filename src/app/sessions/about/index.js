import Title from "@/app/components/title";
import Subtitle from "@/app/components/subtitle";
import "./style.css";

const skillsets = ["JavaScript", "Java", "Python", "R"];

export default function About() {
	return (
		<div className="About__main">
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
						<div className="About__bioSection__littleBio__content"></div>
					</div>

					<div className="About__bioSection__mySkillSet">
						<Subtitle name="MY SKILLSET"></Subtitle>
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
