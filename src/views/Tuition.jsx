// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import React, { useEffect, useState } from 'react';
import { Header, Footer } from './shared';
import { appResponsive, useResize } from '../javascripts';
import { imageDb, contentDb, centerDb, subjectDb } from '../data';
import '../stylesheets/tuition.css';

const mapInfo = [
    {
        id: "A", 
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6719077520634!2d103.83561407562937!3d1.3735419986134703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da178e104712df%3A0x74fd7e1e0b920a0d!2sThe%20Next%20Lap%20(AMK)!5e0!3m2!1sen!2s!4v1690454178177!5m2!1sen!2s" 
    },
    { 
        id: "B", 
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.740031249436!2d103.92804307562929!3d1.3321049986552687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d6ac86cb707%3A0x22c5c1cd333ceae3!2sThe%20Next%20Lap%20(Bedok%20North)!5e0!3m2!1sen!2s!4v1690454287067!5m2!1sen!2s" 
    },
    { 
        id: "C", 
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7691141211867!2d103.75924447562919!3d1.3140170986735118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a91967aaaab%3A0x245fe0d6d3139552!2s433%20Clementi%20Ave%203%2C%20%2301-248%2C%20Singapore%20120433!5e0!3m2!1sen!2s!4v1690454318368!5m2!1sen!2s" 
    },
];

