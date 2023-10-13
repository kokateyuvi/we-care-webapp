"use client";
// CustomGoogleButton.js
import React, { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const GoogleIcon = ({ size = 24, color = "black" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* SVG code for Google icon */}
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#EA4335"
          d="M28.66 49.68L49.91 33.31 71.17 49.68H71.17v15.01H49.91v49.68H28.66v-49.68H28.66Z"
        />
        <path
          fill="#FBBC05"
          d="M19.64 49.68L31.9 33.31 44.17 49.68H44.17v15.01H31.9v49.68H19.64v-49.68H19.64Z"
        />
        <path
          fill="#34A853"
          d="M10.62 49.68L22.9 33.31 35.17 49.68H35.17v15.01H22.9v49.68H10.62v-49.68H10.62Z"
        />
      </svg>
    </svg>
  );
};

const CustomGoogleButton = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [googleSignInSuccess, setGoogleSignInSuccess] = useState(false);

  useEffect(() => {
    // Event listener for messages sent from the child window
    const handleGoogleSignInResponse = (event) => {
      // Ensure the message is from the expected origin
      if (
        event.origin === window.location.origin &&
        event.data.type === "googleSignInResponse"
      ) {
        if (event.data.success) {
          // User successfully signed in, set the success state
          setGoogleSignInSuccess(true);
        } else {
          // Handle sign-in errors
          console.error("Error signing in with Google:", event.data.error);
          toast.error("Error signing in with Google. Please try again later.");
        }
      }
    };

    // Add event listener
    window.addEventListener("message", handleGoogleSignInResponse);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("message", handleGoogleSignInResponse);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Handle Google sign-in click
  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    try {
      // Initiate the Google sign-in flow using next-auth signIn method
      await signIn("google", {
        callbackUrl: `${window.location.origin}/api/auth/callback/google`,
        redirect: false,
        scopes: ["openid", "https://www.googleapis.com/auth/calendar.read"],
      });

      // Assuming the user is redirected back to this page after successful authentication.
      toast.success("Google sign-in initiated successfully!");
    } catch (error) {
      console.error("Error initiating Google sign-in:", error);
      toast.error("Error initiating Google sign-in. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect user to "/" after successful Google sign-in
  useEffect(() => {
    if (googleSignInSuccess) {
      router.replace("/");
    }
  }, [googleSignInSuccess, router]);

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
