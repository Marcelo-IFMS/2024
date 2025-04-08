import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

export default function Promessa() {
    const [mensagem, setMensagem] = useState(""); // Estado para armazenar a mensagem
    const loadingGif = "/loading.gif"; // Insira aqui o URL do seu GIF

    // useEffect para lidar com a chamada assíncrona
    useEffect(() => {
        const fetchMensagem = async () => {
            const result = await aguarda(); // Chama a função assíncrona
            setMensagem(result); // Define o estado com o resultado
        };
        fetchMensagem(); // Chama a função no efeito
    }, []);

    return (
        <>
            <NavBar />
            <Container>Olá 
                {mensagem === "" ? ( //Operador ternário
                    <img style={{ width: "20px", height: "20px" }} src={loadingGif} alt="Carregando..." /> // Mostra o GIF enquanto carrega
                ) : (
                    <> {mensagem}</> // Mostra a mensagem depois de carregar
                )}
            </Container>
            <Footer />
        </>
    );
}

// Função assíncrona com delay de 5000ms (5 segundos)
const aguarda = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mundo");
        }, 5000); // Delay de 5 segundos
    });
};
