import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";


function App ({ match }){
    return(
        <div>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path={`${match.url}`} component={lazy(()=> import('./Home'))} />
                    <Route exact path={`${match.url}lists`} component={lazy(()=> import('./Lists'))} />
                    <Route exact path={`${match.url}about`} component={lazy(()=> import('./About'))} />
                    <Route exact path={`${match.url}contact`} component={lazy(()=> import('./Contact'))} />
                    <Route exact path={`${match.url}checkout/:id`} component={lazy(()=> import('./Checkout'))} />
                    <Route exact path={`${match.url}nodata`} component={lazy(()=> import('./NoData'))} />
                    <Route exact path={`${match.url}bookingcart`} component={lazy(()=> import('./BookingCart'))} />

                </Switch>
            </Suspense>    
        </div>
    );
}

export default App;