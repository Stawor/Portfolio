"use client";
import { motion } from "framer-motion";
import React from "react";
import { tech } from "../public/data";

export default function Carousel() {
	return (
		<div className="flex text-3xl relative w-[100vw] justify-start items-start -z-10 ">
			<div className="absolute top-0 -left-10 w-[10rem] h-full bg-slate-900 blur-md z-50"></div>
			<div className="absolute top-0 -right-10 w-[10rem] h-full bg-slate-900 blur-md z-50"></div>
			<motion.ul
				className="flex"
				animate={{ x: "-100%" }}
				transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
			>
				{tech.map((item, index) => (
					<motion.li className="m-14" key={index}>
						{item}
					</motion.li>
				))}
			</motion.ul>
			<motion.ul
				className="flex"
				animate={{ x: "-100%" }}
				transition={{
					duration: 40,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{tech.map((item, index) => (
					<li className="m-14" key={index}>
						{item}
					</li>
				))}
			</motion.ul>
		</div>
	);
}
      