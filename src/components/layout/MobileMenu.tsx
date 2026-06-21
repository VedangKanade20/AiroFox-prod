"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Button from "../shared/Button";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </SheetTrigger>

      <SheetContent side="right">
        <div className="flex flex-col gap-6 mt-12">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

          <Button>Book Now</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
