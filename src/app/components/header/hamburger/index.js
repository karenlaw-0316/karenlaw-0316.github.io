"use client";

import "./style.css";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

export default function HamburgerMenu() {
	function scrollToView(elementId) {
		if (window.location.pathname.includes("projectDetailPage")) {
			window.location.replace(`/#${elementId}`);
		} else {
			const element = document.getElementById(elementId);
			element.scrollIntoView();
		}
	}
	return (
		<Menu>
			<Link className="HamburgerHeader__name" href="/">
				KAREN, LAW HIU YAN
			</Link>
			<div className="HamburgerHeader__sections">
				<div
					className="HamburgerHeader__sections_elements"
					onClick={() => scrollToView("intro")}
				>
					HOME
				</div>
				<div
					className="HamburgerHeader__sections_elements"
					onClick={() => scrollToView("about")}
				>
					ABOUT
				</div>
				<div
					className="HamburgerHeader__sections_elements"
					onClick={() => scrollToView("experience")}
				>
					EXPERIENCE
				</div>
				<div
					className="HamburgerHeader__sections_elements"
					onClick={() => scrollToView("project")}
				>
					PROJECT
				</div>
				<div
					className="HamburgerHeader__sections_elements"
					onClick={() => scrollToView("contact")}
				>
					CONTACT
				</div>
			</div>
		</Menu>
	);
}
