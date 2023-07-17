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
		<div className="WhiteHeader__main">
			<Link className="WhiteHeader__name" href="/">
				KAREN, LAW HIU YAN
			</Link>
			<div className="WhiteHeader__sections">
				<div
					className="WhiteHeader__sections_elements"
					onClick={() => scrollToView("intro")}
				>
					HOME
				</div>
				<div
					className="WhiteHeader__sections_elements"
					onClick={() => scrollToView("about")}
				>
					ABOUT
				</div>
				<div
					className="WhiteHeader__sections_elements"
					onClick={() => scrollToView("experience")}
				>
					EXPERIENCE
				</div>
				<div
					className="WhiteHeader__sections_elements"
					onClick={() => scrollToView("project")}
				>
					PROJECT
				</div>
				<div
					className="WhiteHeader__sections_elements"
					onClick={() => scrollToView("contact")}
				>
					CONTACT
				</div>
			</div>
		</div>
	);
}
