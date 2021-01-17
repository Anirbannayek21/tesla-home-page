import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

function header() {
    return (
        <div className='header'>
            <div className="header-logo">
                <img src={TeslaLogo} alt="tesla-logo"/>
            </div>
            <div className="header-center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panels</p>
            </div>
            <div className="header-right">
                <p>SHOP</p>
                <p>TESLA ACCOUNT</p>
            </div>
        </div>
    )
}

export default header
