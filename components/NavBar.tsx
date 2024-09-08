import { ModeToggle } from "./theme-toggle-button";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className="flex items-center justify-between py-6 ">
			<div className="flex items-center gap-4">
				<Image src="/favicon.ico" alt="logo" width={32} height={32} />
				<h1 className="text-lg font-semibold">Joa&apos;s Dev Journal</h1>
			</div>
			<div className="flex items-center justify-evenly gap-10">
                <div className="flex items-center gap-6">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="#" className="hover:underline">Categories</Link>
                    <Link href="#" className="hover:underline">About</Link>
                </div>
				<ModeToggle />
			</div>
		</div>
	);
};

export default NavBar;
