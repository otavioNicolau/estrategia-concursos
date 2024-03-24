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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNWViNDdlZjYzNTg4YWYzOWJiNWViODBjMjIxMDE5Mzg2YTYzNmE2YjVhZDdkZTYwN2ZjYmM1N2JhZGQ2NTc2MjJlY2VmZTUxNTdjMTk2NTciLCJpYXQiOjE3MTEyODkxMDUuODQzODIyLCJuYmYiOjE3MTEyODkxMDUuODQzODI0LCJleHAiOjE3MTM4ODExMDUuODM5ODY1LCJzdWIiOiIxMjc1MjkxIiwic2NvcGVzIjpbXX0.ClWaeWFDvR2sop32Xvg0jiEDU3WIhMKnSgNuKzu1Av3PckO-Ld0wY4U4aCFketg0j5pA8Oxtzpo1X7KbKNdAFoPih7Ey3PyXteDu1P7d4pkgeK97ZqOH2fCmCAc9ggTLv-aUR9i59-zmGOn9C4VaaPfjkz_FTwDjLE8F8V0zQZyxhPcNgt-yDReqhdcjEqoddNTcp4iIvXhF73qqY1XL1FKTbCnXzb1Mif4WiZhqJovmqYb0TkhnZbg8U5eQ9KPSf3438c4vwGTqgIshgbxLcqu5Gl0QhRv8nqJAPKKoSoQ78RcUIUtdcol9sWPVsiJcN7hrf8CTyrm6C7_py2aAiWTgVcDM1JvdXi-_kgAUYGSzv1HBNjW2rYQP0VqIIX9s9BWXsltDCgCpXhmd8EsTPRJJPaF9QmHKp6LXxcGGdz7wqMLeGzFaHUmFFZCSYD_N2VZ57zRtSFp7gqh0nj_lS57UX-urNSAf6bm6une44YzGNpmQ3xr7aRFYbowqs9Zp1OnPm7pac8_NFcgm1sexTYF2F7pjjI2lNzfDn97rj2E9eb1SXLx6F1wbXNsTmcoooRH-7ERrCvtRbSZ6IEirwDpixxzDZQAwoUc886676Uvmyg5o-kJ9nD310QSoQ659Qjz_giq5ddpKv0qk3If8NSFF8gfii20MVQ6wV1ie3yk'};


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
