import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () =>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>Products</NavigationItem>
            <NavigationItem>About Us</NavigationItem>
            <NavigationItem>Log In</NavigationItem>
            <NavigationItem>Register</NavigationItem>
        </ul>
    );
};

export default NavigationItems;