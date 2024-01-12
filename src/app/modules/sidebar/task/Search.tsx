"use client";
import Search from "@/assets/images/input/search.svg";
import Image from "next/image";
import Calendar from "@/assets/images/input/calendar.svg";
import Inbox from "@/assets/images/input/chart-pyramid.svg";
import Home from "@/assets/images/input/home.svg";
import Checkbox from "@/assets/images/input/check-circle.svg";
import Customgrid from "@/assets/images/input/custom-grid.svg";
import { FC, useEffect, useRef, useState } from "react";

interface ISearchTaskProps {
  setIsOpenSearch: () => void;
}

const SearchTask: FC<ISearchTaskProps> = ({ setIsOpenSearch }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpenSearch && setIsOpenSearch();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setIsOpenSearch]);

  return (
    <div
      ref={ref}
      className=" absolute left-1/3 top-1/4  bg-green-200 drop-shadow-2xl w-80 "
    >
      <div className="flex justify-between  ">
        <Image src={Search} alt="Search" />
        <div className="flex gap-2 text-xs">
          <kbd className="bg-orange-100">Ctrl </kbd>
          <kbd className="bg-orange-100">K</kbd>
        </div>
      </div>
      <div className="flex gap-4 ">
        <button>
          <Image src={Calendar} alt="Calendar" />
        </button>
        <button>Today</button>
      </div>

      <div className="flex gap-4">
        <button>
          <Image src={Inbox} alt="Inbox" />
        </button>
        <button>Inbox</button>
      </div>
      <div className="text-xs">Navigation</div>
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <button>
            <Image src={Home} alt="Home" />
          </button>
          <button>Go to Home</button>
        </div>
        <div className="flex gap-1 text-xs">
          <kbd className="bg-orange-100 ">Ctrl </kbd>
          <kbd>then</kbd>
          <kbd className="bg-orange-100">H</kbd>
        </div>
      </div>
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <button>
            <Image src={Inbox} alt="Inbox" />
          </button>
          <button>Go to Inbox</button>
        </div>
        <div className="flex gap-1 text-xs">
          <kbd className="bg-orange-100">G </kbd>
          <kbd>then</kbd>
          <kbd className="bg-orange-100">i</kbd>
        </div>
      </div>
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <button>
            <Image src={Calendar} alt="Calendar" />
          </button>
          <button>Go to Today</button>
        </div>
        <div className="flex gap-1 text-xs">
          <kbd className="bg-orange-100">G </kbd>
          <kbd>then</kbd>
          <kbd className="bg-orange-100">T</kbd>
        </div>
      </div>
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <button>
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="R7GJRAgqX85M4uldYGrsUgwgfQYp8IrP"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6.5 8.5A.5.5 0 0 1 7 8h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5ZM16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button>Go to Upcoming</button>
        </div>
        <div className="flex gap-1 text-xs">
          <kbd className="bg-orange-100">G </kbd>
          <kbd>then</kbd>
          <kbd className="bg-orange-100">U</kbd>
        </div>
      </div>
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <button>
            <Image src={Customgrid} className="bg-black" alt="Customgrid " />
          </button>
          <button>Filters & Labels</button>
        </div>
        <div className="flex gap-1 text-xs">
          <kbd className="bg-orange-100">G </kbd>
          <kbd>then</kbd>
          <kbd className="bg-orange-100">V</kbd>
        </div>
      </div>
      <div className="flex  justify-between">
        <div className="flex gap-4">
          <button>
            <Image src={Checkbox} alt="Checkbox" />
          </button>
          <button>Go to completed</button>
        </div>
        <div className="flex gap-1 text-xs">
          <kbd className="bg-orange-100">G </kbd>
          <kbd>then</kbd>
          <kbd className="bg-orange-100">C</kbd>
        </div>
      </div>
    </div>
  );
};
export default SearchTask;
