import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';
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



export default function Curso() {

const router = useRouter();
const { id } = router.query


var url = 'https://api.estrategiaconcursos.com.br/api/aluno/curso/' + id;
var headers = {
authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZmNkZTMzNjBiNGIyM2ZkNWM5MjE4OTlmNzVhMmIxZmMzZTVlN2IzMmYxZjEzZDY5ODk5ZTY3NjVkNTczNmE2OGQwMmFiODBhNjkwYjMyMmQiLCJpYXQiOjE2NjYzMTg2MTUuNTkzODU3LCJuYmYiOjE2NjYzMTg2MTUuNTkzODU5LCJleHAiOjE2OTc4NTQ2MTUuNTg5MTMsInN1YiI6IjExNTY2OTMiLCJzY29wZXMiOltdfQ.f70vXAWmyQ5iJxVtikyEWD4dh2TiVmhdu8Naoi89i29q1zPmxrmTtJVjGfSpE4yGvjvx6GQC2V1R6DEfFDr8RrhRR2rs8ZXNQRa6YlZLSriQ5acQCEvYXzzv58GpjMfNkH30o5pZrvOS6Mv9-Mrn-xs7LpMwmnW_gKsuGTEqBSoD5Yd0374miJ0dUISPK6vXtsscZY2EubbhyoWRSWdXVazHzIcG6utr5phUEWZq8XSgbiDMpL6hVOwDI0f78GkG4H4XRAHm-q59H31Aa7D7hctC3wCctmNBNfN0n6mPSwT5RKqRwlilaKzeWjO54bFT63UMRA8w33Q5llvRUa54ZCvSl_IrjG3O9yfNuMSAY6UN8fQ4ZnWd21PwaMVn17UOUuDoDO5CE0L-gmUtRNE7DR9TOKTPaOP1vrqZ31SDpvOSLr9Nuwt_pr5uJ0nTKU-ukigIL6HB7uLHRqQQbaDRxJz5xad5sBUISlWjnDX6NDZqMh72SMBuYUIzdArtO-u3uAoh4zgWgPYOYbXfAxqbhGSoOOh0fMsewOr-qlL4p2zFkUmqTTvIW8y9ETlLSsh_NTTmVSqchU0JEvpyg1HSqjPe-NR4fZWGGGauvPteBYmQoxfJIKATtK35JQ6UOMRZJTsFjUa__UveWV6fdLyPkJYFhC756SnnVv_2pKpmZ7c'
};


const fetcher = async (url) => await axios.get(
url,
{
params: {
},
headers: headers
}).then((res) => res.data.data);

const { data, error } = useSWR(url, fetcher);


if (error) return <div>falhou em carregar</div>


if (!data){
return (
<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>
)
}
console.table(data);

return (
<Container fluid="md">

    <br />
    <Navbar bg="light">
        <Container>
            <Navbar.Brand fixed="top" href="/">PROJETO PRF</Navbar.Brand>
        </Container>
    </Navbar>
    <br />

    <Card>
        <Card.Header><b>INFORMAÇÕES</b></Card.Header>
        <ListGroup variant="flush">
            <ListGroup.Item>{data.nome}</ListGroup.Item>
            <ListGroup.Item>{data.total_aulas} {data.total_aulas > 1 ? <a>Aulas Disponíveis</a> : <a>Aula
                    Disponível</a>} </ListGroup.Item>
            <ListGroup.Item>Modalidade: {data.modalidade}</ListGroup.Item>
            <ListGroup.Item>Professores: {data.professores.map((professores) => (
                <a key={professores.id}>{professores.nome} | </a>
                ))
                }
            </ListGroup.Item>
        </ListGroup>
    </Card>
    <br></br>




    {data &&
    data.aulas.map((aula) => (

    <Accordion key={aula.id}>
        <Accordion.Item eventKey={aula.id}>
            <Accordion.Header>{aula.nome} - {aula.conteudo}</Accordion.Header>
            <Accordion.Body>

             
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            {aula.pdf ?
                            <>
                                <Link href={aula.pdf}>
                                <a target="_blank"><Button variant="link">PDF NORMAL</Button></a>
                                </Link>
                                <hr />
                            </>
                            : <a></a>}
                            {aula.pdf_grifado ?
                            <>
                                <Link href={aula.pdf_grifado}>
                                <a target="_blank"><Button variant="link">PDF GRIFADO</Button></a>
                                </Link>
                                <hr />
                            </>
                            : <a></a>}
                            {aula.pdf_simplificado ?
                            <>
                                <Link href={aula.pdf_simplificado}>
                                <a target="_blank"><Button variant="link">PDF SIMPLIFICADO</Button></a>
                                </Link>
                                <hr />
                            </>
                            : <a></a>}
                        </ListGroup.Item>

                        {aula.tec_concursos ?
                        <>
                            <ListGroup.Item>
                                <Link href={aula.tec_concursos}>
                                <a target="_blank"><Button variant="link">CADERNO NO TEC-CONCUROS</Button></a>
                                </Link>
                                <hr />
                            </ListGroup.Item>
                        </>
                        : <a></a>}


                        {aula.videos.map((video) => (
                        <ListGroup.Item key={video.id}>

                            <Alert variant="dark">   
                                <Alert.Heading>{video.id} - {video.titulo}</Alert.Heading>
                            </Alert>

                            {video.audio ?
                            <>
                                <Link href={video.audio}>
                                <a target="_blank"><Button variant="link">Baixar Audio</Button></a>
                                </Link>
                                <br></br>
                                <hr />
                            </>

                            : <a></a>}

                            {video.mapa_mental ?
                            <>
                                <Link href={video.mapa_mental}>
                                <a target="_blank"><Button variant="link">Baixar Mapa Mental</Button></a>
                                </Link>
                                <br></br>
                                <hr />
                            </>
                            : <a></a>}

                            {video.resumo ?
                            <>
                                <Link href={video.resumo}>
                                <a target="_blank"><Button variant="link">Baixar Resumo</Button></a>
                                </Link>
                                <br></br>
                                <hr />
                            </>
                            : <a></a>}

                            {video.slide ?
                            <>
                                <Link href={video.slide}>
                                <a target="_blank"><Button variant="link">Baixar Slide</Button></a>
                                </Link>
                                <br></br>
                                <hr />
                            </>
                            : <a></a>}

                            {video.resolucoes['360p'] ?
                            <>
                                <Link href={video.resolucoes['360p']}>
                                <a target="_blank"><Button variant="link">Baixar Video na Resolução:
                                        360p</Button></a>
                                </Link>
                                <br></br>
                                <hr />
                            </>
                            : <a></a>}

                            {video.resolucoes['480p'] ?
                            <>
                                <Link href={video.resolucoes['480p']}>
                                <a target="_blank"><Button variant="link">Baixar Video na Resolução:
                                        480p</Button></a>
                                </Link>
                                <br></br>
                                <hr />
                            </>
                            : <a></a>}

                            {video.resolucoes['720p'] ?
                            <>
                                <Link href={video.resolucoes['720p']}>
                                <a target="_blank"><Button variant="link">Baixar Video na Resolução:
                                        720p</Button></a>
                                </Link>
                                <br></br>
                                <hr />
                            </>
                            : <a></a>}


                        </ListGroup.Item>
                        ))}
                    </ListGroup>
     
            </Accordion.Body>
        </Accordion.Item> {<br></br>}
    </Accordion>

    ))
    }

</Container>
);


}
