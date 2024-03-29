// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './shared';
import { appResponsive, homeResizeImgs, homeOnScroll, useResize, useScroll } from '../javascripts';
import '../stylesheets/home.css';

interface HomeProps {
    sectionImg: { [key: string]: any }[];
    contentDb: { [key: string]: any }[];
};

export const Home: React.FC<HomeProps> = ({
    sectionImg,
    contentDb
}) => {
    useEffect(() => {
        document.title = 'The Next Lap';
    }, []);
    
    useResize(homeResizeImgs);
    useResize(appResponsive);
    useScroll(homeOnScroll);

    // Get data
    let set1 = sectionImg.filter((e: { [key: string]: any }) => e['Section'] === 'Other2');
    let set2 = contentDb.filter((e: { [key: string]: any }) => e['Section'] === 'Home1');
    let set3 = sectionImg.filter((e: { [key: string]: any }) => e['Section'] === 'Service1');
    let set4 = contentDb.filter((e: { [key: string]: any }) => e['Section'] === 'Home2');
    let set5 = contentDb.filter((e: { [key: string]: any }) => e['Section'] === 'Home3');
    let set6 = sectionImg.filter((e: { [key: string]: any }) => e['Section'] === 'Home3');
    let set7 = contentDb.filter((e: { [key: string]: any }) => e['Section'] === 'Home4');
    let set8 = sectionImg.filter((e: { [key: string]: any }) => e['Section'] === 'Home4');

    return <>
        {/* Header */}
        <Header />

        {/* Thumbnail */}
        <div id="homepage-thumbnail">
            <img id="thumbnail-video" src={set1[0].URL} alt={set1[0].Caption} />
        </div>

        {/* Introduction Section */}
        <div style={{ height: "100vh" }}></div>
        <div id='section-1' className='main-container'>
            <div id="intro-frame" className="intro-service-frame">
                <p className="title">{set2[0].Heading}</p>
                <p>{set2[0].Body}</p>
                <a className="button button-red" href="/about">More About Us</a>
            </div>
            <div id="intro-graphic" />
        </div>

        {/* Student Care Services Section */}
        <div style={{ height: "3.125rem", background: "var(--blue)" }} />
        <div id='section-2' className='main-container'>
            <div id="service-rec-container">
                <div id="service-rec" style={{ backgroundImage: `url("${set3[0].URL}")` }} />
                <p className="caption">{set3[0].Caption}</p>
            </div>
            <div id="service-frame" className="intro-service-frame">
                <h1>{set4[0].Heading}</h1>
                <p>{set4[0].Body}</p>
                <a className="button button-blue" href="/student-care-services">View Student Care Services</a>
            </div>
        </div>
        <div style={{ height: "3.125rem", background: "var(--blue)" }} />
        <div id="service-clouds" />

        {/* Tuition Centre Section */}
        <div id="section-3" className='home main-container'>
            <div className="background-container">
                {
                    set6.map((entry: { [key: string]: any }) => {
                        return <div className="background-imgs" style={{ backgroundImage: `url("${entry.URL}")`, backgroundSize: 'cover' }} key={entry.ID} />
                    })
                }
            </div>
            <div className="background-overlay" />
            <div id="tuition-container" className="tuition-enrich-container">
                <div id="tuition-frame" className="tuition-enrich-frame">
                    <h1>{set5[0].Heading}</h1>
                    <p>{set5[0].Body}</p>
                </div>
                <a className="button button-red" href="/tuition-centre">View Tuition Centre</a>
            </div>
        </div>

        {/* Enrichment Section */}
        <div id="section-4" className='home main-container'>
            <div className="background-container">
            <div className="background-imgs" style={{ backgroundImage: `url("${set8[0].URL}")`, backgroundSize: 'cover' }} />
                {
                    set8.map((entry: { [key: string]: any }) => {
                        return <div className="background-imgs" style={{ backgroundImage: `url("${entry.URL}")`, backgroundSize: 'cover' }} key={entry.ID}/>
                    })
                }
            </div>
            <div className="background-overlay" />
            <div id="enrich-container" className="tuition-enrich-container">
                <div id="enrich-frame" className="tuition-enrich-frame">
                    <h1>{set7[0].Heading}</h1>
                    <p>{set7[0].Body}</p>
                </div>
                <a className="button button-red" href="/enrichment">View Enrichment</a>
            </div>
        </div>

        {/* Footer */}
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}