import React from "react";

export default function PhotoFooter({date}) {
    return (
        <div>
            <h4>Photo taken on: {date}</h4>
            <a href="https://apod.nasa.gov/apod/astropix.html">Credit to Nasa</a>
        </div>
    )
}