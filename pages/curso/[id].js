import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Accordion, Container, } from 'react-bootstrap';

import Header from '../../componetes/header';
import Loader from '../../componetes/loader';
import Error from '../../componetes/error';
import InfoCurso from '../../componetes/infoCurso';
import Aula from '../../componetes/aula';

export default function Curso() {

    const router = useRouter();
    const { id } = router.query


    var url = 'https://api.estrategiaconcursos.com.br/api/aluno/curso/' + id;
    var headers = {
        authorization:  'Bearer -aMU_Z6HY7wIhaAQkhxUHHbVX6gdxy9eF2e3VaYMWDL9EolfS8zs5HmYmqG7CCoWDTDdFzOEHsdEhEx6tIc9vIluuNI7Ip3nsPyAB7IZFs1NU5W05sD2iiBhPg3Wdo1cAKf1l7m7k644M1Jga5yjvd4AoOVLZG_Jjuc1ABr220yy4VcTNobkoWtIl1jiisA1BjEC9Zlg6I-5Xdjio4CpOriSh_f013aZ2QWpQcjVJJO1EE4Bvlw0b5LnESo'
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
        <Container fluid >

            <Header />

            {error ? <Error /> : <a></a>}

            {!data ? <Loader /> : <a></a>}

            <InfoCurso data={data} />

            {<br></br>}

            <Accordion >
                {data && data.aulas.map((aula) => (
                    <Aula key={aula.id} aula={aula} />
                ))}
            </Accordion>
        </Container >
    );


}
