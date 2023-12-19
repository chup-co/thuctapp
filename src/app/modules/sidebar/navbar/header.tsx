/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import custombell from "@/assets/images/input/custom-bell.svg";
import Angledownsmall from "@/assets/images/input/angle-down-small.svg";

function Header() {
  
  function setOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex">
       
    <button>
    <div className="side-bar"/>
      <div className="toggle-btn">
      <div className="flex center">
    <img width="50"
    height="50"
    src="https://i.pinimg.com/originals/e1/7e/e3/e17ee3b061625748561659827cf12a41.jpg" alt="" />
  <button className="margin-left: 40px">Chup</button>
  </div>
  </div>
  </button>

  <button><Image src={Angledownsmall} alt="Angledownsmall"  /></button>
      <div className="flex ">
      <button><Image src={custombell} alt="custombell" /></button>
      
      <div className={!open ? "bg-purple-300 " : ""}>
        <svg
          onClick={() => setOpen(!open)}
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        </div>
        </div>

        </div>

     
 
  );
}

export default Header;