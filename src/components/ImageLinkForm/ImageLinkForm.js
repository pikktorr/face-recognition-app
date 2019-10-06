import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f4 fw1 flex justify-center white">
                {
                    "This Magic Brain will detect faces in your pictures. Give it a try!"
                }
            </p>
            <div className="center form pa3 br2 shadow-2">
                <input
                    className="f5 lh-copy pa2 w-80 center"
                    type="text"
                    onChange={onInputChange}
                />
                <button
                    className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple"
                    onClick={onButtonSubmit}
                >
                    Detect
                </button>
            </div>
        </div>
    );
};

export default ImageLinkForm;
