import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav
                className="ph4 pt1"
                style={{ display: "flex", justifyContent: "flex-end" }}
            >
                <p
                    className="b black-50 input-reset dim pointer f5 dib br2"
                    onClick={() => onRouteChange("signin")}
                >
                    Sign Out
                </p>
            </nav>
        );
    } else {
        return(
            <nav
                className="ph4 pt1"
                style={{ display: "flex", justifyContent: "flex-end" }}
            >
                <p
                    className="b black-50 input-reset dim pointer f5 dib br2"
                    onClick={() => onRouteChange("signin")}
                >
                    Sign In
                </p>
                <p
                    className="b black-50 input-reset dim pointer f5 dib br2 ml3"
                    onClick={() => onRouteChange("register")}
                >
                    Register
                </p>
            </nav>
        );
    }
};

export default Navigation;
