import Advantages from "@/components/Advantages/Advantages";
import Development from "@/components/Development/Development";
import ForBusiness from "@/components/ForBusiness/ForBusiness";
import Hero from "@/components/Hero/Hero";
import Marketing from "@/components/Marketing/Marketing";
import Projects from "@/components/Projects/Projects";

export default function Home() {
	return (
		<main>
			<Hero />
			<Advantages />
			<Projects />
			<Development />
			<Marketing />
			<ForBusiness />
		</main>
	);
}
