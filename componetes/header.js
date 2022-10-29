import {
    Button,
    Stack,
    Alert,
    Accordion,
    Table,
    Card,
    ListGroup,
    Container,
    Navbar,
    Spinner
} from 'react-bootstrap';

export default function Header() {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand fixed="top" href="/">PROJETO PRF</Navbar.Brand>
                </Container>
            </Navbar><br></br>
        </Container>
    );
}
