import React from "react";
import { Button } from "@mui/material";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 min-h-[80vh] bg-white">
      {/* Left Side f6f7f9*/}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          HELLO I’M <br />
          <span className="text-black">LAXMAN ARUKALA</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          I specialize in building modern, scalable web applications using
          React.js and Node.js. With hands-on experience across the full stack,
          I turn complex problems into clean, performant solutions.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#C6FF7F",
              color: "#000",
              fontWeight: 600,
            }}
          >
            View More
          </Button>
          <Button
            variant="outlined"
            style={{
              borderColor: "#ccc",
              fontWeight: 600,
            }}
            endIcon={<ArrowCircleDownIcon/>}
          >
            Download CV
          </Button>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="mb-12 md:mb-0">
        <img
          src="https://i.ibb.co/VTkp9DT/jane-cooper-man.png"
          alt="Jane Cooper"
          className="w-[300px] md:w-[400px] rounded-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;
