import {
    Button,
    ListGroup,
    Card
} from 'react-bootstrap';
import Link from 'next/link';


export default function Pdf({ aula }) {

    return (
        <>
            <Card>

                <Card.Header><b>APOSTILAS EM PDF</b></Card.Header>

                <ListGroup variant="flush">

                    {aula.pdf ?
                        <ListGroup.Item>
                            <Link href={aula.pdf}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O PDF NORMAL
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}


                    {aula.pdf_grifado ?
                        <ListGroup.Item>
                            <Link href={aula.pdf_grifado}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O PDF GRIFADO
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}

                    {aula.pdf_simplificado ?
                        <ListGroup.Item>
                            <Link href={aula.pdf_simplificado}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O PDF SIMPLIFICADO
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}


                </ListGroup>
            </Card>
            {<br></br>}
        </>
    );
}
