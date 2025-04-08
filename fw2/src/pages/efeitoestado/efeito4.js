import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "@/pages/components/footer";
import NavBar from "@/pages/components/navbar";

export default function Efeito() {
    const [mundo, setMensagem] = useState("");
    useEffect(() => {
        setTimeout(async () => {
            document.title = "Efeito Feito"
            const menssagem = await pegamsg("para o Mundo que vivemos hoje")
            setMensagem(menssagem); //que vivemos
        }, 2000)
    })


    return <>

        <NavBar />
        <Container>
            Efeito de Promessa {(mundo === "" ? <img src="../loading.gif" width={20} height={20} />: mundo)}
        </Container>
        <Footer />
    </>
}
function pegamsg(texto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(texto);
        }, 1000); // Delay de 1 segundo
    })
}