import React from "react";
import Lottie from "lottie-react";
import confettiBG from "public/lottie/confetti-background.json";
import trophy from "public/lottie/trophy.json";
import { IconButton } from "./IconButton";
import Router from "next/router";
import Link from "next/link";
import { Button } from "./Button";

interface props {}

export const Celebrations: React.FC<props> = () => {
  return (
    <div className="flex-col h-screen c">
      <IconButton
        icon="BackIcon"
        iconSize={20}
        className="p-3 rounded-full hover:bg-gray-200"
        onClick={() => Router.replace("/")}
        style={{ position: "absolute", top: 10, left: 10, zIndex: 100 }}
        {...({} as any)}
      />
      <Lottie
        autoPlay
        loop={false}
        className="absolute"
        animationData={confettiBG}
      />
      <Lottie
        autoPlay
        loop={false}
        style={{ height: 300, width: 300 }}
        animationData={trophy}
      />
      <h4 className="mb-6 animate-opacity">You've completed this game</h4>
      <Link href="/result">
        <Button
          title="View result"
          btn="success"
          className="relative z-10 rounded-full w-72"
        />
      </Link>
    </div>
  );
};
