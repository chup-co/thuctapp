"use client";
import { SetStateAction, useState } from "react";
import Sidebar from "../modules/sidebar/page";
import Page from "../modules/todolist/head/page";
import View from "../modules/todolist/head/view";
import AddTaskForm from "../modules/sidebar/task/addtask";
import SearchTask from "../modules/sidebar/task/Search";

export default function TodoList() {
  const [isOpenTaskForm, setIsOpenTaskForm] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <main className="relative flex bg-blue-50 gap-x-12 h-screen">
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsOpenAddTask={() => setIsOpenTaskForm(!isOpenTaskForm)}
        setIsOpenSearch={() => setIsOpenSearch(!isOpenSearch)}
        setSidebarVisible={() => setSidebarVisible(!isSidebarVisible)}
      />
      <Page
        isSidebarVisible={isSidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      {isOpenTaskForm && <AddTaskForm setIsOpenTaskForm={setIsOpenTaskForm} />}
      <View />
      {isOpenSearch && (
        <SearchTask setIsOpenSearch={() => setIsOpenSearch(false)} />
      )}
    </main>
  );
}
