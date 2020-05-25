import { Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loaders'

import {
    ToastContainer,
} from 'react-toastify';

const LandingPage = lazy(() => import('../../Pages/LandingPage'));

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
                            Please wait while we load Category Page
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/" component={LandingPage}/>
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;