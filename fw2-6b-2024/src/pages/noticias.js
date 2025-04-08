import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
export default function noticias() {
  var produtos = [
    {
      id: 1,
      produto: "Camiseta Esportiva",
      descricao: "Camiseta de tecido leve e respirável, ideal para treinos intensos."
    },
    {
      id: 2,
      produto: "Tênis de Corrida",
      descricao: "Tênis com amortecimento avançado para corridas longas e confortáveis."
    },
    {
      id: 3,
      produto: "Garrafa Térmica",
      descricao: "Garrafa com isolamento térmico que mantém a bebida gelada por até 12 horas."
    },
    {
      id: 4,
      produto: "Mochila Esportiva",
      descricao: "Mochila leve e resistente, com compartimentos para roupas e acessórios."
    },
    {
      id: 5,
      produto: "Tapete de Yoga",
      descricao: "Tapete antiderrapante, perfeito para praticar yoga e alongamentos em qualquer superfície."
    }
  ]
  
  return (
    <>
      <Menu />
      <Container>Lista
        {produtos.map(produto =>
        <div>
          <p>{produto.produto}</p>
          <p>{produto.descricao}</p>
        </div>

        )}
        </Container> 
      <Footer />
    </>
  );
}