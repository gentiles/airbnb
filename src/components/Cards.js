import React from "react";

export default function Cards (props){
    return(
        <div>
            <section className="Card--Section">
                 <img className="Image--Card" src= {props.img}  alt="swimming"/>
                 <div className="Card--details">
                    <img className="Image--star" src ="../image/Star.png" alt="star" />  
                    <span className="Rating--Loc">{props.rating} {props.location}</span> 
                
                    <label className="Name--Cards">{props.name}</label>
                    <label className="Price">{props.price} / person</label>               
                </div> 
                
                 
            </section>
            
        </div>
    )
}