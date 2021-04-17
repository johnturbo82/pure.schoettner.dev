import React from "react";
import Moods from './moods'

import logo from "../../images/jt.svg"

const SideBar = (props) => {
    return (
        <div className="overlay">
            <div className="sidebar">
                <div className="sidebar_nav" >
                    <img style={{width: '100px'}} className="logo" src={logo} alt="JT1 Logo" /><br />
                    <a id="home" className={(props.path === "/") ? "menu-item active" : "menu-item"} href="/">Home</a><br />
                    <a id="blog" className={(props.path === "/blog" || props.path.includes("/blog")) ? "menu-item active" : "menu-item"} href="/blog">Blog</a><br />
                    <a id="about" className={(props.path === "/about") ? "menu-item active" : "menu-item"} href="/about">About</a><br />
                    <a id="contact" className={(props.path === "/contact") ? "menu-item active" : "menu-item"} href="/contact">Contact</a>
                </div>
                <Moods />
            </div>
        </div>
    );
};

export default SideBar;