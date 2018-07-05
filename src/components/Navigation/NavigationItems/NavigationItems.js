import React from 'react';
import classes from './NaviationItems.css';
import NavItem from "./NavItem/NavItem";

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavItem link={'/'} active>Sandwich Builder</NavItem>
            <NavItem link={'/'}>Checkout</NavItem>
        </ul>
    );
};

export default navigationItems;