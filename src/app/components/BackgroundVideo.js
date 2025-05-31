// src/app/components/BackgroundVideo.js
"use client";

import React from 'react';

const BackgroundVideo = ({ 
  videoSrc = "/homevideo.mp4", 
  overlayOpacity = 40,
  className = "",
  children 
}) => {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-label="Background video"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-${overlayOpacity}`}
          aria-hidden="true"
        ></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;