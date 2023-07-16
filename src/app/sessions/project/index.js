import "./style.css";
import Title from "@/app/components/title";
import ProjectCard from "./components/projectCard";

export default function Project() {
	return (
		<div className="Project__main">
			<Title name={"PROJECT"} />
			<div className="Project__description">
				Find out more about my projects here!
			</div>
			<div className="Project__projectCardWrapper">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
}
