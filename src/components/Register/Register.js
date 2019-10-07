import React from "react";

const Register = ({onRouteChange}) => {
    return (
        <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba-10 shadow-2" style={{maxWidth: '25rem'}}>
            <main className="pa4 black-70">
                <form className="measure">
                    <fieldset
                        id="sign_up"
                        className="ba b--transparent ph0 mh0"
                    >
                        <legend className="f2 fw6 ph0 mh0 center">Register</legend>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                for="name"
                            >Name
                            </label>
                            <input
                                className="pa2 input-reset ba b--black-50 bg-transparent w-100"
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                for="email-address"
                            >Email
                            </label>
                            <input
                                className="pa2 input-reset ba b--black-50 bg-transparent w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">
                                Password
                            </label>
                            <input
                                className="b pa2 input-reset ba b--black-50 bg-transparent w-100"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                    </fieldset>
                    <div className="center">
                        <input
                            onClick={()=>onRouteChange('home')}
                            className="b black-70 ph3 pv2 input-reset ba b--black-50 bw1 bg-transparent dim pointer f5 dib br-pill"
                            type="submit"
                            value="Register"
                        />
                    </div>
                </form>
            </main>
        </article>
    );
};

export default Register;
