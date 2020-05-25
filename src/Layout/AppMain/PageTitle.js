import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import FoodCategoryTitle from './PageTitles/FoodCategoryTitle'
import FoodsTitle from './PageTitles/FoodsTitle'
import IngredientsTitle from './PageTitles/IngredientsTitle'
import OrdersTitle from './PageTitles/OrdersTitle'
import ComboMealTitle from './PageTitles/ComboMealTitle'

class PageTitle extends Component {

    handleCreate = (dt) => {
        this.props.handleCreate(dt)
    }

    render() {
        let {
            enablePageTitleIcon,
            enablePageTitleSubheading,

            heading,
            icon,
            subheading
        } = this.props;

        var arr = [<FoodCategoryTitle handleCreate={this.handleCreate} />, 
                    <FoodsTitle handleCreate={this.handleCreate} />, 
                    <IngredientsTitle handleCreate={this.handleCreate} />, 
                    <OrdersTitle handleCreate={this.handleCreate} />, 
                    <ComboMealTitle handleCreate={this.handleCreate} />]

        return (
            <div className="app-page-title">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div
                            className={cx("page-title-icon", {'d-none': !enablePageTitleIcon})}>
                            <i className={icon}/>
                        </div>
                        <div>
                            {heading}
                            <div
                                className={cx("page-title-subheading", {'d-none': !enablePageTitleSubheading})}>
                                {subheading}
                            </div>
                        </div>
                    </div>
                    <div className="page-title-actions">
                        {arr[this.props.pageNo]}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);