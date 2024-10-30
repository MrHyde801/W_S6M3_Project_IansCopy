import React from "react";

export default function PhotoFooter({date}) {
    return (
        <div id="photoFooter">
            <h4>Photo taken on: {date}</h4>
            <a href="https://www.nasa.gov/">More Space Info "Here"</a>
        </div>
    )
}