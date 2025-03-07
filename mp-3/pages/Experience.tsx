import React from 'react';
import '../src/styles/style.css';

const Experience = () => {
    return (
        <main>
        <h2>Working Experience</h2>

            <div>
                <h3>Academic Tutor, Hong Kong</h3>
                <img src="/images/tutor.jpeg" alt= "tutor"/>
                <p><strong>May 2021 - August 2023</strong></p>
                <ul>
                    <li>Delivered personalized tutoring sessions in physics, programming, and mathematics for students across various levels.</li>
                    <li>Developed customized lesson plans, tailored practice problems, and interactive learning materials to enhance student comprehension.</li>
                    <li>Assisted students in preparing for standardized exams, school tests, and coursework, leading to improved grades and deeper subject understanding.</li>
                    <li>Managed all aspects of the tutoring business, including client scheduling, invoicing, and communication, ensuring a seamless experience.</li>
                    <li>Adapted teaching strategies to accommodate different learning styles, fostering a supportive and engaging environment.</li>
                </ul>
            </div>

        <h3>Languages Spoken</h3>
        <ul>
            <li>English</li>
            <li>Cantonese</li>
            <li>Mandarin</li>
        </ul>
    </main>
    );
};

export default Experience;