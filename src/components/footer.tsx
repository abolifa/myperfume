"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative bg-[#050505] text-white pt-20 pb-5 border-t border-[#2b2b2b] overflow-hidden"
    >
      {/* Background Gold Noise */}
      <div className="absolute inset-0 opacity-10 bg-[url('/elements/patt.png')] bg-repeat" />

      {/* Gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_10%,rgba(214,181,112,0.25),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(150,110,40,0.15),transparent_80%)] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-20">
          {/* LOGO + TEXT */}
          <div className="flex flex-col gap-5 items-center">
            <img
              src="/meta/icon.png"
              alt="logo"
              width={100}
              height={100}
              loading="eager"
              className="opacity-95 w-24 h-auto"
            />
            <p className="text-[#d7d7d7] leading-relaxed text-base">
              ماي بيرفيوم — علامة عطور عربية فاخرة تجمع بين الأصالة والرقيّ،
              لنقدم لكم تجربة عطرية لا تُنسى بطابع ملكي فاخر.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold bg-linear-to-r from-[#f3e9cf] to-[#d6b570] bg-clip-text text-transparent tracking-wider">
              روابط سريعة
            </h3>

            <a
              href="#hero"
              className="text-[#d7d7d7] hover:text-[#d6b570] text-lg transition"
            >
              الرئيسية
            </a>
            <a
              href="#products"
              className="text-[#d7d7d7] hover:text-[#d6b570] text-lg transition"
            >
              عطورنا
            </a>
            <a
              href="#about"
              className="text-[#d7d7d7] hover:text-[#d6b570] text-lg transition"
            >
              من نحن
            </a>
            <a
              href="#contact"
              className="text-[#d7d7d7] hover:text-[#d6b570] text-lg transition"
            >
              تواصل معنا
            </a>
          </div>

          {/* DIRECT CONTACT */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold bg-linear-to-r from-[#f3e9cf] to-[#d6b570] bg-clip-text text-transparent tracking-wider">
              تواصل مباشر
            </h3>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#d6b570] to-[#b08a4c] flex items-center justify-center">
                <Phone size={18} color="#000" />
              </div>
              <a
                href="tel:+218912118492"
                dir="ltr"
                className="text-[#d7d7d7] text-lg hover:text-[#d6b570] transition underline"
              >
                +218 91 211 8492
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#d6b570] to-[#b08a4c] flex items-center justify-center">
                <Mail size={18} color="#000" />
              </div>
              <a
                href="mailto:info@mayperfume.ly"
                className="text-[#d7d7d7] text-lg hover:text-[#d6b570] transition underline"
              >
                info@mayperfume.ly
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#d6b570] to-[#b08a4c] flex items-center justify-center">
                <MapPin size={18} color="#000" />
              </div>
              <p className="text-[#d7d7d7] text-lg">
                ليبيا — مصراتة • طرابلس • بنغازي • زليتن
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/218912118492"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center hover:scale-110 transition"
              >
                <FaWhatsapp size={18} className="text-white" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-[#1877F2] flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF size={18} className="text-white" />
              </a>

              <a
                href="mailto:info@mayperfume.ly"
                className="w-9 h-9 rounded-lg bg-linear-to-br from-[#d6b570] to-[#b08a4c] flex items-center justify-center hover:scale-110 transition"
              >
                <Mail size={17} color="#000" />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-[#2b2b2b] pt-6 text-center text-[#a9a9a9] text-sm">
          © {new Date().getFullYear()} ماي بيرفيوم — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
