import "./style.css";

export default function ProjectCard({ data }) {
	return (
		<div className="ProjectCard__main">
			<img
				className="ProjectCard__img"
				src={`/assets/projectPic/${data.screenshot}`}
				alt="Project picture"
			></img>
			<div className="ProjectCard__contentWrapper">
				<div className="ProjectCard__dateTypeWrapper">
					<div className="ProjectCard__date">{data.date}</div>
					<div className="ProjectCard__projectType">
						{data.projectType}
					</div>
				</div>
				<div className="ProjectCard__title">{data.title}</div>
				<div className="ProjectCard__position">{data.position}</div>
				<div className="ProjectCard__programme">@{data.programme}</div>
				<div className="ProjectCard__content">
					{data.shortDescription}
				</div>
				<div className="ProjectCard__skillsWrapper">
					{data.skills.map((skill, i) => {
						return (
							<div key={i} className="ProjectCard__skillTag">
								{skill}
							</div>
						);
					})}
				</div>
				<br />
				<div className="ProjectCard__divider"></div>
				<div className="ProjectCard__seeMoreWrapper">
					<div className="ProjectCard__seeMore">SEE MORE</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="8"
						viewBox="0 0 22 8"
						fill="none"
					>
						<path
							d="M1 3.58838C0.723858 3.58838 0.5 3.81224 0.5 4.08838C0.5 4.36452 0.723858 4.58838 1 4.58838V3.58838ZM21.3536 4.44193C21.5488 4.24667 21.5488 3.93009 21.3536 3.73483L18.1716 0.552845C17.9763 0.357583 17.6597 0.357583 17.4645 0.552845C17.2692 0.748107 17.2692 1.06469 17.4645 1.25995L20.2929 4.08838L17.4645 6.91681C17.2692 7.11207 17.2692 7.42865 17.4645 7.62391C17.6597 7.81918 17.9763 7.81918 18.1716 7.62391L21.3536 4.44193ZM1 4.58838L21 4.58838V3.58838L1 3.58838V4.58838Z"
							fill="#333333"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
