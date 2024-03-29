// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import React from 'react';
import { Link } from 'react-router-dom';
import { headerSticky, headerResponsive, headerOnclick, useResize, useScroll } from '../../javascripts';
import '../../stylesheets/header.css';

export const Header = () => {
    useResize(headerResponsive);
    useScroll(headerSticky);

    return (
        <nav>
            <div id="nav-container">
                <Link to="/">
                    <img id="tnl-logo" src="/images/TNL logo_RGB.png" alt="'The Next Lap Logo" />
                </Link>

                <div id="nav-menu" onClick={headerOnclick}></div>

                <div id="sidebar-container">
                    <div id="nav-list">
                        <Link className="nav-item nav-text h4" to="/about">About</Link>
                        <div className="nav-item" id="dropdown">
                            <p id="header-service" className="h4 nav-text">Services &nbsp;</p>
                            <div id="dropdown-content">
                                <Link className="nav-subtext" to="/student-care-services">
                                    <p className="h4">Student Care Services</p>
                                </Link>
                                <Link className="nav-subtext" to="/tuition-centre">
                                    <p className="h4">Tuition Centre</p>
                                </Link>
                                <Link className="nav-subtext" to="/enrichment">
                                    <p className="h4">Enrichment</p>
                                </Link>
                            </div>
                        </div>
                        <Link className="nav-item nav-text h4" to="/franchise">Franchise</Link>
                        <Link className="nav-item nav-text h4" to="/careers">Careers</Link>
                    </div>
                    <span></span>
                    <div id="cta-container">
                        <Link id="nav-cta" className="nav-text cta" to="/contact-us">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}