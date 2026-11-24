"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { toast } from "react-toastify";

const handleSignOut = async () => {
  const { error } = await authClient.signOut();
  if (!error) {
    toast.warning("Sign Out Successful!");
  }
  redirect('/')
};

const Navbar = () => {
    const {data: session} = authClient.useSession();
    console.log("Session data in Navbar:", session);
    const pathname = usePathname();
    
    return (
      <header className="bg-indigo-400 text-white p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold">TaskFlow</h1>
          </Link>
          <ul className="flex space-x-4">
            {session ? (
              <div className="flex items-center gap-4">
                <li>
                  <Link
                    className={
                      pathname === "/my-tasks"
                        ? "border-b-2 border-white pb-1"
                        : ""
                    }
                    href="/my-tasks"
                  >
                    My Tasks
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      pathname === "/my-profile"
                        ? "border-b-2 border-white pb-1"
                        : ""
                    }
                    href="/my-profile"
                  >
                    My Profile
                  </Link>
                </li>
                <Button
                  onClick={handleSignOut}
                  variant="danger"
                  size="sm"
                  className="rounded-md"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex gap-4">
                <li>
                  <Link
                    className={
                      pathname === "/signin"
                        ? "border-b-2 border-white pb-1"
                        : ""
                    }
                    href="/signin"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      pathname === "/signup"
                        ? "border-b-2 border-white pb-1"
                        : ""
                    }
                    href="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </header>
    );
};

export default Navbar;