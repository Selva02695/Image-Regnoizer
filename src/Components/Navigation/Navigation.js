import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
        <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signIn')} >Sign out</p>
        </div>
        );
        }
         else {
        return (
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('home')} >Sign In</p>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('Register')} >Register</p>
             </div>
        );
    }
}

export default Navigation;