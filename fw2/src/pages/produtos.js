import { Container, Table } from "react-bootstrap";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Produtos({ produdos }) {
    return (
        <div>
            <NavBar />
            <Container className="conteudo">
                <h1>Produtos</h1>
                <Table>
                    <thead className="table-dark">
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produdos.map((prod) => (
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.titulo}</td>
                                <td>{prod.categoria}</td>
                                <td>{prod.descricao}</td>
                                <td>{prod.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL',minimumFractionDigits: 2})}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </div>
    )

}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/produtos/data')
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')  https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props
    const repo = await res.json()
    return { props: { produdos: repo } }
}
