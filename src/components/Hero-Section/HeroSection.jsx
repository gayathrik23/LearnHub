import React from "react";
import { Container, Row, Col } from "reactstrap";
// import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              LearnHub is a dedicated team of educators, technologists, and lifelong learners. We strive to make education accessible and effective for everyone, offering support and resources tailored to diverse learning needs
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src="https://us.123rf.com/450wm/sorapop/sorapop1806/sorapop180600030/102865141-male-and-female-students-stand-on-books-and-laptop-computers-on-campus-and-see-the-book-education.jpg?ver=6" alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;