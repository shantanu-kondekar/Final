import React, { Component } from 'react';
import Logo from '../../assets/logo.svg';
import './Header.css'
import Button from '@material-ui/core/Button';



class Header extends Component {

    render() {
        const headerStyle = {
            textAlign: 'center',
            background: '#222',
            color: '#fff',
            height: '36px',
            padding: "8px 8px 32px 16px",
            textTransform: 'uppercase'
        };

        return (
            <div className="header" style={headerStyle} >
                <img src={Logo} alt="logo" className="logo-image" />
                <Button id = "in-out-btn" variant="contained" type="submit">Login</Button>
                <Button id = "book-show-btn" variant="contained" color = "primary" type="submit">Book Show</Button>

                <div>

                </div>
            </div>
        )
    }
}

export default Header;