import React from "react";

function PosterBanner() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <video
          src="/video/banner-video.mp4"
          controls
          playsInline
          preload="metadata"
          className="w-full rounded-3xl"
        />
      </div>
    </section>
  );
}

export default PosterBanner;