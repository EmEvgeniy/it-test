"use client";
import Image from "next/image";
import Container from "../container/Container";
import classes from "./Marketing.module.css";
import line from "@/public/linne.svg";
import line2 from "@/public/linne2.svg";
import icon from "@/public/iconM.svg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const data = [
	{
		id: 1,
		title: "Seo продвижение",
		list: [
			"Анализ конкурентных запросов",
			"Сборка и выявление точек входа",
			"Подбор Meta меток для страниц и статей поисковой выдачи",
			"Анализ технической стороны сайта, выявление стопоров в поисковой выдаче.",
		],
		add: "Занимает от 7 дней",
		price: 400,
	},
	{
		id: 2,
		title: "Комплексная реклама Яндекс",
		list: [
			"Анализ конкурентов в выдаче",
			"Анализ продукта и сферы для выявления сильных сторон",
			"Сбор базы ключевых запросов",
			"Сборка Рекламных компаний",
			"Анализ, улучшение и ведение рекламных компаний в выдаче Яндекса",
			"Отчетность каждые 7 дней.",
		],
		add: "Занимает от 7 дней",
		price: 500,
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
		add: "Занимает от 7 дней",
		price: 1500,
	},
];

export default function Marketing() {
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
							width={100}
							height={100}
						/>
						<motion.h5
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.3 }}>
							Интернет реклама / маркетинг
						</motion.h5>
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
