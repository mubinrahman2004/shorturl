import React from "react";

const StepsTwo = () => {
  const step = [
    {
      id: 1,
      title: "Paste Long jsddj",
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
    <section className="bg-gray-50 rounded-lg p-10">
      <h2 className="text-3xl font-semibold text-center mb-10">
        How URL Shortening Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {step.map((item) => (
          <div key={item.id} className="text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-semibold mb-2"> {item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsTwo;
