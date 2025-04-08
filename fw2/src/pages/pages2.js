import { Container } from "react-bootstrap"
import NavBar from "./components/navbar"
import Footer from "./components/footer"

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const res2 = await fetch('https://dummyjson.com/products/1')
  const repo = await res.json()
  const repo2 = await res2.json()
  // Pass data to the page via props
  return { props: { repo,repo2 } }
}

export default function Page2({ repo,repo2 }) {
  return (
    <main>
      <NavBar />
      <Container>
        <p>{repo.name}</p> 
        <p>{repo2.category}</p> 
      </Container>
      <Footer />
    </main>
  )
}