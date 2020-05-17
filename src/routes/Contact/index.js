import React from 'react';
import Map from './MarkerClustererEx';
function Index() {

    return (
       <div>
  <section class="page-section section-contact-one">
        <div class="overlay">
            <div class="container ">
                <div class="row pt-5">
                    <div class="col-lg-12 text-center">
                        <p class="heading-default-info text-info text-center ">GET IN TOUCH</p>
                    </div>
                    <div class="col-lg-6 offset-lg-3">
                        <div class="title heading-lg text-center">
                            Contac<font color="3094c3">t U</font>s
                        </div>
                    </div>
                    <div class="col-lg-12 text-center mt-4">
                        <p class="text-xs">Our friendly support desk is here to help you with any concerns or questions.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="title  heading-sm ">
                            FIND US ON MAP
                        </div>
                        <div id="googleMap" class="mt-3" >
                            <Map/>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-12 mb-4">
                                <div class="title  heading-sm ">
                                    CONTACT INFORMATION
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="title heading-xs text-info mb-2">
                                    E-MAIL
                                </div>
                                <a class="text-sm text-muted"  href="mailto:info@perpersonpernight.co.uk">info@perpersonpernight.co.uk</a>
                            </div>
                            <div class="col-lg-12">
                                <div class="title heading-xs text-info mb-2">
                                    CALL US DIRECTLY
                                </div>
                                <a class="text-sm text-muted" href="tel:+44 7377172145">+44 7500344298</a>
                            </div>
                            {/* <div class="col-lg-12">
                                <div class="title heading-xs text-info mb-2">
                                    ADDRESS
                                </div>
                                <p class="text-sm text-muted">
                                    *15 Ray Drive, Maidenhead, SL6 8NG
                                </p>
                                <p class="text-sm text-muted">
                                    *526 / 526A / 526A STUDIO, Farnham Road, Slough, SL2 1HX
                                </p>
                                <p class="text-sm text-muted">
                                    *70 Burnham Lane, Burnham, Slough, SL1 6LS
                                </p>
                            </div> */}
                            <div class="col-lg-12">
                                <div class="title heading-xs text-info mb-2">
                                    GET CONNECTED
                                </div>
                                <a href="https://www.facebook.com/perpersonpernight/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                &nbsp;&nbsp;
                                <a href="https://www.linkedin.com/company/jv-hub/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                                &nbsp;&nbsp;
                                <a href="https://www.instagram.com/perpersonpernight" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-lg-12 text-center">
                        <a href="https://www.google.com/maps/dir//Zuckerlwerkstatt,+Herrengasse+6-8,+1010+Wien,+Austria/@48.2091327,16.3314319,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x476d07984a3f9ba1:0xf73da55d99bf589!2m2!1d16.366537!2d48.209138!3e0?shorturl=1" target="_blank" class="btn btn-info round" role="button">
                            <i class="fa fa-bookmark fa-fw" aria-hidden="true"></i>
                            <span>Get Directions</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </section>
       </div>
    )
}

export default Index;