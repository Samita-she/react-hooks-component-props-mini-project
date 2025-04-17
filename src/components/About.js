// src/components/About.js
import React from "react";

function About({ about, image = "https://via.placeholder.com/215" }) {
    return (
        <aside>
            <img src={image} alt="about" />
            <p>{about}</p>
        </aside>
    );
}

export default About;

