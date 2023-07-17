"use client";

import DefaultHeader from "@/app/components/header/default";
import StickyQuickLinks from "@/app/components/stickyQuickLinks";
import Intro from "./sessions/intro";
import About from "./sessions/about";
import Experience from "./sessions/experience";
import Project from "./sessions/project";
import Contact from "./sessions/contact";
import { useState, useEffect } from "react";
import HamburgerMenu from "./components/header/hamburger";

export default function MainPage() {
	useEffect(() => {
		if (window.location.hash != "") {
			history.replaceState({}, "", "/");
		}
	});
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
	return (
		<div>
			{useWindowSize().width > 500 ? <StickyQuickLinks /> : ""}
			{useWindowSize().width >= 800 ? (
				<DefaultHeader />
			) : (
				<HamburgerMenu />
			)}

			<Intro />
			<About />
			<Experience />
			<Project />
			<Contact />
		</div>
	);
}
