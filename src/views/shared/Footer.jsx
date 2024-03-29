// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import React from 'react';
import { Link } from 'react-router-dom';
import { footerResponsive, useResize } from '../../javascripts';
import '../../stylesheets/footer.css';

export const Footer = () => {
    useResize(footerResponsive);

    return (
        <div id="footer-container">
            <div id="info-container">
                <div id="site-logo">
                    <Link to="/">
                        <img id="site-tnl-logo" src="/images/TNL logo_RGB.png" alt="The Next Lap Logo" />
                    </Link>
                </div>
                <div className="info">
                    <p className="h4">The Next Lap Edu Group</p>
                    <p className="caption">Email:&emsp;
                        <a className="hyperlink-blue" href="mailto:enquiry@thenextlap.com.sg">
                            enquiry@thenextlap.com.sg
                        </a>
                    </p>
                    <div className="info-tel">
                        <p className="caption">Vann:&emsp;
                            <a className="hyperlink-blue" href="tel:+6587337199">
                                +65 8733 7199
                            </a>
                        </p>
                        <p className="caption">Regina:&emsp;
                            <a className="hyperlink-blue" href="tel:+6598343375">
                                +65 9834 3375
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <span></span>
            <div id="site-container">
                <div className="sites">
                    <div className="sub-site-container">
                        <Link className="h4 hyperlink-black" to="/about">About</Link>
                        <div className="sub-sites">
                            <Link className="caption hyperlink-black" to="/about#visions">Visions</Link>
                            <Link className="caption hyperlink-black" to="/about#missions">Missions</Link>
                            <Link className="caption hyperlink-black" to="/about#values">Values</Link>
                            <Link className="caption hyperlink-black" to="/about#testimonials">Testimonials</Link>
                        </div>
                    </div>
                    <div className="footer-mid sub-site-container">
                        <Link className="h4 hyperlink-black" to="/franchise">Franchise</Link>
                    </div>
                </div>
                <div className="sites">
                    <div className="sub-site-container">
                        <Link className="h4 hyperlink-black" to="/student-care-services">Student <wbr />Care <wbr />Services</Link>
                        <div className="sub-sites">
                            <Link className="caption hyperlink-black" to="/student-care-services#programme">Programme</Link>
                            <Link className="caption hyperlink-black" to="/student-care-services#holiday" >Holiday</Link>
                            <Link className="caption hyperlink-black" to="/student-care-services#activities">Activities</Link>
                        </div>
                    </div>
                    <div className="footer-mid sub-site-container">
                        <Link className="h4 hyperlink-black" to="/careers">Careers</Link>
                    </div>
                </div>
                <div className="sites">
                    <div className="sub-site-container">
                        <Link className="h4 hyperlink-black" to="/tuition-centre">Tuition <wbr />Centre</Link>
                        <div className="sub-sites">
                            <Link className="caption hyperlink-black" to="/tuition-centre#facilities">Facilities</Link>
                            <Link className="caption hyperlink-black" to="/tuition-centre#maps">Maps</Link>
                        </div>
                    </div>
                    <div className="sub-site-container">
                        <Link className="h4 hyperlink-black" to="/enrichment">Enrichment</Link>
                    </div>
                    <div className="footer-mid sub-site-container">
                        <Link className="h4 hyperlink-black" to="/contact-us">Contact <wbr />Us</Link>
                    </div>
                </div>
                <div className="footer-large sites">
                    <div className="footer-large sub-site-container">
                        <Link className="h4 hyperlink-black" to="/franchise">Franchise</Link>
                    </div>
                    <div className="footer-large sub-site-container">
                        <Link className="h4 hyperlink-black" to="/careers">Careers</Link>
                    </div>
                    <div className="footer-large sub-site-container">
                        <Link className="h4 hyperlink-black" to="/contact-us">Contact <wbr />Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}