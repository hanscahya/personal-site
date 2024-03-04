import { Afacad } from "next/font/google";
import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Head from 'next/head';

import { title, description, images } from './constant';

const afacad = Afacad({ subsets: ["latin"] });

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images,
    type: 'website',
    url: 'https://www.hanscahya.com',
  },
  twitter: {
    title,
    description,
    images,
    card: 'summary',
  },
};

const ProfileCard: React.FC = () => {
  return <>
    <Image
      src={'/images/profile-pict.png'}
      alt="profile-picture"
      className="px-20 max-w-md mx-auto"
      layout="fill"
      sizes="500"
      objectFit="contain"
    />
  </>
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/logo.png" type="image/png" /> 
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="grid lg:grid-cols-2 text-primary font-afacad">
        <div className="block lg:hidden h-[50vh] bg-primary text-white">
          <ProfileCard />
        </div>
        <div className={afacad.className}>{children}</div>
        <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-screen bg-primary text-white">
          <ProfileCard />
        </div>
      </body>
    </html>
  );
}
