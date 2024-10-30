import React from "react";

export default function PhotoHeader ({title, bio}) {
    return (
        <div id='headerContainer'>
            <h1>Astronomy Picture of the Day</h1>
            <h2 id="title">{title}</h2>
            <h2 id="bio">{bio}</h2>
        </div>
    )
   
}