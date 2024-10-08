import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";

const Header = () => {
  return (
    <div className="h-[90px] w-full flex items-center px-5">
      <div className="flex  items-center justify-between w-full">
        <label className="input input-bordered flex items-center gap-2 bg-cardbg rounded-full min-w-[360px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow rounded-full"
            placeholder="Search"
          />
        </label>
        <div className="flex items-center gap-3">
          <div className="h-12 flex items-center justify-between bg-cardbg rounded-full gap-5 border">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center "> 
              <FiMessageSquare />
            </div>{" "}
            <span className="mr-5">Help</span>
          </div>
          <div className="h-12 w-12 flex items-center justify-center bg-cardbg rounded-full border">
            <FaRegBell size={20}/>
          </div>
          <div className="h-12 w-12 flex items-center justify-center bg-cardbg rounded-full border">
            <IoSettingsOutline size={20} />
          </div>
          <div className="flex items-center gap-3 ml-10">
            <div className="h-12 w-12 rounded-full bg-cardbg"></div>
            <div>
              <p>John Done</p>
              <span>abc@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
