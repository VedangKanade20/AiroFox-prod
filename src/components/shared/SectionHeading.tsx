import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: Props) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-brand-slate max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
