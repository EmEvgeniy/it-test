import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import classes from "./burger.module.css";

export default function Burger({active,setActive}) {
	
	return (
		<div onClick={() => setActive(!active)} className={classes.Burger}>
			{!active ? <AiOutlineMenu /> : <AiOutlineClose />}
		</div>
	);
}
