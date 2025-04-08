import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "@/pages/components/footer";
import NavBar from "@/pages/components/navbar";

export default function Efeito() {
    const [mundo, setMensagem] = useState("");
        setTimeout(() => {
            document.title = "Efeito Mundo"
            setMensagem(pegamsg("para o Mundo que vivemos"));
        }, 2000)
    

    return <>

        <NavBar />
        <Container>
            Efeito de Promessa {(mundo ==="" ? "<carregando>" :  mundo )} {/*Fazer aqui primeiro */}
        </Container>
        <Footer />
    </>
}
function pegamsg(texto) {
    setTimeout(() => {
         texto
    }, 2000)
}