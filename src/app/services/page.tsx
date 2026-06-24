import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "AC & Appliances Repair",
    image: "/services/ac.jpg",
    desc: "Fast diagnostics and repairs for essential appliances.",
    features: [
      "AC Service",
      "Gas Refill",
      "Refrigerator Repair",
      "Washing Machine",
    ],
  },
  {
    title: "Electrician",
    image: "/services/electrician.jpg",
    desc: "Safe and professional electrical solutions.",
    features: [
      "Wiring",
      "Switchboard Repair",
      "Fan Installation",
      "Inverter Setup",
    ],
  },
  {
    title: "Plumber",
    image: "/services/plumber.jpg",
    desc: "From minor leaks to major plumbing fixes.",
    features: [
      "Leak Repair",
      "Pipe Fitting",
      "Tap Replacement",
      "Bathroom Plumbing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="py-24 bg-gradient-to-b from-white to-orange-50">
          <Container>
            <div className="text-center">
              <p className="inline-block bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                Our Services
              </p>

              <h1 className="mt-6 text-5xl md:text-7xl font-bold text-brand-navy">
                Professional Home Services
              </h1>

              <p className="mt-6 text-lg text-brand-slate max-w-2xl mx-auto">
                Quick, reliable and affordable repairs at your doorstep.
              </p>
            </div>
          </Container>
        </section>

        {/* SERVICE CARDS */}
        <section className="py-24">
          <Container>
            <div className="space-y-12">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="grid md:grid-cols-2 gap-8 rounded-3xl bg-brand-navy p-8 md:p-10 text-white shadow-2xl"
                >
                  <div className="relative h-[300px] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-gray-300 text-lg">{service.desc}</p>

                    <div className="grid grid-cols-2 gap-3 mt-8">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-xl bg-white/10 px-4 py-3"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-8 flex-wrap">
                      <Button className="gap-2">
                        <Phone size={18} />
                        Call Now
                      </Button>

                      <Button variant="whatsapp" className="gap-2">
                        <FaWhatsapp size={18} />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* WHY */}
        <section className="py-24 bg-gray-50">
          <Container>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Same Day Service",
                "Verified Experts",
                "Transparent Pricing",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-brand-navy p-8 text-white text-center shadow-xl"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-orange mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
