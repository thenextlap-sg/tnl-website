import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './shared';
import { appResponsive, homeResizeImgs, homeOnScroll, useResize, useScroll } from '../javascripts';
import { imageDb, contentDb } from '../data';
import '../stylesheets/home.css';

export const Home = () => {
    useEffect(() => {
        document.title = 'The Next Lap';
    }, []);
    
    useResize(homeResizeImgs);
    useResize(appResponsive);
    useScroll(homeOnScroll);

    // Get data
    let set1 = imageDb.filter(e => e['Section'] === 'Other2');
    let set2 = contentDb.filter(e => e['Section'] === 'Home1');
    let set3 = imageDb.filter(e => e['Section'] === 'Service1');
    let set4 = contentDb.filter(e => e['Section'] === 'Home2');
    let set5 = contentDb.filter(e => e['Section'] === 'Home3');
    let set6 = imageDb.filter(e => e['Section'] === 'Home3');
    let set7 = contentDb.filter(e => e['Section'] === 'Home4');
    let set8 = imageDb.filter(e => e['Section'] === 'Home4');

    return <>
        {/* Header */}
        <Header />

        {/* Thumbnail */}
        <div id="homepage-thumbnail">
            <img id="thumbnail-video" src={`/images/picture/${set1[0].Image}`} alt={set1[0].ImageCaption} />
        </div>

        {/* Introduction Section */}
        <div style={{ height: "100vh" }}></div>
        <div id='section-1' className='main-container'>
            <div id="intro-frame" className="intro-service-frame">
                <p className="title">{set2[0].Heading}</p>
                <p>{set2[0].Body}</p>
                <Link className="button button-red" to="/about">More About Us</Link>
            </div>
            <div id="intro-graphic" />
        </div>

        {/* Student Care Services Section */}
        <div style={{ height: "3.125rem", background: "var(--blue)" }} />
        <div id='section-2' className='main-container'>
            <div id="service-rec-container">
                <div id="service-rec" style={{ backgroundImage: `url("/images/picture/${set3[0].Image}")` }} />
                <p className="caption">{set3[0].ImageCaption}</p>
            </div>
            <div id="service-frame" className="intro-service-frame">
                <h1>{set4[0].Heading}</h1>
                <p>{set4[0].Body}</p>
                <Link className="button button-blue" to="/student-care-services">View Student Care Services</Link>
            </div>
        </div>
        <div style={{ height: "3.125rem", background: "var(--blue)" }} />
        <div id="service-clouds" />

        {/* Tuition Centre Section */}
        <div id="section-3" className='home main-container'>
            <div className="background-container">
                {
                    set6.map(entry => {
                        return <div className="background-imgs" style={{ backgroundImage: `url("/images/picture/${entry.Image}")`, backgroundSize: 'cover' }} key={entry.ID} />
                    })
                }
            </div>
            <div className="background-overlay" />
            <div id="tuition-container" className="tuition-enrich-container">
                <div id="tuition-frame" className="tuition-enrich-frame">
                    <h1>{set5[0].Heading}</h1>
                    <p>{set5[0].Body}</p>
                </div>
                <Link className="button button-red" to="/tuition-centre">View Tuition Centre</Link>
            </div>
        </div>

        {/* Enrichment Section */}
        <div id="section-4" className='home main-container'>
            <div className="background-container">
            <div className="background-imgs" style={{ backgroundImage: `url("/images/picture/${set8[0].Image}")`, backgroundSize: 'cover' }} />
                {
                    set8.map(entry => {
                        return <div className="background-imgs" style={{ backgroundImage: `url("/images/picture/${entry.Image}")`, backgroundSize: 'cover' }} key={entry.ID}/>
                    })
                }
            </div>
            <div className="background-overlay" />
            <div id="enrich-container" className="tuition-enrich-container">
                <div id="enrich-frame" className="tuition-enrich-frame">
                    <h1>{set7[0].Heading}</h1>
                    <p>{set7[0].Body}</p>
                </div>
                <Link className="button button-red" to="/enrichment">View Enrichment</Link>
            </div>
        </div>

        {/* Footer */}
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}