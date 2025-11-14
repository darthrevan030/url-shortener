"use client";

import Link from "next/link"


export default function Navbar() {
  return(
    <nav className="bg-slate-800 text-white p-3 flex justify-center items-center max-w-6xl mx-auto w-[90%] mt-4 rounded-lg">
      <Link href="/" className="text-xl font-bold">Short<span className="text-green-500">.ly</span></Link>
    </nav>
  )
}