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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMDkwNDJjNDg1MTExYTEwYTEyMGM3ZTEyNjMzOGVmNzExY2ZhMWQ5ZGMyYzQ3MDYyYjNjYTRkM2RlZTQyZGQwNmQyMDYyYTUzYmJjZWIyYTMiLCJpYXQiOjE3MDMxNTY3NDAuMjk5MDc3LCJuYmYiOjE3MDMxNTY3NDAuMjk5MDc4LCJleHAiOjE3MDU3NDg3NDAuMjk1MDkxLCJzdWIiOiIxMjc1MjkxIiwic2NvcGVzIjpbXX0.USvTCcv9XRv5Lv5tJ0prD45C6P7EkjQImTnX7ZvKEEI8Sc4YktwTWESY6lklx-tvR0PCtrpxxGQxjvcR1219Qu2GxTY-IPwf4PKsIR5Fw_RNmFmRQ72-koGFHDVHZJnFDtkTMqzctFy3ra8LnakIV4Y_KPzFf2_EQh0aabgXoqdIaC4kKzFMDxFmrGsUXsoalRfylwRbzTLxKQ9zQwbUTRDdMg6TVUmk3nKXx7Exa5aON9seYnH2iYZw6K0NIOzZXX53SCLlsqPj7mZxdu2WKkoKaZMOu8ur3Ftwk1qR_q9530QYQTGn8B33T9TMAvAdusLeMJqWeil11HaLIogt52ZHoJSa22SxOcyjWD6FWKMs4YtvUHPrtDTbASgcFB1rEqxITpysOkIAwoaDK0b2M8zd2pEE91UgOG0COxeKl_wlXJFsFj4yS-Z-AuUVq73KSxK1vZ8TrOw3ySg_wWUGuFOAFbpuYt57YWo0etAlaqRPZGkYhu48YcVXr1BE60d4h55voTFWUG_FzU95_yyAcaz6Ie1kzSXkOevBJ9NPQxYl-uRNIBmC_qsOpX8evKQRkxN40ExGn5bSbDT3guXD9t-s3t0yADuLgtAKOfu557BV19bJj5Q-HvAL3Q-zrAHMgJKGxtdk4N1wZjFraLtfkf38imHeeAZOmsHaToBgq-4'};


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
