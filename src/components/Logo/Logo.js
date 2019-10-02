import React from "react";
import Tilt from "react-tilt";
import LogoImg from './Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className=" center ma4 mt0">
            <Tilt
                className="Tilt br-100 shadow-2 flex items-center justify-center"
                options={{ max: 55 }}
                style={{ height: 100, width: 100}}
            >
                <div className="Tilt-inner"> <img src={LogoImg} alt="Logo"/> </div>
            </Tilt>
        </div>
    );
};

export default Logo;
