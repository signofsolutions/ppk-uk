import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { REGEX_PHONE, REGEX_EMAIL } from 'util/Regex';
import { ShowError, usersRegister, usersLogin, addAccRequest, addBooking } from 'services';
import { Link } from 'react-router-dom';
import { Spin, message } from 'antd';
import axios from 'util/Api';
import { UserContext } from 'context/User';
import { useHistory } from 'react-router-dom';

function SignUp({ openLogin, setLoginType, closeModal }) {
    const { user, changeCart, login } = useContext(UserContext);
    const history = useHistory()

    const [values, setValues] = useState({
        "phone_number": 0,
        "email": "",
        "first_name": "",
        "last_name": "",
        "password": "",
        "status": "enable",
        "role": "user",
        "receive_marketing_messages": false
    });
    const autoFunction = (type) => {
        switch (type) {
            case 'addAccRequest':
                addAccRequest(openLogin.body)
                    .then(res => {
                        message.success('Your request send')
                        closeModal()
                    })
                    .catch(err => {
                        ShowError(err)
                    })
                break;
            case 'booking':
                addBooking(openLogin.body)
                    .then(res => {
                        changeCart(res.id)
                        history.push(`/checkout/${JSON.stringify([res.id])}`)

                    })
                    .catch(err => ShowError(err))
                break;
            case 'addToCart':
                addBooking(openLogin.body)
                    .then(res => {
                        changeCart(res.id)
                        closeModal()
                    })
                    .catch(err => ShowError(err))
                break;
            default:
                break;
        }
    }
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, errors, setError, watch } = useForm()
    const onSubmit = data => {
        setLoading(true);
        let body = { ...values, ...data };
        usersRegister(body)
            .then(res => {
                let body = {
                    email: data.email,
                    password: data.password
                }
                message.success('Register successfuly!')
                usersLogin(body)
                    .then(res => {
                        axios.defaults.headers.common['authorization'] = "Bearer " + res.token;
                        if (data.remember) {
                            localStorage.setItem('tokenpppn', res.token)
                        } else {
                            sessionStorage.setItem('tokenpppn', res.token)
                        }
                        login(res.profile);
                        autoFunction(openLogin.type)
                        setLoading(false)
                    })
                    .catch(err => {
                        setLoading(false)
                        ShowError(err)
                    })
            })
            .catch(err => {
                setLoading(false);
                ShowError(err)
            })


    }

    const [step, setStep] = useState(1);
    return (
        <div className="container h-100">
            <div className="row justify-content-center h-100">
                <div className="col-12 col-md-12">
                    <div className="card border-1-e5 shadow-0">
                        <div className="card-body">
                            <Spin spinning={loading}>
                                <h6 className="font-weight-light text-center">Create new account</h6>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <span className="font-14">First Name :</span>
                                            <input name="first_name" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your First Name" />
                                            <small className="text-danger font-14">{errors.first_name && <span>This field is required</span>}</small>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <span className="font-14">Last Name :</span>
                                            <input name="last_name" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Last Name" />
                                            <small className="text-danger font-14">{errors.last_name && <span>This field is required</span>}</small>
                                        </div>

                                        <div className="col-12">
                                            <span className="font-14">Phone Number :</span>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <input type="text" disabled value="+44" className="form-control border-1-e5 font-14 shadow-0 mt-1" style={{ width: "70px", borderRadius: ".5rem 0 0 .5rem" }} />
                                                </div>
                                                <input type="number" ref={register({ required: true, pattern: REGEX_PHONE })} name="phone_number" className="form-control border-1-e5 font-14 shadow-0 mt-1" style={{ borderRadius: "0 .5rem .5rem 0" }} placeholder="Your Phone Number" ref={register({ required: true })} />
                                            </div>
                                            <small className="text-danger font-14">{errors.phone_number && <span>This field is required</span>}</small>
                                        </div>

                                        <div className="col-12">
                                            <span className="font-14">Work Email :</span>
                                            <input type="email" name="email" ref={register({ required: true, pattern: REGEX_EMAIL })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Work Email" />
                                            <small className="text-danger font-14">{errors.email && <span>This field is required</span>}</small>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <span className="font-14">Password :</span>
                                            <input name="password" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Password" type="password" />
                                            <small className="text-danger font-14">{errors.password && <span>This field is required</span>}</small>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <span className="font-14">Confirm Password :</span>
                                            <input name="confirm_password"
                                                ref={register({
                                                    required: "This field is required",
                                                    validate: (value) => {
                                                        return value === watch('password') || "The passwords do not match"; // value is from password2 and watch will return value from password1
                                                    }
                                                })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Confirm Password" type="password" />
                                            <small className="text-danger font-14">{errors.confirm_password && <span>{errors.confirm_password.message}</span>}</small>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-block rounded btn-sm font-14 shadow-0 text-white mt-3" style={{ background: "#00A7CF" }}>Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="card-footer bg-white text-center" style={{ borderTop: "1px solid #e5e5e5" }}>
                                    <span className="font-14">You Have an Account ? </span>
                                    <a onClick={() => setLoginType('signin')} className="font-14">Sign in Here</a>
                                </div>


                            </Spin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;