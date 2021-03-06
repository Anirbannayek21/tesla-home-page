import React from 'react'
import './Button.css'

function Button({imp,text,link}){
    return (
        <div className={(imp==='secondary') ? 'button_white':'button'}>
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default Button
