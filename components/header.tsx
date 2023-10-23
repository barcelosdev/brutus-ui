import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import whiteLogo from "@/public/white-logo.png";

const Header = (props: ComponentProps<"header">) => {
    return (
        <header className="flex justify-between items-start p-10 w-full">
            <Link href="/" className="bg-primary p-3 rounded-xl shadow-lg border border-gray-300">
                <Image src={whiteLogo} alt="Logo do Brutus" className="w-auto h-10" />
            </Link>
            <nav>
                <ul className="flex gap-10 items-center text-[var(--text)] font-bold">
                    <li>
                        <Link href="">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            Extensão
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            Unifacol
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;