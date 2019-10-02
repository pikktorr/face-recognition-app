import React from "react";
import Navigation from "./components/Navigation/Nav.js";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

import "tachyons";
import Particles from "react-particles-js";

const particlesOptions = {
	    "particles": {
	        "number": {
	            "value": 70
	        },
	        "size": {
	            "value": 3
	        }
	    }
};

function App() {
    return (
        <div className="App">
            <Particles className="particles" params={particlesOptions} />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
            {/* <Something /> */}
        </div>
    );
}

export default App;
