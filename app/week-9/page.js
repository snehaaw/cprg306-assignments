"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Shopping List</h1>

      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
        >
          Log in with GitHub
        </button>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-lg">
            Welcome, <span className="font-semibold">{user.displayName}</span> ({user.email})
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md mb-4"
          >
            Log out
          </button> <br/>
          <Link href="/week-9/shopping-list" className="text-blue-500 hover:underline font-semibold">
              Go to Shopping List
          </Link>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
