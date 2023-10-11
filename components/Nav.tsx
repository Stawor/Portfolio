import Link from "next/link";
import Image from "next/image";

export default function Nav() {
	return (
		<nav className=" flex justify-between mb-40 m-12 gap-5">
			<div>
				<Image src="/logo.png" width={75} height={75} alt="logo"></Image>
			</div>

			<ul className=" flex justify-end gap-10 ">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/">About</Link>
				</li>
				<li>
					<Link href="/">Projects</Link>
				</li>
				<li>
					<Link href="/">Contact</Link>
				</li>
			</ul>
			<div></div>
		</nav>
	);
}
