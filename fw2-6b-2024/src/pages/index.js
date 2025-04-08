import Footer from "./component/footer";
import {Container, Row, Col} from 'react-bootstrap';
import Menu from "./component/navbar";

export default function Index() {
    return <>
        <Menu />
        <Container className="px-4 my-3">
            <Row>
                <Col className="bg-primary">1 of 2</Col>
                <Col className="bg-success">2 of 2</Col>
            </Row>
            <Row>
                <Col className='bg-warning'>2 of 3</Col>
                <Col className='bg-info-subtle'>1 of 3</Col>
                <Col className='grad'>3 of 3</Col>
            </Row>
        </Container>
        <Footer />
    </>;
}