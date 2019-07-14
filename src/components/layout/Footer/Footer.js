import React from 'react';

const Footer = () => {
    //Style
    const footerStyle = {
        backgroundColor: '#234',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: '15px',
        paddingBottom: '15px'
    }

    return (
        <footer style={footerStyle}>&copy; DSA Admin Portal {(new Date()).getFullYear()}
        </footer>
    );
}

export default Footer;