export const Tuition = () => {
    const [mapID, setMapID] = useState(mapInfo[0].id);
    const [mapSrc, setMapSrc] = useState(mapInfo[0].src);

    useEffect(() => {
        document.title = 'Tuition Center';
    }, []);

    useResize(appResponsive);

    function onlyUnique(_array, _property) {
        return [...new Set(_array.map(element => element[_property]))]; 
    }

    function updateMap(id) {
        setMapID(id);

        mapInfo.forEach(map => {
            if (map.id === id) {
                setMapSrc(map.src)
            }
        });
    }

    // Get data
    let set1 = imageDb.filter(e => e['Section'] === 'Other2');
    let set2 = onlyUnique(subjectDb, 'ClassName').sort((a, b) => a.localeCompare(b));
    let set3 = contentDb.filter(e => e['Section'] === 'Tuition1');

    return <>
        {/* Header */}
        <Header />
        <div className="thumbnail">
            <img className="thumbnail-img" src={`/images/picture/${set1[0].Image}`} alt={set1[0].ImageCaption} />
        </div>

        {/* Intro */}
        <p id="tuition-title" className="title">Tuition Center</p>
        <ul id="subject-container" className="main-container">
            {
                set2.map(entry1 => {
                    return <li className="subject-frame" key={entry1}>
                        <p className="h3 subject-header">{entry1}</p>
                        <ul>
                            {
                                subjectDb.map(entry2 => {
                                    const nestedKey = `${entry1}${entry2.SubjectID}`;
                                    if (entry2.ClassName === entry1) {
                                        return <li key={nestedKey}>{entry2.Subject}</li>
                                    } else {
                                        return <div key={nestedKey} style={{ display: 'none' }}></div>
                                    }
                                })
                            }
                        </ul>
                    </li>
                })
            }
        </ul>

        {/* Locations */}
        <div style={{ height: "12.5rem" }}></div>
        <div id="location-container" className="main-container">
            {
                centerDb.map(entry => {
                    return <div className="location-frame" key={entry.ID}>
                        <h2 className="location-header">{entry.ID}</h2>
                        <p className="location-text">{entry.Name}</p>
                        <p className="caption" style={{ textAlign: "center" }}>{entry.FullAddress}</p>
                        <p className="caption" style={{ textAlign: "center" }}><b>Opening hours:</b></p>
                        <p className="caption" style={{ textAlign: "center" }}>
                            {entry.OpeningSchool}<br />{entry.OpeningEarly}
                        </p>
                    </div>
                })
            }
        </div>

        {/* Facilities */}
        <div style={{ height: "12.5rem" }}></div>
        <h1>Facilities</h1>
        <ul id="facility-container" className="main-container">
            {
                set3.map(entry => {
                    return <li className="facility-frame" key={entry.ID}>
                        <h2 className="facility-header">{entry.Heading}</h2>
                        <img className="facility-img" src={`/images/picture/${entry.Image}`} alt={entry.ImageCaption} />
                        <p className="facility-text">{entry.Body}</p>
                    </li>
                })
            }
        </ul>

        {/* Maps */}
        <div style={{ height: "12.5rem" }}></div>
        <h1 id="map-title">Maps</h1>
        <div id="map-container">
            <div className="map-frame">
                {
                    centerDb.map(entry => {
                        return <div 
                            id={`map-${entry.ID}`} 
                            className={`map-location ${entry.ID === mapID ? 'selected' : ''}`} 
                            key={entry.ID}
                            onClick={() => updateMap(entry.ID)}>
                                <h2 className="map-header">{entry.ID}</h2>
                                <div className="map-text">
                                    <p className="button" style={{ margin: "0px" }}>{entry.Name}</p>
                                    <p className="caption">{entry.ShortAddress}</p>
                                </div>
                        </div>
                    })
                }
            </div>
            <iframe id="map-embed" title="map-embed" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={mapSrc}></iframe>
        </div>

        {/* Decors */}
        <div className="decorations">
            <img src="/images/decor/Ruler Red.svg" alt='' style={{ position: "absolute", float: "right", right: "1320px", top: "800px", width: "100px", transform: "rotate(-37.079deg)" }} />
            <img src="/images/decor/Circle 1 Yellow.svg" alt='' style={{ position: "absolute", float: "right", right: "1310px", top: "1500px", width: "80px" }} />
            <img src="/images/decor/Pencil Blue.svg" alt='' style={{ position: "absolute", left: "1300px", top: "1000px", width: "100px", transform: "rotate(64.841deg)" }} />

            <img src="/images/decor/Circle 1 Yellow.svg" alt='' style={{ position: "absolute", float: "right", right: "1280px", top: "4100px", width: "80px" }} />
            <img src="/images/decor/Dot 1 Blue.svg" alt='' style={{ position: "absolute", left: "800px", top: "4150px", width: "50px", transform: "rotate(90deg)" }} />
            <svg xmlns="http://www.w3.org/2000/svg" width="1062" height="458" viewBox="0 0 1062 458" fill="none" style={{ position: "absolute", left: "0px", top: "3620px", width: "1060px" }}>
                <path d="M295.5 200.064L297.358 199.324L295.5 200.064ZM608 453.564L608.266 455.546L608 453.564ZM1059.28 293.93C1060.31 294.327 1061.47 293.813 1061.87 292.782C1062.26 291.751 1061.75 290.594 1060.72 290.197L1059.28 293.93ZM906.887 276.376C907.97 276.163 908.676 275.111 908.462 274.027C908.249 272.944 907.197 272.238 906.113 272.452L906.887 276.376ZM975.187 269.19C974.088 269.087 973.112 269.894 973.009 270.994C972.905 272.094 973.713 273.069 974.813 273.173L975.187 269.19ZM28.0679 5.13256C29.1676 5.23577 30.1428 4.42793 30.246 3.3282C30.3493 2.22846 29.5414 1.25327 28.4417 1.15006L28.0679 5.13256ZM65.9987 7.01861C64.9191 6.78508 63.8546 7.47095 63.6211 8.55055C63.3876 9.63015 64.0735 10.6947 65.1531 10.9282L65.9987 7.01861ZM119.003 27.3047C120.03 27.7116 121.192 27.2089 121.599 26.182C122.006 25.1551 121.504 23.9928 120.477 23.5859L119.003 27.3047ZM154.943 39.5251C153.969 39.0053 152.757 39.374 152.237 40.3486C151.718 41.3232 152.086 42.5347 153.061 43.0545L154.943 39.5251ZM200.143 73.8235C201.008 74.5094 202.266 74.3635 202.952 73.4976C203.638 72.6318 203.492 71.3739 202.626 70.688L200.143 73.8235ZM230.872 96.0977C230.099 95.3086 228.833 95.2955 228.044 96.0684C227.255 96.8413 227.242 98.1076 228.015 98.8967L230.872 96.0977ZM263.343 142.601C263.954 143.522 265.195 143.773 266.115 143.163C267.036 142.553 267.288 141.312 266.678 140.391L263.343 142.601ZM285.695 173.283C285.2 172.295 283.998 171.895 283.011 172.39C282.023 172.884 281.623 174.086 282.118 175.074L285.695 173.283ZM306.391 231.204C306.837 232.214 308.018 232.671 309.028 232.224C310.039 231.778 310.496 230.597 310.049 229.586L306.391 231.204ZM328.795 268.908C328.289 267.926 327.083 267.54 326.101 268.045C325.119 268.551 324.733 269.757 325.239 270.739L328.795 268.908ZM358.576 327.531C359.193 328.447 360.436 328.689 361.352 328.072C362.269 327.455 362.511 326.212 361.894 325.296L358.576 327.531ZM387.994 360.145C387.285 359.298 386.024 359.186 385.177 359.895C384.33 360.604 384.218 361.866 384.927 362.713L387.994 360.145ZM432.068 408.809C432.938 409.489 434.195 409.334 434.875 408.463C435.555 407.593 435.4 406.336 434.529 405.656L432.068 408.809ZM470.886 429.232C469.908 428.719 468.699 429.096 468.186 430.075C467.673 431.053 468.051 432.262 469.029 432.775L470.886 429.232ZM531.388 454.301C532.474 454.499 533.516 453.778 533.714 452.691C533.912 451.605 533.191 450.563 532.105 450.365L531.388 454.301ZM575.264 453.961C574.159 453.972 573.273 454.876 573.284 455.981C573.295 457.085 574.199 457.972 575.303 457.961L575.264 453.961ZM634.267 448.791C635.298 448.397 635.815 447.241 635.421 446.209C635.027 445.177 633.871 444.66 632.839 445.054L634.267 448.791ZM663.765 429.107C662.833 429.701 662.559 430.937 663.153 431.869C663.746 432.8 664.983 433.074 665.914 432.48L663.765 429.107ZM708.359 400.493C709.205 399.783 709.316 398.522 708.606 397.675C707.896 396.829 706.634 396.719 705.788 397.429L708.359 400.493ZM732.503 374.448C731.669 375.173 731.581 376.436 732.306 377.269C733.03 378.103 734.294 378.191 735.127 377.467L732.503 374.448ZM775.513 343.424C776.377 342.736 776.519 341.477 775.831 340.613C775.143 339.749 773.884 339.607 773.02 340.295L775.513 343.424ZM801.397 319.12C800.488 319.747 800.26 320.993 800.888 321.902C801.516 322.811 802.761 323.039 803.67 322.411L801.397 319.12ZM848.994 295.829C849.991 295.353 850.413 294.159 849.937 293.162C849.461 292.166 848.267 291.744 847.27 292.22L848.994 295.829ZM880.277 279.095C879.224 279.43 878.642 280.554 878.977 281.607C879.312 282.66 880.437 283.242 881.489 282.907L880.277 279.095ZM1000.69 276.881C1001.77 277.088 1002.82 276.377 1003.03 275.292C1003.23 274.207 1002.52 273.16 1001.44 272.952L1000.69 276.881ZM1035.7 281.527C1034.65 281.203 1033.53 281.795 1033.2 282.851C1032.88 283.907 1033.47 285.026 1034.53 285.351L1035.7 281.527ZM0.0512652 4.0631C8.28951 3.85187 17.7237 4.16171 28.0679 5.13256L28.4417 1.15006C17.9547 0.165802 8.36073 -0.151274 -0.0512652 0.0644184L0.0512652 4.0631ZM65.1531 10.9282C82.1999 14.6157 100.425 19.9438 119.003 27.3047L120.477 23.5859C101.682 16.1392 83.2457 10.7494 65.9987 7.01861L65.1531 10.9282ZM153.061 43.0545C169.036 51.5744 184.9 61.7495 200.143 73.8235L202.626 70.688C187.183 58.4544 171.115 48.1497 154.943 39.5251L153.061 43.0545ZM228.015 98.8967C240.648 111.794 252.543 126.305 263.343 142.601L266.678 140.391C255.733 123.878 243.677 109.171 230.872 96.0977L228.015 98.8967ZM282.118 175.074C286.225 183.276 290.077 191.847 293.642 200.803L297.358 199.324C293.751 190.263 289.853 181.587 285.695 173.283L282.118 175.074ZM293.642 200.803C297.818 211.296 302.068 221.427 306.391 231.204L310.049 229.586C305.748 219.858 301.517 209.773 297.358 199.324L293.642 200.803ZM325.239 270.739C335.966 291.571 347.086 310.47 358.576 327.531L361.894 325.296C350.5 308.379 339.458 289.616 328.795 268.908L325.239 270.739ZM384.927 362.713C400.09 380.82 415.819 396.123 432.068 408.809L434.529 405.656C418.524 393.16 402.995 378.058 387.994 360.145L384.927 362.713ZM469.029 432.775C489.179 443.337 509.994 450.404 531.388 454.301L532.105 450.365C511.106 446.541 490.676 439.606 470.886 429.232L469.029 432.775ZM575.303 457.961C586.173 457.854 597.164 457.035 608.266 455.546L607.734 451.581C596.786 453.05 585.959 453.856 575.264 453.961L575.303 457.961ZM608.266 455.546C617.129 454.357 625.773 452.035 634.267 448.791L632.839 445.054C624.597 448.202 616.254 450.439 607.734 451.581L608.266 455.546ZM665.914 432.48C680.087 423.45 694.121 412.439 708.359 400.493L705.788 397.429C691.6 409.333 677.721 420.215 663.765 429.107L665.914 432.48ZM735.127 377.467C748.149 366.147 761.518 354.573 775.513 343.424L773.02 340.295C758.95 351.504 745.521 363.131 732.503 374.448L735.127 377.467ZM803.67 322.411C817.989 312.524 833.021 303.459 848.994 295.829L847.27 292.22C831.067 299.96 815.851 309.139 801.397 319.12L803.67 322.411ZM881.489 282.907C889.7 280.295 898.158 278.097 906.887 276.376L906.113 272.452C897.231 274.202 888.626 276.439 880.277 279.095L881.489 282.907ZM974.813 273.173C983.205 273.963 991.825 275.186 1000.69 276.881L1001.44 272.952C992.455 271.234 983.709 269.992 975.187 269.19L974.813 273.173ZM1034.53 285.351C1042.59 287.828 1050.84 290.68 1059.28 293.93L1060.72 290.197C1052.19 286.915 1043.86 284.032 1035.7 281.527L1034.53 285.351Z" fill="#EE404A" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="467" height="129" viewBox="0 0 467 129" fill="none" style={{ position: "absolute", float: "right", right: "0px", top: "3900px", width: "537px" }}>
                <path d="M539 126.064C470.167 123.23 283.4 98.6638 87 23.0638C56.2584 11.2304 28.0569 4.63428 2 2.18164" stroke="#EE404A" strokeWidth="4" strokeLinecap="round" strokeDasharray="60 40" />
            </svg>
        </div>

        {/* Footer */}
        <div style={{ height: "12.5rem" }} />
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}