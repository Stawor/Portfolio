"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import BackgroundSvg from "./BackgroundSvg";
import profilePicture from "@/public/profilePicture.png";
import { motion } from "framer-motion";

export default function Hero() {
	const [text, setText] = useState("Full-Stack");
	const [hover, setHover] = useState(false);

	function handleMouseEnter() {
		const letters = "ABCDEFGHIJKLMNOPRSTUWXYZ";
		const changeLetters = text
			.split("")
			.map((letter) => letters[Math.floor(Math.random() * letters.length)])
			.join("");
		return setText(changeLetters);
	}
	useEffect(() => {
		const interval = setInterval(() => {
			if (hover) {
				handleMouseEnter();
			}
		}, 50);
		return () => clearInterval(interval);
	}, [hover]);

	function handleMouseLeave() {
		setHover(false);
		setText("Full-Stack");
	}
	return (
		<div className="flex items-center justify-center h-[60rem] p-6">
			<motion.main
				className=" flex items-center justify-center z-50 max-w-7xl"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<div
					className="relative"
					onMouseOver={(e) => setHover(true)}
					onMouseLeave={(e) => handleMouseLeave()}
				>
					<div className="flex flex-col gap-6">
						<h1 className="text-5xl xl:text-7xl ">{text} Web Developer</h1>
						<p>Hello, my name is Gabriel and i like to code</p>
						<div className="flex gap-6">
							<a href="https://github.com/Stawor?tab=repositories">
								<div className=" h-[3rem] w-[8rem] bg-white text-black flex justify-center items-center gap-2 rounded-3xl hover:scale-110 transition-all">
									<GitHubIcon />
									<h1>Github</h1>
								</div>
							</a>
							<a href="/"></a>
						</div>
					</div>
				</div>
				<div className="relative hidden lg:block">
					<Image
						src={profilePicture}
						width={500}
						height={500}
						alt="Profile Image"
						className="opacity-80"
					></Image>

					<BackgroundSvg />
				</div>
			</motion.main>
		</div>
	);
}
