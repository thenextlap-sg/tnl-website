// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import React, { useEffect, useState } from 'react';
import { Header, Footer } from './shared';
import { imageDb, contentDb } from '../data';
import '../stylesheets/services.css';

export const Services = () => {
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        document.title = 'Student Care Services';
    }, []);

    function getNextImg() {
        return imgIndex === set8.length - 1 ? 0 : imgIndex + 1;
    }
    function getPrevImg() {
        return imgIndex === 0 ? set8.length - 1 : imgIndex - 1;
    }

    // Get data
    let set1 = imageDb.filter(e => e['Section'] === 'Other2');
    let set2 = contentDb.filter(e => e['ID'] === 19);
    let set3 = imageDb.filter(e => e['Section'] === 'Service1');
    let set4 = contentDb.filter(e => e['ID'] === 20);
    let set5 = contentDb.filter(e => e['ID'] === 21);
    let set6 = imageDb.filter(e => e['Section'] === 'Service2');
    let set7 = contentDb.filter(e => e['ID'] === 22);
    let set8 = imageDb.filter(e => e['Section'] === 'Service3');
    let set9 = contentDb.filter(e => e['ID'] === 23);
    let set10 = contentDb.filter(e => e['ID'] === 24);
    let set11 = contentDb.filter(e => e['Section'] === 'Service5');

    return <>
        {/* Header */}
        <Header />
        <div className="thumbnail">
            <img className="thumbnail-img" src={`/images/picture/${set1[0].Image}`} alt={set1[0].ImageCaption} />
        </div>

        {/* Intro */}
        <p id="service-title" className="title">Student Care Services</p>
        <div className="service-container main-container">
            <p id="intro-text-1" className="service-intro-text">
                <span dangerouslySetInnerHTML={{ __html: set2[0].Body }} />
            </p>
            <div id="service-intro-frame">
                <img id="service-intro-img" src={`/images/picture/${set3[0].Image}`} alt={set3[0].ImageCaption} />
                <p className="caption" style={{ textAlign: "center" }}>{set3[0].ImageCaption}</p>
            </div>
            <p id="intro-text-2" className="service-intro-text">{set4[0].Body}</p>
        </div>

        {/* Program */}
        <div style={{ height: "12.5rem" }}></div>
        <div className="service-container main-container" style={{ background: "var(--blue)", padding: "6.25rem 6.25rem" }}>
            <h1 style={{ color: "var(--white)" }}>Programme</h1>
            <p className="program-text">
                <span dangerouslySetInnerHTML={{ __html: set5[0].Body }} />
            </p>
            <div id="program-frame">
                <img id="program-img" src={`/images/picture/${set6[0].Image}`} alt={set6[0].ImageCaption} />
                <p className="caption" style={{ color: "var(--white)" }}>{set6[0].ImageCaption}</p>
            </div>
            <p className="program-text">{set7[0].Body}</p>
        </div>

        {/* Holiday */}
        <div style={{ height: "6.25rem" }}></div>
        <ul id='holiday-content'>
            {
                set8.map(entry => {
                    return <li key={entry.ID}>
                        <p className="holiday-content-title">{entry.ImageCaption}</p>
                        <p className="holiday-content-img">{`/images/picture/${entry.Image}`}</p>
                    </li>
                })
            }
        </ul>
        <div className="service-container main-container" style={{ width: "100vw" }}>
            <h1>Holiday Programme</h1>
            <p id="holiday-text">
                <span dangerouslySetInnerHTML={{ __html: set9[0].Body }} />
            </p>
            <div id="holiday-frame">
                <div 
                    id="holiday-left" 
                    className="holiday-sub-img"
                    onClick={() => setImgIndex(getPrevImg)}
                    style={{ backgroundImage: `url('/images/picture/${set8[getPrevImg()].Image}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <button 
                    id="holiday-left-button" 
                    className="button holiday-button" 
                    onClick={() => setImgIndex(getPrevImg)}>
                        &lt;
                </button>

                <div id="holiday-img">
                    <div 
                        id="holiday-center" 
                        style={{ backgroundImage: `url('/images/picture/${set8[imgIndex].Image}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <p id="holiday-center-text" className="caption">{set8[imgIndex].ImageCaption}</p>
                </div>

                <div 
                    id="holiday-right" 
                    className="holiday-sub-img"
                    onClick={() => setImgIndex(getNextImg)}
                    style={{ backgroundImage: `url('/images/picture/${set8[getNextImg()].Image}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <button 
                    id="holiday-right-button" 
                    className="button holiday-button" 
                    onClick={() => setImgIndex(getNextImg)}>
                        &gt;
                </button>
            </div>
        </div>

        {/* Activities */}
        <div style={{ height: "12.5rem" }}></div>
        <div id="activity-container" className="main-container">
            <h1 style={{ color: "var(--white)" }}>Actitivities</h1>
            <div id="activity-frame">
                <p id="activity-text">
                    <span dangerouslySetInnerHTML={{ __html: set10[0].Body }} />
                </p>
                <ul id="activity-img-frame">
                    {
                        set11.map(entry => {
                            return <li 
                                key={entry.ID}
                                className="activity-img" 
                                style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.50) 100%), url('/images/picture/${entry.Image}')` }}>
                                    <p className="h3" style={{ margin: "0px", color: "var(--white)", textTransform: "uppercase" }}>{entry.Heading}</p>
                                    <p className="h4" style={{ color: "var(--white)" }}>{entry.Body}</p>    
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>

        {/* Decors */}
        <div className="decorations">
            {/* Left */}
            <img src="/images/decor/Pencil Blue.svg" alt='' style={{ position: "absolute", float: "right", right: "1300px", top: "900px", width: "90px", transform: "rotate(5.126deg)" }} />
            <img src="/images/decor/Ghim Red.svg" alt='' style={{ position: "absolute", float: "right", right: "1320px", top: "1750px", width: "70px", transform: "rotate(-34.302deg)" }} />
            <img src="/images/decor/Dot 1 White.svg" alt='' style={{ position: "absolute", float: "right", right: "1300px", top: "2250px", width: "50px" }} />
            <img src="/images/decor/Chem White.svg" alt='' style={{ position: "absolute", float: "right", right: "1250px", top: "3250px", width: "90px", transform: "rotate(-30deg)" }} />

            {/* Right */}
            <img src="/images/decor/Chem Blue.svg" alt='' style={{ position: "absolute", left: "1300px", top: "600px", width: "100px", transform: "rotate(-40.411deg)" }} />
            <img src="/images/decor/Ruler Red.svg" alt='' style={{ position: "absolute", left: "1200px", top: "1220px", width: "100px", transform: "rotate(41.254deg)" }} />
            <img src="/images/decor/Tag Yellow.svg" alt='' style={{ position: "absolute", left: "1340px", top: "1850px", width: "100px", transform: "rotate(-21.206deg)" }} />
            <img src="/images/decor/Ruler White.svg" alt='' style={{ position: "absolute", left: "1300px", top: "2350px", width: "90px", transform: "rotate(15.058deg)" }} />
            <img src="/images/decor/Dot 2 White.svg" alt='' style={{ position: "absolute", left: "1380px", top: "2900px", width: "50px" }} />
        </div>

        {/* Footer */}
        <div style={{ height: "12.5rem" }} />
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}