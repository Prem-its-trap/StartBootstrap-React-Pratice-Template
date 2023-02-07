import React from "react";
import AboutCard from "./AboutCard";
import Divider from "./Divider";

const About = () => (
  <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
      {/* <!-- About Section Heading--> */}
      <Divider title="About" />

      {/* <!-- About Section Content--> */}
      <div className="row">
        <AboutCard
          text="Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization."
          clName="ms-auto"
        />
        <AboutCard
          text="You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!"
          //   clName="me-auto"
          className="me-auto"
        />
      </div>
      {/* <!-- About Section Button--> */}
      <div className="text-center mt-4">
        <a
          className="btn btn-xl btn-outline-light"
          href="https://startbootstrap.com/theme/freelancer/">
          <i className="fas fa-download me-2"></i>
          Free Download!
        </a>
      </div>
    </div>
  </section>
);

export default About;
