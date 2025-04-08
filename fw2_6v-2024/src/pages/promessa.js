import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Menu from "./components/navbar";
import { useEffect, useState } from "react";

export default function Promessa() {
    const [divida, setDivida] = useState("")
    useEffect(() => {
        setTimeout(async () => {
            document.title = "Minha Promessa"
            const x = await saoLonguinho("da vida")
            setDivida(x)
        }, 4000);
    })
    return <>
        <Menu /> <Container>
            Promessas {(divida === "" ? <img src="loading_3.gif" width={40} height={60} />
                : divida)}
        </Container>  <Footer />
    </>
}
function saoLonguinho(texto) {
    return new Promise((resposta) => 
        setTimeout(() => {
        resposta(texto)
    }, 4000))
}