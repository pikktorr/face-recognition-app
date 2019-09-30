import React from "react";
import Navigation from "./components/Navigation/Nav.js";
import Logo from "./components/Logo/Logo";
import "tachyons";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Logo />
            {/* <Sign-In />
            <Something /> */}
        </div>
    );
}

export default App;
