import {
    Button,
    Stack,
    Alert,
    Accordion,
    ListGroup,
} from 'react-bootstrap';
import Link from 'next/link';
import Pdf from './pdf';
import Video from './video';

export default function Aulas({ aula }) {

    return (
        <Accordion.Item eventKey={aula.id}>
            <Accordion.Header>{aula.nome} - {aula.conteudo}</Accordion.Header>
            <Accordion.Body>
                <Pdf aula={aula} />

                {aula.videos.map((video) => (
                    <Video key={video.id} video={video} />
                ))}
            </Accordion.Body>
        </Accordion.Item>
    );
}
