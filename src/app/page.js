import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <p>
          Bem vindo a clínica Esmeralda, aqui seu bem estar é nossa joia preciosa
        </p>
    </div>
  );
}
