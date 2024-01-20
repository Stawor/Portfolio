"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function UsePointerPosition() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});
	useEffect(() => {
		function handleMove(e: { clientX: number; clientY: number }) {
			setPosition({ x: e.clientX, y: e.clientY });
		}
		window.addEventListener("pointermove", handleMove);
		return () => {
			window.removeEventListener("pointermove", handleMove);
		};
	}, []);

	return (
		<div className=" fixed top-0 left-0 h-screen">
			<motion.div
				className=" top-[-300px] left-[-300px] blur-[80px] bg-gradient-to-l from-gray-300 via-blue-300 to-slate-600 z-10 opacity-20 absolute w-[600px] h-[600px]  rounded-full"
				animate={{
					rotate: 360,
					y: position.y,
					x: position.x,
					scaleX: [1, 1.5, 1],
				}}
				transition={{
					rotate: { repeat: Infinity, duration: 6 },
					x: { duration: 0.5 },
					y: { duration: 0.5 },
					scaleX: { duration: 8, repeat: Infinity },
				}}
			></motion.div>
		</div>
	);
}
