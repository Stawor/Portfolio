"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2 }}
			id="about"
			className="flex justify-center text-center bg-slate-800 w-full p-10 z-50"
		>
			<div className=" flex flex-col justify-center items-center gap-10 max-w-7xl w-[80vw]">
				<h1 className="text-5xl">About Me</h1>
				<p className="text-xl flex">
					My current stack includes: React, TypeScript, Next.js, 
					Tailwind CSS, Node.js, and Express.js.
					I know basics of Java, Python and C++, I love to
					learn new technologies, and I am looking for new opportunities to
					grow. I am an open-minded, optimistic person, and I love working with
					people.
				</p>
			</div>
		</motion.div>
	);
}
