import React from 'react';


import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (

    <ul className={classes.NavigationItems}>

        {/* USER NAVIGATION */}
        {!localStorage.getItem('data')
            ? <NavigationItem link="/" exact>Home</NavigationItem>
            : <NavigationItem link="/" exact>Home</NavigationItem>}
        {/* USER NAVIGATION END */}


        {/* ADMIN NAVIGATION START */}
        {!localStorage.getItem('AdminData')
            ? <NavigationItem link="/adminauth">Admin Portal</NavigationItem>
            : null}
        {/* ADMIN NAVIGATION END */}


        {/* USER NAVIGATION START */}
        {!localStorage.getItem('data')
            ? <NavigationItem link="/userauth">User Portal</NavigationItem>
            : <NavigationItem link> <div class="btn-group">
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Welcome {localStorage.getItem('data')} <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li className="li"><NavigationItem link="/userprofile">Profile</NavigationItem></li>
                    <li className="li"><NavigationItem link="/markattendence">Mark Attendence</NavigationItem></li>
                    <li className="li"><NavigationItem link="/leaverequest">Leave Request</NavigationItem></li>
                    <li className="li"><NavigationItem link="/viewattendence">View Attendence</NavigationItem></li>
                    <li role="separator" class="divider"></li>
                    <li className="li"><NavigationItem link="/userlogout">Logout</NavigationItem></li>
                </ul>
            </div></NavigationItem>}
        {/* USER NAVIGATION END */}


        {/* ADMIN NAVIGATION START */}

        {!localStorage.getItem('AdminData')
            ? null
            : <NavigationItem link> <div class="btn-group">
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Welcome {localStorage.getItem('AdminData')} <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li className="li"><NavigationItem link="/adminprofile">Profile</NavigationItem></li>
                    <li className="li"><NavigationItem link="/insert">Add new user</NavigationItem></li>
                    <li className="li"><NavigationItem link="/view">View users</NavigationItem></li>
                    <li className="li"><NavigationItem link="/viewleavesheet">Leave Requests</NavigationItem></li>
                    <li className="li"><NavigationItem link="/viewattendenceadmin">Attendence Sheet</NavigationItem></li>
                    <li className="li"><NavigationItem link="/checkspecificstudentattendence">Specific Student Report</NavigationItem></li>
                    <li role="separator" class="divider"></li>
                    <li className="li"><NavigationItem link="/adminlogout">Logout</NavigationItem></li>
                </ul>
            </div></NavigationItem>}
        {/* ADMIN NAVIGATION END */}

    </ul>
);


export default navigationItems;