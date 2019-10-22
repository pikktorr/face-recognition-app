import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://desolate-stream-93210.herokuapp.com/signin", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        })
    })
    .then(response => response.json())
    .then(user=>{
        if(user.id){
            this.props.loadUser(user);
            this.props.onRouteChange('home');
        }
    })
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article
        className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba-10 shadow-2"
        style={{ maxWidth: "25rem" }}
      >
        <main className="pa4 black-70">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0 center">{"{ smart-brainer }"}</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba b--black-50 bg-transparent w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba b--black-50 bg-transparent w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="center">
              <input
                onClick={this.onSubmitSignIn}
                className="b black-70 ph3 pv2 input-reset ba b--black-50 bg-transparent dim pointer f5 dib bw1 br-pill"
                style={{ outline: "none" }}
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3 center">
              <p
                onClick={() => onRouteChange("register")}
                className="f5 link dim black-70 db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
