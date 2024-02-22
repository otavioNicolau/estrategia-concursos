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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNmJhODBiMDQwZTM2YzJlNDQ5MjM1Y2JkZTQ2MGRjMDNlYTk3YTdlMDE1MDQxZmVhNTM4MjgzZjYzZjQ0OWQ5NWRmZTZmZDFhMzlmM2Q4MTMiLCJpYXQiOjE3MDg1OTg3OTguNjMxNTQ2LCJuYmYiOjE3MDg1OTg3OTguNjMxNTQ3LCJleHAiOjE3MTExOTA3OTguNjI3NzEsInN1YiI6IjEyNzUyOTEiLCJzY29wZXMiOltdfQ.Oce4j7-JhKJt-cTP7B8veSgn1IHqEQqgRgL0vJOTbBwxDsGJN_iOjkc0OZicOg2bPvq5zF_mHWZga7eSFmuh_5AMhanUhqaAea_xNs9T0pAqn2BowKZeuRcU58Ty4hDT-ppgSZ47JoxYe-mZfEwmg9Tmk2xMMqUibxGgu-yEIoRTKEUPyidl3Hi2Ozj3PaUn3Oduu7WSy65t7XFLHNvXxNDxtiQr1BgKLle3Ca0CyNE9bFB3Y_7jkyNQ2qxyThfze5HCrg1_GRKMnrDNbckynXu-hBuuQzkVWt8_n21a3KQX1pFyvKoRAkuHuzZUnCFtJ93M2WjJvGawwVZubHgOS4Au6aB0cbS-XMLvQgGKcr8RD3kDO9rnQQnWeKteZRkRUQffzLPq3xq4CKYjU_BUsYsWtET6zqaoC6-HlqOd4lSaG59QdcCjPEz4MzrnwMKWrMSwjv7KOo5QsYUnQevpomC0isclC4VvOjmDG5IrqaDXWpMZqbpFj_mityjlxpR-1_TPzvqIWoNieLzKb4ZFfYRVl4806q0N1kc1Dw2xX6SKLWr0A88_iEF8mONoQQvV1CRAY8gxiTTKRCkwEozn3f-Ax6UNUcxEWnAuAKk6y2DPgAmQVjEGFRmQgIrd-NPF2HEt14rzrj9G0Z1ziDMAIcHTgNp8ZZnxXui78okMp5U'};


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
