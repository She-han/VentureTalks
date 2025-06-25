import React from "react";

const Shorts = () => {
  // Your YouTube Shorts video IDs
  const shortsIds = [
      "XrJpnRO5QsE",
    "5ud53ZSDu1M", 
    
    "KBVG__8rfus",
    "Rr5Ja2RW8zY",
     "26_Huwpd1-E"
    

  ];

  return (
    <div className="justify-center items-center mx-auto max-w-[81%] pt-8 mb-12">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#02235f] dark:text-white">Our Shorts</h2>
        <p className="text-gray-600 dark:text-gray-300">Check out our latest short videos</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
        {shortsIds.map((videoId, index) => (
          <div key={index} className="relative group">
            <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&fs=1`}
                title={`VentureTalks Short ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
              ></iframe>
            </div>
            
          
            
            {/* View on YouTube button (appears on hover) */}
            <div className="absolute transition-opacity duration-300 opacity-0 bottom-2 right-2 group-hover:opacity-100">

            </div>
          </div>
        ))}
      </div>
      

    </div>
  );
};

export default Shorts;