import { LuHome } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";


function SideBar()
{
    return(
        <nav className="glass-effect left-7 top-1/2 transform -translate-y-1/2 absolute p-2 rounded-2xl space-y-8">
            <ul className="flex flex-col justify-center items-center text-white opacity-75 w-full text-center space-y-8">

                <li className="text-sm opacity-75">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                        <FiUser className="mx-6 text-2xl" style={({ isActive }) => isActive ? { color: 'blue' } : {}}/>Profile
                    </NavLink>
                </li>

                <li className="text-sm opacity-75">
                    <NavLink to="/leaderboard" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                        <LuTrophy className="mx-7 text-2xl" style={({ isActive }) => isActive ? { color: 'blue' } : {}}/>Leaderboard
                    </NavLink>
                </li>

                <li className="text-sm opacity-75">
                    <NavLink to="/game" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                        <IoGameController className="mx-6 text-2xl" style={({ isActive }) => isActive ? { color: 'blue' } : {}}/>Play
                    </NavLink>
                </li>
                
                <li className="text-sm opacity-75">
                    <NavLink to="/chat" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                        <IoChatboxEllipsesOutline className="mx-6 text-2xl" style={({ isActive }) => isActive ? { color: 'blue' } : {}}/>Chat
                    </NavLink>
                </li>

                <li className="text-sm opacity-75">
                    <NavLink to="/notif" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}>
                        <IoMdNotificationsOutline className="mx-6 text-3xl" style={({ isActive }) => isActive ? { color: 'blue' } : {}}/>Notifications
                    </NavLink>
                </li>
            </ul>

        </nav>

    );
}

export default SideBar;
