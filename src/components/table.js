import React, {useState} from 'react';
import {
  Container, Col, Row, Table, ListGroup, ListGroupItem, Collapse, Button
} from "reactstrap";

import data from '../courses/ontechu.ComputerScience.json';

const Course = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return <ListGroupItem onclick={() => {

  }}>
    <h1>{data.name}</h1>
    <p>{data.id}</p>
    <Button color="primary" onClick={toggle}>{isOpen ? "Less Info" : "More Info"}</Button>
    <Collapse isOpen={isOpen}>
      {/* display rest of details here. */}
      <p>More info...</p>
    </Collapse>
  </ListGroupItem>;
}

const Home = (props) => {
  const [courses, setCourses] = useState({
    table: {
      y1: {
        s1: {},
        s2: {}
      },
      y2: {
        s1: {},
        s2: {}
      },
      y3: {
        s1: {},
        s2: {}
      },
      y4: {
        s1: {},
        s2: {}
      },
      y5: {
        s1: {},
        s2: {}
      }
  }, list: data});

  return <Container>
    <Row>
      <Col>
        <Table>
         {/* Display Table of Courses Here */}
        </Table>
      </Col>
      <Col>
        <ListGroup>
          {courses.table.map((course) => {
            return <Course key={course.id} data={course}/>
          })}
        </ListGroup>
      </Col>
    </Row>
  </Container>
}




export default Home;
