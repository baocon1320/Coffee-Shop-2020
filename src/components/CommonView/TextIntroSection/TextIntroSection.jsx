// This component for general Text with title

import React from "react";
import "./TextIntroSection.css"

function TextIntroSection(props){
    return (
        <div>
                <div className="heading-section">
                    <span className="subheading">{props.title}</span>
                    <h2 className="mb-4">{props.subTitle}</h2>
                </div>
                <div>
                    <p>{props.content}</p>
                </div>
        </div>
    );
}

export default TextIntroSection;