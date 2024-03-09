import React from 'react'
import "./Card.css"


const Card = ({emoji,heading,detail}) => {
  return (
    <div className="Card">
        <img src={emoji} alt="" />
        <span>{heading} </span>
        <span>{detail}</span>
        <button className='c-button' onClick={URL} alt="https://www.w3schools.com/"> Learn More </button>

    </div>
  )
}

export default Card
