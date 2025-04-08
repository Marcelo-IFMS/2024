import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "@/pages/components/footer";
import NavBar from "@/pages/components/navbar";

export default function Efeito() {
    //var mundo = "Mundo";
    const [mundo, setMensagem] = useState("");
        setTimeout(() => {
            document.title = "Efeito Feito"
    //        mundo = "para o Mundo"
            setMensagem("para o Mundo"); //que vivemos
        }, 3000)
    

    return <>

        <NavBar />
        <Container>
            Efeito de Promessa {mundo}
            {/*{(mundo ==="" ? "<carregando>" :  mundo )}*/}
        </Container>
        <Footer />
    </>
}