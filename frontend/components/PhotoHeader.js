import React from "react";

export default function PhotoHeader ({title, bio}) {
    return (
        <div id='headerContainer'>
            <h1>Astronomy Picture of the Day: {title}</h1>
            <h2>{bio}</h2>
        </div>
    )
   
}