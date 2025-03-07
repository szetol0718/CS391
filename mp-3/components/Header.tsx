import React from 'react';
import '../src/styles/style.css';
const Header = () => {
    return (
        <header>
        <img src="/images/me.jpg" alt="Yat Long Szeto (Louis)" className="profile-image"></img>
        <div className="header-text">
            <h1>Yat Long Szeto (Louis)</h1>
            <p>My Online Resume</p>
        </div>
</header>
    );
};

export default Header;