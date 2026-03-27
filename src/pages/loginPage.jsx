import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Direct API call without environment variable
  async function login() {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/users/login", // Direct API URL
      {
        email: email,
        password: password,
      },
    );
    console.log(response.data);
  }

  return (
    <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center flex flex-col items-center justify-center">
      {/* Main container with gradient overlay */}
      <div className="w-full sm:w-[450px] md:w-[500px] p-8 bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl flex flex-col items-center space-y-8">
        {/* Welcome Back Text */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-[#6a0dad] mb-4">
            Welcome Back!
          </h1>
          <p className="text-lg text-gray-600">
            Please enter your credentials to continue.
          </p>
        </div>

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full h-[50px] p-4 rounded-lg border-2 border-[#d4af37] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all duration-300"
        />

        {/* Password Input */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full h-[50px] p-4 rounded-lg border-2 border-[#d4af37] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all duration-300"
        />

        {/* Login Button */}
        <button
          onClick={login}
          className="w-full h-[50px] rounded-lg bg-[#d4af37] text-white font-semibold text-lg hover:bg-[#f8b7d0] transition-colors duration-300 focus:outline-none"
        >
          Login
        </button>

        {/* Interactive Tip */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            New to the site?{" "}
            <span className="text-[#6a0dad] font-semibold cursor-pointer hover:underline">
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
