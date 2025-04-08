import { Container } from "react-bootstrap";
import style from "@/styles/Footer.module.css"

export default function Footer() {
  return (
    <Container>
      <footer className={`${style.footerGradiente} border-2 border border-success rounded rounded-3`}>
        <ul className="nav justify-content-center border-bottom border-2 border-success">
          <li>Disciplina de Frameworks 2</li>
        </ul>
        <p className="text-center">&copy; 2024 - IFMS</p>
      </footer>
    </Container>
  );
}
