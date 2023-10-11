import React from 'react'
import './HeroSection.css'
import '../../App.css'
import {Button} from '../button/Button'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ved1 from '../../assets/videos/video-2.mp4'
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Ved1}  controls muted autoPlay={"autoplaynpm"} preLoad="auto" loop/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STATED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection