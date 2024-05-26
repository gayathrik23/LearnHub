import React from "react";
import { Container, Row, Col } from "reactstrap";


import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: "https://i.pinimg.com/236x/79/c6/2d/79c62d94154fb332afb84191a996e66f.jpg",
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3JaLeUYNwvRe2q1Ne0B1TipRcqmbMMuMvg&s",
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: "https://dreamix.eu/wp-content/uploads/2023/09/5881573-scaled-1-1024x683.jpg",
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;