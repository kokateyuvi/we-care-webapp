"use client";

import { getUser } from "@/services/userService";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts

    async function fetchUserData() {
      try {
        const response = await getUser(userEmail);
        setUserData(response.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    if (userEmail && session) {
      fetchUserData();
    }
  }, [userEmail, session]);
  return (
    <GlobalContext.Provider value={{ userData }}>
      {children}
    </GlobalContext.Provider>
  );
}
