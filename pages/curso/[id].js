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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTJjNTk5MTk2MTg1NzE4YjMwMDNkMTA2NTVlZWNjYmUxYTBmNTlkYmFkZjQyNTViODA1ZDVlNGM4ZjhiZTc0MDQ2ZGVjNTZlYzRhOWM1OWUiLCJpYXQiOjE2ODgyMTY5MzAuNTQzNTUyLCJuYmYiOjE2ODgyMTY5MzAuNTQzNTU0LCJleHAiOjE2OTA4MDg5MzAuNTM4ODg3LCJzdWIiOiIxMTU2NjkzIiwic2NvcGVzIjpbXX0.PY5GukReeZePHkJdqMCYrREOsno1yBOlpEJcw8sBP93ysEJ_4Me1eWOc6dCUeN9W5q1Lp42-5ADhK0oBzV78_PEYOLifHUMOf5ZzoNuN5ym4eaJzlZyboaE5tLWiwenI1DtsEpOUvEpo_699dVbznUmf1qZrrzhAvWl6kx058yGQo40wzH3T_dLNdmlrYDa1garFK8mfgvxCSfmw4GrfXISJl4DMYzCPwYi5dcWTZeKb8K8MWjur9ytxmSv4sjwUEVwdmpfXhXRKOdSEpgbiG2jXQBuW5tnYK0y-1YH1-v5BqsN7Jp5M6AjE1hivylKx2YbygagjUhReU9hqiu3pcwpyyhUfoykDK401JfpWK2u2CACfRRHsLk6LSuxWr3l5cVe30zyioUVGWaaQJtWpDD8HwGhRgv4-7fctEBKw0iOH4EdGafJO9Ap_60pWBKLw8vM4VJa5FRDwvyfNnV5DdsGEAkuex6D-YW9HZ4xj7yz_mtWeR0JySXnpROC_l2qtvsu0shfztvUFDByx8kmTh_YzS_MtkxFau90T7xQotGWwlwuTiIHIAHo0S58HoXzdviaBf1iUXA51dtOlla5cJvR2wrwdmdhxC5r8t066yGtOo1tq-kHJIpzw8RJAp5unc-oirnwpQtL3Hv-ul1iPvNHIehhSicV_EZH2IwjH7e8'
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
