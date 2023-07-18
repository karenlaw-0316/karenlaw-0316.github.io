import "./style.css";

export default function ExperienceCard({ data }) {
	return (
		<div
			className={
				data.type === "EDUCATION"
					? "ExperienceCard__main__blue"
					: "ExperienceCard__main__green"
			}
		>
			<div className="ExperienceCard__titleWrapper">
				<div
					className={
						data.type === "EDUCATION"
							? "ExperienceCard__title__blue"
							: "ExperienceCard__title__green"
					}
				>
					{data.title}
				</div>
				<div className="ExperienceCard__date">{data.date}</div>
			</div>
			<div className="ExperienceCard__subtitle">{data.subtitle}</div>
			<div className="ExperienceCard__content">
				<ul>
					{data.content.map((contentPoint, i) => {
						return <li key={i}>{contentPoint}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}
