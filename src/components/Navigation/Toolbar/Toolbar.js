import React from 'react';
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import MenuButton from "./DrawerToggle/DrawerToggle";

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>

            {/*<div>MENU - open drawer</div>*/}
            <MenuButton drawerToggleClicked={props.drawerToggleClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;