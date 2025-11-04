import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {images.map((image) => (
        <figure
          key={image.src}
          className="group relative overflow-hidden rounded-3xl shadow-md"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={320}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </figure>
      ))}
    </div>
  );
}
