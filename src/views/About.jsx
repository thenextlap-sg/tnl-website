// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import React, { useEffect } from 'react';
import { Header, Footer } from './shared';
import { appResponsive, useResize } from '../javascripts';
import { imageDb, contentDb } from '../data';
import '../stylesheets/about.css';

export const About = () => {
    useEffect(() => {
        document.title = 'About Us';
    }, []);

    useResize(appResponsive);

    // Get data
    let set1 = imageDb.filter(e => e['Section'] === 'Other2');
    let set2 = contentDb.filter(e => e['Section'] === 'About1');
    let set3 = contentDb.filter(e => e['Section'] === 'About2');
    let set4 = contentDb.filter(e => e['Section'] === 'About3');
    let set5 = contentDb.filter(e => e['Section'] === 'About4');
    let set6 = imageDb.filter(e => e['Section'] === 'About5');
    let set7 = contentDb.filter(e => e['Section'] === 'About5');

    return <>
        {/* Header */}
        <Header />
        <div className="thumbnail">
            <img className="thumbnail-img" src={`/images/picture/${set1[0].Image}`} alt={set1[0].ImageCaption} />
        </div>

        {/* Intro */}
        <p id="about-title" className="title">About Us</p>
        <div id="about-intro-container" className="main-container">
            <p id="about-intro">
                <span dangerouslySetInnerHTML={{ __html: set2[0].Body }} />
            </p>
            <div id="vision-mission-container">
                <div id="vision-section" className="vision-mission-frame">
                    <h2>{set3[0].Heading}</h2>
                    <p className="caption">{set3[0].Body}</p>
                </div>
                <div id="missions-section" className="vision-mission-frame">
                    <h2>{set4[0].Heading}</h2>
                    <p className="caption">
                        <span dangerouslySetInnerHTML={{ __html: set4[0].Body }} />
                    </p>
                </div>
            </div>
        </div>

        {/* Values */}
        <div style={{ padding: "6.25rem 0rem 0rem" }}>
            <img src="/images/decor/Triangle Red.svg" alt='Graphic' style={{ position: "relative", left: "0px", width: "40vw" }} />
            <span />
            <img src="/images/decor/Triangle Blue.svg" alt='Graphic' style={{ position: "relative", float: "right", right: "0px", width: "40vw" }} />
        </div>
        <h1 id="values-section">Values</h1>
        <div id="value-container" className="main-container">
            {
                set5.map(entry => {
                    return <div className="value-frame" key={entry.ID}>
                        <p className="h3">{entry.Heading}</p>
                        <img className="value-img" src={`/images/picture/${entry.Image}`} alt={entry.ImageCaption} />
                    </div>
                })
            }
        </div>

        {/* Testinomials */}
        <div style={{ height: "12.5rem" }} />
        <div id="test-container" className="main-container" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.50) 100%), url('/images/picture/${set6[0].Image}')` }}>
            <div style={{ padding: "3.75rem 0px 6.25rem" }}>
                <h1 id="test-section">Testimonials</h1>
                <ul className="test-frame">
                    {
                        set7.map(entry => {
                            return <li className="test-quote" key={entry.ID}>
                                <p className="h3">{entry.Heading}</p>
                                <p className="caption">
                                    <span dangerouslySetInnerHTML={{ __html: entry.Body }} />
                                </p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>

        {/* Decors */}
        <div className="decoration">
            <img src="/images/decor/Dot 1 Red.svg" alt='' style={{ position: "absolute", float: "right", right: "1320px", top: "1150px", width: "55px" }} />
            <img src="/images/decor/Dot 2 Blue.svg" alt='' style={{ position: "absolute", left: "1310px", top: "600px", width: "55px" }} />
            <img src="/images/decor/Circle 1 Red.svg" alt='' style={{ position: "absolute", left: "1370px", top: "920px", width: "130px", transform: "rotate(184.841deg)" }} />
        </div>

        {/* Footer */}
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}