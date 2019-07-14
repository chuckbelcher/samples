import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../shared/images/logo.svg';

const Header = (props) => {
    const {
        title = 'Welcome',
        url = 'http://localhost:3000'
    } = props;

    return (
        <header className="App-header">
            <a href={url}> 
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <h1 className="App-title">{title}</h1>
        </header>
    )
}

//validate prop types
Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;