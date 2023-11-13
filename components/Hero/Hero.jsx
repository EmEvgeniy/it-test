import dynamic from "next/dynamic";
import Container from "../container/Container";
const Form = dynamic(() => import("../form/Form"));
import classes from "./hero.module.css";

export default function Hero() {
	return (
		<section className={classes.Hero} id="top">
			<Container>
				<div className={classes.inner}>
					<h1 className={classes.title}>
						Построй бизнес в онлайне вместе с <span>IT-TEST</span>
					</h1>
					<p className={classes.text}>
						Сообщество для владельцев бизнеса, на базе команды разработчиков и
						маркетологов. Создание, масштабирование, и ведение проектов в онлайн
						пространстве
					</p>
					<Form />
				</div>
			</Container>
		</section>
	);
}
