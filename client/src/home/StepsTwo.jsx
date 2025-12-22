import React from "react";

const StepsTwo = () => {
  const step = [
    {
      id: 1,
      title: "Item 1",
      description:
        "Enter the long URL you want to shorten into the input field.",
    },
    {
      id: 2,
      title: "Paste Long URL",
      description:
        "Enter the long URL you want to shorten into the input field.",
    },
    {
      id: 3,
      title: "Paste Long URL",
      description:
        "Enter the long URL you want to shorten into the input field.",
    },
  ];

  return (
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-16">
    How URL Shortening Works
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {step.map((item, index) => (
      <div
        key={item.id}
        className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300"
      >
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-bold">
          {index + 1}
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
          {item.title}
        </h3>

        <p className="text-gray-600">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</section>


)
};

export default StepsTwo;
