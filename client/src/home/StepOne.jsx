// import React, { useState } from "react";
// import Button from "../components/ui/Button";
// import { urlServices } from "../api";
// import Input from "../components/ui/Input";
// import { Link } from "react-router";
import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from 'react-router'

import Input from "../components/ui/Input";
import { urlServices } from "../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const StepOne = () => {
//   <ToastContainer position="top-right" autoClose={5000} theme="light" />;
//   const [longUrl, setLongUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [copied, setCopied] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await urlServices.creatShort(longUrl);
//       setShortUrl(`http:localhost8000/${res.shortUrl}`);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(shortUrl);
//       setCopied(true);

//       setTimeout(() => {
//         setCopied(false);
//       }, 2000);
//     } catch (error) {
//       console.error("Copy failed", error);
//     }
//   };
//   return (
//     <>
//       <ToastContainer />
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <section className="text-center mb-20">
//           <h1 className="text-4xl font-bold mb-4">Shorten Your Long URLs</h1>
//           <p className="text-gray-600 mb-8">
//             Paste your long URL and get a short, shareable link instantly.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col md:flex-row gap-3 justify-center"
//           >
//             <Input
//               type="url"
//               placeholder="Enter your long URL here"
//               value={longUrl}
//               onChange={(e) => setLongUrl(e.target.value)}
//               className="w-full md:w-2/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <Button type="submit" className="bg-blue-400">
//               push
//             </Button>
//           </form>

//           {shortUrl && (
//             <div className="mt-6 w-fill flex max-w-xl bg-gray-200 p-4 rounded-md items-center justify-between">
//               <Link
//                 to={`/${shortUrl}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-700  font-medium truncate"
//               >
//                 {" "}
//                 {shortUrl}
//               </Link>

//               <Button onClick={handleCopy} variant="secondary">
//                 {copied ? "Copied!" : "Copy"}
//               </Button>
//             </div>
//           )}
//         </section>
//       </div>
//     </>
//   );
// };
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

      <div className="max-w-6xl mx-auto px-4 py-10">
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">
            Shorten Your Long URLs
          </h1>
          <p className="text-gray-600 mb-8">
            Paste your long URL and get a short, shareable link instantly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-3 justify-center"
          >
            <Input
              type="url"
              placeholder="Enter your long URL here"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="w-full md:w-2/3"
              required
            />

            <Button type="submit" className="bg-blue-400">
              Push
            </Button>
          </form>

          {shortUrl && (
            <div className="mt-6 w-full max-w-xl mx-auto flex items-center justify-between bg-gray-200 p-4 rounded-md">
              
              {/* ✅ Clickable Short URL */}
              <Link
                to={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-medium truncate"
              >
                {shortUrl}
              </Link>
              
              <Button onClick={handleCopy} variant="secondary">
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

