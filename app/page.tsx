"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [customText, setCustomText] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">URL Shortener</h1>
      <form action="" className="space-y-4">
        <div>
          <label htmlFor="url" className="block mb-2">
            Enter URL to shorten: 
          </label>
          <input 
            className="bg-white w-full border rounded border-green-500"
            type="url"
            id="url"
            required placeholder="https://example.com" 
          />
        </div>
        <div>
          <label htmlFor="customText" className="block mb-2">
            Custom Text: 
          </label>
          <input 
            className="bg-white w-full border rounded border-green-500"
            type="text" 
            id="CustomText"
            required placeholder="https://example.com" 
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-400 hover:text-red-400 hover:font-bold">
          Create Short URL
        </button>
      </form>
      {/* On ANY error show error box */}
      
    </main>
  );
}
