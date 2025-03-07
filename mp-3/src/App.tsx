import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Achievements from '../pages/Achievements';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';

const App = () => {
    return (
        <Router>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

