"use client";

import Title from "@/app/components/title";
import "./style.css";
import WhiteHeader from "@/app/components/header/white";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import DefaultHeader from "@/app/components/header/default";
import StickyQuickLinks from "../../components/stickyQuickLinks";
import HamburgerMenu from "../../components/header/hamburger";
import { useRouter } from "next/router";
import Link from "next/link";

const projectData = require("@/app/content/project.json");

export async function generateStaticParams() {
	return projectData.map((p) => ({
		projectTitle: p.title,
	}));
}

export default function ProjectDetailPage({ params: { projectTitle } }) {
	const [screenOffset, setScreenOffset] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				setScreenOffset(window.scrollY >= 300)
			);
		}
	}, []);

	function useWindowSize() {
		// Initialize state with undefined width/height so server and client renders match
		// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
		const [windowSize, setWindowSize] = useState({
			width: undefined,
			height: undefined,
		});
		useEffect(() => {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}
			// Add event listener
			window.addEventListener("resize", handleResize);
			// Call handler right away so state gets updated with initial window size
			handleResize();
			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}, []); // Empty array ensures that effect is only run on mount

		return windowSize;
	}
	const project = projectData.find(
		(p) => p.title === decodeURI(projectTitle)
	);

	const prevProject =
		projectData.find((p) => project.id - 1 === p.id) !== undefined
			? projectData.find((p) => project.id - 1 === p.id)
			: projectData.find((p) => p.id === projectData.length);

	const nextProject =
		projectData.find((p) => project.id + 1 === p.id) !== undefined
			? projectData.find((p) => project.id + 1 === p.id)
			: projectData.find((p) => p.id === 1);

	return (
		<div>
			{useWindowSize().width > 500 ? <StickyQuickLinks /> : ""}
			{useWindowSize().width >= 800 ? (
				screenOffset ? (
					<DefaultHeader />
				) : (
					<WhiteHeader />
				)
			) : (
				<HamburgerMenu />
			)}

			<div className="ProjectDetail__intro">
				<img
					className="ProjectDetail__bgPic"
					src={`/assets/projectPic/${project.screenshot}`}
					alt="Project picture"
				></img>
				<div className="ProjectDetail__blackOverlay"></div>
				<div className="ProjectDetail__introContentWrapper">
					<div className="ProjectDetail__date">{project.date}</div>
					<div className="ProjectDetail__title">{project.title}</div>
					<div className="ProjectDetail__position">
						{project.position}
					</div>
					<div className="ProjectDetail__programme">
						@{project.programme}
					</div>
					<div className="ProjectDetail__projectType">
						{project.projectType}
					</div>
				</div>
			</div>
			<div className="ProjectDetail__contentWrapper">
				<Title name={"ABOUT THE PROJECT"} />
				<div className="ProjectDetail__skillSetTagWrapper">
					{project.skills.map((skill, i) => {
						return (
							<div className="ProjectDetail_skillTag" key={i}>
								{skill}
							</div>
						);
					})}
				</div>
				<div className="ProjectDetail__description">
					{project.description}
				</div>
				<div className="ProjectDetail__screenshotWrapper">
					<div className="ProjectDetail__screenshotLeftCol">
						<img
							className="ProjectDetail__screenshot"
							src={
								"/assets/projectPic/screenshots/Orbital-Dashboard-M.png"
							}
						></img>
						<img
							className="ProjectDetail__screenshot"
							src={
								"/assets/projectPic/screenshots/Orbital-Todo-M.png"
							}
						></img>
					</div>
					<div className="ProjectDetail__screenshotRightCol">
						<img
							className="ProjectDetail__screenshot"
							src={
								"/assets/projectPic/screenshots/Orbital-Meeting-M.png"
							}
						></img>
						<img
							className="ProjectDetail__screenshot"
							src={
								"/assets/projectPic/screenshots/Orbital-Dashboard-W.png"
							}
						></img>
					</div>
				</div>
				<div className="ProjectDetail__buttonWrapper">
					<Link
						href={`/projectDetailPage/${prevProject.title}`}
						style={{ textDecoration: "none" }}
					>
						<div className="ProjectDetail__prevProjectButton">
							PREV PROJECT: {prevProject.title}
						</div>
					</Link>

					<Link
						href={`/projectDetailPage/${nextProject.title}`}
						style={{ textDecoration: "none" }}
					>
						<div className="ProjectDetail__nextProjectButton">
							NEXT PROJECT: {nextProject.title}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
