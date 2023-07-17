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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYzdiNDM5ZWRhNWNkNzBmMGQxYWQ5ZmVmYmFjNjJkZmUxNWMwMGY2OGJhMWY1MTlkMTkwNWU0YzYzZTA1NDI2ZDhmMTdkOGZkYzY0MmE3MGYiLCJpYXQiOjE2ODk2MDQxMjQuNzY2NzUzLCJuYmYiOjE2ODk2MDQxMjQuNzY2NzU1LCJleHAiOjE2OTIxOTYxMjQuNzYyMDM0LCJzdWIiOiIxMjc1MjkxIiwic2NvcGVzIjpbXX0.gztkquTe2EX9ghXN2lCOT0dRgc1dghKfepoX_iVFgc5pneJZqGNQ35IlQM05cb-rNDETGscHR8g-RC2wuV9n4CR6YauAjxJU-TYYuwLlYAky-Brz6IYnsxlVVszUyUtAiAt3oGt80HdIgypZxMn0Qx3CiXY3xljjmRT4mIAXGb4p8XurTPSfgTjRX4ljgIDJ78JuLm-2ss3vTuIiXoEdbklLCvVolr4kmtj3mZ81nlb7Sifl4zRo1dx5ThxrSjiH3Fn6MVU6YpXRtWVPDkpiNNYFRoAIKTHvus9p32UE2tgl2SPk34x9LcAbeQ4MCR2-fj2wosy4qdBI20QWSBcWAn1MRf1-xA9UQojP4PpLnglZSniVtvCLWMEqcp7F7SO-vdKMJXPcV6-cj80QCNaGiuBlPneVbL7wdZaUWL5n15neq8VVrgvtUxuFL9KsoyG5bIB1oowwI-AgBA8dgt5gerYrycEf-Q9kprhxnBo8UPGzU_N7oaUQGcoK3rsUwHX9-L-Kv0VYA1TtGJN-XWyshT0M5syhneDn9_aQv_S1kGzn8r-CGi4pcKx-ZFcvp_zdljVEs0cXw7Dj8s69emtciiqugK3q4NWlqTNo8I-ZPtBnrgT6a1Hy0fwX-sWg-6ohT9T8ZhQaC6gY_cySrm-PIiaUwKglOoIWrwKM5gkgBiE'
  
  
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
