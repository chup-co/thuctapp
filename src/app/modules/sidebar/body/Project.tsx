/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Angledownsmall from "@/assets/images/input/angle-down-small.svg";
import Image from "next/image";
import ListProject from "./ListProject";

const MyProjects = () => {
  const [isMidVisible, setIsMidVisible] = useState(false);

  function setView(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <div className="side-bar">
        <div className="toggle-btn" />

        <div className="flex center">
          <img
            width="25"
            height="25"
            src="https://i.pinimg.com/originals/e1/7e/e3/e17ee3b061625748561659827cf12a41.jpg"
            alt=""
          />
          <div className="flex">
          <button onClick={() => setView("project")}> My Projects </button>
          <button><Image src={Angledownsmall} alt="Angledownsmall" /></button>
          </div>
          
          <button
            aria-label="Add project"
            type="button"
            aria-disabled="false"
            className="_8313bd46 f169a390 _8b7f1a82 _8644eccb _2a3b75a1"
          >
            <svg width="13" height="13">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
              ></path>
            </svg>
          </button>
        </div>
        <ListProject />
      </div>
    </div>
  );
};

export default MyProjects;
