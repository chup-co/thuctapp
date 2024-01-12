"use client";
import { useState } from "react";
import ListTask from "./list-task";

const Page = () => {
  const [isMidVisible, setIsMidVisible] = useState(false);

  const toggleMidVisibility = () => {
    setIsMidVisible(!isMidVisible);
  };

  return (
    <div className="pb-20 grid grid-rows-4">
      
      <div className={isMidVisible ? "block" : "hidden "}>
        <ListTask/>
      </div>
    </div>
  );
};

export default Page;