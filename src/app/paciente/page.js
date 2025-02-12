"use client"
import Image from "next/image";
import styles from "./paciente.module.css";
import React, { useState, useEffect } from "react";

export default function Paciente() {
    const [pacientes, setpacientes] = useState([])
    async function apresentarpacientes() {
        const resposta = await fetch('https://api-clinica-2a.onrender.com/pacientes')
        const dados = await resposta.json()
        setpacientes(dados)
    }
    useEffect(() => {
        apresentarpacientes()
    }, [])
    return (
        <div className={styles.containerTablea}>
            <table className={styles.tabelaPacientes}>
                <thead className={styles.topoTablea}>
                    <tr key="cabecalho" className={styles.linhaSuperior}>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody className={styles.corpoTabela}>
                    {pacientes.map((paciente) => (
                        <tr key={paciente.id} className={styles.linhaCorpo}>
                            <td>{paciente.id}</td>
                            <td>{paciente.nome}</td>
                            <td>{paciente.telefone}</td>
                            <td>{paciente.email}</td>
                            <td>{paciente.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}