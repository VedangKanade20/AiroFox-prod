"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../shared/Button";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Menu size={30} />
        </button>
      </SheetTrigger>

      <SheetContent className="w-full bg-white/95 backdrop-blur-xl border-none">
        <div className="flex flex-col h-full">
          {/* TOP */}
          <div className="flex items-center gap-3 pt-6">
            <Image src="/logo.jpeg" alt="AiroFox" width={42} height={42} />
            <span className="text-2xl font-bold text-brand-navy">AiroFox</span>
          </div>

          {/* NAV */}
          <div className="flex flex-col gap-6 mt-16">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-3xl font-semibold text-brand-navy hover:text-brand-orange transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto pb-8 space-y-4">
            <Button className="w-full gap-2">
              <Phone size={18} />
              Call Now
            </Button>

            <Button variant="whatsapp" className="w-full gap-2">
              <FaWhatsapp size={18} />
              WhatsApp
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
