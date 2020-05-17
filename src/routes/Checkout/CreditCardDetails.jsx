import React from 'react' 
import { useForm } from 'react-hook-form';

function Index({setStep}) {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        setStep(2);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12 mb-2">
                        <span className="font-14">16 Digit Card Number :</span>
                        <input type="number" name="card_number" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="0000 0000 0000 0000"  ref={register({ required: true })}/>
                        <small className="text-danger font-14">{errors.card_number && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 col-md-6">
                        <span className="font-14">Expire Date :</span>
                        <input type="text" name="expire_date" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="00/00"  ref={register({ required: true })}/>
                        <small className="text-danger font-14">{errors.expire_date && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 col-md-6">
                        <span className="font-14">CVV :</span>
                        <input type="text" name="cvv" className="form-control border-1-e5 font-14 rounded shadow-0 mt-1" placeholder="0000"  ref={register({ required: true })}/>
                        <small className="text-danger font-14">{errors.cvv && <span>This field is required</span>}</small>
                    </div>

                    <div className="col-12 mt-3">
                        <div className="my-custom-checkbox custom-control custom-checkbox d-flex align-items-center">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                            <label className="custom-control-label font-14" htmlFor="customControlAutosizing">I would like to save my card for future bookings .</label>
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