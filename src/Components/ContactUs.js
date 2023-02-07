import React from "react";
import Divider from "./Divider";
import InputComponent from "./InputComponents";

const Contact = () => {
  return (
    <section class="page-section" id="contact">
      <div class="container">
        {/* <!-- Contact Section Heading--> */}
        <Divider title="CONTACT US" />
        <InputComponent label="Name" />
        <InputComponent label="Email Address" />
        <InputComponent label="Phone Number" />
        <InputComponent label="Message" />
        <button
          class="btn btn-primary btn-xl"
          id="submitButton"
          type="submit"
          style={{ marginLeft: "180px", marginTop: "20px" }}>
          Send
        </button>
      </div>
    </section>
  );
};

export default Contact;
