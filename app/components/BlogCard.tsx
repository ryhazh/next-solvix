import Image from "next/image";

type BlogCardProps = {
  image: string;
  alt: string;
  category: string;
  date: string;
  title: string;
};

export default function BlogCard({
  image,
  alt,
  category,
  date,
  title,
}: BlogCardProps) {
  return (
    <div>
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={alt}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium text-lime-700">{category}</span> • {date}
      </p>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
}
