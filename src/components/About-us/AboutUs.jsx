import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src="https://blog.talent500.co/wp-content/uploads/2023/09/gd-group-discussion-tips.jpg" alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
             <b>Welcome to LearnHub, where learning knows no bounds...</b> 
             At LearnHub, our mission is to revolutionize education by providing accessible, high-quality learning resources for students of all ages. We believe that education is the key to unlocking potential and driving innovation. Our goal is to empower learners to achieve their full potential and make a meaningful impact in the world.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;