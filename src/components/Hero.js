import React from 'react';
import { Jumbotron, Container,Row, Col } from 'react-bootstrap';

function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbtron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subtitle && <h3 className="display-4 font-weight-light">{props.subtitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                        { props.children }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;