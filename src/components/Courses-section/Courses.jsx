import React from "react";
import { Container, Row, Col } from "reactstrap";
// import courseImg1 from "../../assests/images/web-design.png";
// import courseImg2 from "../../assests/images/graphics-design.png";
// import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "data:image/jpeg;base64,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",
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJyqTDZF5Rl2xPbXKhxeVIeOtdENL4j2iyg&s",
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrrDJHdnFou05koFNsnkJQ6oVdC-MV1YpRA&s",
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                Our platform offers a wide range of courses covering various current technologies.. Each course is designed by experts to provide thorough and engaging content.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;