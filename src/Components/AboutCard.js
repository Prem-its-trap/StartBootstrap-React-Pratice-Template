import React from "react";

const AboutCard = ({ text = "" }) => (
  <div className="col-lg-6">
    <p className="lead">{text}</p>
  </div>
);
export default AboutCard;
