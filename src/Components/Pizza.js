import React from "react"
import "../Styles/Pizza.css";

function Pizza(props) {

  return (
    <div className="tempalate-page">
        <div className="tempalate-content">
            <div className='template-tittle'>
                <p>{props.name}</p>
            </div>
            <div className='template-ing'>
                <p>{props.ingredients}</p>
            </div>
            <div className='template-sale'>
                <div className='template-price'>
                    <p>Cena:{props.price}Kč</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pizza