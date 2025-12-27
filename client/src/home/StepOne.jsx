
import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from 'react-router'

import Input from "../components/ui/Input";
import { urlServices } from "../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const StepOne = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await urlServices.creatShort(longUrl);

      const fullShortUrl = `http://localhost:8000/${res.shortUrl}`;
      setShortUrl(fullShortUrl);

      toast.success("Short URL creat successfully ");
    } catch (error) {
      toast.error("Failed to create short URL");
      console.log(error);

      
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);

      toast.success("Short URL copied to clipboard ");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Copy failed");
      console.error(error);
      
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

    <div className="relative overflow-hidden">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

  <section className="relative max-w-5xl mx-auto px-6 py-24 text-center">
    <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Enter Your Long URL
    </h1>

    <p className="text-gray-600 max-w-xl mx-auto mb-12">
      Turn long, messy links into clean, shareable short URLs in seconds.
    </p>

    {/* Form */}
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-4 max-w-3xl mx-auto"
    >
      <Input
        type="url"
        placeholder="Paste your long URL here..."
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        className="flex-1 text-lg"
        required
      />

      <Button
        type="submit"
        className="px-8 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform"
      >
        Shorten
      </Button>
    </form>

    {/* Result */}
    {shortUrl && (
      <div className="mt-8 max-w-3xl mx-auto flex items-center gap-4 bg-white shadow-lg rounded-xl px-6 py-4">
        <a
          href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-blue-600 font-medium truncate hover:underline"
        >
          {shortUrl}
        </a>

        <Button
          onClick={handleCopy}
          className="px-5 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    )}
  </section>
</div>

    </>
  );
};

export default StepOne;

