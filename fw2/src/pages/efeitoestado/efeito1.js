import Footer from "@/pages/components/footer";
import NavBar from "@/pages/components/navbar";
import { Container } from "react-bootstrap";

export default function Efeito() {
    // var mundo =""
    setTimeout(() => {
        document.title = "Efeito Promessa";
      //  mundo = 'no Mundo'
    }, 3000);

    return <>

        <NavBar />
        <Container>
            Efeito de Promessa {/*{mundo}*/}
        </Container>
        <Footer />
    </>
}