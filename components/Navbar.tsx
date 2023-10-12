"use client";

import * as React from "react";
import Image from "next/image";

export function Navbar() {
  return (
    <>
      <div className="container flex justify-between    ">
        <Image
          src="/Popop-logos_transparent.png"
          width={75}
          height={75}
          alt="Logo"
        />

        <div className="p-5">About</div>
      </div>
    </>
  );
}
