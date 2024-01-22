import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CourserPosition from "@/components/CourserPosition";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className=" flex flex-col items-center justify-center gap-80 overflow-hidden">
			<CourserPosition />
			<Hero />
			<Carousel />
			<Projects />
			<AboutMe />
			<Contact />
			<Footer />
		</div>
	);
}
