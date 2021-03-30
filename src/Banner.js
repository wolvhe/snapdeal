import React from 'react'
import bannerImg from "./banner.JPG";
import "./banner.css"

function Banner() {
    return (
        <div>
            <img className="banner_img" src={bannerImg} />
        </div>
    )
}

export default Banner
