import { Container, Table } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import Card from "./card";

export default function Cardesportes({ produtos }) {
  return (
    <>
      <Menu />
      <Container>
        <Container className="text-center rounded-pill border border-primary col-8">
          Produtos de esportes
        </Container>
        <Container>          
          <div class="row">
            {produtos.map((produto) => (
              <Card titulo={produto.titulo} 
              descricao={produto.descricao} 
              preco={produto.preco}/>
            ))}
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://fw2-6b-2024.vercel.app/api/produtos/data");
  const repo = await res.json();
  // Pass data to the page via props
  return { props: { produtos: repo } };
}
