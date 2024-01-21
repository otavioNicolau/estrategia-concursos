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
    authorization:  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmEwOTdkNmY0NDI5OTI5ZmQwOTkwY2Y4YzEzYTI1ZTRlNTc1MzA4ZTIyYWY4M2IwOGRhYjUxMzEwNDExMWJkM2E3YTlhOGE4YTU5ZGI5NmUiLCJpYXQiOjE3MDU4NTEyNTcuNzg4NDE4LCJuYmYiOjE3MDU4NTEyNTcuNzg4NDE5LCJleHAiOjE3MDg0NDMyNTcuNzgyMTE5LCJzdWIiOiIxMjc1MjkxIiwic2NvcGVzIjpbXX0.l3SiK2C9bUDtN7oYBKiikc-46G6JimVI6rc2bZeW9di2JhdD68XvMAjFiP8srn6CiaS_q6FbI4qsr1N19cmp93GTMojrMsQN_UtnWYk-af8IZcojzjEmXsO2rQDVyJsSFNqNry_6yE8bBYYDFOKXwWphQetn-KIPpSL6QHUa3K1mhtrlKeKE1t2odz7Me9r7LdcMeUA2wKsx52ZP3Z9n0kdYYtbewWpDvgrp8zyd0A2WJh1WfePXWcFWojx4Adu1IBg_dXOK__-uZnU_uJarOjQK-5E2CoLMVpiUJVhP2rS9gSqtmtlU98B7gt2IdMqcojUzhiO8KZOX8Dx0xuxwEfJ03PATJSwUHpPKC_L9-6I0SYVoj9CMf4HZuUT5An7GtkyjlmV_q2e38u7Qkh_gHV5h79dI-dPsMK33kd33cPCaY3vAomHpGAWWwPZA2I41LYCsxE9DEkGQMe7BNdDgBh9BEayjLH91KJtpk-bSWrYWY6O1tB7qQP1SvpYLi0bECW1wb_f7xnY1_jVnVPmqO8sBYnwUKVML96LMiVkKI26PIramgxmKlyXXXaUimjusinLRHs9qyPQDFQCWmBSukj9pbUKaz-5Z4AEkdn5uNhS0p1nQ-IU7LoTdDPicywzAJ1hi4zs1xjDAS1V7LBI-3QwJc2eumVKI-z6sfNFHLuU'};


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
