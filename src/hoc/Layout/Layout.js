import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

    const [showSideDrawer, setshowSideDrawer] = useState(false);

    const showSideDrawerClosedHandler = () => {
        setshowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setshowSideDrawer(!showSideDrawer);
    }

    return (

        <Aux>
        <Toolbar
            isAuth={props.isAuthenticated}
            showDrawerToggle={sideDrawerToggleHandler} />

        <SideDrawer
            isAuth={props.isAuthenticated}
            closed={showSideDrawerClosedHandler}
            open={showSideDrawer}
        />

        <main className={classes.Layout}>

            {props.children}

        </main>
    </Aux>
);
}

const mapStateToProps = state => {
return {
isAuthenticated: state.auth.token !== null,
}
}

export default connect(mapStateToProps)(Layout);