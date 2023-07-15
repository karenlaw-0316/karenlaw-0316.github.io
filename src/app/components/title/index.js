import "./style.css";

export default function Title({ name }) {
	return (
		<div className="Title__main">
			<div className="Title__slashes">//</div>
			<div className="Title__name">{name}</div>
			<div className="Title__slashes">//</div>
		</div>
	);
}
