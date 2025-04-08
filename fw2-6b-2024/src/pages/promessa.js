import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useEffect, useState } from "react";
export default function Promessa() {
  const [prometido, setPrometido] = useState("");
  useEffect(() => {
    setTimeout(async () => {
      document.title = "Promessa é dívida";
      const altera = await saoLonguinho("olá texto novo");
      setPrometido(altera);
    }, 4000);
  });
  return (
    <>
      <Menu />
      <Container>
        Promessa{" "}
        {prometido === "" ? (
          <img src="./loading.gif" width={100} height={40} />
        ) : (
          prometido
        )}
      </Container>
      <Footer />
    </>
  );
}
function saoLonguinho(texto) {
  return new Promise((resolva) => {
    setTimeout(() => {
      resolva(texto);
    }, 3000);
  });
}
