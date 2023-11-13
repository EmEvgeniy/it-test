import Image from "next/image";
import Container from "../container/Container";
import classes from "./footer.module.css";
import logo from "@/public/flogo.webp";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";

export default function Footer() {
	return (
		<footer className={classes.Footer}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.inner_item}>
						<Image src={logo} alt='logo' width={144} height={144} />
						<div className={classes.text_wrap}>
							<p className={classes.logo_text}>IT-TEST</p>
							<p className={classes.description}>
								Сообщество для владельцев бизнеса, на базе команды разработчиков
								и маркетологов. Создание, масштабирование, и ведение проектов в
								онлайн пространстве
							</p>
						</div>
					</div>
					<div className={classes.inner_item2}>
						<ul className={classes.nav}>
							<li className={classes.nav_item}>Проекты</li>
							<li className={classes.nav_item}>Услуги</li>
							<li className={classes.nav_item}>Сообщество</li>
							<li className={classes.nav_item}>Контакты</li>
						</ul>
						<ul className={classes.contacts}>
							<li className={classes.contacts_item}>
								<HiOutlinePhone className={classes.icon} />
								<a href='tel:+998914198343' target='_blank'>
									+998914198343
								</a>
							</li>
							<li className={classes.contacts_item}>
								<AiOutlineMail className={classes.icon} />
								<a href='mailto:it.structure1@gmail.com' target='_blank'>
									it.structure1@gmail.com
								</a>
							</li>
							<li className={classes.contacts_item}>
								<BsWhatsapp className={classes.icon} />
								<a href='https://wa.me/998914198343' target='_blank'>
									+998914198343
								</a>
							</li>
							<li className={classes.contacts_item}>
								<LiaTelegramPlane className={classes.icon} />
								<a href='https://t.me/@DjabbarovTim' target='_blank'>
									@DjabbarovTim
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	);
}
