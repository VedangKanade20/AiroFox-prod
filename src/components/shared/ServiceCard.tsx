import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
}: Props) {
  return (
    <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
      <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
        <Icon className="text-brand-orange" size={28} />
      </div>

      <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
      <p className="text-brand-slate mt-2">{description}</p>

      {price && <p className="mt-4 font-semibold text-brand-orange">{price}</p>}
    </div>
  );
}
