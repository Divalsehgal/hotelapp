import React from 'react'
import loadingGif from "../images/gif/loading-arrow.gif"

export default function Loading() {

    return (
        <div className="loading" data-test="loading">
            <h4>Rooms data loading.....</h4>
            <img src={loadingGif} alt="loading"/>
        </div>
    )
}
