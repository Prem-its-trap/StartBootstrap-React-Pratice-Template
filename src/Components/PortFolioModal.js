import React from "react";
import Divider from "./Divider";

const Modal = ({ image = "", title = "", id = "" }) => (
  <div
    class="portfolio-modal modal fade"
    id={id}
    tabindex="-1"
    aria-labelledby={id}
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body text-center pb-4 pt-0 mt-0">
          <div class="container">
            <div
              class="row justify-content-center"
              style={{ marginTop: "0px" }}>
              <div class="col-lg-8">
                {/* <!-- Portfolio Modal - Title--> */}
                <h6 class="portfolio-modal-title text-secondary text-uppercase">
                  {title}
                </h6>
                {/* <!-- Icon Divider--> */}
                <Divider />

                {/* <!-- Portfolio Modal - Image--> */}
                <img
                  class="img-fluid rounded mb-5"
                  src={image}
                  width="200"
                  //   height="200"
                  alt="..."
                />
                {/* <!-- Portfolio Modal - Text--> */}
                <p class="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia neque assumenda ipsam nihil, molestias magnam,
                  recusandae quos quis inventore quisquam velit asperiores,
                  vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                  Nam.
                </p>
                <button class="btn btn-primary" data-bs-dismiss="modal">
                  <i class="fas fa-xmark fa-fw"></i>
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Modal;
