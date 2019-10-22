import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="pv4">
            <p className="f5 fw1 ma0 mb3 flex justify-center black-70">
                {
                    "Smart-Brainer will detect faces in your pictures. Give it a try!"
                }
            </p>
            <div className="center form pa2 w-100 ba b--black-50 bw0 br-pill shadow-2">
                <input
                    className="f5 lh-copy w-80 ph3 center bg-transparent bn"
                    style={{ outline: "none" }}
                    type="text"
                    onChange={onInputChange}
                    placeholder="Image URL.."
                />
                <button
                    className="b black-70 ph3 pv2 input-reset bg-transparent dim pointer f5 dib bn"
                    style={{ outline: "none" }}
                    onClick={onButtonSubmit}
                >
                    Detect
                </button>
            </div>
        </div>
    );
};

export default ImageLinkForm;
