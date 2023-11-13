import Container from "../container/Container";
import classes from "./Projects.module.css";
import bike from "@/public/bike.svg";
import black from "@/public/black.svg";
import has from "@/public/has.svg";
import cake from "@/public/cake.svg";
import orcus from "@/public/orcus.svg";
import Image from "next/image";

const data = [
	{ id: 1, title: "Bikeland", img: bike },
	{ id: 2, title: "Black Bee", img: black },
	{ id: 4, title: "Has-Capital", img: has },
	{ id: 5, title: "Zilola's cakes", img: cake },
	{ id: 6, title: "Orcus", img: orcus },
];

export default function Projects() {
	return (
		<section className={classes.Projects}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.left}>
						<h3>Наши свежие проекты</h3>
						<p>
							Рбызавщплвазщпф ывапвафыздлпжов фаыждэрлоф важдплофыжадплыф
							вплфжыдаполфады жвподфалжывпжфыдавп фыважлдоыфвдаофвыдаофывжа
							фыважпдофыавд жлпофыждлважыдфвал
						</p>
						<span className={classes.btn}>Заказать</span>
					</div>
					<div className={classes.right}>
						<div className={classes.right_inner}>
							{data.map((el) => (
								<div key={el.id} className={classes.card}>
									<div className={classes.logo}>
										<Image
											src={el.img ? el.img : ""}
											alt='logos'
											width={100}
											height={100}
										/>
									</div>
									<p>{el.title}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
