import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import planeImg from "../assets/img/plane.png";
import planeSound from "../assets/sounds/plane-sound.mp3";

const PlaneAnimation = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const audioRef = useRef(new Audio(planeSound));

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    audioRef.current.volume = 0.1;
    audioRef.current.loop = true;

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      audioRef.current.pause();
    };
  }, []);

  const playSound = () => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
  };

  const stopSound = () => {
    audioRef.current.pause();
  };

  const planeConfigs = [
    {
      path: {
        initial: { x: -100, y: 100, rotate: 0 },
        animate: { x: windowSize.width + 100, y: 100 },
      },
      timing: { duration: 8, repeatDelay: 0 },
      style: { width: "60px", filter: "brightness(1)" },
    },
    {
      path: {
        initial: { x: -100, y: windowSize.height * 0.3, rotate: 0 },
        animate: { x: windowSize.width + 100, y: windowSize.height * 0.3 },
      },
      timing: { duration: 10, repeatDelay: 2 },
      style: { width: "50px", filter: "brightness(0.9)" },
    },
    {
      path: {
        initial: { x: -100, y: windowSize.height * 0.5, rotate: 0 },
        animate: { x: windowSize.width + 100, y: windowSize.height * 0.5 },
      },
      timing: { duration: 7, repeatDelay: 4 },
      style: { width: "55px", filter: "brightness(0.95)" },
    },
    {
      path: {
        initial: { x: -100, y: windowSize.height * 0.7, rotate: 0 },
        animate: { x: windowSize.width + 100, y: windowSize.height * 0.7 },
      },
      timing: { duration: 9, repeatDelay: 1 },
      style: { width: "45px", filter: "brightness(0.85)" },
    },
  ];

  const Plane = ({ config }) => {
    const controls = useAnimation();

    useEffect(() => {
      controls.start({
        ...config.path.animate,
        transition: {
          ...config.timing,
          repeat: Infinity,
          ease: "linear",
          onRepeat: () => playSound(),
          onComplete: () => stopSound(),
        },
      });
    }, [windowSize.width, windowSize.height]);

    return (
      <motion.img
        src={planeImg}
        initial={config.path.initial}
        animate={controls}
        className="absolute object-contain hover:opacity-60 transition-opacity"
        style={{
          width: config.style.width,
          filter: config.style.filter,
        }}
        alt="Flying plane"
        onMouseEnter={playSound}
        onMouseLeave={stopSound}
      />
    );
  };

  return (
    <div className="fixed w-full h-full pointer-events-auto z-0 opacity-20">
      {planeConfigs.map((config, index) => (
        <Plane key={index} config={config} />
      ))}
    </div>
  );
};

export default PlaneAnimation;
