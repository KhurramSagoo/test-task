import React from "react";
import "./middle.css";
import image1 from "../assets/rightPortion/image1.png";
import image2 from "../assets/rightPortion/image2.png";
import image3 from "../assets/rightPortion/image3.png";
import image4 from "../assets/rightPortion/image4.png";
import image7 from "../assets/rightPortion/image7.png";
import image9 from "../assets/rightPortion/image9.png";
import video from "../assets/video.mp4";

const MiddlePart = () => {
  return (
    <div className="middleDiv">
      <div className="left">
        <div className="top">
          <div className="box1 box ">
            <img src={image1} alt="" />
          </div>
          <div className="box2 box">
            <img src={image2} alt="" />
          </div>
          <div className="box3 box">
            <img src={image3} alt="" />
          </div>
          <div className="box4 box">
            <img src={image4} alt="" />
          </div>
          <div className="box5 box">
            <video className="videoPlayer" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="last">
          <div className="box8 box">
            <p className="quote">
              "Success is not final, failure is not fatal: It is the courage to
              continue that counts." — Winston Churchill
            </p>
          </div>
          <div className="box9 box">
            <img src={image9} alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="box6 box">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nemo aliquam nisi fugiat eius facere.
          </p>
        </div>
        <div className="box7 box">
          <img src={image7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
