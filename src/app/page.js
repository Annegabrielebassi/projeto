import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image src="/imagens/Borcelle (2).png" alt="Logo" width={50} height={50} className={styles.campoLogo}/>
      <div className={styles.mesagem}>
        <p>
          Bem-vindo à Clínica Médica Esmeralda! 💚✨
          <br/>
          É um prazer recebê-lo(a) em nossa clínica! Aqui, cuidamos da sua saúde com dedicação, profissionalismo e carinho. Nossa equipe está pronta para oferecer o melhor atendimento, sempre com ética e compromisso com o seu bem-estar.
          <br/>
          Conte conosco para cuidar da sua saúde com excelência!
        </p>
      </div>
    </div>
  );
}
