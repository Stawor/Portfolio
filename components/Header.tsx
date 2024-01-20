"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
	return (
		<header className="z-[999] relative ">
			<motion.div
				className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border  border-opacity-40  bg-opacity-80 shadow-sm shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full bg-gray-950 border-black/40"
				initial={{ y: -100, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}
			>
				<nav className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
					<Link className="sm:m-10 m-4" href="#home">
						Home
					</Link>
					<Link className="sm:m-10 m-4" href="#projects">
						Projects
					</Link>
					<Link className="sm:m-10 m-4" href="#about">
						About
					</Link>
					<Link className="sm:m-10 m-4" href="#contact">
						Contact
					</Link>
				</nav>
			</motion.div>
		</header>
	);
}
