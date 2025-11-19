"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AmeeratAlArab() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#2a0d12]">
      {/* VELVET RED BACKGRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,20,0.55),#2a0d12)]" />

      {/* TEXTURE */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('/products/arab/texure.jpg')] bg-cover bg-center" />

      {/* GOLDEN TOP HALO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle,rgba(255,210,120,0.45),transparent_70%)] blur-[100px] opacity-30" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-28 flex flex-col md:flex-row gap-20 items-center">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-white max-w-lg"
        >
          <h2 className="text-lg md:text-xl mb-2 font-semibold text-[#f2c57c]">
            Ameerat Al Arab
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-b from-[#ffe9d0] to-[#d9b06a] bg-clip-text text-transparent">
            أميرة العرب
          </h1>

          <p className="text-lg leading-relaxed mt-6 text-[#f5e9d9] text-justify">
            عطر قوي وفاخر ينفتح بنفحات منعشة مع قاعدة من الياسمين والخشب والمسك
            والعود. يحتوي هذا الإصدار على مزيج غني من التوابل والراتنجات
            والأخشاب والزيوت العطرية، بسمة شرقية جذابة وقوية تترك أثراً لا
            يُنسى.
          </p>

          <div className="w-32 h-1 bg-linear-to-r from-[#e4c384] to-[#b68a41] rounded-full mt-6" />
        </motion.div>

        {/* BOTTLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.9, rotate: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <motion.img
            src="/products/arab/ameerat.webp"
            alt="Ameerat Al Arab Bottle"
            className="drop-shadow-[0_35px_85px_rgba(180,50,60,0.45)] -rotate-12"
            initial={{ filter: "brightness(0.65) blur(2px)" }}
            animate={{ filter: "brightness(1) blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.4 }}
          />

          {/* RED-GOLD REFLECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-0 w-[70%] h-24 bg-[rgba(190,60,60,0.4)] blur-3xl rounded-full"
          />
        </motion.div>
      </div>

      {/* FLOATING GOLD DUST – infinite, does NOT re-trigger */}
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.7, 1.2, 0.7] }}
          transition={{
            duration: 7 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1.5 h-1.5 bg-[#ffdd96] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
}
