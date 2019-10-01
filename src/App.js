import React from "react";
import Navigation from "./components/Navigation/Nav.js";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "tachyons";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Logo />
            <ImageLinkForm />
            {/* <Something /> */}
        </div>
    );
}

export default App;
