import React from 'react';
import Logo from '../../Logo/Logo'
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import {Redirect} from 'react-router-dom'
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.showDrawerToggle} />
        <div className={classes.Logo} onClick={<Redirect to="/"/>}><Logo/></div>
        <nav className={classes.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;