"use client";
import { useState } from "react";
import classes from "./customSelect.module.css";

const data = ["Выберите тип услуги", "Разработка", "Реклама"];

export default function CustomSelect({ item, setItem }) {
	return (
		<div className={classes.CustomSelect}>
			<div className={classes.customSelect}>
				<select
					value={item}
					onChange={(e) => setItem(e.target.value)}
					className={classes.select}>
					{/* <option  disabled selected>
						Выберите тип услуги
					</option> */}
					{data.map((el, index) => (
						<option value={el} key={index}>
							{el}
						</option>
					))}
				</select>
				<div className={classes.selectArrow}></div>
			</div>
		</div>
	);
}
