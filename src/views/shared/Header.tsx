// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import * as React from 'react';
import { headerSticky, headerResponsive, headerOnclick, useResize, useScroll } from '../../javascripts';
import '../../stylesheets/header.css';

export const Header = () => {
    useResize(headerResponsive);
    useScroll(headerSticky);

    return (
        <nav>
            <div id="nav-container">
                <a href="/">
                    <img id="tnl-logo" src="/public/images/TNL logo_RGB.png" alt="'The Next Lap Logo" />
                </a>

                <div id="nav-menu" onClick={headerOnclick}></div>

                <div id="sidebar-container">
                    <div id="nav-list">
                        <a className="nav-item nav-text h4" href="/about">About</a>
                        <div className="nav-item" id="dropdown">
                            <p id="header-service" className="h4 nav-text">Services &nbsp;</p>
                            <div id="dropdown-content">
                                <a className="nav-subtext" href="/student-care-services">
                                    <p className="h4">Student Care Services</p>
                                </a>
                                <a className="nav-subtext" href="/tuition-centre">
                                    <p className="h4">Tuition Centre</p>
                                </a>
                                <a className="nav-subtext" href="/enrichment">
                                    <p className="h4">Enrichment</p>
                                </a>
                            </div>
                        </div>
                        <a className="nav-item nav-text h4" href="/franchise">Franchise</a>
                        <a className="nav-item nav-text h4" href="/careers">Careers</a>
                    </div>
                    <span></span>
                    <div id="cta-container">
                        <a id="nav-cta" className="nav-text cta" href="/contact-us">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}