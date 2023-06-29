import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>
            Module02-Final - All right reserved - Design & Developed by MinHu
            ,Inc
          </p>
          <div className="social">
            <a href="https://www.facebook.com/minhu76/">
              <BsFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/minhhung7690/">
              <RiInstagramFill className="icon" />
            </a>
            <a href="https://twitter.com/HngMin112915">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/minh-hung-nguyen-7b3309b4/">
              <AiFillLinkedin className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
