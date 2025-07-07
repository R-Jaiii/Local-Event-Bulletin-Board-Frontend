import React from 'react'

import '@/assets/BackDrop.css'

export default function BackDrop() {
  return (
    <div>
        <div className="BackgroundVid-Main">
            <video autoPlay loop muted className="BackgroundVid">
                <source src="https://cdn.pixabay.com/video/2025/05/27/282084_small.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}
// The BackDrop component renders a full-screen video background
// The video plays automatically, loops, and is muted
// The video source is imported from a local file named BackgroundVid.mp4
// The component is styled using a CSS file named BackDrop.css