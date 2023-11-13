import classes from "./nav.module.css";
import { Link } from "react-scroll";

export default function Nav({ active }) {
	return (
		<nav className={`${classes.Nav} ${active ? classes.active : ""}`}>
			<Link to='projects' spy={true} smooth={true} offset={50} duration={500}>
				<li className={classes.Nav_item}>Проекты</li>
			</Link>
			<Link to='marketing' spy={true} smooth={true} offset={50} duration={500}>
				<li className={classes.Nav_item}>Услуги</li>
			</Link>
			<Link to='business' spy={true} smooth={true} offset={50} duration={500}>
				<li className={classes.Nav_item}>Сообщество</li>
			</Link>
			<Link to='footer' spy={true} smooth={true} offset={50} duration={500}>
				<li className={classes.Nav_item}>Контакты</li>
			</Link>
		</nav>
	);
}
