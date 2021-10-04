import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div>

            <Container className="error-show">
                <h1>404</h1>
                <h2>Page not Found</h2>
                <br />
                <Link to="/"><Button variant="success"><i class="fas fa-arrow-left"></i> Go back Home </Button></Link>
            </Container>

        </div>
    );
};

export default Error;