import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () =>{
    return(
        <div className={classes.NavigationItems}>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>Products</NavigationItem>
            <NavigationItem>About Us</NavigationItem>
            <NavigationItem>Log In</NavigationItem>
        </div>
    );
};

export default NavigationItems;