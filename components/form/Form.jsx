"use client";
import { Box, Slider } from "@mui/material";
import CustomSelect from "../UI/CustomSelect";
import classes from "./form.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [price, setPrice] = useState(500);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage(`цена: ${price}$<br/>
								имя: ${name}<br/>
								номер телефона: ${phone}`);
		if (name && subject && price && phone) {
			const response = await fetch(`/api/sendEmail`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					subject,
					message,
				}),
			}).then((res) =>
				res.status === 200
					? setSubject("") & setName("") & setPhone("") & setPrice(500)
					: null
			);
		}
	};
	return (
		<motion.form
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 0.3 }}
			onSubmit={handleSubmit}
			className={classes.Form}>
			<CustomSelect item={subject} setItem={setSubject} />
			<div className={classes.range}>
				<Slider
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					min={500}
					max={100000}
					sx={{ width: "100%" }}
					color='secondary'
					size='medium'
					aria-label='Default'
					valueLabelDisplay='auto'
				/>

				<span className={classes.price}>${price}</span>
			</div>

			<input
				type='text'
				placeholder='Ваше имя'
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Номер телефона'
				onChange={(e) => setPhone(e.target.value)}
			/>
			<button className={classes.btn}>Отправить</button>
		</motion.form>
	);
}
