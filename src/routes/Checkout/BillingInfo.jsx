import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {Typeahead} from 'react-bootstrap-typeahead'
import { citiesSearch } from 'services';

function Index ({setStep}) {
    const { register, handleSubmit, errors } = useForm()
    const [cities, setCities] = useState([])
    const onSubmit = data => {console.log(data)
        // setStep(parseInt(data));
    }
    const searchCity = (value)=>{
        citiesSearch({name:value})
        .then(res => {
            try{
                setCities(res);
            }
            catch{
                console.log("error get cities")
            }
        })
    }
    console.log(cities)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">                  
                    
                    <div className="col-12 mb-3">
                        <span className="font-14">First Line Address :</span>
                        <input name="first_line_of_address" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your First Line Address"/>
                        <small className="text-danger font-14">{errors.first_line_of_address && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 mb-3">
                        <span className="font-14">Second Line Address(Optional) :</span>
                        <input name="second_line_of_address" ref={register({  })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Second Line Address"/>
                        <small className="text-danger font-14">{errors.second_line_of_address && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 mb-3">
                        <span className="font-14">Country :</span>
                        <div className="my-custom-select font-14">
                            <Typeahead
                                id="country"
                                name="country"
                                onChange={(selected) => {
                                    // Handle selections...
                                }}
                                options={[ "number1", "number2" ]}
                                style={{fontSize: "14px"}}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                        <span className="font-14">City/Town :</span>
                        <div className="my-custom-select font-14">
                            <Typeahead
                            onInputChange={(e)=> searchCity(e)}
                                id="city"
                                name="city"
                                onChange={(selected) => {
                                    // Handle selections...
                                }}
                                labelKey={'title'}
                                options={cities}
                                style={{fontSize: "14px"}}
                            />
                        </div>
                        <small className="text-danger font-14">{errors.city && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                        <span className="font-14">post code :</span>
                        <input name="post_code" ref={register({ required: true })} className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="Your Second Line Address"/>
                        <small className="text-danger font-14">{errors.post_code && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 mt-3 mb-3">
                        <div className="my-custom-checkbox custom-control custom-checkbox d-flex align-items-center">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                            <label className="custom-control-label font-14" htmlFor="customControlAutosizing">My billing is the same as my  account address.</label>
                        </div>
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