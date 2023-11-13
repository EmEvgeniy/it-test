"use client";
import Image from "next/image";
import Container from "../container/Container";
import classes from "./Advantages.module.css";
import icon from "@/public/icon.svg";
import icon2 from "@/public/icon2.svg";
import icon3 from "@/public/icon3.svg";
import line from "@/public/line.svg";
import line2 from "@/public/line2.svg";
import line3 from "@/public/line3.svg";
import line4 from "@/public/line4.svg";
import line5 from "@/public/line5.svg";
import { motion } from "framer-motion";

export default function Advantages() {
	return (
		<section className={classes.Advantages}>
			<Container>
				<div className={classes.inner}>
					<Image
						src={line}
						alt='line'
						className={classes.line}
						width={line.width}
						height={line.height}
					/>
					<Image
						src={icon}
						alt='icon'
						className={classes.icon}
						width={icon.width}
						height={icon.height}
					/>
					<Image
						src={icon2}
						alt='icon'
						className={classes.icon2}
						width={icon2.width}
						height={icon2.height}
					/>
					<Image
						src={icon3}
						alt='icon'
						className={classes.icon3}
						width={icon3.width}
						height={icon3.height}
					/>
					<Image
						src={line2}
						alt='icon'
						className={classes.line2}
						width={line2.width}
						height={line2.height}
					/>
					<Image
						src={line5}
						alt='icon'
						className={classes.line5}
						width={line5.width}
						height={line5.height}
					/>
					<Image
						src={line4}
						alt='icon'
						className={classes.line3}
						width={line4.width}
						height={line4.height}
					/>
					<Image
						src={line3}
						alt='icon'
						className={classes.line4}
						width={line3.width}
						height={line3.height}
					/>
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						className={classes.item}>
						<h2 className={classes.title}>30+ клиентов</h2>
						<p className={classes.sub_title}>Владельцев бизнеса</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.3 }}
						className={classes.item2}>
						<h2 className={classes.title2}>10+ количество</h2>
						<p className={classes.sub_title}>Сотрудников высшего разряда</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.3 }}
						className={classes.item3}>
						<h2 className={classes.title3}>40% увелечение</h2>
						<p className={classes.sub_title}>В среднем количества клиентов</p>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
