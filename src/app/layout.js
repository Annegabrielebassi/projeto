import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "ANNE GABRIELE",
  description: "ESMERALDA Clinica Estetica",
  charset: 'UTF-8',
  author: 'ANNE GABRIELE',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Header/>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
