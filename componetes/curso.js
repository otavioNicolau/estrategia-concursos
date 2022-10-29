import {
    Button
} from 'react-bootstrap';
import Link from 'next/link';

export default function Curso({ curso }) {
    console.table(curso);
    return (
        <>
            <Button variant="link">
                <Link href={`/curso/${curso.id}`}>
                    <a>
                        {curso.nome}  {' ( '}
                        {curso.total_aulas}
                        {curso.total_aulas > 1 ? <a>Aulas</a> : <a>Aula</a>} {' ) '}
                    </a>
                </Link>
            </Button>
            <hr />
        </>
    )
}