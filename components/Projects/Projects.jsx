"use client";
import Container from "../container/Container";
import classes from "./Projects.module.css";
import bike from "@/public/bike.svg";
import black from "@/public/black.svg";
import has from "@/public/has.svg";
import cake from "@/public/cake.svg";
import orcus from "@/public/orcus.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const data = [
	{ id: 1, title: "Bikeland", img: bike },
	{ id: 2, title: "Black Bee", img: black },
	{ id: 4, title: "Has-Capital", img: has },
	{ id: 5, title: "Zilola's cakes", img: cake },
	{ id: 6, title: "Orcus", img: orcus },
];

export default function Projects() {
	return (
		<section className={classes.Projects} id="projects">
			<Container>
				<div className={classes.inner}>
					<div className={classes.left}>
						<motion.h3
							initial={{ opacity: 0, x: "-100%" }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.3 }}>
							Наши свежие проекты
						</motion.h3>
						<motion.p
							initial={{ opacity: 0, x: "-100%" }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, duration: 0.3 }}>
							Рбызавщплвазщпф ывапвафыздлпжов фаыждэрлоф важдплофыжадплыф
							вплфжыдаполфады жвподфалжывпжфыдавп фыважлдоыфвдаофвыдаофывжа
							фыважпдофыавд жлпофыждлважыдфвал
						</motion.p>
						<Link to='top' spy={true} smooth={true} offset={50} duration={500}>
							<motion.span
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.35, duration: 0.3 }}
								className={classes.btn}>
								Заказать
							</motion.span>
						</Link>
					</div>
					<div className={classes.right}>
						<div className={classes.right_inner}>
							{data.map((el) => (
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: `0.${el.id}`, duration: 0.3 }}
									key={el.id}
									className={classes.card}>
									<div className={classes.logo}>
										<Image
											src={el.img ? el.img : ""}
											alt='logos'
											width={100}
											height={100}
										/>
									</div>
									<p>{el.title}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
