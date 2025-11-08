"use client"
import Link from "next/link"


export default function Navbar() {
  return(
    <nav className="bg-slate-800 text-white p-3 flex justify-between items-center max-w-6xl m-auto w-[90%] mt-4 rounded-lg">
      <Link href="/" className="text-xl font-bold">Tiny<span className="text-green-500">Link</span></Link>
      <Link href="/" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-400 hover:text-slate-400">Try Now</Link>
    </nav>
  )
}