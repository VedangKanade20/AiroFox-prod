import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Call Us",
      value: "+91 XXXXX XXXXX",
      icon: Phone,
    },
    {
      title: "WhatsApp",
      value: "Instant Support",
      icon: FaWhatsapp,
    },
    {
      title: "Email Us",
      value: "support@airofox.com",
      icon: Mail,
    },
  ];

  const areas = ["Lalbaug", "Parel", "Dadar", "Wadala", "Matunga", "Sion"];

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="py-24 bg-gradient-to-b from-white to-orange-50">
          <Container>
            <div className="text-center">
              <p className="inline-block rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white">
                Contact Us
              </p>

              <h1 className="mt-6 text-5xl md:text-7xl font-bold text-brand-navy">
                Need Help? Let’s Talk.
              </h1>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-slate">
                Reach out via call, WhatsApp, or email. We’re here to help.
              </p>
            </div>
          </Container>
        </section>

        {/* CONTACT CARDS */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.title}
                    className="rounded-3xl bg-brand-navy p-8 text-white shadow-xl text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-orange mx-auto flex items-center justify-center mb-5">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-2xl font-semibold">{method.title}</h3>

                    <p className="mt-3 text-gray-300">{method.value}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* FORM + AREAS */}
        <section className="pb-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* FORM */}
              <div className="rounded-3xl bg-white shadow-xl border p-8">
                <h2 className="text-3xl font-bold text-brand-navy">
                  Send a Message
                </h2>

                <div className="space-y-4 mt-6">
                  <input
                    placeholder="Your Name"
                    className="w-full rounded-xl border p-4"
                  />
                  <input
                    placeholder="Phone Number"
                    className="w-full rounded-xl border p-4"
                  />
                  <input
                    placeholder="Service Needed"
                    className="w-full rounded-xl border p-4"
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full rounded-xl border p-4"
                  />
                </div>

                <Button className="w-full mt-6">Submit</Button>
              </div>

              {/* AREAS */}
              <div className="rounded-3xl bg-brand-navy text-white p-8 shadow-xl">
                <h2 className="text-3xl font-bold">Service Areas</h2>

                <p className="mt-4 text-gray-300">
                  Currently serving across these locations.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {areas.map((area) => (
                    <div
                      key={area}
                      className="px-4 py-3 rounded-full bg-white/10"
                    >
                      {area}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-3 text-gray-300">
                  <MapPin size={20} />
                  Mumbai Metropolitan Region
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
