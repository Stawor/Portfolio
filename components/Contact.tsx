"use client";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

export default function Contact() {
	return (
		<motion.section
			initial={{ y: 100, scale: 0.5, opacity: 0.5 }}
			whileInView={{ y: 0, scale: 1, opacity: 1 }}
			transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
			id="contact"
			className=" z-50 flex flex-col justify-center items-center gap-12 w-[min(100%,38rem)]"
		>
			<h1 className="text-5xl">Contact me</h1>
			<p className="text-xl">
				Please contact me at{" "}
				<a className="underline" href="mailto:staworkogabriel@gmail.com">
					staworkogabriel@gmail.com
				</a>{" "}
				or through this form
			</p>
			<form className="flex flex-col w-full  gap-4">
				<input
					type="email"
					placeholder="Your email"
					className="border border-black p-2 text-black"
				/>
				<textarea
					className="border border-black p-2 text-black h-[15rem]"
					placeholder="Your message"
				></textarea>
				<button
					type="submit"
					className=" h-[3rem] w-[8rem] bg-white text-black flex justify-center items-center gap-2 rounded-3xl hover:scale-110 transition-all"
				>
					Submit <SendIcon />
				</button>
			</form>
		</motion.section>
	);
}