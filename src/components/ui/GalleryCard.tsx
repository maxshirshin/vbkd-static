import { CDNImage } from "@/components/CDNImage";

interface GalleryCardProps {
  slug: string;
  title: string;
  description: string;
  coverImage?: string;
}

export function GalleryCard({ slug, title, description, coverImage }: GalleryCardProps) {
  return (
    <a
      href={`/gallery/${slug}`}
      className="group block"
    >
      {coverImage ? (
        <CDNImage
          srcPath={coverImage}
          alt={`${title} — cover`}
          className="w-full aspect-square object-cover transition-shadow group-hover:shadow-lg mb-4"
        />
      ) : (
        <div className="w-full aspect-square mb-4 flex items-center justify-center transition-shadow group-hover:shadow-lg bg-border-light">
          <span className="text-sm text-text-light">
            Bild fehlt
          </span>
        </div>
      )}
      <h2 className="text-xl mb-1 font-heading text-primary-dark">
        {title}
      </h2>
      <p className="text-sm text-text-muted">
        {description}
      </p>
    </a>
  );
}
