import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "components/DatePickerCustomize";
import moment from "moment";
import { Popover } from "antd";
import logo from "assets/images/PPPN.gif";

function Index({ changeDate, count, countForm, step, setStep }) {
  const [dates, setDates] = useState([]);
  const [datesClick, setDatesClick] = useState([]);
  const [error, setError] = useState(false);
  const handleNext = () => {
    setError(false);

    let x = dates.filter(
      (date) =>
        moment(date.check_out, "YYYYMMDD").diff(
          moment(date.check_in, "YYYYMMDD"),
          "days"
        ) +
          1 >
        4
    );
    console.log("sss", x, countForm);

    if (
      datesClick.length % 2 === 0 &&
      datesClick.length > 0 &&
      x.length === dates.length
    ) {
      changeDate(dates);
    } else {
      setError("You must select at least 4 nights.");
    }
  };
  return (
    <div>
      <div style={{ padding: "2rem" }}>
        {" "}
        <div className="text-left text-dark mb-1" style={{ fontSize: "14px" }}>
          {count}.6 . Enter Your Check-in & Check-out time :
        </div>
        <div className="BookingFormDatePicker" style={{ margin: "20px auto", width: "300px" }}>
          <DatePicker onChange={setDates} handleClick={setDatesClick} />
        </div>
        {error && (
          <small
            id="countHelp"
            class="form-text text-danger mt-0"
            style={{
              fontSize: "13px",
              textAlign: "center",
              marginBottom: "5px",
            }}
          >
            {error}{" "}
          </small>
        )}
        <div style={{ color: "#2fade2", fontSize: "12px" }}>
          <Popover content={<img src={logo} alt="loading..." />}>
            How to use?
          </Popover>
        </div>
      </div>

      <div
        className="btn-flat BookingBtn"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <img src={require("../../assets/images/Step-3.png")} alt="step-3" />
        </div>

        <div className="row">
          <div className="col-12">
            <div>
              <i
                onClick={() => setStep(step - 1)}
                className="mdi mdi-chevron-left mdi-18px step-blue-color"
              />
              <button className="btn-transparent" onClick={handleNext}>
                {count - 1 === countForm ? "Search" : "Next step"}
                <i className="mdi mdi-chevron-right mdi-18px" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Index;
