import React from "react";
import Moods from './moods'

import logo from "../../images/jt.svg"

const SideBar = (props) => {
    const sites = [
        ["/", "Startseite"],
        ["/blog", "Blog"],
        ["/ueber-mich", "Über mich"],
        ["/kontakt", "Kontakt"]
    ];

    return (
        <>
            <div className="sidebar">
                <div className="sidebar_nav" >
                    <img className="logo" style={{ width: '200px' }} src={logo} alt="JT1 Logo" />
                    <h3>Navigation</h3>
                    <ul>
                        {sites.map((val, key) => (<li><a key={key} id={"menu_" + key} className={(props.path === val[0] || (props.path.includes("/blog") && val[0] === "/blog")) ? "menu-item active" : "menu-item"} href={val[0]}>{val[1]}</a></li>))}
                    </ul>
                    <hr />
                </div>
                <Moods />
            </div>
        </>
    );
};

export default SideBar;
