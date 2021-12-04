import React from 'react'
import './button.css';

function Button(props) {
    return (
        <>
        <a  href="/" className="aavesh-btn">
        <span className="aavesh-btn-text">{props.text?props.text:"Button"}</span>
        </a>
        </>
    )
}

export default Button
