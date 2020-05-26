import { Route, Redirect, Switch} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loaders'

import {
    ToastContainer,
} from 'react-toastify';

const LandingPage = lazy(() => import('../../Pages/LandingPage'))
const HowItWroks = lazy(() => import('../../Pages/HowItWorks'))
const SignUp  = lazy(()=>import('../../Pages/Auth/SignUp'))
const AppMain = () => {

    return (
        <Fragment>
            
            {/* Food Category */}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale-party"/>
                        </div>
                        <h6 className="mt-3">
                            Loading...
                        </h6>
                    </div>
                </div>
            }>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/howTo" component={HowItWroks} />
                </Switch>
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;