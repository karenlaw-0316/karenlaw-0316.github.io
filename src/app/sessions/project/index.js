import "./style.css";
import Title from "@/app/components/title";
import ProjectCard from "./components/projectCard";
import Link from "next/link";

export default function Project() {
	return (
		<div className="Project__main" id="project">
			<Title name={"PROJECT"} />
			{/* <div className="Project__description">
				Find out more about my projects here!
			</div> */}
			<div className="Project__projectCardWrapper">
				<Link
					href="/projectDetailPage"
					style={{ textDecoration: "none" }}
				>
					<ProjectCard />
				</Link>
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
}
