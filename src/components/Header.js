import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <ul>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/expenses">Expenses</NavLink></li>
        </ul>
    )
}