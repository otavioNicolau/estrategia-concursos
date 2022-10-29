import axios from 'axios';
import useSWR from 'swr';
import {
  Accordion,
  Container,
} from 'react-bootstrap';
import Header from '../componetes/header';
import Concurso from '../componetes/concurso';
import Loader from '../componetes/loader';
import Error from '../componetes/error';


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


  return (
    <>
      <Container fluid="md">
        
        <Header />

        {error ? <Error /> : <></>}

        {!data ? <Loader /> : <></>}

        <Accordion>
          {data && data.concursos.map((concurso) => (
            <div key={concurso.id}>
              <Concurso concurso={concurso} />
            </div>
          ))}
        </Accordion>

      </Container>
    </>
  );
}
