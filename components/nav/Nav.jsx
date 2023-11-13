import classes from "./nav.module.css";

export default function Nav({active}) {
	return (
		<nav className={`${classes.Nav} ${active ? classes.active : ""}`}>
			<li className={classes.Nav_item}>Проекты</li>
			<li className={classes.Nav_item}>Услуги</li>
			<li className={classes.Nav_item}>Сообщество</li>
			<li className={classes.Nav_item}>Контакты</li>
		</nav>
	);
}
