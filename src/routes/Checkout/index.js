import React, { useState, useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa'
import { getDetailPayment } from 'services';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import { useHistory, Link, useRouteMatch } from 'react-router-dom';
import Add from './Add';
import { message } from 'antd';
function Index() {
    const [step, setStep] = useState(1);
    const match = useRouteMatch();
    const history = useHistory();
    const bookingList = match.params.id !== 'undefined' && JSON.parse(match.params.id);
    const [totalPrice, setTotalPrice] = useState(false);
    useEffect(() => {
        if(bookingList){
            getDetailPayment({ booking_ids: bookingList })
            .then(res => {
                try {
                    setTotalPrice(res.total_price)
                }
                catch{
                    console.log("error in get details booking")
                }
            })
            .catch(err => console.log(err.response))
        }else{
            message.error('Your cart is null')
        }
        
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="d-flex align-items-center" onClick={() => history.goBack()}>
                                <FaChevronLeft style={{ fontSize: "13px" }} className="mr-2" />
                                Back To Booking Cart
                        </div>
                        <h1 className="font-weight-normal h2 mt-4">Check out</h1>
                        <div className="card border-1-e5 text-center">
                            <div className="card-body font-14">
                                <span>Total Price: </span>
                                <span>£{totalPrice&&totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="card border-1-e5 mt-4 font-14">
                            {step === 1 ?
                                <div className="card-body" style={{ marginBottom: "20px" }}>
                                    <p className="text-center" style={{ fontSize: "20px" }}>Payment Info</p>
                                    <Add setStepPayment={setStep} booking={bookingList} />
                                </div>
                                :
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-12">
                                            <div className="card border-1-e5">
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <IoIosCheckmarkCircleOutline style={{ color: "#30cf01", fontSize: "100px" }} />
                                                        <h2 className="font-weight-normal mt-3" style={{ fontSize: "20px" }}>Congratulations,
                                                                                    Your booking is now complete!</h2>
                                                        <p className="font-14">You can see booking details here</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;