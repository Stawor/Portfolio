"use client";
import { motion } from "framer-motion";
import React from "react";
import { tech } from "../public/data";

export default function Carousel() {
	return (
		<div className="flex text-3xl relative w-[100vw] h-[6rem] items-center justify-between -z-10 ">
			<div className="absolute top-0 -left-10 w-[10rem] h-full bg-slate-900 blur-md z-50"></div>
			<div className="absolute top-0 -right-10 w-[10rem] h-full bg-slate-900 blur-md z-50"></div>
			<motion.ul
				className="flex gap-[6vw]"
				animate={{ x: "-100%" }}
				transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
			>
				{tech.map((item, index) => (
					<motion.li key={index}>{item}</motion.li>
				))}
			</motion.ul>
			<motion.ul
				className="flex gap-[6vw]"
				animate={{ x: "-100%" }}
				transition={{
					duration: 90,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{tech.map((item, index) => (
					<motion.li key={index}>{item}</motion.li>
				))}
			</motion.ul>
		</div>
	);
}
