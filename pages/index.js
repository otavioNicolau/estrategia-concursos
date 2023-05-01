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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODk0YjRmYWQ3OWI0NjIzNmZjMWQ5YmZmZjc2YmNhZjlmM2RhNjZlNzJhNjJhZGU4OWMzMTczMDY0YjRiMjI0NmI5OTE0ZWQ5ZThlOThiOWIiLCJpYXQiOjE2ODI5NTkxNTUuNjkyNzA2LCJuYmYiOjE2ODI5NTkxNTUuNjkyNzExLCJleHAiOjE2ODU1NTExNTUuNjg4MjE0LCJzdWIiOiIxMTU2NjkzIiwic2NvcGVzIjpbXX0.NpcjoF0o56ZUxNlleipz0ymRFQEQSwRSh_R-vdEIj_RqlD17QhJjcrEiweHuPixgM6WrCAKZLuHChqmMBlLnJpOpHin7-_LO48LgM7gJBLAXMGdD9fhNSaH2XaBJPtp212E0UzKSLpYPCxUKtOdqp-Qhkjf60JesHqI1ILIQsXDMXP1zfEuhX1HGKd5EThMM88PrfrmmffUAxbVNeuh48Vm7Rck3ZsO5WWUyBC3Dci86MAo5-5w12C7U_TPyK_LjE8mhP-VPfcLbKT3YzTwDCO6QYkopzYd3T0bFkTjTE7gC4Qx7LnQRIugaN_fePYVC9cCmOXApCNcJucAplh2NsvkZt634xhEGEfpXtU3CdVt7sHwTH5EkONkgz2LJafA8fM5trRYp2l-zh08SEVCpbGGhmkeCe6aLMx0LCDDltXzjJmkV-aMU_Z6HY7wIhaAQkhxUHHbVX6gdxy9eF2e3VaYMWDL9EolfS8zs5HmYmqG7CCoWDTDdFzOEHsdEhEx6tIc9vIluuNI7Ip3nsPyAB7IZFs1NU5W05sD2iiBhPg3Wdo1cAKf1l7m7k644M1Jga5yjvd4AoOVLZG_Jjuc1ABr220yy4VcTNobkoWtIl1jiisA1BjEC9Zlg6I-5Xdjio4CpOriSh_f013aZ2QWpQcjVJJO1EE4Bvlw0b5LnESo};


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
