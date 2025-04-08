import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

export default function Efeito() {
    const [mundo, setMensagem] = useState(""); // Fornece um valor inicial ao useState

    useEffect(() => {
        setTimeout(() => {
            document.title = "Efeito Feito";
            setMensagem("Mundo");
        }, 3000);

    });

    return (
        <>
            <NavBar />
            <Container>
                Efeito de estado {mundo}
            </Container>
            <Footer />
        </>
    );
}

// Função aguardar retornando uma Promise corretamente


/*

export default function Efeito(){
    const [mundo, setMensagem] = useState("");
    
    useEffect(()=>{
        setTimeout(()=>{
            document.title="Efeito Feito"
            const mensagem = "Mundo"
            setMensagem(mensagem);
        },3000)
    })
    return<>
    <NavBar />
        <Container>
            Efeito {mundo}
        </Container>
    <Footer />
    
    </>
}
    
alterado:

useEffect(() => {
        return () => setTimeout(async () => {
            document.title = "Efeito Feito";
            const menssagem = await aguardar("Mundo");
            setMensagem(menssagem);
        }, 3000);

    });

function aguardar(texto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(texto);
        }, 1000); // Delay de 1 segundo
    });
}


*/
