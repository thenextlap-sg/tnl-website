import React, { useEffect } from 'react';
import { Header, Footer } from './shared';
import { appResponsive, useResize } from '../javascripts';
import { imageDb, contactDb, centerDb } from '../data';
import '../stylesheets/contact.css';

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us';
    }, []);

    useResize(appResponsive);

    // Get data
    let set1 = imageDb.filter(e => e['Section'] === 'Other2');
    let set2 = contactDb.filter(e => e['Contact'] === 'Email');
    let set3 = contactDb.filter(e => e['Contact'] !== 'Email');

    return <>
        {/* Header */}
        <Header />
        <div className="thumbnail">
            <img className="thumbnail-img" src={`/images/picture/${set1[0].Image}`} alt={set1[0].ImageCaption} />
        </div>

        {/* Intro */}
        <p id="contact-title" className="title">Contact Us</p>
        <div className="main-container" id="contact-container">
            <div id="infor-container" style={{ zIndex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.6rem" }}>
                    <p className="h3" style={{ marginBottom: "1rem" }}>Contact Information</p>
                    <p className="contact-text">{set2[0].Contact}:&emsp;
                        <a className="hyperlink-blue" href={`mailto:{$row["Information"]}`}>
                            {set2[0].Information}
                        </a>
                    </p>

                    {
                        set3.map(entry => {
                            return <p className="contact-text" key={entry.Contact}>{entry.Contact}:&emsp;
                                <a className="hyperlink-blue" href={`tel:${entry.Information}`}>
                                    {entry.Information}
                                </a>
                            </p>
                        })
                    }
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1.5rem" }}>
                    <p className="h3" style={{ marginBottom: "0px" }}>Student Care Centers</p>
                    <div id="infor-frame">
                        {
                            centerDb.map(entry => {
                                return <div className="infor-contact" key={entry.ID}>
                                    <p className="center-text">{entry.ID}</p>
                                    <div>
                                        <p style={{ color: "var(--red, #EE404A)", margin: "0px auto" }}>{entry.Name}</p>
                                        <p className="caption">{entry.ShortAddress}
                                            <br /> Tel: <a className="hyperlink-blue" href={`tel:+${entry.PhoneNumber}`}>{entry.PhoneNumber}</a>
                                        </p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Currently not implemented */}
            {/* <div id="email-container" style={{ zIndex: 1 }}>
                <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "end" }}>
                    <p className="h3" style={{ marginBottom: "0px" }}>Leave us an email</p>
                    <p className="caption" style={{ color: "var(--red, #EE404A)" }}><sup>*</sup>required</p>
                </div>
                <form action="/scripts/sendEmail.php" method="GET">
                    <div style={{ display: "block" }}>
                        <div className="email-half-frame">
                            <div className="email-half">
                                <label className="h4" for="email-name">Name</label>
                                <input className="email-textbox" type="text" name="email-name" placeholder="Enter your name" />
                            </div>
                            <div className="email-half">
                                <label className="h4" for="email-phone">Phone<sup>*</sup></label>
                                <input required aria-required="true" className="email-textbox" type="tel" name="email-phone" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <div className="email-frame">
                            <label className="h4" for="email-address">Email<sup>*</sup></label>
                            <input required aria-required="true" className="email-textbox" type="email" name="email-address" placeholder="Enter your email address" />
                        </div>
                        <div className="email-frame">
                            <label className="h4" for="email-subject">Subject<sup>*</sup></label>
                            <input required aria-required="true" className="email-textbox" type="text" name="email-subject" placeholder="Enter subject" />
                        </div>
                        <div className="email-frame">
                            <label className="h4" for="email-content">Content<sup>*</sup></label>
                            <textarea required aria-required="true" rows="12" className="email-textbox" name="email-content" placeholder="Enter content"></textarea>
                        </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16rem", paddingTop: "1rem" }}>
                        <div>
                            <input type="checkbox" name="email-copy" />
                            <label className="caption" for="email-copy"> Send me a copy</label>
                        </div>
                        <input className="button button-red" type="submit" name="email-submit" value="Send" style={{ cursor: "pointer" }} />
                    </div>
                </form>
            </div> */}
        </div>

        {/* Decors */}
        <div className="decorations">
            <img src="/images/decor/Dot 1 Blue.svg" alt='' style={{ position: "absolute", float: "right", right: "1400px", top: "620px", width: "55px" }} />
            <img src="/images/decor/Circle 2 Red.svg" alt='' style={{ position: "absolute", left: "1380px", top: "560px", width: "80px", transform: "rotate(-2.981deg)" }} />
            <svg xmlns="http://www.w3.org/2000/svg" width="990" height="305" viewBox="0 0 990 305" fill="none" style={{ position: "absolute", top: "1050px", left: "0px" }}>
                <path d="M0 3C0.666667 53.5 39 157.2 187 168C372 181.5 462 388.5 678 258.5C802.57 183.527 898.537 142.313 987 125.075" stroke="#FCB813" strokeWidth="6" strokeLinecap="round" strokeDasharray="60 40" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="364" height="187" viewBox="0 0 364 187" fill="none" style={{ position: "absolute", float: "right", top: "1150px", right: "0px" }}>
                <path d="M364.5 184C329.333 133.333 228.2 27.6 105 10C70.1975 5.02826 36.6207 2.63559 3 3.41066" stroke="#FCB813" strokeWidth="6" strokeLinecap="round" strokeDasharray="60 40" />
            </svg>
        </div>

        {/* Footer */}
        <div style={{ height: "12.5rem" }} />
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}