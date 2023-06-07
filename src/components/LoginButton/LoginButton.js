import React from 'react';
import PropTypes from 'prop-types';
import './LoginButton.css';
import {useNavigate} from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate()

    function handleclick() {
        navigate("/home")
    }

    return (
    <div className="LoginButton" data-testid="LoginButton">
        <button className="login-button" onClick={handleclick}>login</button>
    </div>
    );
}

LoginButton.propTypes = {};

LoginButton.defaultProps = {};

export default LoginButton;
