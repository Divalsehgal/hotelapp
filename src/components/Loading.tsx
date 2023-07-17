import React from 'react'
import loadingGif from "../images/gif/loading-arrow.gif"

interface LoadingProps{

}
export default function Loading({}:LoadingProps) {

    return (
        <div className="loading" data-test="loading">
            <h4>Rooms data loading.....</h4>
            <img src={loadingGif} alt="loading"/>
        </div>
    )
}
