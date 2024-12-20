
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { MdLogin } from "react-icons/md";
import axios from "axios";
import API_URL from "../config";

function Register() {

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData = {
      display_name: displayName,
      username: username,
      email: email,
      password: password,
    };

    setLoading(true);

    try {

      const response = await axios.post(`${API_URL}api/user/create`, userData);
      console.log(response.data);
      setLoading(false);
    }
    catch (err) {
      setLoading(false);
      setError("An error occurred while creating the account.");
      console.error(err);
    }
  };

  return (
    <div className="text-white lg:max-h-screen lg:overflow-hidden">
      <div className="min-h-screen flex">
        <main className="flex-1 container mx-auto px-4 pb-24 max-w-7xl">
          <div className="min-h-screen grid grid-cols-1 gap-8 items-center">
            <div className="space-y-8 max-w-xl w-full mx-auto">
              <div className="glass-card space-y-6">
                <h2 className="text-3xl font-semibold text-center ">
                  Create an account
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="flex text-sm text-muted-foreground">
                      Display Name
                    </label>
                    <Input
                      type="text"
                      placeholder="eg. John Doe"
                      required
                      name="display_name"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex text-sm text-muted-foreground">
                      Username
                    </label>
                    <Input
                      type="text"
                      placeholder="eg. John Doe"
                      required
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex text-sm text-muted-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="eg. John.Doe@mail.com"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground">
                        Password
                      </label>
                    </div>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      minLength="8"
                      required
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground">
                        Confirm Password
                      </label>
                    </div>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      minLength="8"
                      required
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  {error && <p className="text-red-500 text-center">{error}</p>}

                  <Button>
                    <MdLogin className="text-xl" />
                    {loading ? "Loading..." : "Register"}
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
                  <Button className=" flex items-center justify-center gap-2">
                    Continue with
                    <img src="/42_Logo.svg" alt="42 logo" className="h-6" />
                  </Button>
                </div>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Link
                    to="/login"
                    className="text-sm text-blue-400 hover:underline text-center"
                  >
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Register;