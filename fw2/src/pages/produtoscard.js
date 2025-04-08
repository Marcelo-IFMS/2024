import { Container, Table } from "react-bootstrap";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./card";

export default function ProdutosCard({ produdos }) {
    return (
        <div>
            <NavBar />
            <Container className="conteudo">
                <h1>Produtos Esportes</h1>
                <div class="row row-cols-1 row-cols-md-5 g-3">
                    
                {produdos.map((prod) => (
                    <Card titulo={prod.titulo} preco={prod.preco} />
                ))}
                </div>
            </Container>
            <Footer />
        </div>
    )
}
export async function getServerSideProps() {
    const res = await fetch('https://fw2-eight.vercel.app//api/produtos/data')
    const repo = await res.json()
    return { props: { produdos: repo } }
}
