"use client";

import "./style.css";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import Highlighter from "react-highlight-words";

export default function Contact() {
	return (
		<div className="Contact__main" id="contact">
			<div className="Contact__name">
				<Highlighter
					highlightClassName="Contact__name__highlight"
					searchWords={["CONTACT ME :)"]}
					autoEscape={true}
					textToHighlight="CONTACT ME :)"
				/>
			</div>
			<div className="Contact__icon__wrapper">
				<a href="https://github.com/karenlaw-0316" target="_blank">
					<img
						src={"/assets/icon/github_icon.png"}
						className="Contact__icon"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/karen-law-a693711b3/"
					target="_blank"
				>
					<img
						src={"/assets/icon/linkedin_icon.png"}
						className="Contact__icon"
					/>
				</a>
				<a href="mailto:lawhiuyankarenlaw@gmail.com" target="_blank">
					<img
						src={"/assets/icon/email_icon.png"}
						className="Contact__icon"
					/>
				</a>
			</div>
		</div>
	);
}
