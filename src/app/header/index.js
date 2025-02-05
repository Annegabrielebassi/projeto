"use client"
import Link from "next/link"
import style from "./header.module.css"
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    const [buttonText, setButtonText] = useState("aparecendo")

    const handleClick = () => {
        setShowMenu(!showMenu)
        setButtonText(showMenu ? "desaparecendo" : "aparecendo")
    }

    return (
        <header className={style.header}>
            <button className={style.botao} onClick={handleClick}>
                <img src="/imagens/girassol.jpg" alt="Girassol" className={style.girassol} />
            </button>
            {
                showMenu &&
                <nav>
                    <ul className={style.navList}>
                        <li className={style.navItem}>
                            <Link href="/sobre" className={style.navLink}>Sobre</Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href="/state" className={style.navLink}>Hello</Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href="/" className={style.navLink}>Inicial</Link>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}