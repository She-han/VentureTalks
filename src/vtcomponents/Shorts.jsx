import React from "react";

const Shorts = () => {
  return (
    <div className="justify-center items-center mx-auto max-w-[83%] pt-8 mb-12 ">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">Our Shorts</h2>
      </div>
      <iframe
        width="100%" 
        height="450" 
        src="https://widget.tagembed.com/2145521"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Shorts;
