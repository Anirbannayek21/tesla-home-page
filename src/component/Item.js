import React from 'react'
import Button from'./Button'
import Down from '../assets/expand_more.svg'
import './Item.css'
function Item({title,description,backgroundImg,leftButton,leftButtonLink,twoButton,rightButton,rightButtonLink,first,last}) {
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
                    {last &&(
                        <div className="copyright">
                            <a>Tesla © 2021</a>
                            <a href="/">Privacy & Legal</a>
                            <a href="/">Contact</a>
                            <a href="/">Careers</a>
                            <a href="/">Get Newsletter</a>
                            <a href="/">News</a>
                            <a href="/">Forums</a>
                            <a href="/">Location</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item
