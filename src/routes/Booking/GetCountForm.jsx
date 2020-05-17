import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NUMBER } from "util/Regex";

function Index({ setCounForm }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setCounForm(parseInt(data.countForm));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#666",
            padding: "0 20px",
            marginBottom: "50px",
            fontFamily:"oswald"
          }}
        >
          Let's Get Started
        </div>

        <div className="text-left text-dark mb-1" style={{ fontSize: "14px" }}>
          1 . How many work sites do you need to book for?
        </div>
        <input
          name="countForm"
          type="number"
          ref={register({
            required: "This field is required ",
            pattern: {
              value: /^(?:[1-9]|0[1-9]|10)$/,
              message: "please enter number lesser 10 ",
            },
          })}
          className="form-control form-control-sm shadow-0 rounded"
          style={{ border: "1px solid #ddd", fontSize: "14px" }}
          placeholder="Enter Number Of Work Site"
          aria-describedby="countHelp"
        />
        <div style={{ height: "25px" }}>
          {errors.countForm && (
            <small
              id="countHelp"
              class="form-text text-danger text-left mt-0"
              style={{ fontSize: "13px" }}
            >
              {errors.countForm.message}
            </small>
          )}
        </div>

        <button className="btn btn-block btn-booking rounded">Next Step</button>
      </form>
    </div>
  );
}

export default Index;
