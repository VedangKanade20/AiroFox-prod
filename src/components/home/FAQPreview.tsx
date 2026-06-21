import Container from "../shared/Container";

export default function FAQPreview() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold">FAQs</h2>
        <div className="mt-8 space-y-4">
          <div className="p-4 border rounded-xl">How to book?</div>
          <div className="p-4 border rounded-xl">Same day available?</div>
        </div>
      </Container>
    </section>
  );
}
