// src/app/components/BackgroundVideo.js
"use client";

import React, { useState, useRef, useEffect } from 'react';

const BackgroundVideo = ({ 
  videoSrc = "/homevideo.webm", 
  overlayOpacity = 40,
  className = "",
  children 
}) => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video autoplay failed:", error);
          // Autoplay was prevented, but that's okay
        });
      }
    }
  }, []);

  const handleVideoError = (e) => {
    console.error("Video failed to load:", e);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Background Video or Fallback */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-label="Background video"
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
            preload="metadata"
            controls={false}
          >
            {/* Primary source - use the exact file you have */}
            <source src={videoSrc} type="video/webm" />
          </video>
        ) : (
          // Fallback background image if video fails
          <div 
            className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black bg-cover bg-center"
            style={{
              backgroundImage: `url('/fallback-bg.jpg'), linear-gradient(135deg, #1f2937 0%, #111827 50%, #000000 100%)`
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-white text-sm opacity-50">
                {videoLoaded ? "Video paused" : "Loading background..."}
              </p>
            </div>
          </div>
        )}
        
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

      {/* Debug info (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black bg-opacity-75 text-white text-xs p-2 rounded z-50">
          Video Status: {videoError ? "❌ Error" : videoLoaded ? "✅ Loaded" : "⏳ Loading"}
          <br />
          Path: {videoSrc}
        </div>
      )}
    </div>
  );
};

export default BackgroundVideo;