import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="About" class="section">
      <div class="About-container">
        <div class="content-section">
          <div class="title">
            <h1 style={{ textTransform: "capitalize" }}>About Me</h1>
          </div>
          <div class="content">
            <h3>Why Choose Me?</h3>
            <p>
              I have 3+ years of professional experience in web development and
              a strong understanding of a variety of programming languages and
              technologies. My services are in creating and developing superfast
              and dynamic applications.
            </p>
            <div class="button">
              <a
                className="hire"
                style={{ backgroundColor: "#ff5823" }}
                href="#Contact"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div class="social">
            <a
              target="_blank"
              href="https://wwww.facebook.com/codewithmasoodofficial"
            >
              <i class="fa fa-facebook-square"></i>
            </a>
            <a target="_blank" href="https://www.twitter.com/codewithmasoody">
              <i class="fa fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com/codewithmasood">
              <i class="fa fa-youtube-square"></i>
            </a>
          </div>
        </div>
        <div class="image-section">
          <img src="images/banner.png" />
        </div>
      </div>
    </div>
  );
};

export default About;
