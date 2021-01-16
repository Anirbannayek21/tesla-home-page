import React from 'react'
import Button from'./Button'
import Down from '../assets/chevron-down-solid.svg'
import './Item.css'
function Item({title,description,backgroundImg,leftButton,leftButtonLink,twoButton,rightButton,rightButtonLink,first}) {
    return (
        <div className='item' style={{
            backgroundImage:'url('+backgroundImg+')'
        }}>
            <div className="item-container">
                <div className="item-title">
                    <h1>{title}</h1>
                
                    <div className="item-description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="lower-part">
                    <div className="item-buttons">
                        <Button imp='primary' text={leftButton} link={leftButtonLink}/>
                        {twoButton &&(
                            <Button imp='secondary' text={rightButton} link={rightButtonLink}/>
                        )}
                    </div>
                    {first &&(
                        <div className="down">
                            <img src={Down} alt="tesla-logo"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item
