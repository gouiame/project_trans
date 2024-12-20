import SideBar from "../components/ui/SideBar";
import { LuTrophy } from "react-icons/lu";

function LeaderBoard() {
  return (
    <div className="text-white h-screen">
      <div class="glass-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <h1 class="text-3xl font-bold mb-4 flex items-center gap-2">
          <LuTrophy className="text-yellow-400 text-2xl" />
          Leaderboard
        </h1>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <div className="glass-effect w-auto h-20 rounded-2xl  mt-4 flex transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
      </div>
      <SideBar/>
    </div>
  );
}

export default LeaderBoard;
