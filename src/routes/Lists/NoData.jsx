import React, { useState, useContext } from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { UserContext } from 'context/User';
import { Modal } from 'antd';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { addAccRequest } from 'services';
import moment from 'moment';

function Index({ search }) {
    const { user, changeCart } = useContext(UserContext);
    const [openLogin, setOpenLogin] = useState(false)
    const [step, setStep] = useState(1);
    const [loginType, setLoginType] = useState('signup')
    const handleAccommodation = () => {
        let body = search;
        body.check_in_check_out_dates = body.check_in_check_out_dates.map((ds) => { return { check_in: moment(ds.check_in, 'YYYYMMDD').format('YYYY-MM-DD'), check_out: moment(ds.check_out, 'YYYYMMDD').format('YYYY-MM-DD') } })

        if (user) {
            addAccRequest(body)
                .then(res => {
                    try {
                        setStep(2);
                    }
                    catch{
                        console.log("error is add accomation")
                    }
                })

        } else {
            setOpenLogin({ body, type: "addAccRequest" })
        }
    }
    return (
        <div>
            <Modal
                visible={openLogin}
                footer={false}
                onOk={() => setOpenLogin(false)}
                onCancel={() => setOpenLogin(false)}
            >   {
                    loginType === "signup" ?
                        <SignUp closeModal={() => setOpenLogin(false)} openLogin={openLogin} setLoginType={setLoginType} /> :
                        <SignIn closeModal={() => setOpenLogin(false)} openLogin={openLogin} setLoginType={setLoginType} />

                }
            </Modal>
            {/* nodata page1 */}
            {step === 1 ?
                <div className="container">
                    <div className="row justify-content-center">
                        <button onClick={handleAccommodation} type="button" className="btn rounded btn-sm font-14 shadow-0 text-white" style={{ background: "#00A7CF" }}>Find me a PPPN accommodation</button>
                    </div>
                </div>
                :
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="card border-1-e5">
                                <div className="card-body">
                                    <div className="text-center">
                                        <IoIosCheckmarkCircleOutline style={{ color: "#30cf01", fontSize: "100px" }} />
                                        <h2 className="font-weight-normal mt-3" style={{ fontSize: "20px" }}>We will be in touch shortly</h2>
                                        <p className="font-14">Usually in less than 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </div>
    )
}

export default Index;