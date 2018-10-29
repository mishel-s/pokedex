import React, { Component } from 'react';
import logo from './img/logo.png';
import styles from './styles.css';

class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <img src={logo} alt="logo" />
                </header>
            </React.Fragment>
        )
    }
}

export default Logo;