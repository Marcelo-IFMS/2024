import { Accordion, Container } from "react-bootstrap";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Lista() {
    var state = [
        {
            id: 1,
            titulo: "Tecnologia e Educação: O Impacto da Programação nas Escolas",
            conteudo: "A inclusão da programação nas escolas tem sido vista como uma forma eficaz de desenvolver o pensamento lógico e analítico nas crianças. Diversos especialistas defendem que o aprendizado de linguagens como Scratch e Python pode estimular habilidades essenciais para o futuro."
        },
        {
            id: 2,
            titulo: "Iniciativas para Ensinar Programação desde a Infância",
            conteudo: "Várias iniciativas ao redor do mundo estão promovendo o ensino de programação para crianças. Essas ações, muitas vezes apoiadas por governos e ONGs, têm como objetivo preparar as novas gerações para o mercado de trabalho do futuro, que demandará cada vez mais habilidades tecnológicas."
        },
        {
            id: 3,
            titulo: "O Desafio de Ensinar Programação nas Escolas Públicas",
            conteudo: "Apesar dos benefícios comprovados, a inclusão de disciplinas de programação nas escolas públicas enfrenta desafios como falta de infraestrutura, capacitação de professores e currículos defasados. Projetos piloto em algumas regiões do país estão tentando mudar essa realidade."
        }
    ]
    return (

        <div>
            <NavBar />
            <Container className="conteudo mb-3">
                <div className="text-center fs-4 m-3 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">Notícias</div>
                {state.map(post =>
                    <div key={post.id}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> {post.titulo}</Accordion.Header>
                                <Accordion.Body>
                                    {post.conteudo}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                )}
            </Container>
            <Footer />
        </div>
    )

}
