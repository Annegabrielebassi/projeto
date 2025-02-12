"use client"
import Image from "next/image";
import styles from "./consulta.module.css";
import React, { useState, useEffect } from "react";

export default function Consulta() {
    const [consultas, setconsultas] = useState([])
    async function apresentarconsultas() {
        const resposta = await fetch('https://api-clinica-2a.onrender.com/consultas')
        const dados = await resposta.json()
        setconsultas(dados)
    }
    useEffect(() => {
        apresentarconsultas()
    }, [])
    return (
        <div className={styles.containerTablea}>
            <table className={styles.tabelaConsulta}>
                <thead className={styles.topoTablea}>
                    <tr key="cabecalho" className={styles.linhaSuperior}>
                        <th>ID</th>
                        <th>Medico</th>
                        <th>Especialidade</th>
                        <th>Paciente</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody className={styles.corpoTabela}>
                    {consultas.map((consulta) => (
                        <tr key={consulta.id} className={styles.linhaCorpo}>
                            <td>{consulta.id}</td>
                            <td>{consulta.medico}</td>
                            <td>{consulta.especialidade}</td>
                            <td>{consulta.paciente}</td>
                            <td>{consulta.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}