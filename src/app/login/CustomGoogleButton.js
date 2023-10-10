"use client";
import React, { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import from next/router

const CustomGoogleButton = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleGoogleSignInResponse = (event) => {
      if (
        event.origin === window.location.origin &&
        event.data.type === "googleSignInResponse"
      ) {
        if (event.data.success) {
          router.replace("/");
          toast.success("Google sign-in successful!");
        } else {
          toast.error("Error signing in with Google. Please try again later.");
        }
      }
    };

    window.addEventListener("message", handleGoogleSignInResponse);

    return () => {
      window.removeEventListener("message", handleGoogleSignInResponse);
    };
  }, [router]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    try {
      await signIn("google", {
        callbackUrl: `${window.location.origin}/api/auth/callback/google`,
        redirect: false,
        // Add any required Google API scopes here
        // Example: scopes: ["openid", "https://www.googleapis.com/auth/calendar.read"],
      });
    } catch (error) {
      console.error("Error initiating Google sign-in:", error);
      toast.error("Error signing in with Google. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GoogleButton
      onClick={handleGoogleSignIn}
      {...props}
      disabled={isLoading}
      text={isLoading ? "Loading..." : "Sign in with Google"}
    />
  );
};

export default CustomGoogleButton;
