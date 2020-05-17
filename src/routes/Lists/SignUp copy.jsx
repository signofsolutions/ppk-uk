import React, { useState } from 'react';
import FirstStep from './SignUpFirstStep'
import SecondStep from './SignUpSecondStep'


function SignUp({setLoginType, openLogin}) {
    console.log(openLogin)

    const [step, setStep] = useState(1);
    const [values, setValues] = useState({})

    const RenderForm = () => {
        switch (step) {
            case 1:
                return <FirstStep setStep={setStep} setValues={setValues}/>
            case 2:
                return <SecondStep setLoginType={setLoginType} values={values}/>
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
                                <p className="text-center" style={{ fontSize: "20px" }}>Create Your Account</p>
                                {RenderForm()}
                            </div>
                            <div className="card-footer bg-white text-center" style={{ borderTop: "1px solid #e5e5e5" }}>
                                <span className="font-14">You Have an Account ? </span>
                                <a onClick={()=>setLoginType('signin')} className="font-14">Sign in Here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignUp;