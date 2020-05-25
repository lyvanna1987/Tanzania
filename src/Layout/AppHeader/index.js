import React, {Fragment} from 'react';
import cx from 'classnames';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import HeaderLogo from '../AppLogo';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Header extends React.Component {
    render() {
        let {
            headerBackgroundColor,
            enableMobileMenuSmall,
            enableHeaderShadow
        } = this.props;
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    className={cx("app-header", headerBackgroundColor, {'header-shadow': enableHeaderShadow})}
                    transitionName="HeaderAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <HeaderLogo/>

                    <div className={cx(
                        "app-header__content",
                        {'header-mobile-open': enableMobileMenuSmall},
                    )}>
                        <div className="app-header-left">
                            <div>logo</div>
                        </div>
                        <div className="app-header-right">
                            <Link className="my-1 mx-3 text-body" to="/home">
                                HOME
                            </Link>
                            <Link className="my-1 mx-3 text-body" to="/howTo">
                                HOW IT WORKS
                            </Link>
                            <Link className="my-1 mx-3 text-body" to="/signUp">
                                SIGN UP
                            </Link>
                            <Link className="my-1 mx-3 text-body" to="/search">
                                SEAECH
                            </Link>
                            <Link className="my-1 mx-3 text-body" to="/contact">
                                CONTACT
                            </Link>
                            <Link className="my-1 mx-3" to="/facebook">
                                FACEBOOK
                            </Link>
                            <Link className="my-1 mx-3" to="/twitter">
                                TWITTER
                            </Link>
                            <Link className="my-1 mx-3" to="/telegram">
                                TELEGRAM
                            </Link>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
