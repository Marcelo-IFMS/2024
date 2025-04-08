import { Container, Table } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function mesportes({produtos}) {
  return (
    <>
      <Menu />
      <Container>
        <Container className="text-center rounded-pill border border-primary col-8">
          Produtos de esportes
        </Container>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Descrição</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
             {produtos.map(produto =>
              <tr>
                <td>{produto.id}</td>
                <td>{produto.titulo}</td>
                <td>{produto.categoria}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
              </tr>
             )}
             
            </tbody>
          </Table>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/produtos/data')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { produtos:repo } }
}