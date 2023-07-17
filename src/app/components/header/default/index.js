"use client";

import { render } from "react-dom";
import "./style.css";
import Link from "next/link";

export default function DefaultHeader() {
	function scrollToView(elementId) {
		if (window.location.pathname.includes("projectDetailPage")) {
			window.location.replace(`/#${elementId}`);
		} else {
			const element = document.getElementById(elementId);
			element.scrollIntoView();
		}
	}
	return (
		<div className="Header__main">
			<Link className="Header__name" href="/">
				KAREN, LAW HIU YAN
			</Link>
			<div className="Header__sections">
				<div
					className="Header__sections_elements"
					onClick={() => scrollToView("intro")}
				>
					HOME
				</div>
				<div
					className="Header__sections_elements"
					onClick={() => scrollToView("about")}
				>
					ABOUT
				</div>
				<div
					className="Header__sections_elements"
					onClick={() => scrollToView("experience")}
				>
					EXPERIENCE
				</div>
				<div
					className="Header__sections_elements"
					onClick={() => scrollToView("project")}
				>
					PROJECT
				</div>
				<div
					className="Header__sections_elements"
					onClick={() => scrollToView("contact")}
				>
					CONTACT
				</div>
			</div>
		</div>
	);
}
