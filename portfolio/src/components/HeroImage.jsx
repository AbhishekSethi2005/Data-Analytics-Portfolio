import React, { useEffect, useState } from "react";

const HeroImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <div className={`relative w-64 h-64 md:w-100 md:h-100 rounded-full overflow-hidden border-4 border-orange-500/60 shadow-xl transition-all duration-700 ease-out ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"} hover:scale-105 hover:shadow-orange-400/40 hover:shadow-2xl`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 rounded-full ring-2 ring-orange-400/40 animate-pulse"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/10"></div>
    </div>
  );
};

export default HeroImage;
