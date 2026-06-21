import Container from "../shared/Container";

export default function HowItWorks() {
  const steps = ["Choose Service", "Schedule", "Relax"];

  return (
    <section className="py-20 bg-orange-50">
      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step}
              className="rounded-xl bg-white p-8 text-center shadow"
            >
              <h2 className="text-3xl font-bold">{i + 1}</h2>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
