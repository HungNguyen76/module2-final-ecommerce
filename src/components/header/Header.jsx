import React from "react";
import Medicine from "../../assets/images/Medicine.svg";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "./Card";
import { User } from "./User";
import { Link } from "react-router-dom";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <Link to="/">
              <svg
                class="pre-logo-svg"
                height="60px"
                width="60px"
                fill="#111"
                viewBox="0 0 69 32"
              >
                <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
              </svg>
            </Link>
          </div>
          <div>
            <span style={{marginLeft: '18rem'}}>Men</span>
          {/* </div> */}
          {/* <div> */}
            <span style={{marginLeft: '3rem'}}>Women</span>
          {/* </div>
          <div> */}
            <span style={{marginLeft: '3rem'}}>Kid</span>
          {/* </div> */}
          {/* <div> */}
            <span style={{marginLeft: '3rem'}}>Sales</span>
          </div>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search Product..." />
          </div>
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
