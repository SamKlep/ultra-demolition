import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Here for all of your Demolition & Excavation needs.</h1>
            <p>Serving all of Southeast Texas and surrounding areas!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>About Us</h1>
            <p>
              Ultra Demolition is a company that takes pride in our work and we
              are committed to supplying superior quality results. We are always
              dedicated and devoted to providing an exceptional experience every
              time.
            </p>
          </Col>
          <Col>
            <Image src='/assets/images/machine1.jpg' fluid />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
