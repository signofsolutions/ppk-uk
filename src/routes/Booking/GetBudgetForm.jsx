import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { POST_CODE, NUMBER } from 'util/Regex';
import { Input } from 'antd';


function Index({ changeBudget, count, ordinalNumber, setStep, step }) {
    const { register, handleSubmit, errors, watch } = useForm()
    const onSubmit = data => {
        let body = {
            number_of_parkings: data.number_of_parkings,
            pppn_budget: {
                "from": 0,
                "to": data.to
            }
        }
        changeBudget(body)
    }
    return (
        <div>
            {/* <div>{count}</div> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Q1 */}
                <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}>{count}.4 . What is your maximum per person per night budget?</div>
                {/* <div class="input-group input-group-sm">
                    <div class="input-group-prepend" style={{ height: "37.5px" }}>
                        <span class="input-group-text" style={{ border: "none" }}>&#163;</span>
                    </div>
                    <input name="from"
                        ref={register({
                            required: "This field is required",
                            validate: (value)=>{
                                return parseInt( value) >= 1 || "The budget from must be at least 0"
                            },
                            pattern: {
                                value: NUMBER,
                                message: "Please enter a from budget"
                            }
                        })} className="form-control form-control-sm shadow-0" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="From" />
                    <div class="input-group-append" style={{ height: "37.5px" }}>
                        <span class="input-group-text" style={{ border: "none" }}>.00</span>
                    </div>
                </div>
                */}
                {/* <div style={{height:"25px"}}>
                    {errors.from && <small id="from" class="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.from.message}</small>}
                </div> */}
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend" style={{ height: "37.5px" }}>
                        <span class="input-group-text" style={{ border: "none" }}>&#163;</span>
                    </div>
                    <input name="to"
                        ref={register({
                            required: "This field is required",
                            validate: (value) => {
                                return parseInt( value) > 0 || "The to budget bigger 0 "; 
                            },
                            pattern: {
                                value: NUMBER,
                                message: "Please enter a to budget"
                            }
                        })} className="form-control form-control-sm shadow-0" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="" />
                    <div class="input-group-append" style={{ height: "37.5px" }}>
                        <span class="input-group-text" style={{ border: "none" }}>.00</span>
                    </div>
                </div>    
                <div style={{height:"25px"}}>
                    {errors.to && <small id="to" class="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.to.message}</small>}
                </div>
                {/* Q1 */}

                {/* Q2 */}
                <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}>{count}.5 . How many parking spaces do you required?</div>
                <input name="number_of_parkings" type="number"
                    ref={register({
                        required: "This field is required",
                        message: "Please enter a number"
                    })} className="form-control form-control-sm shadow-0 rounded" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="Enter a number" aria-describedby="NumberOfBedsHelp" />
                <div style={{height:"25px"}}>
                    {errors.number_of_parkings && <small id="number_of_parkings" class="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.number_of_parkings.message}</small>}
                </div>
                <div className="row">
                    <div className="col-6">
                        <div onClick={() => setStep(step - 1)} className="btn btn-block btn-booking-outline rounded">Prev Step</div>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-block btn-booking rounded">Next Step</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Index;