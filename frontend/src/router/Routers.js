import React from 'react';
import {Routes, Route ,Navigate} from 'react-router-dom';

import Home from './../pages/Home';
import Gallery from './../Gallery/Gallery';
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails"; 
import GenreImages from "./../Gallery/GenreImages"; 
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from './../pages/ThankYou'
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
// import UploadTable from '../Form/UploadTable';


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to = "/home"/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/gallery/:genre" element={<GenreImages />} />
            {/* <Route path="/gallery/:id" element={<UploadTable />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/tours/search" element={<SearchResultList />} />
        </Routes>
    )
};

export default Routers;