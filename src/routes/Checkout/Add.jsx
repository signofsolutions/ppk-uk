import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { paymentBooking, citiesSearch, saveCard, ShowError,postalCodeSearch } from 'services';
import { CARD_CVV, NUMBER, CARD_EXPIRE_DATE } from 'util/Regex';
import { Typeahead } from 'react-bootstrap-typeahead'
import { FaWizardsOfTheCoast } from 'react-icons/fa';
import { UserContext } from 'context/User';
import { message } from 'antd';
import MaskedInput from 'antd-mask-input';

function Step1({ setStep, setValues, values }) {
    const { register, handleSubmit, errors, setValue } = useForm()
    const onSubmit = data => {
        setValues({ ...values, ...data })
        setStep(2)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div id="step1">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="form-group">
                            <label >16 Digit Card Number :</label>
                            <input ref={register({
                                required: true, pattern: /^[0-9]{16}$/
                            })} name="card_number" type="text" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" />
                            <p className="text-danger">{errors.card_number && <span>This field is required</span>}</p>

                        </div>


                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label > Expire Date :</label>
                            <MaskedInput mask="11/11" size="5"  onChange={(e)=>setValue('expire_date', e.target.value)}  ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1"/>
                            <input placeholder="mm/yy" name="expire_date"  ref={register({required: true})}  type="text" style={{display:"none"}} />
                            {/* <input name="expire_date" placeholder="mm/yy" ref={register({ required: true })} type="text" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" /> */}
                            <p className="text-danger">{errors.expire_date && <span>This field is required</span>}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label >CVV  :</label>
                            <input name="cvv" ref={register({ required: true, pattern: CARD_CVV })} type="text" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" />
                            <p className="text-danger">{errors.cvv && <span>This field is required</span>}</p>

                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label >Type Card :</label>
                            <div >
                                <select name="type" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1">
                                    <option value="visa debit">Visa Debit</option>
                                    <option value="visa credit">Visa Credit</option>
                                    <option value="mastercard">Mastercard</option>
                                    <option value="mastercard credit">Mastercard Credit</option>
                                </select>
                            </div>
                            <p className="text-danger">{errors.type && <span>This field is required</span>}</p>
                        </div>


                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="my-custom-checkbox custom-control custom-checkbox d-flex align-items-center">
                        <input ref={register()} name="addCard" type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                        <label className="custom-control-label font-14" htmlFor="customControlAutosizing">I would like to save my card for future bookings .</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-block rounded btn-sm font-14 shadow-0 text-white mt-3" style={{ background: "#00A7CF" }}>Next Step</button>
                </div>
            </div>
        </form>
    )
}



