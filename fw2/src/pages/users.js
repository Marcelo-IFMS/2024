
import { Container } from 'react-bootstrap';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Table from 'react-bootstrap/Table';

export default function Users({ users }) {
    
    
    return (
        <div>
            <NavBar />
            <Container className="conteudo px-3 ">
              <div>
                <p className="text-white bg-dark rounded text-center p-2 my-2 fs-4 fw-bold">User list</p>
              </div>
                <Table striped bordered hover>
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.login}</td>
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
    const res = await fetch('https://fw2-seven.vercel.app/api/usuarios/data')
    const repo = await res.json()   
    return { props: { users: repo } }
}
