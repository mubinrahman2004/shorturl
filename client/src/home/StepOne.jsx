import React, { useState } from "react";
import Button from "../components/ui/Button";

const StepOne = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) return;

    // temporary short url (replace with backend API later)
    const fakeShortUrl =
      "https://sho.rt/" + Math.random().toString(36).slice(2, 7);

    setShortUrl(fakeShortUrl);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4">Shorten Your Long URLs</h1>
        <p className="text-gray-600 mb-8">
          Paste your long URL and get a short, shareable link instantly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-3 justify-center"
        >
          <input
            type="url"
            placeholder="Enter your long URL here"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-full md:w-2/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <Button type="submit" className="bg-blue-400">
            push
          </Button>
        </form>

        {shortUrl && (
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2"
            />

            <Button onClick={handleCopy} variant="secondary">
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default StepOne;