function Index({ setStepPayment, booking }) {
    const { user } = useContext(UserContext)

    const [values, setValues] = useState({
        "card_number": "",
        "expire_date": "",
        "cvv": "",
        "billing_address": "",
        "first_line_of_address": "",
        "second_line_of_address": "",
        "post_code": "",
        "primary_card": "0",
        "type": "",
        "country": "United Kingdom",
        "city": false
    });
    const { register, handleSubmit, errors, watch, setError } = useForm()
    const [cities, setCities] = useState([])
    const [citySelect, setCitySelect] = useState(false)
    const [postCode, setPostCode] = useState([])
    const [post_codeSelect, setPost_codeSelect] = useState(false)
    const searchCity = (value) => {
        citiesSearch({ name: value })
            .then(res => {
                try {
                    setCities(res);
                }
                catch{
                    console.log("error get cities")
                }
            })
    }
    const searchPostalCode = (value) => {
        postalCodeSearch({ name: value })
            .then(res => {
                try {
                    setPostCode(res);
                }
                catch{
                    console.log("error get postal Code")
                }
            })
    }
    
    const onSubmit = data => {
        let body = { ...values, ...data };
        if (data.defaultAddress) {
            body.first_line_of_address = user.first_line_of_address;
            body.second_line_of_address = user.second_line_of_address;
            body.country = user.country;
            body.city = user.city;
            body.post_code = user.post_code;
            delete body.defaultAddress;
        } else {
            body.city = citySelect;
            body.post_code = post_codeSelect;
            delete body.defaultAddress;
        }
        if (body.city || data.defaultAddress) {
            let bodyPayment = body;
            body.booking_ids = booking;
            paymentBooking(bodyPayment)
                .then(res => {
                    try {
                        message.success('Payment successfuly')
                        setStepPayment(2)
                        if (body.addCard) {
                            saveCard(body)
                                .then(res => {
                                        message.success('Add card to list')
                                  
                                })
                                .catch(err => ShowError(err))
                        }

                    }
                    catch{
                        console.log('error paymnet')
                    }
                })
                .catch(err => {ShowError(err)})

        } else {
            setError("city", "notMatch", "This field is required");
            setError("post_code", "notMatch", "This field is required");
            
        }


    }
    const [step, setStep] = useState(1);
    return (
      <div>
        {step === 1 ? (
          <Step1 setValues={setValues} values={values} setStep={setStep} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div id="step2" className="d-block">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>First Line Address :</label>
                    <input
                      disabled={watch("defaultAddress")}
                      name="first_line_of_address"
                      type="text"
                      ref={register({ required: !watch("defaultAddress") })}
                      className="form-control border-1-e5 font-14 rounded shadow-0 mt-1"
                    />
                    <p className="text-danger">
                      {errors.first_line_of_address && (
                        <span>This field is required</span>
                      )}
                    </p>
                  </div>

                  <div className="form-group">
                    <label>Second Line Address (optional) :</label>
                    <input
                      disabled={watch("defaultAddress")}
                      name="second_line_of_address"
                      type="text"
                      ref={register({})}
                      className="form-control border-1-e5 font-14 rounded shadow-0 mt-1"
                    />
                    <p className="text-danger">
                      {errors.second_line_of_address && (
                        <span>This field is required</span>
                      )}
                    </p>
                  </div>
                  <div className="form-group">
                    <label>Country :</label>
                    <div>
                      <select
                        disabled={watch("defaultAddress")}
                        defaultValue={1}
                        name="country"
                        ref={register({ required: !watch("defaultAddress") })}
                        className="form-control border-1-e5 font-14 rounded shadow-0 mt-1"
                      >
                        <option value={"United Kingdom"}>England</option>
                      </select>
                    </div>
                    <p className="text-danger">
                      {errors.country && <span>This field is required</span>}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>City/Town :</label>
                    <div
                      style={{ marginTop: "5px" }}
                      className="my-custom-select2 font-14"
                    >
                      <Typeahead
                        onInputChange={(e) => e.length > 2 && searchCity(e)}
                        onChange={(selected) => {
                          setCitySelect(selected[0]);
                        }}
                        disabled={watch("defaultAddress")}
                        labelKey={"title"}
                        options={cities}
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                    <p className="text-danger">
                      {errors.city && <span>This field is required</span>}
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Post code :</label>
                    <div
                      style={{ marginTop: "5px" }}
                      className="my-custom-select2 font-14"
                    >
                      <Typeahead
                        onInputChange={(e) => e.length > 2 && searchPostalCode(e)}
                        onChange={(selected) => {
                          setPost_codeSelect(selected[0]);
                        }}
                        disabled={watch("defaultAddress")}
                        labelKey={"title"}
                        options={postCode}
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                    {/* <input
                      disabled={watch("defaultAddress")}
                      name="post_code"
                      ref={register({ required: !watch("defaultAddress") })}
                      type="text"
                      className="form-control border-1-e5 font-14 rounded shadow-0 mt-1"
                    /> */}
                    <p className="text-danger">
                      {errors.post_code && <span>This field is required</span>}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3 mb-3">
                <div className="my-custom-checkbox custom-control custom-checkbox d-flex align-items-center">
                  <input
                    name="defaultAddress"
                    ref={register()}
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlAutosizing"
                  />
                  <label
                    className="custom-control-label font-14"
                    htmlFor="customControlAutosizing"
                  >
                    My billing is the same as my account address.
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div
                    onClick={() => setStep(1)}
                    className="btn btn-block btn-booking-outline rounded"
                  >
                    Prev Step
                  </div>
                </div>
                <div className="col-6">
                  <button className="btn btn-block  btn-booking rounded">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    );
}

export default Index;