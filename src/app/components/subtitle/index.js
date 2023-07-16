import "./style.css";

function checkName(name) {
	if (
		name === "EDUCATION" ||
		name === "LITTLE BIO" ||
		name === "MY SKILLSET"
	) {
		return true;
	} else {
		return false;
	}
}

export default function Subtitle({ name }) {
	return (
		<div className="Subtitle__main">
			<div className="Subtitle__name">{name}</div>
			{checkName(name) ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="86"
					height="4"
					viewBox="0 0 86 4"
					fill="none"
				>
					<path
						d="M2 2H84"
						stroke="#0079D1"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="86"
					height="4"
					viewBox="0 0 86 4"
					fill="none"
				>
					<path
						d="M2 2H84"
						stroke="#13C69C"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			)}
		</div>
	);
}
