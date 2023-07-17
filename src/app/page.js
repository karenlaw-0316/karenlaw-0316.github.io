"use client";

import DefaultHeader from "@/app/components/header/default";
import StickyQuickLinks from "@/app/components/stickyQuickLinks";
import Intro from "./sessions/intro";
import About from "./sessions/about";
import Experience from "./sessions/experience";
import Project from "./sessions/project";
import Contact from "./sessions/contact";
import { useEffect } from "react";

export default function MainPage() {
	useEffect(() => {
		if (window.location.hash != "") {
			history.replaceState({}, "", "/");
		}
	});
	return (
		<div>
			<StickyQuickLinks />
			<DefaultHeader />
			<Intro />
			<About />
			<Experience />
			<Project />
			<Contact />
		</div>
	);
}
