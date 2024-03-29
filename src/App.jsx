// The Next Lap Website
// GNL General Public License v3
// Copyright (c) The Next Lap. All rights reserved.

import React from 'react';
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import { About, Careers, Contact, Enrichment, Franchise, Home, Services, Tuition } from './views';

import './stylesheets/shared/buttons.css';
import './stylesheets/shared/colors.css';
import './stylesheets/shared/fonts.css';
import './stylesheets/shared/layout.css';

export default function App () {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/student-care-services" element={<Services />} />
                    <Route path="/tuition-centre" element={<Tuition />} />
                    <Route path="/enrichment" element={<Enrichment />} />
                    <Route path="/franchise" element={<Franchise />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}