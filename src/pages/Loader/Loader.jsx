import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-icon">
        <svg
          id="ec4YbOVdC561"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 197 230"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <g>
            <path
              d="M92,133h-10v10h10v-10Z"
              fill="#cbf000"
              className="loading-square"
              style={{ animationDelay: "0s" }}
            />
            <path
              d="M107,133h-10v10h10v-10Z"
              fill="#cbf000"
              fillOpacity="0.7"
              className="loading-square"
              style={{ animationDelay: "0.2s" }}
            />
            <path
              d="M107,147h-10v11h10v-11Z"
              fill="#cbf000"
              fillOpacity="0.4"
              className="loading-square"
              style={{ animationDelay: "0.4s" }}
            />
            <path
              d="M92,147h-10v11h10v-11Z"
              fill="#cbf000"
              fillOpacity="0.15"
              className="loading-square"
              style={{ animationDelay: "0.6s" }}
            />
            <path
              d="M132.401,92.4707l-35.9142-35.32C95.7319,56.413,94.7187,56,93.6636,56s-2.0682.413-2.8231,1.1507L57.6267,89.8137C48.1955,99.088,43,111.419,43,124.535c0,13.086,5.1702,25.389,14.561,34.656l33.604,35.555c.7316.768,1.7356,1.218,2.7954,1.252s2.0905-.35,2.8699-1.07l35.4657-32.922.105-.099c4.621-4.521,8.293-9.922,10.8-15.884c2.508-5.962,3.799-12.365,3.799-18.834s-1.291-12.872-3.799-18.834c-2.507-5.962-6.179-11.3626-10.8-15.8843ZM64.7102,96.7849L93.668,68.3021L125.317,99.423c4.912,4.805,8.46,10.83,10.282,17.458c1.821,6.629,1.85,13.623.084,20.266l-11.317-11.123v-15.225h-10.571v4.829L93.6819,95.8521l-.1124.1099-.0833-.0809L54.2889,134.423c-.8485-3.227-1.2776-6.551-1.2768-9.888c0-10.486,4.1587-20.343,11.6943-27.7564l.0038.0063ZM94.3689,183.676L64.8365,152.428l-.1263-.126c-2.43-2.387-4.5417-5.078-6.2829-8.007l35.1751-34.586l37.9486,37.314c-1.718,2.877-3.796,5.522-6.185,7.871L94.3689,183.676Z"
              fill="#cbf000"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
