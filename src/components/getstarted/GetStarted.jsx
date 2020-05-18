import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Spin, message } from "antd";
import { useHistory } from "react-router-dom";
import { REGEX_PHONE, REGEX_EMAIL } from "utils/Regex";
import { ShowError, listerRegister } from "services";

function GetStarted() {
  const history = useHistory();
  const [values, setValues] = useState({
    phone_number: 0,
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    let body = { ...values, ...data };
    listerRegister(body)
      .then((res) => {
        setLoading(false);
        message.success("Registered Successfuly!");
        window.location.href = "https://pppn.co.uk/dashboard/signin";
        // history.push("https://pppn.co.uk/dashboard/signin");
      })
      .catch((err) => {
        setLoading(false);
        ShowError(err);
      });
  };

  return (
    <div>
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  name="first_name"
                  ref={register({ required: true })}
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                <p className="text-danger">
                  {errors.first_name && <span>This field is required</span>}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  name="last_name"
                  ref={register({ required: true })}
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
                <p className="text-danger">
                  {errors.last_name && <span>This field is required</span>}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    defaultValue="+44"
                    disabled={true}
                    className="form-control mr-2 col-md-2"
                  />
                  <input
                    name="phone_number"
                    ref={register({
                      required: true,
                      pattern: REGEX_PHONE,
                    })}
                    type="text"
                    className="form-control col-md-10"
                    placeholder="Phone Number"
                  />
                </div>
                <p className="text-danger">
                  {errors.phone_number && <span>This field is required</span>}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  ref={register({
                    required: true,
                    pattern: REGEX_EMAIL,
                  })}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
                <p className="text-danger">
                  {errors.email && <span>This field is required</span>}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  name="password"
                  ref={register({
                    required: "This field is required",
                    validate: (value) => {
                      return (
                        value.length > 7 || "The password bigger 8 character"
                      );
                    },
                  })}
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
                <small className="text-danger font-14">
                  {errors.password && <span>{errors.password.message}</span>}
                </small>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-sm btn-info p-3 btn-block">
              Get Started
            </button>
          </div>
        </form>
      </Spin>
    </div>
  );
}

export default GetStarted;
