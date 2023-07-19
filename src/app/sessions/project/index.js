"use client";

import "./style.css";
import Title from "@/app/components/title";
import ProjectCard from "./components/projectCard";
import Link from "next/link";

const projectData = require("@/app/content/project.json").reverse();

export default function Project() {
	return (
		<div className="Project__main" id="project">
			<Title name={"PROJECT"} />
			{/* <div className="Project__description">
				Find out more about my projects here!
			</div> */}
			<div className="Project__projectCardWrapper">
				{projectData.map((project, i) => {
					return (
						<Link
							key={i}
							href={`/projectDetailPage/${project.title}`}
							style={{ textDecoration: "none" }}
						>
							<ProjectCard data={project} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
