import "./style.css";
import Title from "@/app/components/title";
import Subtitle from "@/app/components/subtitle";
import ExperienceCard from "./components/experienceCard";

export default function Experience() {
	return (
		<div className="Experience__main">
			<Title name="EXPERIENCE"></Title>
			<div className="Experience__description">
				Find out more about my education and working experience here!
			</div>

			<div className="Experience__cardWrapper">
				<Subtitle name="EDUCATION"></Subtitle>

				<ExperienceCard />
				<ExperienceCard />
				<br />
				<Subtitle name="WORKING EXPERIENCE"></Subtitle>
			</div>

			{/* <Collapse isOpened={true || false}>
				<div>Random content</div>
			</Collapse> */}
		</div>
	);
}
