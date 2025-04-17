// src/components/Article.jsx
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const getEmoji = () => {
        if (minutes < 30) {
            const cups = Math.ceil(minutes / 5);
            return "☕️".repeat(cups);
        } else {
            const boxes = Math.ceil(minutes / 10);
            return "🍱".repeat(boxes);
        }
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {getEmoji()} {minutes} min read | {date}
            </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article; // Ensure this is a default export
