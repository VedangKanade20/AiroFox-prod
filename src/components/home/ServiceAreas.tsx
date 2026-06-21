import Container from "../shared/Container";

export default function ServiceAreas() {
  const areas = ["Andheri", "Thane", "Powai", "Borivali"];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="flex flex-wrap gap-4">
          {areas.map((area) => (
            <span key={area} className="px-5 py-2 rounded-full bg-white shadow">
              {area}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
