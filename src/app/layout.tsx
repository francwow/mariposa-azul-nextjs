import type { Metadata } from "next";
import { Inter, Montserrat, Yeseva_One } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import Header from "./components/Header";
import Provider from "./components/Provider";
import Whatsapp from "./components/Whatsapp";
import ScrollNav from "./components/ScrollNav";
// import { PreloadResources } from "./components/PreloadResources";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const yeseva = Yeseva_One({
  subsets: ["latin"],
  variable: "--font-yeseva",
  weight: ["400"],
});
const glacial = localFont({
  variable: "--font-glacial",
  src: [
    {
      path: "../app/fonts/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/GlacialIndifference-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../app/fonts/GlacialIndifference-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});
const hortensia = localFont({
  variable: "--font-hortensia",
  src: [
    {
      path: "../app/fonts/Hortensia-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Mariposa Azul",
  description:
    "Creamos retiros de bienestar y experiencias integrales del ser inmersos en un paraíso natural en medio de extensas montañas, rodeada de nacimientos de agua, un majestuoso río y cientos de especies de aves y mariposas. Estamos ubicados en el municipio La Vega, Cundinamarca, a tan sólo 1 hora y media de Bogotá.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${materialSymbols.variable}`} lang="en">
      {/* <PreloadResources /> */}
      <Provider>
        <body
          className={`${inter.variable} ${montserrat.variable} ${yeseva.variable} ${hortensia.variable} ${glacial.variable}`}
        >
          <Header />
          <Whatsapp />
          <ScrollNav />
          {children}
        </body>
      </Provider>
    </html>
  );
}
