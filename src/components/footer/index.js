"use client"
import Link from "next/link"
import style from "./footer.module.css"
import { useState } from "react";

export default function Footer() {
    return (
        <div className={style.footer}>
            <h2>
                Clínica médica Esmeralda
            </h2>
            <p>&copy; Todos os direitos reservados a Clínica médica Esmeralda</p>
        </div>
    )
}