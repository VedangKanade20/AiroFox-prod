import Container from "../shared/Container";
import Button from "../shared/Button";

export default function HeroSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy leading-tight">
              Fast Home Services at Your Doorstep
            </h1>

            <p className="mt-6 text-lg text-brand-slate">
              AC repair, cleaning, plumbing and more.
            </p>

            <div className="flex gap-4 mt-8">
              <Button>Book Now</Button>
              <Button variant="outline">WhatsApp</Button>
            </div>
          </div>

          <div className="h-[400px] rounded-3xl bg-brand-navy/10 flex items-center justify-center">
            Hero Image
          </div>
        </div>
      </Container>
    </section>
  );
}
