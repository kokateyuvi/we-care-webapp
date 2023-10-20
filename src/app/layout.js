import "./globals.css";
import GlobalState from "@/context";
import { Roboto } from "next/font/google";
import Header from "@/components/Home/components/Header/Header";
import { AuthProvider } from "./Providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Home/components/Footer/Footer";

const roboto = Roboto({
  weight: ["100", "300", "500", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "We-care",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {" "}
        <AuthProvider>
          <GlobalState>
            <Header />
            <div className="min-h-screen py-5">
              {children}
              <Toaster position="top-right" />
            </div>
            <Footer />
          </GlobalState>
        </AuthProvider>
      </body>
    </html>
  );
}
