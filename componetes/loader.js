import {
    Spinner
} from 'react-bootstrap';

export default function Loader() {
    return (
        <>
            <Spinner className="justify-content-md-center" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    )
};
