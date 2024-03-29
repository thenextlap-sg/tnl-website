// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import * as React from 'react';
import { footerResponsive, useResize } from '../../javascripts';
import '../../stylesheets/footer.css';

export const Footer = () => {
    useResize(footerResponsive);

    return (
        <div id="footer-container">
            <div id="info-container">
                <div id="site-logo">
                    <a href="/">
                        <img id="site-tnl-logo" src="/images/TNL logo_RGB.png" alt="The Next Lap Logo" />
                    </a>
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
                        <a className="h4 hyperlink-black" href="/about">About</a>
                        <div className="sub-sites">
                            <a className="caption hyperlink-black" href="/about#visions">Visions</a>
                            <a className="caption hyperlink-black" href="/about#missions">Missions</a>
                            <a className="caption hyperlink-black" href="/about#values">Values</a>
                            <a className="caption hyperlink-black" href="/about#testimonials">Testimonials</a>
                        </div>
                    </div>
                    <div className="footer-mid sub-site-container">
                        <a className="h4 hyperlink-black" href="/franchise">Franchise</a>
                    </div>
                </div>
                <div className="sites">
                    <div className="sub-site-container">
                        <a className="h4 hyperlink-black" href="/student-care-services">Student <wbr />Care <wbr />Services</a>
                        <div className="sub-sites">
                            <a className="caption hyperlink-black" href="/student-care-services#programme">Programme</a>
                            <a className="caption hyperlink-black" href="/student-care-services#holiday" >Holiday</a>
                            <a className="caption hyperlink-black" href="/student-care-services#activities">Activities</a>
                        </div>
                    </div>
                    <div className="footer-mid sub-site-container">
                        <a className="h4 hyperlink-black" href="/careers">Careers</a>
                    </div>
                </div>
                <div className="sites">
                    <div className="sub-site-container">
                        <a className="h4 hyperlink-black" href="/tuition-centre">Tuition <wbr />Centre</a>
                        <div className="sub-sites">
                            <a className="caption hyperlink-black" href="/tuition-centre#facilities">Facilities</a>
                            <a className="caption hyperlink-black" href="/tuition-centre#maps">Maps</a>
                        </div>
                    </div>
                    <div className="sub-site-container">
                        <a className="h4 hyperlink-black" href="/enrichment">Enrichment</a>
                    </div>
                    <div className="footer-mid sub-site-container">
                        <a className="h4 hyperlink-black" href="/contact-us">Contact <wbr />Us</a>
                    </div>
                </div>
                <div className="footer-large sites">
                    <div className="footer-large sub-site-container">
                        <a className="h4 hyperlink-black" href="/franchise">Franchise</a>
                    </div>
                    <div className="footer-large sub-site-container">
                        <a className="h4 hyperlink-black" href="/careers">Careers</a>
                    </div>
                    <div className="footer-large sub-site-container">
                        <a className="h4 hyperlink-black" href="/contact-us">Contact <wbr />Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
}