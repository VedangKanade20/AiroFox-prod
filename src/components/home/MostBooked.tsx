import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import ServiceCard from "../shared/ServiceCard";
import { Wrench } from "lucide-react";

export default function MostBooked() {
  const services = [
    "AC Repair",
    "Plumbing",
    "Cleaning",
    "Electrician",
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="Most Booked Services" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service}
              icon={Wrench}
              title={service}
              description="Reliable professional service"
              price="Starts ₹499"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}