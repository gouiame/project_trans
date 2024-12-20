import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import GameCard from "../components/gameCard";
import SideBar from "../components/ui/SideBar";

function Login(){
    return (
        <div className="text-white lg:max-h-screen lg:overflow-hidden">
            <div className="min-h-screen flex">
                <main className="flex-1 container mx-auto px-4 pb-24 max-w-7xl">
                    <div className="flex justify-center">
                        <div className="w-full max-w-6xl sm:max-w-full">
                            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-8 sm:space-y-4 lg:space-y-8">
                                    <div className="space-y-4">
                                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold gradient-text animate-pulse">
                                            Welcome to the Pong Game
                                        </h1>
                                        <p className="text-lg sm:text-xl text-muted-foreground">
                                            Experience the thrill of Ping Pong right from your device.
                                            With intuitive controls and realistic physics.
                                        </p>
                                    </div>
                                    <div className="glass-card space-y-6 sm:w-full">
                                        <h2 className="text-2xl font-semibold">
                                            Let's get you started
                                        </h2>
                                        <form className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="flex text-sm text-muted-foreground">
                                                    Email
                                                </label>
                                                <Input
                                                type="email" 
                                                placeholder="eg. example@mail.com" 
                                                className="w-full text-black"
                                                required/>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <label className="text-sm text-muted-foreground">
                                                        Password
                                                    </label>
                                                    <Link 
                                                      to="/reset-pass" 
                                                      className="text-sm text-blue-400 hover:underline">
                                                      Forgot password?
                                                    </Link>
                                                </div>
                                                <Input
                                                type="password"
                                                placeholder="••••••••" 
                                                className="w-full text-black"
                                                required /> 
                                            </div>
                                            <Button className="text-lg sm:text-base">
                                                <MdLogin className="text-xl"/>
                                                Sign in
                                            </Button>
                                        </form>
                                        <div className="relative flex items-center">
                                            <div className="flex-1 border-t border-white/10"></div>
                                            <span className="mx-4 text-xs uppercase bg-background px-2 text-muted-foreground">
                                                Or
                                            </span>
                                            <div className="flex-1 border-t border-white/10"></div>
                                        </div>

                                        <div className="space-y-3">
                                            <Button className="flex items-center justify-center gap-2">
                                                Continue with
                                                <img src="/42_Logo.svg" alt="42 logo" className="h-4 sm:h-5 lg:h-6"/>
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-muted-foreground">
                                            <Link
                                                to="/register"
                                                className="text-sm text-blue-400 hover:underline text-center">
                                                Don't have an account? Register
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <GameCard />
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Login;
