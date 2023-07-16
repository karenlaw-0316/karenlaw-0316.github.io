import Header from "./components/header";
import Intro from "./sessions/intro";
import About from "./sessions/about";
import Experience from "./sessions/experience";
import StickyQuickLinks from "./components/stickyQuickLinks";

export default function Home() {
	return (
		<div className="ContentWrapper">
			<StickyQuickLinks />
			<Header />
			<Intro />
			<About />
			<Experience />
		</div>
	);
}
