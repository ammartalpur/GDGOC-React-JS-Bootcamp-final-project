import React, { useState } from 'react';
import Snap from "../assets/logo.svg";
import Up from '../assets/icon-arrow-up.svg';
import Down from '../assets/icon-arrow-down.svg';
import ToDo from '../assets/icon-todo.svg';
import Calendar from '../assets/icon-calendar.svg';
import Reminder from '../assets/icon-reminders.svg';
import Planning from '../assets/icon-planning.svg';
import '../index.css';



const Navbar = () => {
  const [dropdown, setDropdown] = useState(""); 

  const handleMouseEnter = (menu) => {
    setDropdown(menu); 
  };

  const handleMouseLeave = () => {
    setDropdown(null); 
  };

  return (
    <div className="my-7 mx-7 flex gap-16 ">
      {/* Logo */}
      <div className="img">
        <img src={Snap} alt="logo" />
      </div>

      {/* Navbar */}
      <div className="navbar">
        <ul className="flex gap-8 ml-14 relative">
          {/* Features */}
          <li
            className="cursor-pointer hover:font-semibold flex relative"
            onMouseEnter={() => handleMouseEnter("features")}
            onMouseLeave={handleMouseLeave}>
            <div className="flex items-center">
              Features
              <img
                className="flex w-[12px] h-[8px] mt-[10px] ml-[4px]"
                src={dropdown === "features" ? Up : Down}
                alt=""
              />
            </div>
            {dropdown === "features" && (
              <div className="absolute bg-white shadow-lg p-4 mt-8 rounded-xl">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                    <img src={ToDo} alt="Todo Icon" className="w-4 h-4" />
                    Todo List
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                    <img src={Calendar} alt="Calendar Icon" className="w-4 h-4" />
                    Calendar
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                    <img src={Reminder} alt="Reminder Icon" className="w-4 h-4" />
                    Reminders
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:font-bold">
                    <img src={Planning} alt="Planning Icon" className="w-4 h-4" />
                    Planning
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Company */}
          <li
            className="cursor-pointer hover:font-semibold flex relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center">
              Company
              <img
                className="flex w-[12px] h-[8px] mt-[10px] ml-[4px]"
                src={dropdown === "company" ? Up : Down}
                alt=""
              />
            </div>
            {dropdown === "company" && (
              <div className="absolute bg-white shadow-lg p-4 mt-8 rounded-xl">
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:font-bold">History</li>
                  <li className="cursor-pointer hover:font-bold">Our Team</li>
                  <li className="cursor-pointer hover:font-bold">Blog</li>
                </ul>
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:font-semibold">Careers</li>
          <li className="cursor-pointer hover:font-semibold">About</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="btn flex gap-9 ml-96">
        <button className="cursor-pointer hover:font-semibold">Login</button>
        <button className="bg-white border-2 border-black rounded-xl px-5 py-1 cursor-pointer hover:font-semibold">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
