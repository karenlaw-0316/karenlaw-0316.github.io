"use client";

import "./style.css";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import Highlighter from "react-highlight-words";

export default function Contact() {
	return (
		<div className="Contact__main">
			<div className="Contact__name">
				<Highlighter
					highlightClassName="Contact__name__highlight"
					searchWords={["CONTACT ME"]}
					autoEscape={true}
					textToHighlight="CONTACT ME"
				/>
			</div>
		</div>
	);
}
