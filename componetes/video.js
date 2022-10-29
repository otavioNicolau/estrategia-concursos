import {
    Button,
    Card,
    ListGroup
} from 'react-bootstrap';
import Link from 'next/link';

export default function Video({ video }) {

    return (
        <>
            <Card>
                <Card.Header><b>{video.titulo}</b></Card.Header>

                <ListGroup variant="flush">

                    {video.audio ?
                        <ListGroup.Item>
                            <Link href={video.audio}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O AUDIO
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        : <></>
                    }
                    {video.mapa_mental ?
                        <ListGroup.Item>
                            <Link href={video.mapa_mental}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O MAPA MENTAL
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        : <a></a>
                    }{' '}

                    {video.resumo ?
                        <ListGroup.Item>
                            <Link href={video.resumo}>
                                <a>
                                    <Button variant="link">
                                        BAIXAR O RESUMO
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        : <a></a>
                    }{' '}

                    {video.slide ?
                        <ListGroup.Item>
                            <Link href={video.slide}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O SILIDE
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }

                    {video.resolucoes['360p'] ?
                        <ListGroup.Item>
                            <Link href={video.resolucoes['360p']}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O VIDEO EM 360p
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}

                    {video.resolucoes['480p'] ?
                        <ListGroup.Item>
                            <Link href={video.resolucoes['480p']}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O VIDEO EM 480p
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}

                    {video.resolucoes['720p'] ?
                        <ListGroup.Item>
                            <Link href={video.resolucoes['720p']}>
                                <a target="_blank">
                                    <Button variant="link">
                                        BAIXAR O VIDEO EM 720p
                                    </Button>
                                </a>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}

                </ListGroup>
            </Card>
            {<br></br>}
        </>
    );
}
