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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showDiagnostic, setShowDiagnostic] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      video.playsInline = true;
      video.autoplay = true;
      
      const attemptPlay = async () => {
        try {
          await video.play();
          console.log('✅ Video playing');
          setIsPlaying(true);
        } catch (e) {
          console.log('❌ Play failed:', e);
        }
      };

      if (video.readyState >= 2) {
        attemptPlay();
      } else {
        video.addEventListener('loadeddata', attemptPlay, { once: true });
      }
    }
  }, []);

  // Update video mute state when isMuted changes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
    }
  }, [isMuted]);

  const handleVideoError = (e) => {
    console.error("❌ Video error:", e);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log("✅ Video loaded");
    setVideoLoaded(true);
  };

  const toggleDiagnostic = () => {
    setShowDiagnostic(!showDiagnostic);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    console.log(isMuted ? '🔊 Video unmuted' : '🔇 Video muted');
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`} style={{ background: 'red' }}>
      {/* DIAGNOSTIC: Show video with visible controls and border */}
      {showDiagnostic ? (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            controls={true}
            muted={isMuted}
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
            style={{ 
              position: 'absolute',
              width: 'calc(100%)',
              height: 'calc(100%)',
              objectFit: 'cover',
              zIndex: 1000000
            }}
          >
            <source src={videoSrc} type="video/webm" />
          </video>
          
          {/* Reduced overlay for visibility */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-20"
            style={{ zIndex: 2 }}
          />
        </div>
      ) : (
        // NORMAL: Hidden video as background
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            controls={false}
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1
            }}
          >
            <source src={videoSrc} type="video/webm" />
            <source src="/homevideo.mp4" type="video/mp4" />
          </video>
          
          <div 
            className={`absolute inset-0 bg-black bg-opacity-${overlayOpacity}`}
            style={{ zIndex: 2 }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;