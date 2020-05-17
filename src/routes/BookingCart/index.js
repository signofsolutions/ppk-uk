import React, { useEffect, useState, useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa'
import { IoMdClose, IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom'
import Item from './Item';
import { getBooking } from 'services';
import { UserContext } from 'context/User';

function Index(props) {
    const history = useHistory();
    const { cart } = useContext(UserContext);
    const [items, setItems] = useState([]);
    const getItems = () => {
        getBooking()
            .then(res => {
                try {
                    setItems(res.items)
                }
                catch{
                    console.log('err in get booking')
                }
            })
    }
    useEffect(() => {
        getItems();
    }, [])
    const totalPrice = items.reduce((max, current)=>{
        return max+current.total_price;
    },0)
    console.log(totalPrice)
    return (
        <div className="bg-light">
            <div className="container">
                <div onClick={() => history.goBack()} className="d-flex align-items-center">
                    <FaChevronLeft style={{ fontSize: "13px" }} className="mr-2" />
                        Back To Result Page
                </div>
                {/* result page with content */}
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <h1 style={{ fontSize: "28px", fontWeight: "500" }}>My Booking cart</h1>
                    <Link to={items.length > 0 && `/checkout/${JSON.stringify(cart)}`}>
                        <button type="button" className="btn rounded btn-sm font-14 shadow-0 text-white px-4 d-none d-md-block" style={{ background: "#00A7CF" }}>Go to Checkout</button>
                    </Link>
                </div>
                {items.length > 0 ?
                    <>
                        {
                            items.map((item, index) => {
                                return (
                                    <Item getItems={getItems} key={index} item={item} />
                                )
                            })
                        }
                        <div className="mt-4">
                            <div className="card border-1-e5">
                                <div className="card-body" style={{ fontSize: "16px" }}>
                                    <div className="row">
                                        <div className="col-12 col-md mt-2 mt-md-0">
                                            <span>Number Of Booking: {items.length}</span>
                                        </div>
                                        <div className="col-12 col-md mt-2 mt-md-0">
                                            <span>Number Of Teams: {items.length} Team</span>
                                        </div>
                                        <div className="col-12 col-md mt-2 mt-md-0">
                                            <span>Total Price: £{totalPrice}</span>
                                        </div>
                                        <div className="col-12 col-md mt-2 mt-md-0">
                                            <Link to={items.length > 0 && `/checkout/${JSON.stringify(cart)}`}>
                                                <button type="button" className="btn rounded btn-sm font-14 shadow-0 text-white px-4" style={{ background: "#00A7CF" }}>Go to Checkout</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="card border-1-e5">
                                <div className="card-body" style={{ fontSize: "16px" }}>
                                    <AiOutlineExclamationCircle className="mr-2" style={{ fontSize: "30px" }} />
                                    <span>We will contact you for your 2nd post code</span>
                                </div>
                            </div>
                        </div>
                        <br />

                    </>
                    :
                    <>
                        <div className="mt-4">
                            <div className="card border-1-e5">
                                <div className="card-body" style={{ fontSize: "16px" }}>
                                    <IoIosCheckmarkCircleOutline style={{ fontSize: "30px", color: "#30Cf01" }} />
                                    <span className="ml-2">The Item was Successfully removed from your cart.</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            You don't have any items in your cart.
                </div>
                        <div className="d-flex align-items-center justify-content-center mt-5">
                            <button onClick={() => history.goBack()} type="button" className="btn rounded btn-sm font-14 shadow-0 text-white px-4" style={{ background: "#00A7CF" }}>

                                Back To Result Page
                            </button>
                        </div>
                        <br />
                    </>}

                {/* result page with content */}

                {/* result page without content */}

                {/* result page without content */}
            </div>
        </div>
    )
}

export default Index;