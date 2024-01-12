"use client";
import { useState } from "react";
import ListTask from "../body/list-task";
import Checkcircle from "@/assets/images/input/check-circle.svg";
import Image from "next/image";

interface PageProps {
  isSidebarVisible: boolean;
  setSidebarVisible:boolean;
}

const page = ({ isSidebarVisible, setSidebarVisible }: PageProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isMidVisible, setIsMidVisible] = useState(false);

  const toggleMidVisibility = () => {
    setIsMidVisible(!isMidVisible);
  };

  return (
    <div className="basis-7/12  justify-items-center">
      <div
        className={!isSidebarVisible ? "inline-block" : "hidden"}
        onClick={() => setSidebarVisible(true)}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>

      <div className="task-quantity">
        <span className="text-black font-semibold font-weight: 600 flex-grow">
          Today
        </span>
        <div className="soluongtask flex gap-x-1 items-center justify-start">
          <Image src={Checkcircle} alt="Checkcircle" /> <p>3 task</p>
        </div>
      </div>

      <div className="list-task items-center border-b py-1.5 border-b-gray-100">
        <div className="btn-overdue flex" onClick={toggleMidVisibility}>
          <svg width="24" height="24">
            <path fill="none" stroke="currentColor" d="m16 10-4 4-4-4"></path>
          </svg>
          <h1 className="text-black font-semibold : 400 flex-grow">Overdue</h1>
        </div>

        <div className={isMidVisible ? "block" : "hidden"}>
          <ListTask />
        </div>
      </div>
    </div>
  );
};

export default page;
