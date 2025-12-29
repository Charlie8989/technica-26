"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function BackgroundRippleEffectDemo() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2
          className="relative z-10 mx-auto max-w-4xl text-center text-6xl font-bold bg-gradient-to-b from-orange-500 to-red-500 bg-clip-text text-transparent md:text-4xl lg:text-7xl ">
          Technica 2k26
        </h2>
        <p
          className="relative z-10 mx-auto mt-4 max-w-xl text-center text-white">
          The Official Branch Fest of the Department of Metallurgical and Materials Engineering, National Institute of Technology Jamshedpur.
        </p>
      </div>
    </div>
  );
}
