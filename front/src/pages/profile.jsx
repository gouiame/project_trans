import SideBar from "../components/ui/SideBar";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineCog } from "react-icons/hi";
import { LuTrophy } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Profile() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-8 min-h-screen">

  <div className="flex flex-col w-full md:w-2/3 space-y-4">

    <div className="glass-effect rounded-xl p-6 flex justify-between items-center hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
      <div className="flex items-center">
        <div className="p-4 rounded-full">
            <HiOutlineUserCircle className="text-6xl sm:text-8xl text-blue-400 mr-4" />
        </div>
        <div className="ml-1">
          <h1 className="text-xl font-bold text-white">John Doe</h1>
          <p className="text-gray-400">Level 42</p>
          <p className="text-gray-400">Rank #123</p>
        </div>
      </div>
      <div className="bg-black p-2 rounded-full">
      <Link to="/settings"><HiOutlineCog className="text-white text-xl" /></Link>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4">
      <div className="glass-effect rounded-xl p-4 text-center hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
      <div className="flex items-center ml-4 sm:ml-8">
    <LuTrophy className="text-2xl text-yellow-400 mr-4" />
    <div className="text-left">
        <h2 className="text-m sm:text-l text-white">Rank</h2>
        <h2 className="text-m sm:text-l text-white font-bold">#123</h2>
    </div>
    </div>
      </div>
      <div className="glass-effect rounded-xl p-4 text-center hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
      <div className="flex items-center ml-4 sm:ml-8">
        <IoGameController className="text-2xl text-green-400 mr-4" />
        <div className="text-left">
            <h2 className="text-m sm:text-l text-white">Games</h2>
            <h2 className="text-m sm:text-l text-white font-bold">22</h2>
        </div>
        </div>
      </div>
      <div className="glass-effect rounded-xl p-4 text-center hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
      <div className="flex items-center ml-4 sm:ml-8 ">
        <LuTrophy className="text-2xl text-purple-500 mr-4" />
        <div className="text-left">
            <h2 className="text-m sm:text-l text-white">Win Rate</h2>
            <h2 className="text-m sm:text-l text-white font-bold">76%</h2>
        </div>
        </div>
      </div>
    </div>

 
    <div className="glass-effect rounded-2xl p-20">
      <h2 className="text-white font-bold text-lg ">Performance History</h2>
      <div className="h-32 rounded-xl">
      {/* graph */}
      </div> 
    </div>
  </div>


  <div className="flex flex-col w-full md:w-1/3 space-y-4">

    <div className="glass-effect rounded-xl p-6 mt-4 ml-4">
      <h2 className="text-white font-bold text-lg mb-4">Friends</h2>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/profile1.jpg" alt="Alice Smith" className="w-10 h-10 rounded-full" />
            <div className="ml-4">
              <p className="text-white">Alice Smith</p>
              <p className="text-gray-400 text-sm">Level 28</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-black text-white p-2 rounded-lg">Chat</button>
            <button className="bg-blue-500 text-white p-2 rounded-lg">View</button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/profile1.jpg" alt="Alice Smith" className="w-10 h-10 rounded-full" />
            <div className="ml-4">
              <p className="text-white">Alice Smith</p>
              <p className="text-gray-400 text-sm">Level 28</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-black text-white p-2 rounded-lg">Chat</button>
            <button className="bg-blue-500 text-white p-2 rounded-lg">View</button>
          </div>
        </div>
      </div>
    </div>

    <div className="glass-effect rounded-xl p-6 ml-4">
      <h2 className="text-white font-bold text-lg mb-4">Players</h2>
      <input
        type="text"
        placeholder="Search players..."
        className="w-full bg-black text-white p-2 rounded-xl mb-4"
      />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/profile2.jpg" alt="David Brown" className="w-10 h-10 rounded-full" />
            <div className="ml-4">
              <p className="text-white">David Brown</p>
              <p className="text-gray-400 text-sm">Level 31</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-black text-white p-2 rounded-lg">Chat</button>
            <button className="bg-blue-500 text-white p-2 rounded-lg">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SideBar/>
</div>
  );
}

export default Profile;
                                                                                                                                                             