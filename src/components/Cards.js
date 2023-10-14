import React from "react";

export default function Cards (props){
    return(
        <div>
            <section className="Card--Section">
                 <img className="Image--Card" src= {props.img}  alt="swimming"/>
                 <div>
                 <img className="Image--star" src ="../image/Star.png" alt="star" />  
                 <span className="Rating--Loc">{props.rating} {props.location}</span>
                 <p>{props.name}</p>
                 <p>{props.price} / person</p>                  
                </div> 
                 
            </section>
            
        </div>
    )
}