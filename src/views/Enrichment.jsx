// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import React, { useEffect } from 'react';
import { Header, Footer } from './shared';
import { appResponsive, useResize } from '../javascripts';
import { imageDb, contentDb } from '../data';
import '../stylesheets/enrichment.css';

export const Enrichment = () => {
    useEffect(() => {
        document.title = 'Enrichment';
    }, []);

    useResize(appResponsive);

    // Get data
    let set1 = imageDb.filter(e => e['Section'] === 'Other2');
    let set2 = contentDb.filter(e => e['Section'] === 'Enrichment1');
    let set3 = contentDb.filter(e => e['Section'] === 'Enrichment2');

    return <>
        {/* Header */}
        <Header />
        <div className="thumbnail">
            <img className="thumbnail-img" src={`/images/picture/${set1[0].Image}`} alt={set1[0].ImageCaption} />
        </div>

        {/* Intro */}
        <p id="enrich-title" className="title">Enrichment</p>
        <div id="enrich-container" className="main-container">
            <p>{set2[0].Body}</p>

            {/* Flowers */}
            <ul id="flower-container">
                {
                    set3.map(entry => {
                        return <li className="flower-frame" key={entry.ID}>
                            <p>{entry.Heading}</p>
                            <div className="flower-img" style={{ backgroundImage: `url('/images/picture/${entry.Image}')` }}></div>
                        </li>
                    })
                }
            </ul>

            <p>And many more...</p>
        </div>

        {/* Decors */}
        <div className="decorations">
            <img src="/images/decor/Circle 1 Yellow.svg" alt='' style={{ position: "absolute", float: "right", right: "1300px", top: "800px", width: "130px", transform: "rotate(4.841deg)" }} />
            <img src="/images/decor/Dot 1 Blue.svg" alt='' style={{ position: "absolute", float: "right", right: "1260px", top: "1640px", width: "55px" }} />
            <img src="/images/decor/Dot 2 Red.svg" alt='' style={{ position: "absolute", left: "1320px", top: "640px", width: "55px", transform: "rotate(270deg)" }} />
            <img src="/images/decor/Circle 2 Blue.svg" alt='' style={{ position: "absolute", left: "1400px", top: "1150px", width: "80px", transform: "rotate(-2.981deg)" }} />
            <img src="/images/decor/Circle 1 Yellow.svg" alt='' style={{ position: "absolute", left: "1300px", top: "1760px", width: "130px", transform: "rotate(176.852deg)" }} />
            <svg xmlns="http://www.w3.org/2000/svg" width="503" height="388" viewBox="0 0 503 388" fill="none" style={{ position: "absolute", top: "1180px", left: "0px" }}>
                <path d="M-19.0374 384.653C30.1061 260.041 195.011 43.163 500 3.12289" stroke="#EE404A" strokeWidth="6" strokeLinecap="round" strokeDasharray="60 50" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="813" height="365" viewBox="0 0 813 365" fill="none" style={{ position: "absolute", float: "right", top: "835px", right: "0px" }}>
                <path d="M836.509 3.04399C774.196 144.632 537.952 412.802 91.4709 352.772C61.1598 348.697 31.8408 346.227 3.50014 345.211" stroke="#EE404A" strokeWidth="6" strokeLinecap="round" strokeDasharray="60 50" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="597" height="813" viewBox="0 0 597 813" fill="none" style={{ position: "absolute", top: "1185px", left: "520px" }}>
                <path d="M451.281 806.786C449.782 807.493 449.139 809.28 449.846 810.779C450.552 812.278 452.34 812.92 453.839 812.214L451.281 806.786ZM554.56 417.5L551.85 418.787L554.56 417.5ZM8.8916 29.5685C9.434 31.1341 11.1428 31.9635 12.7084 31.4211C14.2739 30.8787 15.1034 29.1699 14.561 27.6043L8.8916 29.5685ZM33.2401 70.3786C32.4507 68.9218 30.6299 68.3809 29.1731 69.1702C27.7164 69.9596 27.1754 71.7805 27.9648 73.2372L33.2401 70.3786ZM60.8605 119.979C61.9718 121.208 63.8689 121.304 65.0977 120.192C66.3266 119.081 66.422 117.184 65.3107 115.955L60.8605 119.979ZM99.7974 147.014C98.4625 146.032 96.5848 146.319 95.6033 147.654C94.6218 148.988 94.9082 150.866 96.2431 151.848L99.7974 147.014ZM145.395 180.758C146.893 181.465 148.681 180.824 149.388 179.326C150.096 177.828 149.455 176.04 147.957 175.332L145.395 180.758ZM191.329 192.926C189.766 192.376 188.053 193.197 187.503 194.76C186.953 196.323 187.774 198.036 189.337 198.586L191.329 192.926ZM243.478 215.547C245.071 216.004 246.733 215.084 247.19 213.491C247.647 211.899 246.727 210.237 245.135 209.78L243.478 215.547ZM290.495 222.591C288.901 222.137 287.242 223.061 286.788 224.654C286.334 226.248 287.258 227.907 288.851 228.361L290.495 222.591ZM342.797 244.885C344.367 245.415 346.07 244.574 346.601 243.004C347.131 241.435 346.29 239.732 344.72 239.201L342.797 244.885ZM388.978 256.08C387.458 255.421 385.691 256.12 385.032 257.64C384.374 259.16 385.072 260.927 386.592 261.586L388.978 256.08ZM436.36 287.394C437.767 288.269 439.617 287.837 440.491 286.43C441.366 285.023 440.934 283.173 439.527 282.299L436.36 287.394ZM477.918 310.341C476.66 309.263 474.766 309.408 473.688 310.666C472.609 311.924 472.755 313.818 474.013 314.896L477.918 310.341ZM512.703 355.18C513.731 356.48 515.618 356.7 516.917 355.672C518.217 354.644 518.437 352.758 517.409 351.458L512.703 355.18ZM544.058 390.944C543.233 389.507 541.399 389.012 539.962 389.837C538.525 390.662 538.03 392.496 538.855 393.932L544.058 390.944ZM564.234 447.027C564.852 448.565 566.599 449.311 568.136 448.694C569.674 448.076 570.42 446.329 569.802 444.792L564.234 447.027ZM586.249 493.895C585.823 492.294 584.179 491.342 582.578 491.769C580.977 492.196 580.025 493.839 580.452 495.44L586.249 493.895ZM590.988 555.721C591.118 557.373 592.562 558.607 594.214 558.476C595.866 558.346 597.099 556.902 596.969 555.25L590.988 555.721ZM596.442 607.239C596.612 605.591 595.414 604.117 593.766 603.946C592.118 603.776 590.644 604.974 590.473 606.622L596.442 607.239ZM577.003 666.038C576.442 667.597 577.251 669.316 578.81 669.877C580.368 670.438 582.087 669.629 582.648 668.07L577.003 666.038ZM560.075 714.958C560.943 713.547 560.502 711.699 559.09 710.832C557.679 709.964 555.831 710.405 554.963 711.817L560.075 714.958ZM517.092 759.596C515.918 760.765 515.914 762.665 517.084 763.839C518.253 765.013 520.152 765.017 521.326 763.848L517.092 759.596ZM481.035 796.792C482.417 795.878 482.796 794.017 481.882 792.635C480.968 791.253 479.107 790.874 477.725 791.788L481.035 796.792ZM0.656103 2.2549C3.14092 11.8119 5.89078 20.9071 8.8916 29.5685L14.561 27.6043C11.6143 19.0992 8.90986 10.156 6.46304 0.745098L0.656103 2.2549ZM27.9648 73.2372C37.6211 91.0567 48.6628 106.491 60.8605 119.979L65.3107 115.955C53.4373 102.825 42.6715 87.7831 33.2401 70.3786L27.9648 73.2372ZM96.2431 151.848C111.632 163.163 128.122 172.601 145.395 180.758L147.957 175.332C130.966 167.308 114.82 158.06 99.7974 147.014L96.2431 151.848ZM189.337 198.586C206.974 204.792 225.119 210.274 243.478 215.547L245.135 209.78C226.818 204.519 208.803 199.075 191.329 192.926L189.337 198.586ZM288.851 228.361C306.907 233.504 324.963 238.852 342.797 244.885L344.72 239.201C326.748 233.122 308.583 227.743 290.495 222.591L288.851 228.361ZM386.592 261.586C403.681 268.99 420.345 277.441 436.36 287.394L439.527 282.299C423.221 272.164 406.288 263.58 388.978 256.08L386.592 261.586ZM474.013 314.896C487.668 326.604 500.626 339.911 512.703 355.18L517.409 351.458C505.086 335.878 491.859 322.293 477.918 310.341L474.013 314.896ZM538.855 393.932C543.375 401.8 547.711 410.076 551.85 418.787L557.269 416.213C553.065 407.364 548.657 398.95 544.058 390.944L538.855 393.932ZM551.85 418.787C556.406 428.377 560.526 437.79 564.234 447.027L569.802 444.792C566.047 435.437 561.877 425.911 557.269 416.213L551.85 418.787ZM580.452 495.44C586.09 516.597 589.487 536.689 590.988 555.721L596.969 555.25C595.439 535.839 591.977 515.387 586.249 493.895L580.452 495.44ZM590.473 606.622C588.254 628.076 583.54 647.879 577.003 666.038L582.648 668.07C589.346 649.464 594.171 629.187 596.442 607.239L590.473 606.622ZM554.963 711.817C543.718 730.117 530.703 746.042 517.092 759.596L521.326 763.848C535.245 749.987 548.562 733.693 560.075 714.958L554.963 711.817ZM477.725 791.788C468.538 797.866 459.602 802.864 451.281 806.786L453.839 812.214C462.435 808.162 471.621 803.021 481.035 796.792L477.725 791.788Z" fill="#EE404A" />
            </svg>
        </div>

        {/* Footer */}
        <div style={{ height: "1.25rem" }} />
        <div id="footer" style={{ zIndex: 2 }}>
            <Footer />
        </div>
    </>
}