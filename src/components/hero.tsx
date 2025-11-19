"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full overflow-hidden bg-[#030303] text-white flex items-center pt-20"
    >
      <LuxuryBackground />
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-center">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <motion.img
            src="/meta/icon.png"
            alt="My Perfume Logo"
            className="w-32 h-auto mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              text-3xl md:text-5xl font-extrabold leading-normal
              bg-linear-to-r from-[#e8e6e4] via-[#d1b77a] to-[#f5e8c8]
              bg-clip-text text-transparent tracking-tight
            "
          >
            شــركــة مــاي بــيرفــيــوم
            <br />
          </motion.h1>
          <motion.h2 className="leading-tight text-base md:text-xl font-semibold bg-linear-to-r from-[#e8e6e4] via-[#d1b77a] to-[#f5e8c8] bg-clip-text text-transparent tracking-tight">
            لاستيراد مواد الزينة والخردوات ومواد التنظيف
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-300 max-w-md text-lg leading-relaxed"
          >
            علامات فاخرة تجمع عالم الجمال والعناية والمنتجات الراقية… نختار
            الأفضل لنقدّم أرقى حلول الزينة والعطور بأناقة لا تُضاهى.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            href="#contact"
            className="
              inline-flex items-center px-10 py-3 rounded-full relative overflow-hidden
              bg-linear-to-r from-[#d6b570] to-[#f0d9a6]
              shadow-2xl shadow-yellow-500/20 text-sm font-semibold text-black
              hover:scale-[1.03] transition-transform
            "
          >
            تواصــل معــنا
          </motion.a>
        </div>

        <div className="flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <img
              src="/elements/bottle-2.png"
              alt="Perfume Bottle 3D"
              className="relative z-10 w-100 h-auto"
              loading="eager"
            />
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[75%] h-32 blur-[70px] bg-[#d6b570]/30 rounded-full"></div>
          </motion.div>
        </div>
      </div>
      <img
        src="/partners/lattafa.svg"
        alt="Latafa Logo"
        className="absolute bottom-30 left-10 w-64 h-auto opacity-5"
        loading="eager"
      />
    </section>
  );
}

function LuxuryBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,215,160,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.03),transparent_70%)] mix-blend-screen" />

      {[...Array(16)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#d6b570]/40 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [0.9, 1.3, 0.9],
            x: [0, (Math.random() - 0.5) * 150, 0],
            y: [0, (Math.random() - 0.5) * 150, 0],
          }}
          transition={{
            duration: 7 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <FloatingGold size={240} x="10%" y="20%" delay={0} />
      <FloatingGold size={170} x="70%" y="55%" delay={2} />
      <FloatingGold size={200} x="50%" y="80%" delay={3} />

      <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/luxury.png')]" />
    </>
  );
}

function FloatingGold({ size, x, y, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 0.28,
        scale: [1, 1.1, 1],
        rotate: [0, 12, -10, 0],
        y: [0, -18, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className="absolute bg-linear-to-br from-[#b89455]/40 to-[#f1d7a4]/25 rounded-3xl blur-2xl"
      style={{
        width: size,
        height: size,
        top: y,
        left: x,
        clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
      }}
    />
  );
}
