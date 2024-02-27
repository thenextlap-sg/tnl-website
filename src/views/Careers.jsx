import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './shared';
import { appResponsive, useResize } from '../javascripts';
import { imageDb, contentDb } from '../data';
import '../stylesheets/careers.css';

export const Careers = () => {
    useEffect(() => {
        document.title = 'Careers';
    }, []);

    useResize(appResponsive);

    const careerToggle = (e) => {
        if (!e.currentTarget) return;
        e.currentTarget.querySelector(".caption").classList.toggle("active");
    };

    // Get data
    let set1 = imageDb.filter(e => e['Section'] === 'Other2');
    let set2 = contentDb.filter(e => e['Section'] === 'Career1');

    return <>
        {/* Header */}
        <Header />
        <div className="thumbnail">
            <img className="thumbnail-img" src={`/images/picture/${set1[0].Image}`} alt={set1[0].ImageCaption} />
        </div>

        {/* Intro */}
        <p id="career-title" className="title">Careers</p>
        <div id="career-container" className="main-container">
            <div id="position-container">
                <h2 style={{ padding: "0rem 1.25rem" }}>Open Positions</h2>
                <ul id="position-frame">
                    {
                        set2.map(entry => {
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
                <p>or <Link className="hyperlink-blue" to="/contact-us">contact us</Link>.</p>
            </div>
        </div>

        {/* Decors */}
        <div className="decorations">
            <img src="/images/decor/Chem Blue.svg" alt='' style={{ position: "absolute", float: "right", right: "1300px", top: "1050px", width: "102.567px", transform: "rotate(20.282deg)" }} />
            <img src="/images/decor/Tag Yellow.svg" alt='' style={{ position: "absolute", left: "1218px", top: "600px", width: "55.724px", transform: "rotate(24.148deg)" }} />
            <img src="/images/decor/Ghim Red.svg" alt='' style={{ position: "absolute", left: "1400px", top: "750px", width: "47.031px", transform: "rotate(28.359deg)" }} />
            <img src="/images/decor/Ghim Red.svg" alt='' style={{ position: "absolute", left: "1054px", top: "1250px", width: "61.798px", transform: "rotate(-54.458deg)" }} />
        </div>

        {/* Footer */}
        <div style={{ height: "12.5rem" }} />
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}