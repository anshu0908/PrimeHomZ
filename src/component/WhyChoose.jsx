import {
  LaptopMinimalCheck,
  ListChecks,
  Pen,
  ScrollText,
  Table2,
  Warehouse,
} from "lucide-react";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="py-16 px-4">
      {/* Header (slightly more to the left for alignment) */}
      <div className="mb-10 pl-5 sm:pl-8 md:pl-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Why Choose Us
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl">
          We believe in perfection through structured and thoughtful design.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {[
          {
            icon: <Pen className="text-black size-8" />,
            title: "1. Trusted Market Expertise",
            desc:
              "We provide deep insights into local property trends, helping you make informed, profitable real estate decisions every time.",
          },
          {
            icon: <ScrollText className="text-black size-8" />,
            title: "2. Seamless Buying & Selling",
            desc:
              "From first visit to final paperwork, we streamline the process to make every transaction smooth, fast, and hassle-free.",
          },
          {
            icon: <Warehouse className="text-black size-8" />,
            title: "3. Personalized Property Match",
            desc:
              "We understand your goals and present tailored property options that align with your needs, location, and investment plans.",
          },
          {
            icon: <ListChecks className="text-black size-8" />,
            title: "4. End-to-End Support",
            desc:
              "Our team handles everything — from site tours to documentation — ensuring a stress-free and guided buying experience.",
          },
          {
            icon: <Table2 className="text-black size-8" />,
            title: "5. Transparent Dealings",
            desc:
              "We value honesty and clarity. You’ll always know what to expect — no hidden costs, just straightforward communication.",
          },
          {
            icon: <LaptopMinimalCheck className="text-black size-8" />,
            title: "6. Exclusive Property Access",
            desc:
              "Get access to premium listings through our extensive broker network — homes and spaces not easily found online.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-gray-300 hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;