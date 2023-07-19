import "./style.css";

function checkName(name) {
	if (
		name === "ABOUT ME" ||
		name === "EXPERIENCE" ||
		name === "ABOUT THE PROJECT"
	) {
		return true;
	}
}

export default function Title({ name }) {
	return (
		<div className="Title__main">
			{checkName(name) ? (
				<div className="Title__slashes__blue">{"//"}</div>
			) : (
				<div className="Title__slahes__green">{"//"}</div>
			)}
			<div className="Title__name">{name}</div>
			{checkName(name) ? (
				<div className="Title__slashes__blue">{"//"}</div>
			) : (
				<div className="Title__slahes__green">{"//"}</div>
			)}
		</div>
	);
}
