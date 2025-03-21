import React from 'react';
import '../src/styles/style.css';

const Skills = () => {
    return (
        <main>
        <h2>My Technical Skillset</h2>

        <section >
            <h3> Programming & Software Development</h3>
            <ul>
                <li>Proficient in Python, Java, JavaScript, and OCaml</li>
                <li>Experienced in functional programming and algorithm optimization</li>
                <li>Skilled in developing web applications using HTML, CSS, and React.js</li>
                <li>Understanding of object-oriented and functional programming paradigms</li>
                <li>Strong debugging, testing, and version control (Git/GitHub) skills</li>
            </ul>
        </section>

        <section >
            <h3> Data Science & Machine Learning</h3>
            <ul>
                <li>Experience with data analysis using Pandas and NumPy</li>
                <li>Understanding of regression, classification, and deep learning models</li>
                <li>Working knowledge of SQL for data querying and manipulation</li>
            </ul>
        </section>

        <section >
            <h3> Cybersecurity & Cloud Computing</h3>
            <ul>
                <li>Familiar with network security concepts and penetration testing</li>
                <li>Understanding of cryptography and authentication techniques</li>
                <li>Basic knowledge of ethical hacking and cybersecurity frameworks</li>
            </ul>
        </section>

    </main>
    );
};

export default Skills;