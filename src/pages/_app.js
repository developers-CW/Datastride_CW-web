import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

// Primary font - Inter (Google Font)
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
  display: "swap",
});

// Secondary font - Fira Sans (Local font)
const firaSans = localFont({
  src: [
    {
      path: "../fonts/FiraSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/FiraSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/FiraSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/FiraSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/FiraSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/FiraSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/FiraSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/FiraSans-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/FiraSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/FiraSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/FiraSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/FiraSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/FiraSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/FiraSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-secondary",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${firaSans.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
