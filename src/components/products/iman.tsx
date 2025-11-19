"use client";

import { motion } from "framer-motion";

export default function Iman() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#1a0f23]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-linear-to-b from-[#3a1a53] via-[#1f0c2e] to-[#0b0611]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_40%_30%,rgba(180,98,255,0.30),transparent_70%)]" />
      <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('/products/emaan/texure.jpeg')] bg-cover bg-center" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.22 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-24 flex flex-col md:flex-row gap-20 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white max-w-lg"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#e9ddff] via-[#b88bff] to-[#f2eaff] bg-clip-text text-transparent">
            EMAAN
          </h1>

          <h2 className="text-2xl md:text-3xl mt-2 font-bold text-[#d7b7ff]">
            إيمان
          </h2>

          <p className="text-lg leading-relaxed mt-6 text-[#d8c7e9] text-justify">
            عطر فاخر يتميز بطابع بنفسجي ملكي تجمع بين القوة والنعومة في آن واحد.
            مزيج من اللافندر والعود ولمسة من العنبر الأبيض تمنح حضورًا لا يُنسى.
          </p>

          <div className="w-32 h-1 bg-linear-to-r from-[#b87bff] to-[#e8d4ff] rounded-full mt-6" />
        </motion.div>

        {/* BOTTLE */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotate: 12, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          <motion.img
            src="/products/emaan/eman.webp"
            alt="Iman Perfume Bottle"
            className="w-[380px] md:w-[450px] drop-shadow-[0_35px_75px_rgba(180,98,255,0.45)] -rotate-20"
            initial={{ filter: "brightness(0.6) blur(2px)" }}
            whileInView={{ filter: "brightness(1) blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-0 w-[65%] h-24 bg-[#9f64ff]/30 blur-3xl rounded-full"
          />
        </motion.div>
      </div>

      {/* PARTICLES — Make sure they DO NOT reanimate */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.6, 1.2, 0.6],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-2 h-2 bg-[#c49dff] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
}
