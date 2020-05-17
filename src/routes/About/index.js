import React from 'react';

function Index() {

    return (
       <div>
        <section className="page-section section-about-one">
        <div className="container ">
            <div className="row pt-5">
                <div className="col-lg-12 text-center">
                    <span className="title heading-lg text-center">   About us</span>
                </div>
            </div>
        </div>
    </section>
    <section className="page-section section-about-two">
        <div className="overlay py-5">
            <div className="container ">
                <div className="row ">
                    <div className="col-lg-12">
                        <p className="heading-default-info text-info text-center ">WE UNDERSTAND WHAT CONTRACTORS NEED</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="title heading-lg text-center">
                            ABOUT US
                        </div>
                    </div>
                </div>
                <div className="row  mt-4">
                    <div className="col-lg-12 text-center">
                        <a className="btn btn-info round">Contact us</a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-8 offset-2">
                        <div className="clearfix">
                            <p>The UK economy is built on the sweat of these hard-working men and women, but they don’t ask for much in return. Just a comfortable bed, safe parking, reliable utilities, and perhaps a couple of cold beers in the fridge.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 offset-lg-2">
                        <div className="clearfix">
                            <p className="heading-default-info text-info ">WE KNOW THE STRUGGLE</p>
                            <p>Every Sunday night thousands of contractors pack their bags and prepare to travel the length and breadth of the country. Their days start early and finish late, and regularly involve physically demanding and even dangerous working Conditions.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="clearfix">
                            <p className="heading-default-info text-info ">WHY WE EXIST</p>
                            <p>PerPersonPerNight exists to ensure they get these things. Not as and when they get lucky, but every single day of the year.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="page-section section-about-three">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5 hovereffect" >
                    <img className="img-fluid"  src={require("../../assets/images/bg/theo.jpg")} />
                </div>
                <div className="col-lg-7 bg-black">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-lg-12 ">
                                <span className="title text-white heading-default text-center">PPPN Director</span>
                            </div>
                        </div>
                        <div className="row mt-3 ">
                            <p className="text-muted">Were a family based business, who work specifically with contractors, and over the time of operating our business, we've come to understand what contractors need, like and want. That's why we don't have sofa beds, we don’t have double beds, we accommodate contractors and specialise in working with their teams and employees to ensure their experience working away from home is the best it could possibly be.</p>
                            <button className="btn btn-light mb-3">Contact us</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
    <section className="page-section section-about-five">
        <div className="overlay ">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-center text-muted ">
                            SOCIAL MEDIA
                        </p>
                        <div className="title heading-default text-center">
                            Get Connected

                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <p className="text-xs text-center">Connect with us to stay up to date with the latest offers & promotions</p>
                    </div>
                </div>
                <div className="row mt-4 pb-4">
                    <div className="col-lg-12 text-center">
                        <button type="button" className="mx-2 btn btn-dark btn-circle btn-xl"><i className="fa fa-lg fa-twitter"></i></button>
                        <button type="button" className="mx-2 btn btn-dark btn-circle btn-xl"><i className="fa fa-lg fa-facebook"></i></button>
                        <button type="button" className="mx-2 btn btn-dark btn-circle btn-xl"><i className="fa fa-lg fa-instagram"></i></button>

                    </div>

                </div>
            </div>
        </div>
    </section>
       </div>
    )
}

export default Index;