// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './shared';
import { appResponsive, useResize } from '../javascripts';
import '../stylesheets/careers.css';

interface CareersProps {
    sectionImg: { [key: string]: any }[];
    contentDb: { [key: string]: any }[];
};

export const Careers: React.FC<CareersProps> = ({
    sectionImg,
    contentDb
}) => {
    useEffect(() => {
        document.title = 'Careers';
    }, []);

    useResize(appResponsive);

    const careerToggle = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if (!e.currentTarget) return;
        const captionElement = e.currentTarget.querySelector(".caption");
        if (captionElement) captionElement.classList.toggle("active");
    };

    // Get data
    let set1 = sectionImg.filter((e: { [key: string]: any }) => e['Section'] === 'Other2');
    let set2 = contentDb.filter((e: { [key: string]: any }) => e['Section'] === 'Career1');

    return <>
        {/* Header */}
        <Header />
        <div className="thumbnail">
            <img className="thumbnail-img" src={`/images/picture/${set1[0].URL}`} alt={set1[0].Caption} />
        </div>

        {/* Intro */}
        <p id="career-title" className="title">Careers</p>
        <div id="career-container" className="main-container">
            <div id="position-container">
                <h2 style={{ padding: "0rem 1.25rem" }}>Open Positions</h2>
                <ul id="position-frame">
                    {
                        set2.map((entry: { [key: string]: any }) => {
                            return <li className="position-list" key={entry.ID} onClick={careerToggle}>
                                <div className="position-item">
                                    <p className="h3" style={{ lineHeight: "0px" }}>{entry.Heading}</p>
                                    <p className="caption active"><span dangerouslySetInnerHTML={{ __html: entry.Body }} /></p>
                                </div>
                                <span></span>
                                <div className="position-arrow"></div>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div id="career-explore">
                <p>To explore more about the opportunities, kindly send your application to:</p>
                <a href="mailto:enquiry@thenextlap.com.sg" className="button button-red">enquiry@thenextlap.com.sg</a>
                <p>or <a className="hyperlink-blue" href="/contact-us">contact us</a>.</p>
            </div>
        </div>

        {/* Decors */}
        <div className="decorations">
            <img src="images/Chem Blue.svg" alt='' style={{ position: "absolute", float: "right", right: "1300px", top: "1050px", width: "102.567px", transform: "rotate(20.282deg)" }} />
            <img src="images/Tag Yellow.svg" alt='' style={{ position: "absolute", left: "1218px", top: "600px", width: "55.724px", transform: "rotate(24.148deg)" }} />
            <img src="images/Ghim Red.svg" alt='' style={{ position: "absolute", left: "1400px", top: "750px", width: "47.031px", transform: "rotate(28.359deg)" }} />
            <img src="images/Ghim Red.svg" alt='' style={{ position: "absolute", left: "1054px", top: "1250px", width: "61.798px", transform: "rotate(-54.458deg)" }} />
        </div>

        {/* Footer */}
        <div style={{ height: "12.5rem" }} />
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}