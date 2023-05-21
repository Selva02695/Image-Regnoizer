import React from "react";

const ImageUrl = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p className="f3">{`you can detect your Images here, give it a try`}</p>
            <div className="center">
                <div className="center pa4 br3 shadow-5">
                    <input type={Text} className="f4 pa2 w-70 center" onChange={onInputChange}></input>
                    <button className="w-30 grow f4 link ph3 pv2 dib hover-bg-light-black" onClick={onSubmit}>{`Detect`}</button>
                </div>
            </div>
        </div>
    )
}

export default ImageUrl;