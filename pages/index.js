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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZGI5Y2Q4YjZiZGQ4ZWQ4OTQ4MzhjM2E5ODU5NDRhNTBjODc4OTY5ODY1Nzc5YjNjMDU2NjZmY2NmZWYzMDRmZmRiNTkzZjNlMDFkOGY4M2IiLCJpYXQiOjE2OTc2NDM1NTguNDI1OTk4LCJuYmYiOjE2OTc2NDM1NTguNDI1OTk5LCJleHAiOjE3MDAyMzU1NTguNDIyMjA3LCJzdWIiOiIxMjc1MjkxIiwic2NvcGVzIjpbXX0.dHaC6LPnTVvNzPA8LUcWZ_NWUmgr5HhqB8OLJ3fai5c-4GeV_wcGjILAepAWbizv47vtEvFLvESd_6SyhJ1OnnhS1KHbcq-v4C3-GxytM_OHytpQ17v1LrNC6w5lxKo3xqCNMfUjY1mTgpC6at5b1HXaKGuWtnaflp56FKup49GHpdep2HOclLKuweCfjkq2QCgv7kvd6C3MjurguhPYIeScK4fRUZofSyp7STEvRi80wWMEzfW0DFKoUyIEIyapsdbPvl8lhSRCFcbaeKxfsR1hDisMqbfkrzrUjEyUqCg6b7yEV0swnM14i9z5JhYDvV1ns7KojTWuc6VUbKTEZ-dPKkfIqejiEY-mF9XsSL04V5TBKWD29Awl3aEaefddqGC61t9-SlLMtblEnoRyNfus_k4jBvVbnVc9OzOFg_DbGz9vhZIvgHViEDwbXqrdsMbea1T_IzAnAQ1l-Soz2Vc1TWoyxGNFJzSffKV0J9BvjKB4GXAXjbeuWycZZPyqSPNik7-rZS131GSMH3CqpSvxuI7WAfNv1PxwT5fBbdaC18--VIdMMZ1u_yT3-3APPGlOzzmtPxsi4gcq_VqkFx5YDxoAxGJldCYgrjs0X3CiZBMUOqZDJ7sbmlyL4usvW0By2Bey3jkGusO_TFz8dJRV1epaB0nDvp5PlcG4EkI'};


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
