import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {
    // ... want to add animation stuff before doing the return, so we'll return it as a callback
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.isSideDrawerOpen) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxiliary>
            <Backdrop show={props.isSideDrawerOpen} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            {/*<div className={[classes.SideDrawer, props.open ? classes.Open : classes.Close].join(' ')}>*/}
            {/*<div className={classes.SideDrawer}>*/}
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;