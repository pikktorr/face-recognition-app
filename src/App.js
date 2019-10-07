import React, { Component } from "react";
import SignIn from "./components/SignIn/SignIn.js";
import Register from "./components/Register/Register.js";
import Navigation from "./components/Navigation/Nav.js";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

import "tachyons";
import Particles from "react-particles-js";

import Clarifai from "clarifai";
const app = new Clarifai.App({
    apiKey: "879bba8058df43be82c4a8e74ef27eaf"
});

const particlesOptions = {
    particles: {
        number: {
            value: 70
        },
        size: {
            value: 3
        }
    }
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            imageUrl: "",
            box: {},
            route: "signin",
            isSignedIn: false
        };
    }

    onInputChange = event => {
        this.setState({ input: event.target.value });
    };

    calculateFaceLocation = data => {
        const clarifaiFace =
            data.outputs[0].data.regions[0].region_info.bounding_box;
        console.log(clarifaiFace);
        const image = document.getElementById("inputimage");
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - clarifaiFace.right_col * width,
            bottomRow: height - clarifaiFace.bottom_row * height
        };
    };

    onButtonSubmit = () => {
        this.setState({ imageUrl: this.state.input });
        app.models
            .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response =>
                this.displayFaceBox(this.calculateFaceLocation(response)).catch(
                    err => console.log(err)
                )
            );
    };

    displayFaceBox = box => {
        console.log(box);
        this.setState({ box: box });
    };

    onRouteChange = route => {
        this.setState({ route: route });
    };

    isSignedIn = () => {
        this.setState({ isSignedIn: true });
    };

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions} />
                {this.state.route === "signin" ? (
                    <div>
                        <Navigation onRouteChange={this.onRouteChange} />
                        <Logo />
                        <SignIn onRouteChange={this.onRouteChange} />
                    </div>
                ) : this.state.route === "register" ? (
                    <div>
                        <Navigation onRouteChange={this.onRouteChange} />
                        <Logo />
                        <Register onRouteChange={this.onRouteChange} />
                    </div>
                ) : (
                    <div>
                        <Navigation
                            isSignedIn={this.isSignedIn}
                            onRouteChange={this.onRouteChange}
                        />
                        <Logo />
                        <div
                            className="center br3 shadow-2 mw6 bg-white ba-10" style={{maxWidth: '500px'}}
                        >
                            <div>
                                <Rank />
                                <ImageLinkForm
                                    onInputChange={this.onInputChange}
                                    onButtonSubmit={this.onButtonSubmit}
                                />
                                <FaceRecognition
                                    imageUrl={this.state.imageUrl}
                                    box={this.state.box}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
