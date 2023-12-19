"use client";
import { useState } from "react";
import ListTask from "./list-task";

const Page = () => {
  const [isMidVisible, setIsMidVisible] = useState(false);

  const toggleMidVisibility = () => {
    setIsMidVisible(!isMidVisible);
  };

  return (
    <div className="pb-20 ">
      <div className="flex items-center border-b py-1.5 border-b-gray-100">
        
      </div>
      <div className={isMidVisible ? "block" : "hidden"}>
        <ListTask />
      </div>
    </div>
  );
};

export default Page;