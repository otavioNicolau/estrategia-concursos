import {
    Card,
    ListGroup,
} from 'react-bootstrap';

export default function InfoCurso({ data }) {


    return (
        <Card>
            <Card.Header><b>INFORMAÇÕES DO CURSO</b></Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>{data?.nome}</ListGroup.Item>
                <ListGroup.Item>{data?.total_aulas} {data?.total_aulas > 1 ? <a>Aulas Disponíveis</a> : <a>Aula
                    Disponível</a>} </ListGroup.Item>
                <ListGroup.Item>Modalidade: {data?.modalidade}</ListGroup.Item>
                <ListGroup.Item>Professores: {data?.professores?.map((professores) => (
                    <a key={professores?.id}>{professores?.nome} | </a>
                ))
                }
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}
