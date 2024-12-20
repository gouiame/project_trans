import SideBar from "../components/ui/SideBar";
import { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import Input from "../components/ui/Input";
import { CgSoftwareDownload } from "react-icons/cg";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";


function Settings() {


  return (
    <div className="text-white h-auto sm:h-auto md:h-[30%] lg:h-[30%]">
      <div className="text-2xl font-bold text-center sm:text-center">
        Account Settings
      </div>

      <div className="glass-effect w-full sm:w-11/12 md:w-11/12 lg:w-11/12 h-auto rounded-2xl mt-4 ml-4 sm:ml-12 flex flex-col p-4">
        <div className="text-white font-bold text-xl ml-8 mt-8 flex items-center">
          <FiUser className="text-white font-bold text-xl ml-2 mt-1 mr-2" />
          Profile Settings
        </div>
        <div className="flex items-center mt-2 px-5">
          <HiOutlineUserCircle className="text-6xl sm:text-7xl text-blue-400" />
          <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-opacity-30 mt-2 sm:mt-0">
            <CgSoftwareDownload className="text-2xl mr-2" />
            Change Avatar
          </button>
       
        </div>
        <div className="flex flex-col mt-3 px-8">
          <div className="text-left">Display Name</div>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full h-10 bg-black text-white rounded-xl p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
          />
        </div>
        <div className="flex flex-col mt-2 px-8">
          <div className="text-left">Bio</div>
          <input
            type="text"
            placeholder="Professional gamer"
            className="w-full h-10 bg-black text-white rounded-xl p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
          />
        </div>
      </div>

      <div className="glass-effect w-full sm:w-11/12 md:w-11/12 lg:w-11/12 h-auto rounded-2xl mt-4 ml-4 sm:ml-12 flex flex-col p-4">
        <div className="text-white font-bold text-xl ml-8 mt-8 flex items-center">
          <IoLockClosedOutline className="text-white font-bold text-xl ml-2 mt-1 mr-2" />
          Account Security
        </div>
        <form>
          <div className="flex flex-col mt-3 px-8">
            <div className="text-left">Email</div>
            <input
              type="email"
              placeholder="john@mail.com"
              className="w-full h-10 bg-black text-white rounded-xl p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              required
            />
          </div>
          <div className="flex flex-col mt-3 px-8">
            <div className="text-left">Current Password</div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-10 bg-black text-white rounded-xl p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              required
            />
          </div>
          <div className="flex flex-col mt-3 px-8">
            <div className="text-left">New Password</div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-10 bg-black text-white rounded-xl p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              required
              minLength="8"
            />
          </div>
          <button className="flex mt-5 w-40 ml-8 px-4 py-2 bg-white text-black rounded-lg hover:bg-opacity-30">
            Update Password
          </button>
        </form>
        <form>
        <div className="flex mt-8 px-8">
        <input
                    type="checkbox"
                    id="enable2FA"
                    className="w-6 h-6 text-blue-400 border border-gray-600 rounded focus:ring-blue-400 focus:ring-2"
        />
                <label htmlFor="enable2FA" className="ml-3 text-white text-xl">
                    Enable 2FA
                </label>
        </div>
        </form>
      </div>

      <div className="glass-effect w-full sm:w-11/12 md:w-11/12 lg:w-11/12 h-auto rounded-2xl mt-4 ml-4 sm:ml-12 flex flex-col p-4">
        <div className="text-white font-bold text-xl ml-8 mt-8 flex items-center">
          <LuTrophy className="text-white font-bold text-xl ml-2 mt-1 mr-2" />
          Tournament Settings
        </div>
        <form>
          <div className="flex flex-col mt-3 px-8">
            <div className="text-left">Tournament Name</div>
            <input
              type="text"
              placeholder="Enter tournament name"
              className="w-full h-10 bg-black text-white rounded-xl p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              required
            />
          </div>
          <div className="flex flex-col mt-3 px-8">
            <div className="text-left">Maximum Players</div>
            <input
              type="number"
              placeholder="16"
              className="w-full h-10 bg-black text-white rounded-xl p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              required
            />
          </div>
          <div className="flex flex-col mt-3 px-8">
            <div className="text-left">Tournament Date</div>
            <input
              type="date"
              className="w-full h-10 bg-black text-white rounded-xl p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              required
            />
          </div>
          <button className="flex mt-5 w-48 ml-8 px-4 py-2 bg-white text-black rounded-lg hover:bg-opacity-30">
            Create Tournament
          </button>
        </form>
      </div>
      <SideBar/>
    </div>
  );
}

export default Settings;
