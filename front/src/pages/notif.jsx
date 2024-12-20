import SideBar from "../components/ui/SideBar";
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";
import { FaUserAlt, FaTrophy, FaGamepad, FaComments } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import React, { useState } from "react";



function Notif() {

    return( 
      <div className="text-white h-screen">
        <div className="flex justify-center min-h-screen text-white">
        <div className="w-4/5 p-8">
          <h1 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <IoMdNotificationsOutline className="text-2xl font-bold flex items-center space-x-2"/>
            <span>Notifications</span>
          </h1>
          <p className="text-gray-400">No new notifications</p>
        </div>
        </div>
        <SideBar/>
      </div>
      


    // const [notifications, setNotifications] = useState([]);

    // const addNotification = () => {
    //   const notificationTypes = [
    //     {
    //       id: 1,
    //       message: `${getRandomName()} sent you a friend request`,
    //       time: `${getRandomTime()} ago`,
    //       type: "friendRequest",
    //     },
    //     {
    //       id: 2,
    //       message: "New tournament starting soon!",
    //       time: `${getRandomTime()} ago`,
    //       type: "tournament",
    //     },
    //     {
    //       id: 3,
    //       message: `${getRandomName()} invited you to a match`,
    //       time: `${getRandomTime()} ago`,
    //       type: "matchInvite",
    //     },
    //   ];
  
    //   const randomNotification =
    //     notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
    //   setNotifications([...notifications, randomNotification]);
    // };
  
    // const getRandomName = () => {
    //   const names = ["John", "Alice", "Michael", "Sophia", "Emma", "David"];
    //   return names[Math.floor(Math.random() * names.length)];
    // };
  
    // const getRandomTime = () => {
    //   const times = ["1 hour", "2 hours", "3 hours", "5 hours"];
    //   return times[Math.floor(Math.random() * times.length)];
    // };
  
    // return (
    //   <div className="flex justify-center min-h-screen text-white">
    //     <div className="w-4/5 p-8">
    //       <h1 className="text-2xl font-bold mb-6 flex items-center space-x-2">
    //         <IoMdNotificationsOutline />
    //         <span>Notifications</span>
    //       </h1>
  
    //       {notifications.length === 0 ? (
    //         <p className="text-gray-400">No new notifications</p>
    //       ) : (
    //         <div className="space-y-4">
    //           {notifications.map((notification, index) => (
    //             <div
    //               key={index}
    //               className="flex justify-between items-center bg-black/50 border border-gray-700 rounded-lg p-4"
    //             >
    //               <div>
    //                 <p className="text-white font-medium">{notification.message}</p>
    //                 <p className="text-gray-400 text-sm">{notification.time}</p>
    //               </div>
    //               {notification.type === "friendRequest" ? (
    //                 <div className="flex space-x-4">
    //                   <button className="bg-green-500 text-white px-4 py-2 rounded-full">✔</button>
    //                   <button className="bg-red-500 text-white px-4 py-2 rounded-full">✖</button>
    //                 </div>
    //               ) : notification.type === "tournament" ? (
    //                 <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
    //                   <FaTrophy />
    //                   <span>Join</span>
    //                 </button>
    //               ) : (
    //                 <div className="flex space-x-4">
    //                   <button className="bg-green-500 text-white px-4 py-2 rounded-full">✔</button>
    //                   <button className="bg-red-500 text-white px-4 py-2 rounded-full">✖</button>
    //                 </div>
    //               )}
    //             </div>
    //           ))}
    //         </div>
    //       )}
  
    //       <button
    //         onClick={addNotification}
    //         className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg"
    //       >
    //         Add a random notification
    //       </button>
    //     </div>
  
    //     <SideBar />
    //   </div>
    );
  }
  
  export default Notif;