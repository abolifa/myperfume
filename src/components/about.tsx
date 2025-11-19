"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-40 bg-[#0e0e0f] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(214,181,112,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.03),transparent_70%)]" />
      <div className="absolute inset-0 opacity-10 bg-[url('/elements/patt.png')] bg-repeat" />
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl leading-relaxed font-extrabold tracking-tight text-center mb-24 bg-linear-to-r from-[#e8e6e4] via-[#d1b77a] to-[#f5e8c8] bg-clip-text text-transparent"
        >
          مــن نــحــن
        </motion.h2>

        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-56 h-56 rounded-full bg-[#161616] shadow-[0_0_50px_rgba(214,181,112,0.25)] border border-[#c8a96d]/40 flex items-center justify-center"
          >
            <img
              src="/meta/icon.png"
              alt="ماي بيرفيوم"
              width={160}
              height={160}
              loading="eager"
              className="object-contain w-36 h-36"
            />
            <div className="absolute w-full h-full rounded-full bg-[#d6b570]/20 blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 w-0.5 h-[520px] -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-transparent via-[#d6b570]/50 to-transparent -z-20"
          />
        </div>

        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-linear-to-r from-[#e8e6e4] via-[#d1b77a] to-[#f5e8c8] bg-clip-text text-transparent">
              رؤيتنا
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              أن نكون الوجهة الأولى للمنتجات الفاخرة في عالم الزينة والعطور، مع
              تقديم علامة تجارية تُجسد الثقة والجودة والأناقة في كل تفاصيلها.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pr-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-linear-to-r from-[#e8e6e4] via-[#d1b77a] to-[#f5e8c8] bg-clip-text text-transparent">
              رسالتنا
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              توفير منتجات تجمع بين الذوق الراقي والجودة العالية، مع بناء تجربة
              شرائية تحمل طابع الفخامة والاهتمام بالتفاصيل.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-linear-to-r from-[#e8e6e4] via-[#d1b77a] to-[#f5e8c8] bg-clip-text text-transparent">
              قيمنا
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              الجودة، الأصالة، الشفافية، الفخامة، الالتزام، وخدمة استثنائية
              ترتقي بتجربة العميل وتُبرز هويتنا الراقية.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pr-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-linear-to-r from-[#e8e6e4] via-[#d1b77a] to-[#f5e8c8] bg-clip-text text-transparent">
              ما الذي يميزنا
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              نبحث عن كل ما هو فاخر، ونختار بدقة منتجات تضيف قيمة وجمالًا
              وتفاصيل تعكس هوية ماي بيرفيوم في عالم الجمال والعناية.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
