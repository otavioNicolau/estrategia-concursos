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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMzRiNGNhM2MzMmI1YjJmOTk5NGQwYmUxNDcwNDNjYmZjN2IyZjY0MDc0MGEyNWRmNDI2NjIwNDBkYzI4ZWM2ODNjNDc3YzNlYWE0ZGViMmQiLCJpYXQiOjE2OTIyMDYxNzUuNjc5Njk1LCJuYmYiOjE2OTIyMDYxNzUuNjc5Njk3LCJleHAiOjE2OTQ3OTgxNzUuNjc1OTE3LCJzdWIiOiIxMjc1MjkxIiwic2NvcGVzIjpbXX0.dz-OATxDB1SQVz95SkGIHxeyqQIDbqwr5fvC7LDMzC1qCPAN6tWF1IHCB49e97DHTL7RHym-RBq2W6BZq0K-X94iF3nfCIoOG77o8ZMVmhBN1848Z92WWXSyeBHwmbHWKuLCCPlTpz4f_MnGY0b4vr93uIGpeSLG0EzqdEUrEUiYFnKhtvY60yA3-F0fn84BgMdXWntdbM2RRfTHoSzF1_bSNrMJyykpieowFUH0a1zGHWqdqTmn-Whmgvsi32IEKgE7wYJM2fikB0so1YZnYtRbVHKEd2TwF7MMCXpBJdoiVvIKaGNFI-ZSIinBO_APjuA12ktX8gGkxLqG9wxelBlz_tn5Rcbg3CxTdKBigAunaffrc6tJ1vs0tRoaHS20rSamoMdthicIBhZw4-bTp21CV_iUtt-4bhcG81YvM6yYOzH6XTbWvgTQ02VAxJVfYjmXUkWaSrn5XU_ou-tAwJOur4nAmR6KaBxEDP9VRPMQhH2ShxJMudoFV13ZvS8Zhrbp5yiyCW0BC4TF6_a5YIuFz5GqFS-Pyi4BKwLGAhh4FqJ3k6sO8fQRwkR_bBgCZ8_oyy_Ukh1f_Ej_LRpFBXFeZaG6-n_NqOQ3_yGZpTBRkzss0PcEwPfMtBpfkF7LEscIeudBsLc17rlm1ZRdqRGy9Tigo0En4wUfskjIS4c'
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
