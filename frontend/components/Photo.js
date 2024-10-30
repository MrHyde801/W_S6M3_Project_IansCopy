import React from "react";


export default function Photo({url, hdurl}) {
    return (
        <img src={url}
        alt="hoverable"
        onMouseEnter={(e) => e.currentTarget.src = hdurl}
        onMouseLeave={(e) => e.currentTarget.src = url} ></img>
    )
}