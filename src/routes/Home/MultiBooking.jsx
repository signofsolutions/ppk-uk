import React, { useState, useEffect } from "react";
import GetCountForm from "./GetCountForm";
import GetValuesForm from "./GetValuesForm";
import GetDateForm from "./GetDateForm";
import { useHistory } from "react-router-dom";
import GetBudgetForm from "./GetBudgetForm";

const ordinalNumber = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
];

function Index() {
  const history = useHistory();
  const [countForm, setCounForm] = useState(0);
  const [step, setStep] = useState(1);
  const [forms, setForms] = useState([]);
  const [stepForm, setStepForm] = useState(0);
  const [progress, setProgress] = useState(0);
  const changeFormCount = (co) => {
    if (co !== 0) {
      let x = Array(co).fill({
        location: "",
        radius: 0,
        number_of_beds: 0,
        number_of_parkings: 0,
        pppn_budget: {
          from: 0,
          to: 0,
        },
        check_in_check_out_dates: [],
      });
      let percent = 100 / (co * 2 + 1);
      setProgress(parseInt(percent + progress));
      setForms(x);
      setCounForm(co);
      setStep(2);
    }
  };

  const changeValues = (values) => {
    let newArr = [...forms];
    newArr[stepForm] = { ...newArr[stepForm], ...values };
    setForms(newArr);
    let percent = 100 / (countForm * 3 + 1);
    setProgress(parseInt(percent + progress));
    setStep(3);
  };

  const changeBudget = (body) => {
    let newArr = [...forms];
    newArr[stepForm] = { ...newArr[stepForm], ...body };
    setForms(newArr);
    let percent = 100 / (countForm * 3 + 1);
    setProgress(parseInt(percent + progress));
    setStep(4);
  };
  const prevStep = () => {
    let percent = 100 / (countForm * 2 + 1);
    setProgress(parseInt(progress - percent));
    if (stepForm > 0 && step === 2) {
      setStep(4);
      setStepForm(stepForm - 1);
    } else {
      setStep(step - 1);
    }
  };
  const changeDate = (dates) => {
    if (stepForm + 1 === countForm) {
      let newArr = [...forms];
      newArr[stepForm].check_in_check_out_dates = dates;
      setForms(newArr);
      setProgress(100);
      history.push(`/lists?search=${JSON.stringify(forms)}`);
    } else {
      let newArr = [...forms];
      newArr[stepForm].check_in_check_out_dates = dates;
      setForms(newArr);
      setStepForm(stepForm + 1);
      let percent = 100 / (countForm * 3 + 1);
      setProgress(parseInt(percent + progress));
      setStep(2);
    }
  };
  const renderForm = () => {
    switch (step) {
      case 1:
        return <GetCountForm setCounForm={changeFormCount} />;
      case 2:
        return (
          <GetValuesForm
            setStep={prevStep}
            step={step}
            ordinalNumber={ordinalNumber}
            countForm={countForm}
            count={stepForm + 1}
            changeValues={changeValues}
          />
        );
      case 3:
        return (
          <GetBudgetForm
            setStep={prevStep}
            step={step}
            ordinalNumber={ordinalNumber}
            countForm={countForm}
            count={stepForm + 1}
            changeBudget={changeBudget}
          />
        );
      case 4:
        return (
          <GetDateForm
            setStep={prevStep}
            step={step}
            ordinalNumber={ordinalNumber}
            countForm={countForm}
            count={stepForm + 1}
            changeDate={changeDate}
          />
        );
      default:
        break;
    }
  };
  return (
    <div>
      {renderForm()}

      {/*<div style={{position: "relative"}}>*/}
      {/*  */}
      {/*</div>*/}
      {/* <div><Progress percent={30} /></div> */}
      {/* <div class="progress mt-3" style={{ height: "7px" }}>
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progress}
          style={{ width: `${progress}%`, background: "skyblue" }}
        ></div>
      </div>
      <div className="mt-3 text-dark" style={{ fontSize: "15px" }}>
        {progress}% Complete
      </div> */}
    </div>
  );
}

export default Index;
