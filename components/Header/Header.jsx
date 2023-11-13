"use client";
import Image from "next/image";
import Container from "../container/Container";
import classes from "./header.module.css";
import logo from "@/public/logo.svg";
import { useEffect, useRef, useState } from "react";
import Nav from "../nav/Nav";
import Burger from "../burger/Burger";

export default function Header() {
	const [active, setActive] = useState(false);
	const [active2, setActive2] = useState(false);
	const previousScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > 100 && previousScrollY.current <= 100) {
				setActive(true);
			} else if (currentScrollY <= 100 && previousScrollY.current > 100) {
				setActive(false);
			}

			previousScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if(active2){
			document.querySelector('body').classList.add("hold")
		}else{
			document.querySelector('body').classList.remove("hold")
		}
	}, [active2]);
	return (
		<header className={`${classes.Header} ${active ? classes.active : ""}`}>
			<Container>
				<div className={classes.inner}>
					<Image src={logo} alt='logo' width={100} height={60} priority />
					<Nav active={active2} />
					<Burger active={active2} setActive={setActive2} />
				</div>
			</Container>
		</header>
	);
}
