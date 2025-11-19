"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Asad() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
      {/* GOLDEN RADIAL AURA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,198,89,0.20),transparent_70%)]" />

      {/* BLACK MARBLE TEXTURE */}
      <div className="absolute inset-0 opacity-15 bg-[url('/products/asad/black-marble.jpg')] bg-cover bg-center" />

      {/* CENTER GOLD LIGHT SHAFT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,210,120,0.12),transparent)]"
      />

      {/* BACKCENTER HALO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(255,190,70,0.25),transparent_75%)] blur-[120px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-28 flex flex-col md:flex-row gap-20 items-center">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-white max-w-lg"
        >
          <h2 className="text-lg md:text-xl mt-2 font-semibold text-[#d7b471]">
            ASAD
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-linear-to-b from-[#ffe9b0] to-[#d1a54b] bg-clip-text text-transparent">
            أســد
          </h1>

          <p className="text-lg leading-relaxed mt-6 text-[#e6d8b8] text-justify">
            أسد من لطافة عطر فاخر برائحة العنبر للرجال، تتكون روائحه العليا من
            الفلفل الأسود والأناناس والتبغ؛ أما القلب فيحمل الباتشولي والقهوة
            والعرقسوس، وتستقر القاعدة على خليط غني من الفانيلا والعنبر والخشب
            الجاف والبنزويلين واللبان.
          </p>

          <div className="w-32 h-1 bg-linear-to-r from-[#e3c068] to-[#a07832] rounded-full mt-6" />
        </motion.div>

        {/* BOTTLE SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.85, rotate: 8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <motion.img
            src="/products/asad/asad.webp"
            alt="ASAD Perfume"
            className="w-[340px] md:w-[420px] drop-shadow-[0_35px_85px_rgba(255,200,90,0.45)] -rotate-12"
            initial={{ filter: "brightness(0.6) blur(2px)" }}
            animate={{ filter: "brightness(1) blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.4 }}
          />

          {/* GROUND REFLECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-0 w-[70%] h-24 bg-[rgba(255,198,110,0.3)] blur-3xl rounded-full"
          />
        </motion.div>
      </div>

      {/* GOLD SPARK POINTS — infinite loop only */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 7 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-2 h-2 bg-[#ffde8a] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
}
