import styles from '../styles/Home.module.css';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';
import {
  Button,
  Stack,
  Alert,
  Accordion,
  Table,
  Container,
  Navbar,
  Spinner
} from 'react-bootstrap';



export default function Home() {



  var url = 'https://api.estrategiaconcursos.com.br/api/aluno/curso';
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
  console.table(data.concursos);

  return (
    <Container fluid="md">

      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">PROJETO PRF</Navbar.Brand>
        </Container>
      </Navbar>
      <br />

      {data &&
        data.concursos.map((concursos) => (

          <Accordion key={concursos.id}>
            <Accordion.Item eventKey={concursos.id}>
              <Accordion.Header>{concursos.id} - {concursos.titulo}</Accordion.Header>
              <Accordion.Body>

                    {concursos.cursos.map((cursos) => (
                      <div className="d-grid gap-2" >
                        <Button key={cursos.id} variant="link" size="lg">
                            <Link href={`/curso/${cursos.id}`}><a> {cursos.nome}  {' '} {cursos.total_aulas} {cursos.total_aulas > 1 ? <a>Aulas</a> : <a>Aula</a>} </a></Link>
                        </Button>
                        </div>
                    ))
                    }

              </Accordion.Body>
            </Accordion.Item> {<br></br>}
          </Accordion>
        ))}
    </Container>
  );


}
