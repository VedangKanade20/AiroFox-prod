import Container from "../shared/Container";

export default function Testimonials() {
  const reviews = ["Amazing", "Fast service", "Professional"];

  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review} className="p-6 rounded-xl shadow">
              {review}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
