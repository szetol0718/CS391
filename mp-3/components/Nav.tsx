import React from 'react';
import {Link} from "react-router";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;