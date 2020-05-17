import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { POST_CODE, NUMBER } from 'util/Regex';
import { Typeahead } from 'react-bootstrap-typeahead'
import { locationSearch } from 'services';
import {Input, AutoComplete} from 'antd';

function Index ({changeValues, count, ordinalNumber, step, setStep, countForm}) {
    const { register, handleSubmit, errors, setError } = useForm();
    const [location ,setLocation] = useState(false);
    const [locations, setLocations] = useState([])

    const onSubmit = data => {
        if(location){
            data.location = location;
            changeValues(data)
        }else{
            setError('location','noMatch','Please select a city ')
        }
       
    }
    const searchLocation = (e) => {
        if(e && e.length > 2){
            locationSearch(e)
            .then(res => {
                console.log(res)
                setLocations(res.map(el=> {return {label:el, value:el}}))
            })
            .catch(err => console.log(err.response))
        }else{
            setLocation(false)
        }
       
    }
    console.log("locatoons", locations)
    return(
        <div>
        {/* <div>{count}</div> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Q1 */}
                <div className="text-left text-dark mb-1 mt-2" style={{fontSize:"14px"}}>{count}.1 . What is your <b>{countForm >1 &&ordinalNumber[count-1]}</b> work site location?</div>
                    <div className="my-custom-select font-14">
                            {/* <Typeahead
                                onInputChange={(e) => searchLocation(e)}
                                onChange={(selected) => {
                                    setLocation(selected[0])
                                }}
                                name="location"
                                ref={register({ required: "This field is required"})}
                                placeholder="Plase enter your address"
                                // labelKey={'title'}
                                options={locations}
                                style={{ fontSize: "14px" }}
                            /> */}
                            <AutoComplete
                                onSelect={(e)=>setLocation(e)}
                                style={{ width: "100%" }}
                                options={locations}
                                >
                                <Input.Search placeholder="search..." onChange={(e)=>searchLocation(e.target.value)} size="medium" />
                                </AutoComplete>
                            </div>
                            <div style={{height:"25px"}}>
                                {errors.location && <small id="postCodeHelp" class="form-text text-danger text-left" style={{fontSize:"13px"}}>{errors.location.message}</small>}
                            </div>
                {/* Q1 */}

                {/* Q2 */}
                <div className="text-left text-dark mb-1 mt-2" style={{fontSize:"14px"}}>{count}.2 . Radius from the work site?</div>
                <input  name="radius" type="number"
                 ref={register({ required: "This field is required",
                    pattern: {
                        value: NUMBER,
                        message:"Please enter a number"}
                         })} className="form-control form-control-sm shadow-0 rounded" style={{border:"1px solid #ddd", fontSize:"14px"}} placeholder="Enter a number" aria-describedby="radiusHelp"/>
            
                 <div style={{height:"25px"}}>
    
                {errors.radius && <small id="postCodeHelp" class="form-text text-danger text-left mt-0" style={{fontSize:"13px"}}>{errors.radius.message}</small>}
                </div>
                {/* Q2 */}

                {/* Q3 */}
                <div className="text-left text-dark mb-1 mt-2" style={{fontSize:"14px"}}>{count}.3 . How many beds do you require?</div>
                <input  name="number_of_beds"  type="number" 
                ref={register({ 
                    required: "This field is required",
                    message:"Please enter a number" })} className="form-control form-control-sm shadow-0 rounded" style={{border:"1px solid #ddd", fontSize:"14px"}} placeholder="Enter a number" aria-describedby="NumberOfBedsHelp"/>
                                     <div style={{height:"25px"}}>

                {errors.number_of_beds && <small id="postCodeHelp" class="form-text text-danger text-left mt-0" style={{fontSize:"13px"}}>{errors.number_of_beds.message}</small>}
                    </div>
                {/* Q3 */}
                
                <div className="row">
                    <div className="col-6">
                        <div onClick={()=> setStep(step-1)} className="btn btn-block btn-booking-outline rounded">Prev Step</div>
                    </div>
                    <div className="col-6">
                        <button  className="btn btn-block  btn-booking rounded">Next Step</button>
                    </div>
                </div>
                
               
            </form>
        </div>
    )
}

export default Index;