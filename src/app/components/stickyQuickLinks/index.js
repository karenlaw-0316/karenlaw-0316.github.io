import "./style.css";

export default function StickyQuickLinks() {
	return (
		<div className="StickyQuickLinks__main">
			<a href="https://github.com/karenlaw-0316" target="_blank">
				<img
					src={"/assets/icon/github_icon.png"}
					className="StickyQuickLinks__icon"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/karen-law-a693711b3/"
				target="_blank"
			>
				<img
					src={"/assets/icon/linkedin_icon.png"}
					className="StickyQuickLinks__icon"
				/>
			</a>
			<a href="mailto:lawhiuyankarenlaw@gmail.com" target="_blank">
				<img
					src={"/assets/icon/email_icon.png"}
					className="StickyQuickLinks__icon"
				/>
			</a>
		</div>
	);
}
