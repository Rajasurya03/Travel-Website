import React from 'react'
import Carditem from './Carditem'
import './Card.css'
import img1 from '../../assets/images/img-9.jpg'
import img2 from '../../assets/images/img-2.jpg'
import img3 from '../../assets/images/img-4.jpg'
import img4 from '../../assets/images/img-3.jpg'
import img5 from '../../assets/images/img-5.jpg'

function Card() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Carditem 
                            src= {img1}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                            label='Adventure' 
                            path='/services'
                        />
                        <Carditem 
                            src= {img2}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                            label='Adventure' 
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Carditem 
                            src= {img3}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                            label='Adventure' 
                            path='/services'
                        />
                        <Carditem 
                            src= {img4}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                            label='Adventure' 
                            path='/services'
                        />
                        <Carditem 
                            src= {img5}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                            label='Adventure' 
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card