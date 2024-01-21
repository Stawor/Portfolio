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
						className="flex w-[60vw] max-w-[40rem] h-[20rem] shadow-2xl rounded-xl shadow-gray-700 overflow-hidden z-50 bg-slate-800 relative"
						whileHover={{ scale: 1.2 }}
					>
						<a href={data.href}>
							<div className="lg:w-[65%] h-full lg:p-6 p-2 flex justify-between gap-2 flex-col ">
								<div className="flex flex-col text-base lg:text-xl">
									<p>{data.desc}</p>
								</div>
								<div className="flex gap-2 flex-wrap text-sm">
									{data.tags.map((tag, index) => (
										<div
											key={index}
											className="bg-slate-600 rounded-full px-2 py-1"
										>
											{tag}
										</div>
									))}
								</div>
							</div>
							<Image
								quality={100}
								src={data.src}
								alt="Picture of the author"
								className="hidden lg:block rounded-xl absolute z-50 top-6 left-3/4 hover:-rotate-1 hover:-translate-x-1 hover:translate-y-1 transform "
							/>
						</a>
					</motion.div>
				);
			})}
		</div>
	);
}
