import "./style.css";

export default function Subtitle({ name }) {
	return (
		<div className="Subtitle__main">
			<div className="Subtitle__name">{name}</div>
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
		</div>
	);
}
