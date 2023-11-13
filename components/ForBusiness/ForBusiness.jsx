import Container from "../container/Container";
import classes from "./ForBusiness.module.css";
import { BiLogoTelegram } from "react-icons/bi";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const data = [
	{
		id: 1,
		icon: <BiLogoTelegram className={classes.icon} />,
		link: "https://click.pulse.is/public/s/MTAzNDQz/p/MTI3MjM1/l/aHR0cHM6Ly90Lm1lL2l0X3Rlc3RfdXo=",
	},
	{
		id: 2,
		icon: <BsInstagram className={classes.icon} />,
		link: "https://click.pulse.is/public/s/MTAzNDQz/p/MTI3MjM1/l/aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9faXR0ZXN0Xy8=",
	},
	{
		id: 3,
		icon: <FaTiktok className={classes.icon} />,
		link: "https://click.pulse.is/public/s/MTAzNDQz/p/MTI3MjM1/l/aHR0cHM6Ly93d3cudGlrdG9rLmNvbS9AaXRfdGVzdD9fdD04aDVKSW1FUWI5cyZfcj0x",
	},
	{
		id: 4,
		icon: <BsYoutube className={classes.icon} />,
		link: "https://click.pulse.is/public/s/MTAzNDQz/p/MTI3MjM1/l/aHR0cHM6Ly93d3cueW91dHViZS5jb20vQEl0LXRlc3QtdXovZmVhdHVyZWQ=",
	},
];

export default function ForBusiness() {
	return (
		<section className={classes.ForBusiness}>
			<Container>
				<div className={classes.inner}>
					<h6>ДЛЯ ВЛАДЕЛЬЦЕВ БИЗНЕСА</h6>
					<p>
						Не трать деньги на ненужные инструменты, подпишись и будь в курсе
					</p>
					<div className={classes.content}>
						{data.map((el) => (
							<a href={el.link} key={el.id} target='__blank'>
								{el.icon}
							</a>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
