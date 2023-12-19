/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";
import list from "@/assets/images/input/list.svg";
import filelist from "@/assets/images/input/file-list.svg";
import Usersthree from "@/assets/images/input/users-three-custom.svg";
import Arrowdownarrowup from "@/assets/images/input/arrow-down-arrow-up.svg";
import useralt from "@/assets/images/input/user-alt.svg";
import usersalt from "@/assets/images/input/users-alt.svg";
import Image from "next/image";

const Function = ({ isVisible }: { isVisible: boolean }) => {
  function setView(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={isVisible ? 'block' : 'hidden'}>
    <div className="flex basis-10/12 gap-x-2 border-l-emerald-400">
      <table>
        <div className="flex gap-36">
          <div>View</div>
          <a
            className="view-menu"
            href="https://todoist.com/help/articles/customize-views-in-todoist-AoHhBxFdZ#enable-board-or-list-view"
            target="_blank"
            aria-description="View"
          >
            <svg
              width="24"
              height="24"
              aria-hidden="true"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                fill="currentColor"
                d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
              ></path>
              <circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle>
            </svg>
          </a>
        </div>
        <div className="flex gap-12">
          <div className="flex ">
            <Image src={list} alt="list" />
            <button onClick={() => setView("List")}> List </button>
          </div>

          <div className="flex">
            <Image src={filelist} alt="filelist" />
            <button onClick={() => setView("board")}> Board </button>
          </div>
        </div>

        <div className="flex gap-32">
          <div className="font-bold">Sort by</div>
          <a
            className="view-menu"
            href="https://todoist.com/help/articles/customize-views-in-todoist-AoHhBxFdZ#enable-board-or-list-view"
            target="_blank"
            aria-description="View"
          >
            <svg
              width="24"
              height="24"
              aria-hidden="true"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                fill="currentColor"
                d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
              ></path>
              <circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle>
            </svg>
          </a>
        </div>
        <div className="flex gap-2">
          <Image src={Usersthree} alt="Usersthree" />

          <div className="flex"> Grouping</div>
          <label htmlFor="Space"></label>
          <select id="Space">
            <option value="null">None(Default)</option>
            <option value="Assignee">Assignee</option>
            <option value="DueDate">Due Date</option>
            <option value="DateAdded">Date Added</option>
            <option value="Priority">Priority</option>
            <option value="Label">Label</option>
            <option value="Project">Project</option>
            <option value="Workspace">Workspage</option>
          </select>
        </div>
        <div className="flex gap-2">
          <Image src={Arrowdownarrowup} alt="Arrowdownarrowup" />

          <div className="flex"> Sorting</div>
          <label htmlFor="Space"></label>
          <select id="Space">
            <option value="null">Smart(Default)</option>
            <option value="Manual">Manual</option>
            <option value="Name">Name</option>
            <option value="DueDate">Due Date</option>
            <option value="DateAdded">Date Added</option>
            <option value="Priority">Priority</option>
            <option value="Label">Label</option>
            <option value="Project">Project</option>
            <option value="Workspace">Workspage</option>
          </select>
        </div>
        <div className="flex gap-28">
          <div className="font-bold">Filter by </div>
          <a
            className="view-menu"
            href="https://todoist.com/help/articles/customize-views-in-todoist-AoHhBxFdZ#enable-board-or-list-view"
            target="_blank"
            aria-description="View"
          >
            <svg
              width="24"
              height="24"
              aria-hidden="true"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                fill="currentColor"
                d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
              ></path>
              <circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle>
            </svg>
          </a>
        </div>
        <div className="flex gap-2">
          <Image src={useralt} alt="useralt" />

          <div className="flex"> Assignee </div>
          <label htmlFor="Space"></label>
          <select id="Space">
            <option value="null">Default</option>
            <option value="Noone">No one</option>
            <option value="Only">Only me</option>
          </select>
        </div>
        <div className="flex gap-2">
          <Image src={usersalt} alt="usersalt" />

          <div className="flex"> Workspace</div>
          <label htmlFor="Space"></label>
          <select id="Space">
            <option value="null">All(Default)</option>
            <option value="Manual">My Projects</option>
          </select>
       
        </div>
        </table>
    </div>
    </div>
  );
};
export default Function;
