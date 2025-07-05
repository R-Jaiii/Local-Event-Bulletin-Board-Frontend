import React from 'react'
import BackgroundVid from './BackgroundVid.mp4'
import './BackDrop.css'

export default function BackDrop() {
  return (
    <div>
        <div className="BackgroundVid-Main">
            <video autoPlay loop muted className="BackgroundVid">
                <source src={BackgroundVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}
