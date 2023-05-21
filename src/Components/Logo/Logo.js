import React from "react";
import { Tilt } from 'react-tilt'
import flower from './flower.png'
import './Logo.css'


const Logo = () => {
    return (
        <div>
            <Tilt className="br2 shadow-2" options={{max :25}} style={{ height: 150, width: 150 }}>
                <div className="pa3">
                    <img style={{paddingTop: '5px'}} alt='logo' src={flower}></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;