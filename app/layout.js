import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Footer from "./components/Footer";



export const metadata = {
  title: "AZFON technology",
  description: "AZFON technology",
    icons: {
    icon: "logo.jpg", // app/public/mylogo.png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {/* <Navbar/> */}
        {children}
         <Footer/>
      </body>
    </html>
  );
}
