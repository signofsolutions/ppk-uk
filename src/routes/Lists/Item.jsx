import React, { useContext, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go'
import { UserContext } from 'context/User';
import { addBooking, URL_PROPERTIES_LOGO, addAccRequest, ShowError } from 'services';
import { useHistory } from 'react-router-dom';
import { Modal, message } from 'antd';
import SignIn from './SignIn';
import SignUp from './SignUp';
import moment from 'moment';
import SliderCustomize from 'components/SliderCustomize';
import ImageGallery from 'components/ShowGallery';

function Index({data, item, search }) {

    const history = useHistory()
    const { user, changeCart } = useContext(UserContext);
    const [openLogin, setOpenLogin] = useState(false)
    const [loginType, setLoginType] = useState('signup');
    const handleAccommodation = () => {
        let body = search;
        body.check_in_check_out_dates = body.check_in_check_out_dates.map((ds)=> {return {check_in: moment(ds.check_in, 'YYYYMMDD').format('YYYY-MM-DD'), check_out: moment(ds.check_out, 'YYYYMMDD').format('YYYY-MM-DD')}})
       
        if (user) {
            addAccRequest(body)
            .then(res => {
                message.success('Your request send')
            })
            .catch(err => ShowError(err))
            
        } else {
            setOpenLogin({body,type:"addAccRequest"})
        }
    }
    const handleBooking = (type) => {
        let body = {
            "property_id": item.id,
            "number_of_beds": search.number_of_beds,
            "check_in_check_out_dates": search.check_in_check_out_dates.map(el => {
                return {
                    check_in: moment(el.check_in, 'YYYYMMDD').format('YYYY-MM-DD'),
                    check_out: moment(el.check_out, 'YYYYMMDD').format('YYYY-MM-DD')
                }
            }
            )
        } 
        if (user) {            
            addBooking(body)
                .then(res => {
                    try {
                        if (type === "booking") {
                            changeCart(res.id)
                            history.push(`/checkout/${JSON.stringify([res.id])}`)
                        } else {
                            changeCart(res.id)
                        }
                    }
                    catch{
                        console.log("err is booking")
                    }
                })
                .catch(err =>ShowError(err))
        }
        else {
            setOpenLogin({body, type})
        }
    }
    return (
      <div className="card border-1-e5">
        <Modal
          visible={openLogin}
          footer={false}
          onOk={() => setOpenLogin(false)}
          onCancel={() => setOpenLogin(false)}
        >
          {" "}
          {loginType === "signup" ? (
            <SignUp
              closeModal={() => setOpenLogin(false)}
              openLogin={openLogin}
              setLoginType={setLoginType}
            />
          ) : (
            <SignIn
              closeModal={() => setOpenLogin(false)}
              openLogin={openLogin}
              setLoginType={setLoginType}
            />
          )}
        </Modal>
        <div className="card-body p-1 p-md-3">
          <div className="row">
            <div className="col-lg-3">
              {/* <ImageGallery/> */}
              <SliderCustomize galleries={item.gallery} />
            </div>
            <div className="col-lg-5 pl-3 font-12">
                <div className="row">
                <div className="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="11.045"
                  viewBox="0 0 8 11.045"
                  className="d-inline-block d-lg-none"
                >
                  <g transform="translate(-70.573)">
                    <g transform="translate(70.573)">
                      <path
                        d="M74.573,0a4,4,0,0,0-4,4c0,2.737,3.58,6.756,3.732,6.925a.36.36,0,0,0,.536,0c.152-.17,3.732-4.188,3.732-6.925A4,4,0,0,0,74.573,0Zm0,6.012A2.012,2.012,0,1,1,76.585,4,2.015,2.015,0,0,1,74.573,6.012Z"
                        transform="translate(-70.573)"
                        fill="#212529"
                      />
                    </g>
                  </g>
                </svg>
                <span
                  className="d-none d-lg-inline-block"
                
                >
                  Address:
                </span>
                <span className="ml-2">
                  {item.city +" "+ (item.post_code && item.post_code.substring(0,3))}
                </span>
              </div>
                </div>
                <div className="row">
                <div className="mt-2  col-12">
                <span >
                  Distance From Work site:
                </span>
                <span className="ml-2 text-info">{item.dinstance_time_text} </span>
              </div>
              <div className="mt-2  col-12">
                <span >
                  Parking space
                  {parseInt(item.number_of_parkings) > 1 ? "s" : ""}:
                </span>
                <span className="ml-2 text-info">{item.number_of_parkings} </span>
              </div>
                </div>
       
          
              <div className="d-flex align-items-start flex-wrap mt-2">
                <span  className="mr-2">
                  facilities :
                </span>
                {item.facilities.map((fa, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-1 d-flex text-info  align-items-center"
                    >
                      <GoPrimitiveDot
                        style={{ fontSize: "10px", marginRight: "5px" }}
                      />
                      {fa.title}
                    </span>
                  );
                })}
              </div>

              <div style={{ position: "relative", bottom: 20 }}>
                {item.owner === "lister" ? (
                  item.user_logo === null ? (
                    ""
                  ) : (
                    <img
                      alt=""
                      src={URL_PROPERTIES_LOGO + item.user_logo}
                      width="100px"
                    />
                  )
                ) : (
                  <img
                    alt=""
                    src={require(`../../assets/images/complex.png`)}
                    width="100px"
                  />
                )}
              </div>
            </div>
            <div className="col-12 col-lg-4 font-12  mt-md-0">
              <div
                className="rounded py-2 px-1 px-md-4"
                style={{ border: "1px solid #E5E5E5" }}
              >
                <div className="row">
                  <div className="col-3 col-lg-12 pl-lg-0 pr-0">PPPN Price:</div>
                  <div className="col-9 col-lg-12 px-0" style={{ fontSize: "14px" }}>
                    £ {item.pppn_price.toFixed(2)} / per person per night
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-3 col-lg-12 pl-lg-0 pr-0">Total Price:</div>
                  <div className="col-9 col-lg-12 px-0" style={{ fontSize: "14px" }}>
                   <span className="text-info"> £ {item.total_price.toFixed(2)}</span>/ {item.total_night} night
                    {item.total_night > 1 ? "s" : ""}
                  </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-around mt-3 flex-column flex-column-reverse flex-md-row">
                      {item.reservation_status === "booking" ? (
                        <>
                          <button
                            onClick={() => handleBooking("addToCart")}
                            type="button"
                            className="btn btn-sm font-14 shadow-0"
                          >
                            Add To Cart
                          </button>
                          <button
                            onClick={() => handleBooking("booking")}
                            type="button"
                            className="btn rounded btn-sm font-14 shadow-0 text-white"
                            style={{ background: "#00A7CF" }}
                          >
                            Book Now
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={handleAccommodation}
                            type="button"
                            className="btn btn-block rounded btn-sm font-14 shadow-0 text-white "
                            style={{ background: "#00A7CF" }}
                          >
                            Send An Enquiry
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Index;