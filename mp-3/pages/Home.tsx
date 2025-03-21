import React from 'react';
import '../src/styles/style.css';

const Home = () => {
    return (
        <main>
        <h1>Home</h1>
        <img src="/images/me.jpg" alt="Yat Long Szeto (Louis)" className="picture"/>
        <h2>Welcome to My Website</h2>
        <p>
            My name is Yat Long Szeto (Louis), and I am a Computer Science student at Boston University. 
            I am passionate about programming, problem-solving, and applying my skills to real-world challenges. 
            Welcome to my online resume, where you can explore my education, work experience, achievements, and projects.
        </p>
    </main>
    );
};

export default Home;
