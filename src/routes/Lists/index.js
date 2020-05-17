import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io'
import { useLocation, useHistory, Link } from 'react-router-dom';
import { searchProperties } from 'services';
import moment from 'moment';
import DatePicker from 'components/DatePickerCustomize';
import { UserContext } from 'context/User';
import NoData from './NoData';
import { message } from 'antd';
import { NUMBER, POST_CODE } from 'util/Regex';
import { Typeahead } from 'react-bootstrap-typeahead'
import { locationSearch } from 'services';
import { Spin, AutoComplete, Input } from 'antd';
import PagingItem from './PagingItem';
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function Index() {
    const [locationSelect, setLocationSelect] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [locations, setLocations] = useState([])
    const { user, cart } = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const { register: register2,
        errors: errors2,
        handleSubmit: handleSubmit2 } = useForm();
    const searchLocation = (e) => {
        if (e && e.length > 2) {
            locationSearch(e)
                .then(res => {
                    setLocations(res.map(el=> {return {label:el, value:el}}))

                })
                .catch(err => console.log(err.response))
        } else {
            setLocationSelect(false)
        }
    }
    const changeDateSearch = () => {
        setError(false);
        let x = dates.filter(date => (moment(date.check_out, "YYYYMMDD").diff(moment(date.check_in, "YYYYMMDD"), 'days') + 1) > 4)
        if (x.length === dates.length && dates.length > 0) {
            let forms = [...search];
            forms[tabSelect] = {
                ...forms[tabSelect],
                "check_in_check_out_dates": dates,
            };
            history.push(`/lists?search=${JSON.stringify(forms)}`)
        } else {
            setError('You must select at least 4 nights.');

        }

    }
    const onSubmit2= values =>{
        let x = dates.filter(date => (moment(date.check_out, "YYYYMMDD").diff(moment(date.check_in, "YYYYMMDD"), 'days') + 1) > 4)

        let forms = [...search];
        forms[tabSelect] = {
            "location": locationSelect ? locationSelect : forms[tabSelect].location,
            "pppn_budget": { from: 0, to: values.to },
            "radius": values.radius,
            "number_of_beds": values.number_of_beds,
            "check_in_check_out_dates": dates,
            "number_of_parkings": values.number_of_parkings
        };
        if(x.length === dates.length && dates.length > 0){
            history.push(`/lists?search=${JSON.stringify(forms)}`)

        }else{
            setError('You must select at least 4 nights.');
        }
    }
    const onSubmit = values => {
        let x = dates.filter(date => (moment(date.check_out, "YYYYMMDD").diff(moment(date.check_in, "YYYYMMDD"), 'days') + 1) > 4)

        let forms = [...search];
        forms[tabSelect] = {
            "location": locationSelect ? locationSelect : forms[tabSelect].location,
            "pppn_budget": filterOpen === "pppn_budget" ? { from: 0, to: values.to } : forms[tabSelect].pppn_budget,
            "radius": filterOpen !== "radius" ? forms[tabSelect].radius : values.radius,
            "number_of_beds": filterOpen !== "number_of_beds" ? forms[tabSelect].number_of_beds : values.number_of_beds,
            "check_in_check_out_dates": dates.length === 0 ? forms[tabSelect].check_in_check_out_dates : dates,
            "number_of_parkings": filterOpen !== "number_of_parkings" ? forms[tabSelect].number_of_parkings : values.number_of_parkings
        };
        if(x.length === dates.length && dates.length > 0){
            history.push(`/lists?search=${JSON.stringify(forms)}`)

        }else{
            setError('You must select at least 4 nights.');
        }
    }
    
    const [search, setSearch] = useState(JSON.parse(new URLSearchParams(location.search).get("search")))
    const [data, setData] = useState({
        result: []
    })
    const [mobileFilter, setMobileFilter] = useState(false);
    const [tabSelect, setTabSelect] = useState(0)
    const [filterOpen, setFilterOpen] = useState(false)
    const [dates, setDates] = useState([]);
    const [datesClick, setDatesClick] = useState([]);
    const [error, setError] = useState(false)
    useEffect(() => {
        setLoading(true);
        let body = search.map(el => {
            return {
                ...el,
                check_in_check_out_dates: el.check_in_check_out_dates.map(ds => { return { check_in: moment(ds.check_in, 'YYYYMMDD').format('YYYY-MM-DD'), check_out: moment(ds.check_out, 'YYYYMMDD').format('YYYY-MM-DD') } })
            }
        })
    
        searchProperties(body)
            .then(res => {
                try {
                    setData(res)
                    setLoading(false)
                }
                catch{
                    message.warning('not found property');
                    setData({ result: [] })
                }
            })
            .catch(err => {
                setLoading(false)
                setData({ result: [] })
            })
    }, [])
    const changeFilterModal = (id) => {
        setFilterOpen(filterOpen === id ? false : id)
    }
    return (
        <div className="position-relative">
            {/* on IoMdClose click toggle d-none className to div.filter-container*/}
            {mobileFilter &&
                <div className={`filter-container`}>
                    <form onSubmit={handleSubmit2(onSubmit2)}>

                        <div className="d-flex align-items-center justify-content-around">
                            <div onClick={()=>setMobileFilter(false)}><IoMdClose /></div>
                            <div>Fiters</div>
                            <div></div>
                        </div>
                        <div style={{ width: "100%", height: "1px", background: "#EDEDED", margin: "20px 0" }}></div>
                        <h2 className="font-weight-normal px-3" style={{ fontSize: "16px" }}>Your Filters</h2>

                        <div className="px-3">
                            <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}> What is your work site location?</div>
                            <div className="my-custom-select font-14">
                                <AutoComplete
                                    onSelect={(e) => setLocationSelect(e)}
                                    style={{ width: "100%" }}
                                    options={locations}
                                >
                                    <Input.Search onChange={(e) => searchLocation(e.target.value)} size="medium" />
                                </AutoComplete>
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}> Radius from the work site?</div>
                            <input
                                defaultValue={search[tabSelect].radius}
                                name="radius" type="number"
                                ref={register2({
                                    pattern: {
                                        value: NUMBER,
                                        message: "Please enter a number"
                                    }
                                })} className="form-control form-control-sm shadow-0 rounded" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="Enter a number" aria-describedby="radiusHelp" />
                            <div style={{ height: "25px" }}>
                                {errors2.radius && <small id="postCodeHelp" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.radius.message}</small>}
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}>How many beds do you require?</div>
                            <input
                                defaultValue={search[tabSelect].number_of_beds}
                                name="number_of_beds" type="number"
                                ref={register2({
                                    pattern: {
                                        value: NUMBER,
                                        message: "Please enter a number"
                                    }
                                })} className="form-control form-control-sm shadow-0 rounded" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="Enter a number" aria-describedby="NumberOfBedsHelp" />
                            <div style={{ height: "25px" }}>

                                {errors2.number_of_beds && <small id="postCodeHelp" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.number_of_beds.message}</small>}
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}>What is your maximum per person per night budget?</div>
                            {/* <div className="input-group input-group-sm">
                                <div className="input-group-prepend" style={{ height: "37.5px" }}>
                                    <span className="input-group-text" style={{ border: "none" }}>&#163;</span>
                                </div>
                                <input
                                    defaultValue={search[tabSelect].pppn_budget.from}
                                    name="from"
                                    ref={register({
                                        validate: (value) => {
                                            return parseInt(value) >= 1 || "The budget from must be at least 0"
                                        },
                                        pattern: {
                                            value: NUMBER,
                                            message: "Please enter a from budget"
                                        }
                                    })} className="form-control form-control-sm shadow-0" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="From" />
                                <div className="input-group-append" style={{ height: "37.5px" }}>
                                    <span className="input-group-text" style={{ border: "none" }}>.00</span>
                                </div>
                            </div>
                            <div style={{ height: "25px" }}>
                                {errors.from && <small id="from" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.from.message}</small>}
                            </div> */}
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend" style={{ height: "37.5px" }}>
                                    <span className="input-group-text" style={{ border: "none" }}>&#163;</span>
                                </div>
                                <input name="to"
                                    defaultValue={search[tabSelect].pppn_budget.to}
                                    ref={register2({
                                        validate: (value) => {
                                            return parseInt(value) > 0 || "The to budget bigger 0";
                                        },
                                        pattern: {
                                            value: NUMBER,
                                            message: "Please enter a to budget"
                                        }
                                    })} className="form-control form-control-sm shadow-0" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="" />
                                <div className="input-group-append" style={{ height: "37.5px" }}>
                                    <span className="input-group-text" style={{ border: "none" }}>.00</span>
                                </div>
                            </div>
                            <div style={{ height: "25px" }}>
                                {errors2.to && <small id="to" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.to.message}</small>}
                            </div>
                        </div>
                        <div className="px-3">
                            <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}> How many parking spaces do you required?</div>
                            <input
                                defaultValue={search[tabSelect].number_of_parkings}

                                name="number_of_parkings" type="number"
                                ref={register2({
                                    pattern: {
                                        value: NUMBER,
                                        message: "Please enter a number"
                                    }
                                })} className="form-control form-control-sm shadow-0 rounded" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="Enter a number" aria-describedby="NumberOfBedsHelp" />
                            <div style={{ height: "25px" }}>
                                {errors2.number_of_parkings && <small id="number_of_parkings" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.number_of_parkings.message}</small>}
                            </div>
                        </div>
                        <div className="px-3 d-flex align-items-center justify-content-center">
                            <div style={{ width: "300px" }}>
                                <DatePicker checkDates={search[tabSelect].check_in_check_out_dates} onChange={setDates} handleClick={setDatesClick} />
                                {error && <small id="countHelp" className="form-text text-danger mt-0" style={{ fontSize: "13px", textAlign: "center", marginBottom: "5px" }}>{error} </small>}
                            </div>
                        </div>
                        <div className="px-3">
                            <button className="btn btn-block rounded btn-sm font-14 shadow-0 text-white" style={{ background: "#00A7CF" }}>Save Changes</button>
                        </div>
                    </form>
                </div>
            }
            <div className="container pt-4">
                {/* header */}
                <div className="d-flex align-items-center justify-content-between">
                    <h1 style={{ fontSize: "30px", fontWeight: "400" }}>Your booking Results</h1>
                    {user &&
                        <Link to="/bookingcart">
                            <button type="button" className="btn btn-sm rounded shadow-0 border-1-e5 font-14 px-3 d-none d-md-block">
                                <span className="badge badge-dark mr-2 font-weight-lighter" style={{ fontSize: "12px" }}>{cart.length}</span>
                                <small>My Booking</small>
                            </button>
                        </Link>
                    }
                </div>
                {/* header */}
                {/* filter */}
                {
                    windowDimensions.width > 576 &&
                    <div className="d-flex align-items-center justify-content-between mt-2 mt-md-5" style={{ fontSize: "15px" }}>
                    <div className="mr-3 mr-md-2 d-none d-md-block" style={{ fontSize: "13px" }}>Filter Your Search :</div>
                    <div className="mr-3 mr-md-2 d-md-none" style={{ fontSize: "9px" }}>Filter Your Search:</div>
                    {/* desktop view */}
                    <div className="position-relative">
                        {/* on button click add bg-light to botton and add d-none to div tag */}
                        <button onClick={() => changeFilterModal('location')} type="button" className={`btn btn-sm rounded shadow-0 border-1-e5 font-14 px-3 ${filterOpen === 'location' ? "bg-light" : "d-none"} d-md-block mr-2`}> {search[tabSelect].location}</button>
                        <div className={`position-absolute ${filterOpen === 'location' ? "bg-light" : "d-none"}`} style={{ top: "50px", left: "0", zIndex: "999", minWidth: "300px", borderRadius: "10px" }}>
                            <div className="card border-1-e5">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}> What is your work site location?</div>
                                        <div className="my-custom-select font-14">
                                            <AutoComplete
                                                onSelect={(e) => setLocationSelect(e)}
                                                style={{ width: "100%" }}
                                                options={locations}
                                            >
                                                <Input.Search onChange={(e) => searchLocation(e.target.value)} size="medium" />
                                            </AutoComplete>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn rounded btn-sm font-14 shadow-0 mt-2 text-white px-3" style={{ background: "#00A7CF" }}>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        {/* on button click add bg-light to botton and add d-none to div tag */}
                        <button onClick={() => changeFilterModal('radius')} type="button" className={`btn btn-sm rounded shadow-0 border-1-e5 font-14 px-3 ${filterOpen === 'radius' ? "bg-light" : "d-none"} d-md-block mr-2`}> {search[tabSelect].radius} Miles radius </button>
                        <div className={`position-absolute ${filterOpen === 'radius' ? "bg-light" : "d-none"}`} style={{ top: "50px", left: "0", zIndex: "999", minWidth: "300px", borderRadius: "10px" }}>
                            <div className="card border-1-e5">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}> Radius from the work site?</div>
                                        <input
                                            defaultValue={search[tabSelect].radius}
                                            name="radius" type="number"
                                            ref={register({
                                                pattern: {
                                                    value: NUMBER,
                                                    message: "Please enter a number"
                                                }
                                            })} className="form-control form-control-sm shadow-0 rounded" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="Enter a number" aria-describedby="radiusHelp" />
                                        <div style={{ height: "25px" }}>
                                            {errors.radius && <small id="postCodeHelp" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.radius.message}</small>}
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn rounded btn-sm font-14 shadow-0 mt-2 text-white px-3" style={{ background: "#00A7CF" }}>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        {/* on button click add bg-light to botton and add d-none to div tag */}
                        <button onClick={() => changeFilterModal('number_of_beds')} type="button" className={`btn btn-sm rounded shadow-0 border-1-e5 font-14 px-3 ${filterOpen === 'number_of_beds' ? "bg-light" : "d-none"} d-md-block mr-2`}> {search[tabSelect].number_of_beds} Bed{parseInt(search[tabSelect].number_of_beds) > 1 && "'s"}</button>
                        <div className={`position-absolute ${filterOpen === 'number_of_beds' ? "bg-light" : "d-none"}`} style={{ top: "50px", left: "0", zIndex: "999", minWidth: "300px", borderRadius: "10px" }}>
                            <div className="card border-1-e5">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}>How many beds do you require?</div>
                                        <input
                                            defaultValue={search[tabSelect].number_of_beds}
                                            name="number_of_beds" type="number"
                                            ref={register({
                                                pattern: {
                                                    value: NUMBER,
                                                    message: "Please enter a number"
                                                }
                                            })} className="form-control form-control-sm shadow-0 rounded" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="Enter a number" aria-describedby="NumberOfBedsHelp" />
                                        <div style={{ height: "25px" }}>

                                            {errors.number_of_beds && <small id="postCodeHelp" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.number_of_beds.message}</small>}
                                        </div>

                                        <div className="d-flex justify-content-end">
                                            <button className="btn rounded btn-sm font-14 shadow-0 mt-2 text-white px-3" style={{ background: "#00A7CF" }}>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        {/* on button click add bg-light to botton and add d-none to div tag */}
                        <button onClick={() => changeFilterModal('pppn_budget')} type="button" className={`btn btn-sm rounded shadow-0 border-1-e5 font-14 px-3 ${filterOpen === 'pppn_budget' ? "bg-light" : "d-none"} d-md-block mr-2`}> £{parseInt(search[tabSelect].pppn_budget.to).toFixed(2)}</button>
                        <div className={`position-absolute ${filterOpen === 'pppn_budget' ? "bg-light" : "d-none"}`} style={{ top: "50px", left: "0", zIndex: "999", minWidth: "300px", borderRadius: "10px" }}>
                            <div className="card border-1-e5">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}>What is your maximum per person per night budget?</div>
                                        {/* <div className="input-group input-group-sm">
                                            <div className="input-group-prepend" style={{ height: "37.5px" }}>
                                                <span className="input-group-text" style={{ border: "none" }}>&#163;</span>
                                            </div>
                                            <input
                                                defaultValue={search[tabSelect].pppn_budget.from}
                                                name="from"
                                                ref={register({
                                                    validate: (value) => {
                                                        return parseInt(value) >= 1 || "The budget from must be at least 0"
                                                    },
                                                    pattern: {
                                                        value: NUMBER,
                                                        message: "Please enter a from budget"
                                                    }
                                                })} className="form-control form-control-sm shadow-0" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="From" />
                                            <div className="input-group-append" style={{ height: "37.5px" }}>
                                                <span className="input-group-text" style={{ border: "none" }}>.00</span>
                                            </div>
                                        </div>
                                        <div style={{ height: "25px" }}>
                                            {errors.from && <small id="from" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.from.message}</small>}
                                        </div> */}
                                        <div className="input-group input-group-sm">
                                            <div className="input-group-prepend" style={{ height: "37.5px" }}>
                                                <span className="input-group-text" style={{ border: "none" }}>&#163;</span>
                                            </div>
                                            <input name="to"
                                                defaultValue={search[tabSelect].pppn_budget.to}
                                                ref={register({
                                                    validate: (value) => {
                                                        return parseInt(value) > 0 || "The to budget bigger from budget";
                                                    },
                                                    pattern: {
                                                        value: NUMBER,
                                                        message: "Please enter a to budget"
                                                    }
                                                })} className="form-control form-control-sm shadow-0" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="" />
                                            <div className="input-group-append" style={{ height: "37.5px" }}>
                                                <span className="input-group-text" style={{ border: "none" }}>.00</span>
                                            </div>
                                        </div>
                                        <div style={{ height: "25px" }}>
                                            {errors.to && <small id="to" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.to.message}</small>}
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn rounded btn-sm font-14 shadow-0 mt-2 text-white px-3" style={{ background: "#00A7CF" }}>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        {/* on button click add bg-light to botton and add d-none to div tag */}
                        <button onClick={() => changeFilterModal('number_of_parkings')} type="button" className={`btn btn-sm rounded shadow-0 border-1-e5 font-14 px-3 ${filterOpen === 'number_of_parkings' ? "bg-light" : "d-none"} d-md-block mr-2`}> {search[tabSelect].number_of_parkings} parking space{parseInt(search[tabSelect].number_of_parkings)>1?"s":""}</button>
                        <div className={`position-absolute ${filterOpen === 'number_of_parkings' ? "bg-light" : "d-none"}`} style={{ top: "50px", left: "0", zIndex: "999", minWidth: "300px", borderRadius: "10px" }}>
                            <div className="card border-1-e5">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="text-left text-dark mb-1 mt-2" style={{ fontSize: "14px" }}> How many parking spaces do you required?</div>
                            <input
                                defaultValue={search[tabSelect].number_of_parkings}

                                name="number_of_parkings" type="number"
                                ref={register({
                                    pattern: {
                                        value: NUMBER,
                                        message: "Please enter a number"
                                    }
                                })} className="form-control form-control-sm shadow-0 rounded" style={{ border: "1px solid #ddd", fontSize: "14px" }} placeholder="Enter a number" aria-describedby="NumberOfBedsHelp" />
                            <div style={{ height: "25px" }}>
                                {errors.number_of_parkings && <small id="number_of_parkings" className="form-text text-danger text-left mt-0" style={{ fontSize: "13px" }}>{errors.number_of_parkings.message}</small>}
                            </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn rounded btn-sm font-14 shadow-0 mt-2 text-white px-3" style={{ background: "#00A7CF" }}>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        {/* on button click add bg-light to botton and add d-none to div tag */}
                        <button onClick={() => changeFilterModal('check_in_check_out_dates')} type="button" className={`btn btn-sm rounded shadow-0 border-1-e5 font-14 px-3 ${filterOpen === 'check_in_check_out_dates' ? "bg-light" : "d-none"} d-md-block mr-2`}> Check-in/out</button>
                        <div className={`position-absolute ${filterOpen === 'check_in_check_out_dates' ? "bg-light" : "d-none"}`} style={{ top: "50px", left: "-200px", zIndex: "999", minWidth: "300px", borderRadius: "10px" }}>
                            <div className="card border-1-e5">
                                <div className="card-body">
                                    <div style={{ width: "300px" }}>
                                        <DatePicker checkDates={search[tabSelect].check_in_check_out_dates} onChange={setDates} handleClick={setDatesClick} />
                                        {error && <small id="countHelp" className="form-text text-danger mt-0" style={{ fontSize: "13px", textAlign: "center", marginBottom: "5px" }}>{error} </small>}

                                    </div>

                                    <div className="d-flex justify-content-end">
                                        <button type="button" onClick={changeDateSearch} type="button" className="btn rounded btn-sm font-14 shadow-0 mt-2 text-white px-3" style={{ background: "#00A7CF" }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* desktop view */}

                    {/* mobile view */}
                    
                </div>
               
                }
                <button onClick={() => setMobileFilter(!mobileFilter)} type="button" className="btn btn-lg rounded shadow-0 border-1-e5 font-14 d-block d-md-none mr-3">
                        Filters
                        </button>
                    {
                        user &&
                        <button type="button" className="btn btn-lg rounded shadow-0 border-1-e5 font-14 d-block d-md-none mr-3" style={{ whiteSpace: "nowrap" }}>
                            <span className="badge badge-dark mr-1 font-weight-lighter" style={{ fontSize: "12px" }}>0</span>
                            <small>My Booking</small>
                        </button>
                    }

                    {/* mobile view */}
                {/* filter */}

                {/* tabs */}

                <div className="mt-4 search-result">
                    <nav>
                        <div className="nav nav-tabs tab-scroll" id="nav-tab" role="tablist">
                            {search.map((item, index) => {
                                return (
                                    <a onClick={() => setTabSelect(index)} key={index} className={`nav-item nav-link ${index === tabSelect && "active"}`}>{item.location} </a>

                                )
                            })}

                            {/* <a className="nav-item nav-link" id="tabNav2" data-toggle="tab" href="#tabContent2" role="tab" aria-controls="tabContent2" aria-selected="true">SW1A 2AA Postcode</a> */}
                        </div>
                    </nav>
                </div>
                {/* tabs */}
            </div>

            <div style={{ width: "100%", height: "1px", background: "#EDEDED" }}></div>
            {
                <Spin spinning={loading}>
                    <div className="container py-4">
                        <div className="p-1 p-md-3" style={{ borderRadius: "10px", background: "#EDEDED" }}>
                            {/* tab content */}
                            <div className="tab-content" id="nav-tabContent">
                                {data && data.result.map((list, index) => {
                                    if (list.length > 0) {
                                       return (
                                         <div
                                           key={index}
                                           className={`tab-pane fade ${
                                             tabSelect === index &&
                                             "show active"
                                           }`}
                                         >
                                           <PagingItem
                                             search={search[tabSelect]}
                                             keyIndex={index}
                                             data={list}
                                           />
                                         </div>
                                       );
                                      
                                    } else {
                                        return (
                                            <div key={index} className={`tab-pane fade ${tabSelect === index && "show active"}`}>
                                                <NoData search={search[tabSelect]} />
                                            </div>
                                        )
                                    }

                                })}

                            </div>
                            {/* tab content */}
                        </div>
                    </div>

                </Spin>
            }
        </div>
    )
}

export default Index;