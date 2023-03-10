import React from "react";

const Divider = ({ title = "" }) => {
  return (
    <div>
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
        {title}
      </h2>
      {/* <!-- Icon Divider--> */}
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>
    </div>
  );
};
export default Divider;
