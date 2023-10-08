"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="/assets/ChatGPT-Logo.png"
        width={300}
        height={300}
        alt="ChatGPT-Logo"
      />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn("google")}
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
