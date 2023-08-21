import {
    Accordion,
} from 'react-bootstrap';
import Curso from '../componetes/curso';


export default function Concurso({ concurso }) {
    return (
        
        <Accordion.Item eventKey={concurso.id}> 

        xx
            <Accordion.Header>{concurso.titulo}</Accordion.Header>
            <Accordion.Body>
                {concurso.cursos.map((curso) => (
                    <div key={curso.id} >
                        <Curso curso={curso} />
                    </div>
                ))}
            </Accordion.Body>
                
        </Accordion.Item>

    );
}

