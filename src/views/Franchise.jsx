import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './shared';
import { appResponsive, useResize } from '../javascripts';
import { imageDb, contentDb, contactDb } from '../data';
import '../stylesheets/franchise.css';

export const Franchise = () => {
    useEffect(() => {
        document.title = 'Franchise';
    }, []);

    useResize(appResponsive);

    // Get data
    let set1 = imageDb.filter(e => e['Section'] === 'Other2');
    let set2 = contentDb.filter(e => e['Section'] === 'Franchise1');
    let set3 = contentDb.filter(e => e['Section'] === 'Franchise2');
    let set4 = contactDb.filter(e => e['Contact'] === 'Email');

    return <>
        {/* Header */}
        <Header />
        <div className="thumbnail">
            <img className="thumbnail-img" src={`/images/picture/${set1[0].Image}`} alt={set1[0].ImageCaption} />
        </div>

        {/* Intro */}
        <p id="franchise-title" className="title">Franchise</p>
        <div className="main-container" id="franchise-container">
            <p id="franchise-intro">
                <span dangerouslySetInnerHTML={{ __html: set2[0].Body }} />
            </p>

            {/* Benefit */}
            <div id="benefit-container">
                {
                    set3.forEach(entry => {
                        <div className="benefit-frame">
                            <div className="benefit-img" style={{ backgroundImage: `url('/images/picture/${entry.Image}')` }}></div>
                            <p className="caption">{entry.Body}</p>
                        </div>
                    })
                }
            </div>

            <div id="franchise-explore">
                <p>If you are interested in franchising The Next Lap, please
                    <Link to="/contact-us" className="hyperlink-blue"> contact us </Link>
                    or send an email to:</p>
                <a href={`mailto:${set4[0].Information}`} className="button button-red">{set4[0].Information}</a>
                <p>Thank you and we will get in touch shortly.</p>
            </div>
        </div>

        {/* Decors */}
        <div className="decorations">
            <img src="/images/decor/Dot 1 Red.svg" alt='' style={{ position: "absolute", float: "right", right: "1380px", top: "950px", width: "55px" }} />
            <img src="/images/decor/Dot 2 Blue.svg" alt='' style={{ position: "absolute", left: "1380px", top: "600px", width: "55px" }} />
            <img src="/images/decor/Circle 1 Red.svg" alt='' style={{ position: "absolute", left: "1350px", top: "1300px", width: "130px", transform: "rotate(184.841deg)" }} />
        </div>

        {/* Footer */}
        <div style={{ height: "12.5rem" }} />
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}