import { render } from "react-dom";
import "./style.css";

export default function Header() {
	return (
		<div className="Header__main">
			<div className="Header__name">KAREN, LAW HIU YAN</div>
			<div className="Header__sections">
				<div className="Header__sections_elements">HOME</div>
				<div className="Header__sections_elements">ABOUT</div>
				<div className="Header__sections_elements">EXPERIENCE</div>
				<div className="Header__sections_elements">PROJECT</div>
			</div>
		</div>
	);
}
