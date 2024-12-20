
import {Link, Route, Routes} from  "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register";
import Profile from "../pages/profile";
import Settings from "../pages/settings";
import Game from "../pages/game";
import LeaderBoard from "../pages/leaderboard";
import Chat from "../pages/chat";
import Notif from "../pages/notif";
import ResetPass from "../pages/reset-pass";
import NotFound from "../pages/NotFound";


function Routing(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notif" element={<Notif />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/game" element={<Game />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/reset-pass" element={<ResetPass />} />
        </Routes>
        </>
    )
}

export default Routing;