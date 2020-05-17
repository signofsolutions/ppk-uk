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
      <form className="BookingForm" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              fontWeight: "bold",
              color: "rgb(86, 173, 226)",
              fontFamily: "Oswald",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            Let's Get Started
          </div>

          <div
            className="text-left text-dark mb-1"
            style={{ fontSize: "14px" }}
          >
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

          <div className="BookingFormImageContainer">
            <div className="BookingFormImageLeft">
              <img
                style={{ marginTop: "15%" }}
                src={require("../../assets/images/Home.png")}
                alt="home"
              />
            </div>
            <div className="BookingFormImageRight">
              <img
                width={"90%"}
                height={"90%"}
                src={require("../../assets/images/FormImage.png")}
                alt="person"
              />
            </div>
          </div>
        </div>
        <div
          className="btn-flat BookingBtn"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <img src={require("../../assets/images/Step-1.png")} alt="step-1"/>
          </div>
          <div onClick={handleSubmit(onSubmit)}>
            Next Step <i className="mdi mdi-chevron-right mdi-18px" />
          </div>
        </div>
        {/*<button className="btn-flat BookingBtn">*/}
        {/*  Next Step <i className="mdi mdi-chevron-right mdi-18px" />*/}
        {/*</button>*/}
      </form>
    </div>
  );
}

export default Index;
