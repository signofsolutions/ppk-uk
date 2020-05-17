import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Typeahead } from 'react-bootstrap-typeahead'
import { citiesSearch, usersRegister } from 'services';
import { message, Spin } from 'antd';

function Index({ setStep, values, setLoginType }) {
    const { register, handleSubmit, errors, setError } = useForm()
    const [loading, setLoading]=useState(false);
    const onSubmit = data => {
        setLoading(true);
        if (citySelect) {
            data.city = citySelect.title;
            delete data.confirm_password;
            usersRegister({ ...values, ...data })
                .then(res => {
                        message.success('Signup successfuly')
                        setLoginType('signin')
                        setLoading(false)
                    
                })
                .catch(err => {
                    setLoading(false);
                    message.error('Signup fail')
                })
        } else {
            setError("city", "notMatch", "This field is required")
        }

    }

    const [cities, setCities] = useState([])
    const [citySelect, setCitySelect] = useState({})
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
    return (
        <div>
            <Spin spinning={loading}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12">
                        <span className="font-14">First Line Address :</span>
                        <input name="first_line_of_address" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your First Line Address" />
                        <small className="text-danger font-14">{errors.first_line_of_address && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12">
                        <span className="font-14">Second Line Address :</span>
                        <input name="second_line_of_address" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Second Line Address" />
                        <small className="text-danger font-14">{errors.second_line_of_address && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12">
                        <label >Country :</label>
                        <div className="select-border">
                            <select style={{fontSize:"12px"}} defaultValue={"United Kingdom"} name="country" ref={register({ required: true })} className="form-control">
                                <option value={"United Kingdom"}>United Kingdom</option>

                            </select>
                        </div>
                        <p className="text-danger">{errors.country && <span>This field is required</span>}</p>

                    </div>

                    <div className="col-12 col-md-6">
                        <span className="font-14">City/Town :</span>
                        <div className="my-custom-select font-14">
                            <Typeahead
                                onInputChange={(e) => e.length > 2 && searchCity(e)}
                                onChange={(selected) => {
                                    setCitySelect(selected[0])
                                }}
                                labelKey={'title'}
                                options={cities}
                                style={{ fontSize: "14px" }}
                            />
                        </div>
                        <small className="text-danger font-14">{errors.city && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 col-md-6">
                        <span className="font-14">post code :</span>
                        <input name="post_code" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Second Line Address" />
                        <small className="text-danger font-14">{errors.post_code && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 mt-3">
                        <div className="my-custom-checkbox custom-control custom-checkbox d-flex align-items-center">
                            <input name="receive_marketing_messages" ref={register()} type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                            <label className="custom-control-label font-14" htmlFor="customControlAutosizing">I  want to receive marketing messages .</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-block rounded btn-sm font-14 shadow-0 text-white mt-3" style={{ background: "#00A7CF" }}>Next Step</button>
                    </div>
                </div>
            </form>
            </Spin>
        </div>
    )
}

export default Index;