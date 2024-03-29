// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import * as React from 'react';
import { lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { sectionImg, contactDb, contentDb, centerDb, subjectDb } from '../data'; 

// Import styles
import './stylesheets/shared/buttons.css';
import './stylesheets/shared/colors.css';
import './stylesheets/shared/fonts.css';
import './stylesheets/shared/layout.css';

// Import views
const About = lazy(async () => ({ default: (await import('./views')).About }));
const Careers = lazy(async () => ({ default: (await import('./views')).Careers }));
const Contact = lazy(async () => ({ default: (await import('./views')).Contact }));
const Enrichment = lazy(async () => ({ default: (await import('./views')).Enrichment }));
const Franchise = lazy(async () => ({ default: (await import('./views')).Franchise }));
const Home = lazy(async () => ({ default: (await import('./views')).Home }));
const Services = lazy(async () => ({ default: (await import('./views')).Services }));
const Tuition = lazy(async () => ({ default: (await import('./views')).Tuition }));

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home {...{sectionImg, contentDb}} />} />
                    <Route path="/about" element={<About {...{sectionImg, contentDb}} />} />
                    <Route path="/student-care-services" element={<Services {...{sectionImg, contentDb}} />} />
                    <Route path="/tuition-centre" element={<Tuition {...{sectionImg, contentDb, subjectDb, centerDb}} />} />
                    <Route path="/enrichment" element={<Enrichment {...{sectionImg, contentDb, contactDb}} />} />
                    <Route path="/franchise" element={<Franchise {...{sectionImg, contentDb, contactDb}} />} />
                    <Route path="/careers" element={<Careers {...{sectionImg, contentDb}} />} />
                    <Route path="/contact-us" element={<Contact {...{sectionImg, contactDb, centerDb}} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}