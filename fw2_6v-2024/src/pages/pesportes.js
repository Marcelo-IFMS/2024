import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";
import CardProd from "./cardprod";

export default function Pesportes({ produtos }) {
  return <>
    <Menu />
    <Container className="border border-2 
    rounded border-primary col-sm-6 text-center">
      Lista de Produtos de Esportes
    </Container>
    <Container>
      <div >
        <h1>Produtos Esportes</h1>
        <div className="row row-cols-1 row-cols-md-5 g-3">
          {produtos.map(produto =>
            <div key={produto.id}>
              <CardProd titulo={produto.titulo}
                descricao={produto.descricao}
                preco={produto.preco} />
            </div>
          )}
        </div>
      </div>
    </Container>
    <Footer />
  </>
}
export async function getServerSideProps() {
  const res = await fetch('https://fw2-6v-2024.vercel.app/api/produtos/data')
  const repo = await res.json()
  return { props: { produtos: repo } }
}