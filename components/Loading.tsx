"use client"
import React from 'react'
import loadingGif from "../public/images/gif/loading-arrow.gif"
import Image from 'next/image'

export default function Loading() {

    return (
        <div className="loading" data-test="loading">
            <h4>Rooms data loading.....</h4>
            <Image src={loadingGif} alt="loading"/>
        </div>
    )
}
