import React from "react";

const FaceRecognition =({Input})=>{
    return(
        <div className="center ma">
        <div className="obsolute mt2">
            <img src={Input} alt="" height={370} width={370}></img>
        </div>
        </div>
    )
}

export default FaceRecognition;