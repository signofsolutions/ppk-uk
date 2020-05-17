import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import SliderCustomize from 'components/SliderCustomize';
import {deleteBooking, URL_PROPERTIES_LOGO} from 'services';
import {message} from 'antd';

function Index({ item, getItems }) {
    const handelRemoveItem = ()=>{
        deleteBooking(item.id)
        .then(res => {
            try{
                message.successfuly('Delete item successfuly')
                getItems()
            }
            catch{
                console.log("error in booking delete")
            }
        })
    }
    return (
        <div className="row mt-4">
            <div className="col-12 col-md-11">
                <div className="card border-1-e5">
                    <div className="card-body p-1 p-md-3 position-relative">
                        <div className="position-absolute d-md-none" style={{ top: "-20px", right: "-10px" }}>
                            <button  onClick={handelRemoveItem} type="button" className="btn shadow-0 p-0">
                                <IoMdClose  className="shadow-sm" style={{ fontSize: "40px", backgroundColor: "#fff", padding: "5px", borderRadius: "50%" }} />
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <SliderCustomize galleries={item.property.galleries} />

                            </div>
                            <div className="col-6 col-md-5 font-14">
                                <div className="mt-3 mt-md-0">
                                    <span>Address:</span>
                                    <span className="ml-2">{item.property.first_line_of_address + " " + item.property.second_line_of_address}</span>
                                </div>
                                <div className="mt-2">
                                    <span>Distance From Work site:</span>
                                    <span className="ml-2">{item.dinstance_time_text&&item.dinstance_time_text} </span>
                                </div>
                                <div className="d-flex align-items-start flex-wrap mt-2">
                                    <span className="mr-2">facilities:</span>
                                    {item.property.facilities.map((fa, index) => {
                                        return (
                                            <span className="mr-1 d-flex align-items-center">
                                                <GoPrimitiveDot style={{ fontSize: "10px", marginRight: "5px" }} />
                                                {fa.title}
                                            </span>
                                        )
                                    })}


                                </div>
                                <div className="mt-2">
                                    <span style={{fontWeight:"bold"}}>Parking space{parseInt(item.number_of_parkings)>1?"s":""}:</span>
                                        <span className="ml-2">{item.number_of_parkings}  </span>
                                    </div>
                                    <div style={{ position:"relative",bottom:20}}>
                                        {item.type === null ?
                                        item.user_logo === null?"":
                                        <img alt="" src={URL_PROPERTIES_LOGO+item.user_logo} width="100px"/>:
                                        <img alt="" src={require(`../../assets/images/${item.type}.png`)} width="100px"/>
                                        }                         
                                </div>
                            </div>
                            <div className="col-12 col-md-4 font-14 mt-2 mt-md-0">
                                <div className="rounded py-2 px-1 px-md-4" style={{ border: "1px solid #E5E5E5" }}>
                                    <div className="row align-items-center">
                                        <div className="col-5 col-md-12 text-center text-md-left">
                                            <div>Your postcode:</div>
                                            <div className="mt-1" style={{ fontSize: "16px" }}>{item.property.post_code}</div>
                                        </div>
                                        <div className="col-7 col-md-12">
                                            <div className="mt-0 mt-md-4">PPPN Price:</div>
                                            <div className="mt-1" style={{ fontSize: "16px" }}>£ {item.property.pppn_price.toFixed(2)} / per person per night</div>
                                            <div className="mt-4">Total Price:</div>
                                <div className="mt-1" style={{ fontSize: "16px" }}>£ {item.total_price.toFixed(2)} / {item.total_night} night{item.total_night>1?"s":""}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 d-none d-md-block">
                <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    <button onClick={handelRemoveItem} className="btn shadow-0 p-0">
                        <IoMdClose  className="shadow-sm" style={{ fontSize: "40px", backgroundColor: "#fff", padding: "5px", borderRadius: "50%" }} />
                    </button>
                </div>
            </div>
        </div>

    )
}


export default Index;