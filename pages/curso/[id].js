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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMzk3YTZkMzEyYjYwZjRmZWIxMTgyYjk3ODYwMzViYTk2NzA0ZDQ4YmNhOTQ3MmM2YjM4NzdlZWMxZTE0NjA3YWZmYWEyNGYzYjBiZGJmYmMiLCJpYXQiOjE2ODU1NzI4MTguMjIwNTM3LCJuYmYiOjE2ODU1NzI4MTguMjIwNTQxLCJleHAiOjE2ODgxNjQ4MTguMjE0OTc1LCJzdWIiOiIxMTU2NjkzIiwic2NvcGVzIjpbXX0.VnJVIH2B-uJwYNNel1tt_UrU6QWXfKPemF6qIuxLPc6UXF6LdNSBrvEuauLvkjn2vKMGibY6wuNUucxAnteImrrHL8x5TNU2pKR7IchFwdxUgGK0e5NvcHH-CEnHVglGSV7bOqfofU4ApA780zHfH5zNDWxe9ZDGBtoHdUt3Jbj1NMKqJ-oKPsHdSd_9u0BZOSzQ50M_x1TOu0jiH-4cY8qTRy5LeKCz6Y9OSHlHjyUOw93HqzcvKZFRuWpMFR_-A5kK0g1gim-y8fuumyxEWbkTi5fv0vy5iO-vN9AFVN0jxP1R2EmVx-Jt1v5OlVUezvBzz7f8ByB9ZZ4Zx0Gfs4XiA14k0Zf_tOfTCu8qVIpzg66e1ImZyShaqm6lKBV-b8qRpE63iYzM11CMQ-fH6VPmNlr6ZfXHLQpJqXHlB8gSY_S0JQjbHw3Z4ROgyLrEuwWi_mNMeUtrD0Bg6VkiH2R6YmAgamY9EYYlpgCvbCgLoauULFluX4mLoGkEBAGcqPRYQb2jDSkIDkMRAXVMiSXTmwXdylQj9r-6X_ELopF-RWMbFrxa3uljEeOVcPtyTiKBaqJM2nuLne8fhQNWlX7Cl1YwHdBPDELuyNw8mLfolicUIVp9sTu2DcRm-D7TMfj63cnuK9lniDJuvAUaYA1FXDY5BUvSjRhtwjloKQ4'
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
