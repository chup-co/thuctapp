"use client";
import Sidebar from "../modules/sidebar/page";
import Task from "../modules/sidebar/task/task";
import Page from "../modules/todolist/head/page";
import View from "../modules/todolist/head/view";

export default function TodoList() {
  return (
    <main className="flex gap-x-12 border-l-blue-400 h-screen">
      <Sidebar />
      <Page />
      <View />
    </main>
  );
}
