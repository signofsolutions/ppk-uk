import React from 'react';
import {IoIosCheckmarkCircleOutline} from "react-icons/io";


function Index () {
    return(
        <div>
            {/* nodata page1 */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card border-1-e5 shadow-0">
                            <div className="card-body">
                                <p className="text-center" style={{fontSize: "20px"}}>Provide the below information so that we can find you a booking in no time</p>
                                <from>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <span className="font-14">First name :</span>
                                            <input type="text" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your First Name"/>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <span className="font-14">Last name :</span>
                                            <input type="text" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Last Name"/>
                                        </div>

                                        <div className="col-12">
                                            <span className="font-14">Phone Number :</span>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <input type="text" disabled value="+44" className="form-control border-1-e5 font-14 shadow-0 mt-1" style={{width: "70px", borderRadius: ".5rem 0 0 .5rem"}}/>
                                                </div>
                                                <input type="text" className="form-control border-1-e5 font-14 shadow-0 mt-1" style={{borderRadius: "0 .5rem .5rem 0"}} placeholder="Your Phone Number"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <span className="font-14">Work Email :</span>
                                            <input type="email" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Work Email"/>
                                        </div>

                                        <div className="col-12">
                                            <button type="button" className="btn btn-block rounded btn-sm font-14 shadow-0 text-white mt-3" style={{background: "#00A7CF"}}>Find me a PPPN accommodation</button>
                                        </div>
                                    </div>
                                </from>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* nodata page1 */}
            {/* nodata page2 */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="card border-1-e5">
                            <div className="card-body">
                                <div className="text-center">
                                    <IoIosCheckmarkCircleOutline style={{color: "#30cf01", fontSize: "100px"}} />
                                    <h2 className="font-weight-normal mt-3" style={{fontSize: "20px"}}>We will be in touch shortly</h2>
                                    <p className="font-14">Usually in less than 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* nodata page2 */}
        </div>
    )
}

export default Index;