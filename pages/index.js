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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMDdmODhhZTdjNWFiODRmOTNjNjFhNDBmZjliNWM3M2VmZjI2YTJlZDVlM2YxY2M2N2I2OWY4YTc5ZTJmZTU2ZjdiZjc2MDgwZWJlNTA4OTEiLCJpYXQiOjE2ODAxODg4MTYuNzEzMDc3LCJuYmYiOjE2ODAxODg4MTYuNzEzMDgsImV4cCI6MTY4Mjc4MDgxNi43MDgwNDMsInN1YiI6IjExNTY2OTMiLCJzY29wZXMiOltdfQ.dCPmiHOlTlYb_Kn5jC8x6RHtiFxpHdHdFGauxE61CZ-y23Rj3WPtEVrwy9S7haTFt8hYp8w6dJj6c20niw3gkHc-ss2GNHQkv_67EEshI0zc4JWop1spcUFc_u9vsNb2JNXTFya7-5dnDLZpBfr16tbVQ4yKvF21agMSKgfo-LVIXIhtAAnkgkWwLtQlaBrpKgblVDFIzR0o1j16CfMUsoJonvjnISBEuWmbn3bnslNGrcIM0RjTXZqqNJzs_RjKqV2nGdjI4jd3K9Q3g6Zu3bf1ZwJHO3I4nIM7RssNVzbu4QXn-oq8Iv7248xpiEf4QpaUOywS8F-8SzvQLsszCAYN1RJN5GGYxmgBS92GpFx9-4UEED8dCSTx4NmFTnDkqstzFzNJX1BR0D93x3XS8Dus8NQ8LxQncX7xk4g5gUAHTlQ7tymwe9kxbVqxbs9iCcHgmg9onAbgUKF7yK98C9Jjgl7eVqVcz4nCZjIAY88jM7onuOB5tF0eOBN-QsosO_AdK2p6aDfzRP8YfDZS_SERj9oHK-oF2uLKZR9e8LeiCtSqldz5Ub2IIsL9arzb2vEAR0bN_-hH0bKtNrZV86m6ryVprDMj1Ul84QLMiDpHXABYQQE6ezEW9KVtHQzJ7eMnBYUpsDeu6rmxRU4SWSBPrkk9sqJ92C24nCPpNqw'
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
