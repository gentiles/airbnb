import React from "react";

export default function Cards (props){
    let badgeText
    if (props.openSpot === 0) {
        badgeText = "sold out"
    }else{
        badgeText = "online"
    }

    return(
        <div >
            
                    <section className="Card--Section">
                        {badgeText && <div className="card--badge">
                            {badgeText}
                        </div>}
                        <div>
                            <img className="Image--Card" src= {props.img}  alt="swimming"/>
                        </div>
                        
                        <div className="Card--details">
                            <img className="Image--star" src ="../image/Star.png" alt="star" />  
                            <span className="Rating--Loc">{props.rating} {props.location}</span> 
                        </div>
                        <div>
                        
                            <label className="Name--Cards">{props.name}</label>
                            <label className="Price">{props.price} / person</label>               
                        </div> 
                        
                        
                    </section>

           
            
            
        </div>
    )
}