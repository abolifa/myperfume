"use client";

import { motion } from "framer-motion";
import { MapPin, Send } from "lucide-react";
import { Separator } from "./ui/separator";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const branches = [
    {
      name: "فرع مصراتة",
      phone: "+218 91 123 456",
      address: "شارع النصر، مبنى رقم 12، مصراتة، ليبيا",
    },
    {
      name: "فرع طرابلس",
      phone: "+218 92 654 321",
      address: "شارع الجمهورية، مبنى رقم 5، طرابلس، ليبيا",
    },
    {
      name: "فرع بنغازي",
      phone: "+218 93 789 012",
      address: "شارع الشهداء، مبنى رقم 8، بنغازي، ليبيا",
    },
    {
      name: "فرع سبها",
      phone: "+218 94 345 678",
      address: "شارع الوحدة، مبنى رقم 3، سبها، ليبيا",
    },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("to", "info@myperfume.com.ly");

    try {
      const res = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: data,
      });

      const text = await res.text();
      if (text.includes("OK")) {
        setSent(true);
        form.reset();
      } else {
        setError("فشل إرسال الرسالة");
      }
    } catch {
      setError("خطأ في الاتصال بالخادم");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-[#050505] text-white overflow-hidden"
    >
      {/* Gold Ambient Glows */}
      <div className="absolute inset-0 opacity-10 bg-[url('/elements/patt.png')] bg-repeat" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,181,112,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(120,90,40,0.15),transparent_80%)] blur-[100px]" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-5
          bg-linear-to-r from-[#f3e9cf] via-[#d6b570] to-[#c7a55b]
          bg-clip-text text-transparent leading-loose"
      >
        تواصــل معنــا
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-[#c9c9c9] text-lg mb-16"
      >
        يسعدنا استقبال استفساراتكم — فريق ماي بيرفيوم جاهز لخدمتكم بكل احترافية
      </motion.p>

      {/* GRID FIXED HEIGHT */}
      <div className="mx-auto max-w-6xl px-2 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch h-full">
        {/* CONTACT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            h-full flex flex-col
            bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-3xl border border-[#3a3a3a]
            shadow-[0_0_40px_rgba(0,0,0,0.6)] p-8 gap-4
          "
        >
          <input
            name="name"
            type="text"
            placeholder="الاسم الكامل"
            className="h-14 rounded-xl bg-[#0f0f0f] border border-[#444]
              px-4 text-lg focus:outline-none focus:border-[#d6b570] transition"
          />

          <input
            name="email"
            type="email"
            placeholder="البريد الإلكتروني"
            className="h-14 rounded-xl bg-[#0f0f0f] border border-[#444]
              px-4 text-lg focus:outline-none focus:border-[#d6b570] transition"
          />

          <input
            name="phone"
            type="text"
            placeholder="رقم الهاتف"
            className="h-14 rounded-xl bg-[#0f0f0f] border border-[#444]
              px-4 text-lg focus:outline-none focus:border-[#d6b570] transition"
          />

          <textarea
            name="message"
            placeholder="اكتب رسالتك هنا"
            className="h-40 rounded-xl bg-[#0f0f0f] border border-[#444]
              px-4 py-3 text-lg focus:outline-none focus:border-[#d6b570] transition"
          />

          {sent && (
            <p className="text-green-700 text-sm font-semibold">
              تم إرسال الرسالة بنجاح ✔
            </p>
          )}
          {error && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}

          <button
            type="submit"
            className="
              mt-auto h-14 rounded-xl bg-linear-to-l from-[#d6b570] to-[#b08a4c]
              text-black font-semibold text-lg flex items-center justify-center gap-2
              hover:opacity-90 transition shadow-[0_0_25px_rgba(214,181,112,0.3)]
            "
            disabled={loading}
          >
            {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
            <Send size={20} />
          </button>
        </motion.form>

        {/* BRANCHES CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col w-full h-full"
        >
          <div
            className="
              h-full flex flex-col
              bg-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl border border-[#3a3a3a]
              p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)] gap-5
            "
          >
            <h3
              className="
                text-2xl font-bold bg-linear-to-r from-[#f3e9cf] to-[#d6b570]
                bg-clip-text text-transparent text-center mb-2
              "
            >
              فــروعــنــا
            </h3>

            {branches.map((branch, i) => (
              <div key={i} className="flex flex-col gap-3">
                {/* Branch Info Row */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#d6b570] to-[#b08a4c] flex items-center justify-center shadow-md">
                      <MapPin size={18} color="#000" />
                    </div>
                    <p className="text-lg font-semibold">{branch.name}</p>
                  </div>

                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="text-[#d6b570] font-semibold hover:underline"
                    dir="ltr"
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Address */}
                <p className="text-sm text-[#bcbcbc] leading-relaxed pr-11">
                  {branch.address}
                </p>

                {/* Separator */}
                {i !== branches.length - 1 && (
                  <Separator className="bg-[#2a2a2a]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
