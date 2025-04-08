import Footer from "./component/footer"
import Menu from "./component/navbar"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://dummyjson.com/products/1')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }
   
  export default function Page({ repo }) {
    return (<>
      <Menu/>
      <main>
        <p>{repo.title}</p>
        <p>{repo.description}</p>
      </main>
      <Footer/>
      </>
    )
  }