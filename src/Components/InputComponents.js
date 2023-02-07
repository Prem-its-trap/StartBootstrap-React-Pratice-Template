import React from "react";

const InputComponent = ({ label = "" }) => {
  return (
    <div
      className="row"
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div class="form-floating col-sm-8">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">&nbsp;&nbsp;{label}</label>
      </div>
    </div>
  );
};

export default InputComponent;
