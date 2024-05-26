import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: " Our courses are designed for efficiency without compromising on quality. Whether you're a busy professional or a student, our streamlined courses allow you to learn quickly and effectively, fitting seamlessly into your schedule",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Learning doesn’t stop after the lesson ends. Our 24/7 support system ensures that you have access to assistance whenever you need it. Whether you have questions, need help with assignments, or require technical support, our dedicated team is here to help",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "LUpon completion of our courses, you’ll receive recognized certifications that can help advance your career or academic goals. These certifications are a testament to your dedication and the skills you've acquired",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;