import React from 'react'
import { useForm } from 'react-hook-form';
import { REGEX_PHONE, REGEX_EMAIL } from 'util/Regex';
function Index ({setStep, setValues}) {
    const { register, handleSubmit, errors, watch } = useForm()
    const onSubmit = data => {
        setValues(data);
        setStep(2);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <span className="font-14">First Name :</span>
                        <input name="first_name" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your First Name"/>
                        <small className="text-danger font-14">{errors.first_name && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 col-md-6">
                        <span className="font-14">Last Name :</span>
                        <input name="last_name" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Last Name"/>
                        <small className="text-danger font-14">{errors.last_name && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12">
                        <span className="font-14">Phone Number :</span>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <input type="text" disabled value="+44" className="form-control border-1-e5 font-14 shadow-0 mt-1" style={{width: "70px", borderRadius: ".5rem 0 0 .5rem"}}/>
                            </div>
                            <input type="number" ref={register({ required: true , pattern:REGEX_PHONE})} name="phone_number" className="form-control border-1-e5 font-14 shadow-0 mt-1" style={{borderRadius: "0 .5rem .5rem 0"}} placeholder="Your Phone Number" ref={register({ required: true})}/>
                        </div>
                        <small className="text-danger font-14">{errors.phone_number && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12">
                        <span className="font-14">Work Email :</span>
                        <input type="email" name="email"  ref={register({ required: true, pattern:REGEX_EMAIL })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Work Email"/>
                        <small className="text-danger font-14">{errors.email && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 col-md-6">
                        <span className="font-14">Password :</span>
                        <input name="password" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Password" type="password"/>
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
                                 })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Confirm Password" type="password"/>
                        <small className="text-danger font-14">{errors.confirm_password && <span>{errors.confirm_password.message}</span>}</small>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-block rounded btn-sm font-14 shadow-0 text-white mt-3" style={{background: "#00A7CF"}}>Next Step</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Index;