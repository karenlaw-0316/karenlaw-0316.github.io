import "./style.css";
import Title from "@/app/components/title";
import Subtitle from "@/app/components/subtitle";
import ExperienceCard from "./components/experienceCard";

const experienceData = require("@/app/content/experience.json");

export default function Experience() {
	return (
		<div className="Experience__main">
			<Title name="EXPERIENCE"></Title>
			{/* <div className="Experience__description">
				Find out more about my education and working experience here!
			</div> */}

			<div className="Experience__cardWrapper">
				<Subtitle name="EDUCATION"></Subtitle>
				{experienceData
					.filter((data) => data.type === "EDUCATION")
					.map((data, i) => {
						return <ExperienceCard key={i} data={data} />;
					})}

				<br />
				<Subtitle name="WORKING EXPERIENCE"></Subtitle>
				{experienceData
					.filter((data) => data.type === "WORKING")
					.map((data, i) => {
						return <ExperienceCard key={i} data={data} />;
					})}
			</div>

			{/* <Collapse isOpened={true || false}>
				<div>Random content</div>
			</Collapse> */}
		</div>
	);
}
