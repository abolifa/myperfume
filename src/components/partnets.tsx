"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    { name: "مصنع لطافة لصناعة العطور", image: "/partners/lattafa.png" },
    { name: "مصنع وادي سيجي لصناعة العطور", image: "/partners/wadisiji.png" },
    {
      name: "مصنع أرض الزعفران لصناعة العطور",
      image: "/partners/ard-alzaffran.png",
    },
    {
      name: "مصنع أمبر للعطور ومستحضرات التجميل",
      image: "/partners/ember.png",
    },
    {
      name: "مصنع ماي بيرفيوم لصناعة العطور",
      image: "/partners/my-perfume.png",
    },
    { name: "مصنع جلف أوركيد لصناعة العطور", image: "/partners/gulg.png" },
    { name: "مصنع الماسة لصناعة العطور", image: "/partners/almas.png" },
    { name: "مصنع أكسبرشن بيرفيوم – فرنسا", image: "/partners/exp.png" },
    {
      name: "المصنع السعودي للعطور ومستحضرات التجميل",
      image: "/partners/ms.png",
    },
  ];

  return (
    <section
      id="partners"
      className="relative py-32 bg-[#faf8f4] text-[#1a1a1a] overflow-hidden"
    >
      {/* LIGHT BACKGROUND ONLY (VERY LIGHT) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(214,181,112,0.12),transparent_80%)]" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4
          bg-linear-to-r from-[#b39a61] to-[#141108] bg-clip-text text-transparent leading-loose"
        >
          شركاؤنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-[#5b5b5b] max-w-2xl mx-auto text-lg mb-20"
        >
          نفخر بالتعاون مع نخبة من العلامات الراقية في عالم العطور والزينة ومواد
          التنظيف — شراكات تعكس معايير الفخامة والجودة.
        </motion.p>

        {/* GRID — NO HEAVY SHADOWS, NO BLUR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {partners.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              className="
                rounded-2xl p-8 bg-white/90 backdrop-blur-sm 
                border border-[#e5d8b8]/40 shadow-sm
                hover:shadow-md transition-all text-center flex flex-col items-center gap-5
              "
            >
              <div className="w-28 h-28 p-3 rounded-xl bg-[#d5cfbd] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain max-w-full max-h-full"
                />
              </div>

              <div className="text-lg font-semibold bg-linear-to-r from-[#8a764a] to-[#ad945f] bg-clip-text text-transparent">
                {item.name}
              </div>

              <div className="h-px w-3/4 bg-linear-to-r from-transparent via-[#c3a66a] to-transparent opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHT FLOATING DIAMONDS (ONLY 1) — REDUCED LOAD */}
      <FloatingDiamond size={120} x="80%" y="70%" delay={0} />
    </section>
  );
}

function FloatingDiamond({
  size,
  x,
  y,
  delay,
}: {
  size: number | string;
  x: number | string;
  y: number | string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.05, scale: 0.9 }}
      animate={{
        opacity: 0.12,
        scale: [1, 1.05, 1],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className="absolute bg-linear-to-br from-[#d6b570]/30 to-[#f3e1b7]/20 blur-md rounded-xl"
      style={{
        width: size,
        height: size,
        top: y,
        left: x,
        clipPath:
          "polygon(50% 0%, 80% 25%, 100% 50%, 80% 75%, 50% 100%, 20% 75%, 0% 50%, 20% 25%)",
      }}
    />
  );
}
