import Image from "next/image";

export default function Hero() {
	return (
		<>
			<main className=" flex items-center justify-center m-14">
				<div>
					<h1 className=" lg:text-5xl text-2xl mb-8">
						Front-End React Developer
					</h1>
					<p>Hello, my name is Gabriel Staworko and I'm Front-End Developer</p>
				</div>
				<div>
					<Image
						src="/man.png"
						width={500}
						height={500}
						alt="Profile Image"
					></Image>
				</div>
			</main>
		</>
	);
}
