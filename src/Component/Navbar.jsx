import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope, faBell, faFile } from '@fortawesome/free-solid-svg-icons';
import './navbarStyle.css';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleSidebarToggle = () => {
        setExpanded(!expanded);
    };
   

    return (
        <div className={`sidebar ${expanded ? 'expanded' : ''}`} onMouseEnter={handleSidebarToggle} onMouseLeave={handleSidebarToggle}>
            <div className="icon" >
                <FontAwesomeIcon icon={faHome} />
                <span className="label">Home</span>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faUser} />
                <span className="label">Profile</span>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faCog} />
                <span className="label">Settings</span>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="label">Messages</span>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faBell} />
                <span className="label">Notifications</span>
            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faFile} />
                <span className="label">Documents</span>
            </div>
        </div>
    );
};

export default Navbar;
