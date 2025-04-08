import { Accordion, Container } from 'react-bootstrap';
import Menu from './components/navbar';
import Footer from './components/footer';

export default function Lista() {
    var noticias = [
        {
            id: 1,
            titulo: "Tecnologia Revoluciona a Saúde",
            conteudo: "Novos avanços tecnológicos estão transformando o setor de saúde, com dispositivos que permitem o monitoramento em tempo real de pacientes e diagnósticos mais precisos."
        },
        {
            id: 2,
            titulo: "Eleições de 2024 Prometem Mudanças",
            conteudo: "As eleições de 2024 são esperadas com grande expectativa, prometendo mudanças significativas no cenário político, com novos candidatos e propostas inovadoras."
        },
        {
            id: 3,
            titulo: "Mudanças Climáticas Aceleram",
            conteudo: "Cientistas alertam que o ritmo das mudanças climáticas está se acelerando, com consequências potencialmente devastadoras para o meio ambiente e a humanidade."
        }
    ]
    return (
        <>
            <Menu />
            <Container>
                <Accordion>
                    {noticias.map(noticia =>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{noticia.titulo}</Accordion.Header>
                        <Accordion.Body>
                            {noticia.conteudo}
                        </Accordion.Body>
                    </Accordion.Item>
                    )}
                </Accordion>
            </Container>
            <Footer />
        </>
    );
}