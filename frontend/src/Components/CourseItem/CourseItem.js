import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import meta from './images/meta.svg';
import "./CourseItem.css";

const CourseItem = ({
  currentId,
  currentPrice,
  currentSkill,
  currentCourseName,
  currentCourseSkills,
  addToCart
}) => {

  return (
    <Card className="careers-card">
      <Card.Header>
        <Row className="careers-card-header">
          <Col md={5}>
            <span> ${currentPrice} </span>
          </Col>
          <Col md={2}></Col>
          <Col md={4}>
            <Card className="card-type">
              <Card.Body>
                <Card.Text>{currentSkill}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body>
        <Row className="careers-card-center">
          <p>{currentCourseName}</p>
          <span>{currentCourseSkills}</span>
        </Row>
      </Card.Body>

      <Card.Footer>
        <Row className="careers-card-footer">
          <hr />
          <Col md={5}>
            <Button variant="primary" className="button-buy" onClick={addToCart}>
              Enroll
            </Button>
          </Col>
          <Col md={4}></Col>
          <Col md={3} className="meta-icon">
            <Card.Img variant="right" src={meta} height={'61px'} />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CourseItem;