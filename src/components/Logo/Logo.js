import React from 'react';
import sammyLogo from '../../assets/img/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={sammyLogo} alt="sammy_logo"/>
        </div>
    );
};

export default logo;