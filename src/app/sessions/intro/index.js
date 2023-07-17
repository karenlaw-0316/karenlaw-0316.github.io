"use client";

import "./style.css";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import Highlighter from "react-highlight-words";

export default function Intro() {
	return (
		<div className="Index__main" id="intro">
			<div className="Index__name">
				<Highlighter
					highlightClassName="Index__name__highlight"
					searchWords={["Karen Law Hiu Yan"]}
					autoEscape={true}
					textToHighlight="Hi, I'm Karen Law Hiu Yan"
				/>
			</div>

			<TypeAnimation
				preRenderFirstString={true}
				sequence={[
					"I'm a Software Engineer",
					2000,
					"I'm a Data Analyst",
					2000,
				]}
				className="Index__name"
				speed={50}
				repeat={Infinity}
			/>
		</div>
	);
}
