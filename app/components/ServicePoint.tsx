import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;

  return (
    <div className="flex flex-col items-center p-4 rounded">
      <div className="bg-lime-100 p-3 rounded-full mb-3">
        <IconComponent size={36} className="text-lime-600" />
      </div>
      <h3 className="text-lg font-semibold mb-1 text-gray-800">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </div>
  );
}
