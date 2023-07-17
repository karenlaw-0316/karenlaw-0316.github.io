"use client";

import Title from "@/app/components/title";
import "./style.css";
import WhiteHeader from "@/app/components/header/white";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import DefaultHeader from "@/app/components/header/default";

export default function ProjectDetailPage() {
	const [screenOffset, setScreenOffset] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				setScreenOffset(window.scrollY >= 300)
			);
		}
	}, []);
	return (
		<div>
			{screenOffset ? <DefaultHeader /> : <WhiteHeader />}
			<div className="ProjectDetail__intro">
				<img
					className="ProjectDetail__bgPic"
					src={"/assets/projectPic/orbital.png"}
					alt="Profile picture"
				></img>
				<div className="ProjectDetail__blackOverlay"></div>
				<div className="ProjectDetail__introContentWrapper">
					<div className="ProjectDetail__date">May - Jul 2021</div>
					<div className="ProjectDetail__title">TimeliNUS</div>
					<div className="ProjectDetail__position">
						Artemis (Highest Level)
					</div>
					<div className="ProjectDetail__programme">
						@NUS Orbital (Summer Program)
					</div>
					<div className="ProjectDetail__projectType">Programme</div>
				</div>
			</div>
			<div className="ProjectDetail__contentWrapper">
				<Title name={"ABOUT THE PROJECT"} />
				<div className="ProjectDetail__skillSetTagWrapper">
					<div className="ProjectDetail_skillTag">JavaScript</div>
					<div className="ProjectDetail_skillTag">VueJS</div>
					<div className="ProjectDetail_skillTag">HTML</div>
					<div className="ProjectDetail_skillTag">CSS</div>
					<div className="ProjectDetail_skillTag">Figma</div>
				</div>
				<div className="ProjectDetail__description">
					Lorem ipsum dolor sit amet consectetur. Tristique donec
					gravida id lacus vulputate. Quis mauris malesuada aliquam
					elit morbi non. A consequat pulvinar condimentum lobortis
					sit imperdiet proin. Varius lorem augue malesuada velit
					pretium lectus. Pretium urna quis tempor eget ut. Odio
					egestas quis lorem pellentesque diam nulla. Eget eu praesent
					donec diam leo. Sodales sit et suspendisse mattis mollis
					vitae nunc. Turpis diam iaculis eget dolor sit convallis
					euismod faucibus id.
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
					<div className="ProjectDetail__prevProjectButton">
						PREV PROJECT: LANGERATION
					</div>

					<div className="ProjectDetail__nextProjectButton">
						NEXT PROJECT: LANGERATION
					</div>
				</div>
			</div>
		</div>
	);
}
