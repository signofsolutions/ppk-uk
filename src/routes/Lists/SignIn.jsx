import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { usersLogin, 
    addBooking,
    addAccRequest, ShowError } from 'services';
import { UserContext } from 'context/User';
import axios from 'util/Api';
import {message, Spin} from 'antd';
import { useHistory } from 'react-router-dom';

function SignIn({setLoginType, openLogin, closeModal}) {
    const { user, changeCart, login } = useContext(UserContext);
    const history = useHistory()

    const [loading, setLoading]= useState(false);
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { 
        setLoading(true)
        usersLogin(data)
        .then(res => {
            message.success('Login successfuly')
            axios.defaults.headers.common['authorization'] = "Bearer " + res.token;
            localStorage.setItem('tokenpppn', res.token)
            login(res.profile) 
            autoFunction(openLogin.type)
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
            ShowError(err)
        })
     }
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
    return (
       <div>
            <div className="container h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-12 col-md-12">
                        <div className="card border-1-e5 shadow-0">
                            <div className="card-body">
                                
                                <p className="text-center" style={{fontSize: "20px"}}>Sign in to Your Account</p>
                                <Spin spinning={loading}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <span className="font-14">Email :</span>
                                    <input name="email" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Email"/>
                                    <small className="text-danger font-14">{errors.email && <span>This field is required</span>}</small>
                                    
                                    <span className="font-14 d-block mt-3">Password :</span>
                                    <input name="password" type="password"  ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Password"/>
                                    <small className="text-danger font-14">{errors.password && <span>This field is required</span>}</small>
                                    
                                    <button type="submit" className="btn btn-block rounded font-14 shadow-0 text-white mt-4" style={{background: "#00A7CF"}}>Login</button>
                                </form>
                                </Spin>
                               
                            </div>
                            <div className="card-footer bg-white text-center" style={{ borderTop: "1px solid #e5e5e5" }}>
                                <a onClick={()=>setLoginType('signup')} className="font-14">SignUp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default SignIn;