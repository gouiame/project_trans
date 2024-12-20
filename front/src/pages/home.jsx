import { Link } from "react-router-dom";
import SideBar from "../components/ui/SideBar";

function Home() {
  return (
    <div className="h-screen">
      <div className="absolute top-0 right-0 m-4">
        <Link to="/login">
          <button className="text-white px-6 py-2 border rounded-lg">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
