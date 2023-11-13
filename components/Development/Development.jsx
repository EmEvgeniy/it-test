"use client";
import Image from "next/image";
import Container from "../container/Container";
import classes from "./Development.module.css";
import line from "@/public/linee.svg";
import line2 from "@/public/linee2.svg";
import icon from "@/public/iconD.svg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const data = [
	{
		id: 1,
		title: "Landing page",
		list: [
			"В уникальном дизайне",
			"Продуманный согласно маркетингу",
			"Понятный каждому клиенту",
			"Бесплатное обслуживание на 6 месяцев",
		],
		add: "Рекламу можно запустить сразу после получения",
		price: 500,
	},
	{
		id: 2,
		title: "Сайт компании",
		list: [
			"В уникальном дизайне",
			"Расширенное количество страниц, категории, услуги",
			"Блог со статьями для SEO",
			"Продуманный согласно анализу и маркетингу",
			"Понятный каждому клиенту",
			"Система управления сайтом (CMS)",
			"Бесплатное обслуживание на 6 месяцев",
		],
		add: "Для запуска рекламы от 7 дней",
		price: 1990,
	},
	{
		id: 3,
		title: "Кастомное решение",
		list: [
			"Анализ точки А для бизнеса",
			"Подбор инструментов для роста к точке Б для бизнеса в онлайне",
			"Техническое задание с этапами работы",
			"Оптимизация уже рабочих инструметнов",
			"Отчетность каждые 7 дней.",
			"Поддержка от 3  месяцев (согласно ТЗ)",
		],
		add: "Для запуска рекламы от 7 дней",
		price: 1500,
	},
];

export default function Development() {
	return (
		<section className={classes.Development}>
			<Container>
				<div className={classes.inner}>
					<Image
						alt='line'
						className={classes.line}
						src={line}
						width={line.width}
						height={line.height}
					/>
					<div className={classes.title}>
						<Image
							src={icon}
							alt='icon'
							className={classes.icon}
							width={icon.width}
							height={icon.height}
						/>
						<motion.h4
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.3 }}>
							Услуги по разработке
						</motion.h4>
					</div>
					<Image
						alt='line'
						className={classes.line2}
						src={line2}
						width={line2.width}
						height={line2.height}
					/>
					<div className={classes.content}>
						{data.map((el) => (
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: `0.${el.id}`, duration: 0.4 }}
								className={classes.card}
								key={el.id}>
								<p className={classes.card_title}>{el.title}</p>
								<ul className={classes.list}>
									{el.list.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
								<span>{el.add}</span>
								<p className={classes.price}>от $ {el.price}</p>
								<Link
									to='top'
									spy={true}
									smooth={true}
									offset={50}
									duration={500}>
									<span className={classes.btn}>Заказать</span>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
