import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import whiteLogo from "@/public/white-logo.png";

const Header = (props: ComponentProps<"header">) => {
    return (
        <header className="flex justify-between items-center px-10 w-full h-20 bg-[var(--blue-primary)] border-b-4 border-[var(--blue-secondary)]">
            <Link href="/">
                <Image src={whiteLogo} alt="Logo do Brutus" className="w-auto h-10" />
            </Link>
            <nav>
                <ul className="flex gap-10 items-center text-white">
                    <li>
                        <Link href="">
                            SOBRE
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            UNIFACOL
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;