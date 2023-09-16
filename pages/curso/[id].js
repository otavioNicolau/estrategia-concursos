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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZTc5NzZhNDFmN2VkNTQxZmI3MDcwOWNhYmJiMmM3OGQyZmNmMmU0MjU2NjgyMWUyYzhjYjVjY2Y2ZTlmZjUyOTcwOTg3ZTU2ODU3NmI1MGYiLCJpYXQiOjE2OTQ4ODQwNjAuMTU5NDk1LCJuYmYiOjE2OTQ4ODQwNjAuMTU5NDk3LCJleHAiOjE2OTc0NzYwNjAuMTU0ODI4LCJzdWIiOiIxMjc1MjkxIiwic2NvcGVzIjpbXX0.sKoxhPprvwJRHf3EfygMu7OxV661JjFc7K-s1YntPhN6h30nXk7DS3W0D395ujl8KLdGBow5NuUJe_ihD-ThjSMPwMlpI4qlfdS7c4AoG_06xu02i8AszMZq4LFaNJ0XqVHvtbfXfwfUxF9fFZDvMnGNf1Ii6nm5NIt9ZtU2f625tjycQxqm6TvDGw3BtXuIosuC_Cn7qdxbikZMm1IFPuIpADOOXOjfAfvly6Xv0TVh9nmoSMacj5bw5Q9M0o3d8tIo7Xn_chwQthzlvAEwT_c1Um1MPCLZo72tYVK_20-wBj2vtimS68bzpGJt-j5EIvhmIFTeUlM_iB3mjcsyLwYKXwr5WQQu-m3yY-fIyg1pq4qKc9_mhNz15wRImk5_wSZvgjKk5kwNWQqq7KjlP2BXiVE9HeV-dzHrHZMUsvelbS6RZFU-bzZ6ZbFyniH-jLr7svggXO1cq-CfLHAJ7Rohfh3ec1o87IOi_qX3GZKUrO5cPMmehX8igfOPwWyBUiJEgOV_FM_uOnJ-sTYyCAe-3RfPmkKqKmhyHjshV709GpwDoAh9W__s68qkq708rVxifNt_HsFSpJvOBKhucxR2a9WhpSmxX32ue5is4AWUfQO9ieBfyfooT6v5SXGTiXWC7jM25-cBAzboc8jnbuIqGq08GrT0AHaBynfHpDw'
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
