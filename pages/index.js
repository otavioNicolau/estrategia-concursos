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
    authorization:  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMTc1NzVmMGI3YjVkM2EyNzJlY2ZjOTViMDk4N2IxNzg4NTk5NWFiZjBmMDk1NmQ5YmM2ODFiMmI0NWM5OTNkNzY0ZTNhYTQ4ZDVkMmE5NDIiLCJpYXQiOjE3MDA0ODIzODcuNzc2MzIsIm5iZiI6MTcwMDQ4MjM4Ny43NzYzMjIsImV4cCI6MTcwMzA3NDM4Ny43NzIzOTYsInN1YiI6IjEyNzUyOTEiLCJzY29wZXMiOltdfQ.C8uKN5qudzOL8RgkxpOBIrIuoY2-vS-hONnZxw9qWDbjUj90-LRTeJXcXlLdY6UFjGJaxe8bHg7GA9UVbT_Oi-JnWflQAIGmykneiNZV1wYfBCWMpkqD4axitv3JreUr7TLziGGEI0U7s8PAgB7D0RhbYm3jncKx6kGoLgm01chuF-XWOsxrnDZ6SC3rHMC-77I7XeHSmhjAkD1RS9ivvjdtL4lVV0jG28kYql-M2ug7ZcdbDFGdChn5gH2XwYn72wokyFEOTXFq7tjwlEc40_Brj7qp6yicG4qDPkMZ3QhnkDdjm0p5Al4wvcGWx_CHgBVr1I2o8ZSXmmhIvN3QtzSmhKzZDQNWv6lscxJDmzVw_gPsOAht5Ym7dQNG9krSKXUzqKijMlFg6z8keB0GoV5MbO3n8_0m2IAtOFsXwcjgpbbSP0yivhgDr6hMQxBlo_nkLzwiUE8W501IpghfqgtA9QG1aBNQimc_lELzd56trYq8Wu7sXdrQGMPwLogL3xPA6gsd7Cw5yt6L85p2U9y8nUgXlCH-1g4zF17cLStaC3EPqypdjS5RC7FaGRoIYaP9ibLo93f9B9TYvJdgQ19mCqxa2KFsxTdtZ9rHJ2XQ3H9CbFr2TDzwHKSz3u87ygyLB2d7Krx4rsxZzkNazq05hodMjf-xdVVAuq5mvi8'};


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
