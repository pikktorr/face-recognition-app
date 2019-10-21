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

const initialState = {
  input: "",
  imageUrl: "",
  boxes: [],
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    entries: 0,
    joined: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  calculateFaceLocation = data => {
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return data.outputs[0].data.regions.map(face=>{
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height
      };
    })
    
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("http://localhost:3000/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  displayFaceBox = boxes => {
    this.setState({ boxes: boxes });
  };

  onRouteChange = route => {
    if (route === "signin") {
      this.setState(initialState);
    }
    this.setState({ route: route });
  };

  isSignedIn = () => {
    this.setState({ isSignedIn: true });
  };

  render() {
    const { imageUrl, route, boxes } = this.state; //kiváltja a this.state-eket a lenti funkcióban
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        {route === "signin" ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <SignIn
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          </div>
        ) : route === "register" ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <Register
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          </div>
        ) : (
          <div>
            <Navigation
              isSignedIn={this.isSignedIn}
              onRouteChange={this.onRouteChange}
            />
            <Logo />
            <div
              className="center br3 shadow-2 mw6 bg-white ba-10"
              style={{ maxWidth: "500px" }}
            >
              <div>
                <Rank
                  name={this.state.user.name}
                  entries={this.state.user.entries}
                />
                <ImageLinkForm
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
