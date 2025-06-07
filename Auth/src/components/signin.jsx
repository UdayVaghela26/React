import React from "react";

export default function SignIn() {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Your Email</label>
        <input
          type="email"
          placeholder="contact@dscodetech.com"
          className="w-full border rounded-md px-3 py-2 focus:outline-none"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          className="w-full border border-red-500 rounded-md px-3 py-2 focus:outline-none"
        />
      </div>
      <div className="flex justify-between text-sm mb-4">
        <span className="text-gray-400">Wrong password</span>
        <a href="#" className="text-blue-500">Forgot password?</a>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-4">Continue</button>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-400 text-sm">Or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <button className="w-full border flex items-center justify-center py-2 rounded-md mb-2">
        <span className="mr-2">🍎</span> Login with Apple
      </button>
      <button className="w-full border flex items-center justify-center py-2 rounded-md">
        <span className="mr-2">🌐</span> Login with Google
      </button>

      <p className="text-center text-sm mt-4 text-gray-500">
        Don’t have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
      </p>
    </div>
  );
}
