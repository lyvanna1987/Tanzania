import React, {Fragment} from 'react';

class AppFooter extends React.Component {
    render() {

        return (
            <Fragment>
                <div className="app-footer">
                    <div className="app-footer__inner">
                        <div className="maincontent d-flex flex-wrap justify-content-between">
                            <span style={{color: '#ffffff'}}>©2020 The Muzik Network</span>
                            <span style={{float: 'right', color: '#ffffff'}}> info@themuziknetwork.com | Dar es salaam, Tanzania </span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )}
}

export default AppFooter;