import "./css/main.css";
import "./css/style.css";
import { Link } from 'react-router-dom';

import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useRef, useState } from 'react';

function Flower() {
    const location = useLocation(); // Get current location
    const myAudio = useRef(new Audio("https://cdn.pixabay.com/audio/2024/02/14/audio_b9bc3934cc.mp3"));
    const [isPlaying, setIsPlaying] = useState(false);
  
    useEffect(() => {
      document.body.classList.remove("container");
  
      const audio = myAudio.current; // Access the audio object
  
      const handleEnded = () => {
        setIsPlaying(false);
        console.log("audio ended");
      };
  
      const handlePlay = () => {
        setIsPlaying(true);
        console.log("audio played");
      };
  
  
      const handleError = (error) => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      }
  
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('error', handleError);
  
      // Initial Play (only if not already playing due to a refresh)
      if (!isPlaying) {
        audio.play().then(handlePlay).catch(handleError);
      }
  
      return () => {
        audio.pause(); // Pause audio when component unmounts
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('error', handleError);
      };
    }, []);
  
    useEffect(() => {
      const audio = myAudio.current;
      return () => {
        audio.pause();
        setIsPlaying(false);
      }
    }, [location]);
  
  
    const toggleAudio = () => {
      const audio = myAudio.current;
      if (audio.paused) {
        audio.play().then(() => setIsPlaying(true)).catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    };
  

    return (
        <div className="container">
            <div className="night"></div>
            <div className="flowers">
            <div className="flower flower--1">
                <div className="flower__leafs flower__leafs--1">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                <div className="flower__light flower__light--1"></div>
                <div className="flower__light flower__light--2"></div>
                <div className="flower__light flower__light--3"></div>
                <div className="flower__light flower__light--4"></div>
                <div className="flower__light flower__light--5"></div>
                <div className="flower__light flower__light--6"></div>
                <div className="flower__light flower__light--7"></div>
                <div className="flower__light flower__light--8"></div>
                </div>
                <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1"></div>
                <div className="flower__line__leaf flower__line__leaf--2"></div>
                <div className="flower__line__leaf flower__line__leaf--3"></div>
                <div className="flower__line__leaf flower__line__leaf--4"></div>
                <div className="flower__line__leaf flower__line__leaf--5"></div>
                <div className="flower__line__leaf flower__line__leaf--6"></div>
                </div>
            </div>

            <div className="flower flower--2">
                <div className="flower__leafs flower__leafs--2">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                <div className="flower__light flower__light--1"></div>
                <div className="flower__light flower__light--2"></div>
                <div className="flower__light flower__light--3"></div>
                <div className="flower__light flower__light--4"></div>
                <div className="flower__light flower__light--5"></div>
                <div className="flower__light flower__light--6"></div>
                <div className="flower__light flower__light--7"></div>
                <div className="flower__light flower__light--8"></div>
                </div>
                <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1"></div>
                <div className="flower__line__leaf flower__line__leaf--2"></div>
                <div className="flower__line__leaf flower__line__leaf--3"></div>
                <div className="flower__line__leaf flower__line__leaf--4"></div>
                </div>
            </div>

            <div className="flower flower--3">
                <div className="flower__leafs flower__leafs--3">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                <div className="flower__light flower__light--1"></div>
                <div className="flower__light flower__light--2"></div>
                <div className="flower__light flower__light--3"></div>
                <div className="flower__light flower__light--4"></div>
                <div className="flower__light flower__light--5"></div>
                <div className="flower__light flower__light--6"></div>
                <div className="flower__light flower__light--7"></div>
                <div className="flower__light flower__light--8"></div>
                </div>
                <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1"></div>
                <div className="flower__line__leaf flower__line__leaf--2"></div>
                <div className="flower__line__leaf flower__line__leaf--3"></div>
                <div className="flower__line__leaf flower__line__leaf--4"></div>
                </div>
            </div>

            <div className="grow-ans" style={{ "--d": "1.2s" }}>
                <div className="flower__g-long">
                <div className="flower__g-long__top"></div>
                <div className="flower__g-long__bottom"></div>
                </div>
            </div>
            <div className="growing-grass">
                <div className="flower__grass flower__grass--1">
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                <div className="flower__grass__overlay"></div>
                </div>
            </div>

            <div className="growing-grass">
                <div className="flower__grass flower__grass--2">
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                <div className="flower__grass__overlay"></div>
                </div>
            </div>

            <div className="grow-ans" style={{ "--d": "2.4s" }}>
                <div className="flower__g-right flower__g-right--1">
                <div className="leaf"></div>
                </div>
            </div>

            <div className="grow-ans" style={{"--d": "2.8s"}}>
                <div className="flower__g-right flower__g-right--2">
                <div className="leaf"></div>
                </div>
            </div>

            <div className="grow-ans" style={{"--d": "2.8s"}}>
                <div className="flower__g-front">
                <div
                    className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1"
                >
                    <div className="flower__g-front__leaf"></div>
                </div>
                <div
                    className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2"
                >
                    <div className="flower__g-front__leaf"></div>
                </div>
                <div
                    className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3"
                >
                    <div className="flower__g-front__leaf"></div>
                </div>
                <div
                    className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4"
                >
                    <div className="flower__g-front__leaf"></div>
                </div>
                <div
                    className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5"
                >
                    <div className="flower__g-front__leaf"></div>
                </div>
                <div
                    className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6"
                >
                    <div className="flower__g-front__leaf"></div>
                </div>
                <div
                    className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7"
                >
                    <div className="flower__g-front__leaf"></div>
                </div>
                <div
                    className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8"
                >
                    <div className="flower__g-front__leaf"></div>
                </div>
                <div className="flower__g-front__line"></div>
                </div>
            </div>

            <div className="grow-ans" style={{"--d": "3.2s"}}>
                <div className="flower__g-fr">
                <div className="leaf"></div>
                <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
                </div>
            </div>

            <div className="long-g long-g--0">
                <div className="grow-ans" style={{ "--d": "3s" }}>
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "2.2s" }}>
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.4s" }}>
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.6s" }}>
                <div className="leaf leaf--3"></div>
                </div>
            </div>

            <div className="long-g long-g--1">
                <div className="grow-ans" style={{ "--d": "3.6s" }}>
                    <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.8s" }}>
                    <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4s" }}>
                    <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.2s" }}>
                    <div className="leaf leaf--3"></div>
                </div>
            </div>

            <div className="long-g long-g--2">
                <div className="grow-ans" style={{ "--d": "4s" }}>
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.2s" }}>
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.4s" }}>
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.6s" }}>
                <div className="leaf leaf--3"></div>
                </div>
            </div>

            <div className="long-g long-g--3">
                <div className="grow-ans" style={{ "--d": "4s" }}>
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.2s" }}>
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3s" }}>
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.6s" }}>
                <div className="leaf leaf--3"></div>
                </div>
            </div>

            <div className="long-g long-g--4">
                <div className="grow-ans" style={{ "--d": "4s" }}>
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.2s" }}>
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3s" }}>
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.6s" }}>
                <div className="leaf leaf--3"></div>
                </div>
            </div>

            <div className="long-g long-g--5">
                <div className="grow-ans" style={{ "--d": "4s" }}>
                <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.2s" }}>
                <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3s" }}>
                <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.6s" }}>
                <div className="leaf leaf--3"></div>
                </div>
            </div>

            <div className="long-g long-g--6">
                <div className="grow-ans" style={{ "--d": "4.2s" }}>
                    <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.4s" }}>
                    <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.6s" }}>
                    <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "4.8s" }}>
                    <div className="leaf leaf--3"></div>
                </div>
            </div>

            <div className="long-g long-g--7">
                <div className="grow-ans" style={{ "--d": "3s" }}>
                    <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.2s" }}>
                    <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.5s" }}>
                    <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ "--d": "3.6s" }}>
                    <div className="leaf leaf--3"></div>
                </div>
            </div>
            </div>
            <button className="absolute top-4 right-4 bg-[#445069] px-4 py-2 w-24 rounded-lg font-bold" onClick={toggleAudio}>
                Toggle Audio
            </button>
            <div className="absolute bottom-32 left-8 text-center">
                <p className="text-xl text-center">Calm down my girl. <br></br>I know you are brave for this! <br />I believe in you !!</p>
                <p className="text-8xl text-center py-4">&#x1F497;</p>
            </div>
            <Link to="/" className="absolute bottom-8 left-20 bg-[#445069] w-48 rounded-lg font-bold text-center">
                <i className="fa-solid fa-house-chimney mr-2"></i><br />Back to home
            </Link>
            
        </div>
            


            

    )
}

export default Flower;