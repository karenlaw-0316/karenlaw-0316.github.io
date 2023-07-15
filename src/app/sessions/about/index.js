import Title from "@/app/components/title";
import "./style.css";

export default function About() {
	return (
		<div className="About__main">
			<Title name="ABOUT ME"></Title>
			<div className="About__description">Let's know more about me!</div>
			<div className="About__contentWrapper">
				<div className="About__profilePic">
					<img
						className="About__profilePic"
						src={"/assets/ProfilePic.jpg"}
						alt="Profile picture"
					></img>
				</div>
				<div className="About__bioSection">
					<div className="About__bioSection__littleBio"></div>
					<div className="About__bioSection__mySkillSet"></div>
				</div>
			</div>
		</div>
	);
}
