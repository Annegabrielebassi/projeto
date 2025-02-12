"use client"
import Image from "next/image";
import styles from "./medico.module.css";
import React, { useState, useEffect } from "react";

export default function Medico() {
    const [medicos, setMedicos] = useState([])
    async function apresentarMedicos() {
        const resposta = await fetch('https://api-clinica-2a.onrender.com/medicos')
        const dados = await resposta.json()
        setMedicos(dados)
    }
    useEffect(() => {
        apresentarMedicos()
    }, [])
    return (
        <div className={styles.containerTablea}>
            <table className={styles.tabelaMedicos}>
                <thead className={styles.topoTablea}>
                    <tr key="cabecalho" className={styles.linhaSuperior}>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Especialidade</th>
                    </tr>
                </thead>
                <tbody className={styles.corpoTabela}>
                    {medicos.map((medico) => (
                        <tr key={medico.id} className={styles.linhaCorpo}>
                            <td>{medico.id}</td>
                            <td>{medico.nome}</td>
                            <td>{medico.telefone}</td>
                            <td>{medico.email}</td>
                            <td>{medico.especialidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}