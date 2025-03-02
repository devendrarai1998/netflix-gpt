import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] px-24 text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
          <button className="bg-white text-black p-4 px-6 rounded-lg hover:bg-opacity-80">
            ▶ Play
          </button>
          <button className="mx-2 bg-white text-black p-4 px-6 text-pretty rounded-lg">
            ℹ more info
          </button>
        </div>
    </div>
  )
};

export default VideoTitle;