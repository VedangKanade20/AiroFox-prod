import Image from "next/image";
import Container from "@/components/shared/Container";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const features = ["Verified Experts", "Fast Response", "Transparent Pricing"];

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-white to-orange-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="inline-block bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                  About AiroFox
                </p>

                <h1 className="mt-6 text-5xl md:text-7xl font-bold text-brand-navy leading-tight">
                  Fast, Reliable Home Services
                </h1>

                <p className="mt-6 text-lg text-brand-slate max-w-xl">
                  AiroFox makes home service booking simple, quick, and
                  stress-free. From AC repairs to plumbing, we connect you with
                  trusted professionals.
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="AiroFox"
                  width={420}
                  height={420}
                  className="drop-shadow-xl"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* STORY */}
        <section className="py-24">
          <Container>
            <div className="rounded-3xl bg-brand-navy text-white p-10 md:p-16 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">Our Story</h2>

              <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                AiroFox started with one simple goal: finding reliable home
                services shouldn’t feel difficult.
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed text-lg">
                Whether it’s AC repair, electrical work, or plumbing
                emergencies, we ensure quick response, verified professionals,
                and fair pricing.
              </p>
            </div>
          </Container>
        </section>

        {/* WHY US */}
        <section className="py-24 bg-gray-50">
          <Container>
            <h2 className="text-center text-4xl md:text-5xl font-bold text-brand-navy">
              Why Choose AiroFox?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-brand-navy p-8 text-white text-center shadow-xl border border-white/10"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-brand-orange mb-5" />
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
