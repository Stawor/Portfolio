"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { data } from "../public/data";

export default function Projects() {
	return (
		<div
			id="projects"
			className="flex flex-col gap-32 justify-center items-center "
		>
			<h1 className="text-5xl">Projects</h1>
			{data.map((data, index) => {
				return (
					<motion.div
						key={index}
						initial={{ y: 100, scale: 0.5, opacity: 0.5 }}
						whileInView={{ y: 0, scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
						className="flex w-[80vw] max-w-[720px] h-[285px] shadow-2xl rounded-xl shadow-gray-700 overflow-hidden z-50 bg-slate-800 relative"
						whileHover={{ scale: 1.2 }}
					>
						<a href={data.href}>
							<div className=" flex flex-wrap gap-1 lg:w-1/2 m-4 h-[90%] text-lg">
								<p className="flex ">{data.desc}</p>
								{data.tags.map((tag, index) => (
									<p
										className="bg-slate-600 rounded-full py-1 px-2 h-min"
										key={index}
									>
										{tag}
									</p>
								))}
							</div>
							<Image
								quality={100}
								src={data.src}
								alt="Picture of the author"
								className="hidden lg:block rounded-xl absolute z-50 top-6 left-96 hover:-rotate-1 hover:-translate-x-1 hover:translate-y-1 transform "
							/>
						</a>
					</motion.div>
				);
			})}
		</div>
	);
}
