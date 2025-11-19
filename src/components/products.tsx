"use client";

import AmeeratAlArab from "./products/ameeratalarab";
import Asad from "./products/asad";
import Iman from "./products/iman";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <section className="w-full flex flex-col">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#060606]"
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#000000] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,160,0.12),transparent_70%)] blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(230,200,140,0.08),transparent_80%)]" />
        <div className="relative z-20 text-center px-6">
          <h2
            className="
        text-5xl md:text-6xl font-extrabold tracking-wide
        bg-linear-to-br from-[#f7f3e8] via-[#e2c88f] to-[#c9a760]
        bg-clip-text text-transparent
        drop-shadow-[0_0_25px_rgba(200,170,100,0.25)]
        leading-relaxed
      "
          >
            تشكيلة عطورنا الفاخرة
          </h2>

          <p className="mt-6 text-[#b5b5b5] text-lg md:text-xl">
            نخبة من العطور العربية الفاخرة بطابع داكن راقٍ وأصالة لا تُضاهى
          </p>

          <div className="mx-auto mt-10 w-40 h-0.5 bg-linear-to-r from-transparent via-[#d6b570] to-transparent opacity-70" />
        </div>

        {/* floating dust – pure gold tone */}
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
              opacity: [0, 0.22, 0],
              scale: [0.6, 1.3, 0.6],
              y: [0, -35, 0],
            }}
            transition={{
              duration: 7 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-2 h-2 bg-[#d6b570] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.section>

      <Iman />
      <Asad />
      <AmeeratAlArab />
    </section>
  );
}
