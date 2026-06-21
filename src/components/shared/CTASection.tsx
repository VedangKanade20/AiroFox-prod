import Container from "./Container";
import Button from "./Button";

export default function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-brand-navy p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Need Urgent Help?</h2>

          <p className="mt-4 text-gray-300">
            Contact AeroFox now for quick and reliable service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="secondary">Call Now</Button>
            <Button variant="whatsapp">WhatsApp Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
