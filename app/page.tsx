"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [customText, setCustomText] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    setShortUrl("");

    try{
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({url: url, customText: customText},)
      })
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong!");
      }
      setShortUrl(data.shortUrl);
    } catch (err) {
    setError(err.message);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block mb-2">
            Enter URL to shorten: 
          </label>
          <input 
            className="bg-white w-full border rounded border-green-500 px-2"
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required placeholder="https://example.com" 
          />
        </div>
        <div>
          <label htmlFor="customText" className="block mb-2">
            Custom Text: 
          </label>
          <input 
            className="bg-white w-full border rounded border-green-500 px-2"
            type="text" 
            id="CustomText"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            required placeholder="example" 
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-400 hover:text-red-400 hover:font-bold">
          Create Short URL
        </button>
      </form>
      {/* On ANY error show error box */}
      {error && <div className="mt-4 bg-green-100 text-red-700 rounded">{error}</div>}

      {/* If short URl successful show the shortened link below */}
      {shortUrl && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p>Shortened URL:</p>
          <div className="w-full flex items-center px-2 gap-2 border rounded bg-white">
            <a
              className="text-blue-500 text-decoration-line: underline"
              href={shortUrl} 
              target="_blank"
              rel="noopener noreferrer" >
            {shortUrl}
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
