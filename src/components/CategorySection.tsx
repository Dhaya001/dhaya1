
import { Link } from 'react-router-dom';

interface CategorySectionProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const CategorySection = ({ title, description, image, slug }: CategorySectionProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover hover-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white font-serif text-2xl mb-2">{title}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        <Link
          to={`/products?category=${slug}`}
          className="bg-white text-foreground font-medium py-2 px-4 rounded-md w-fit hover:bg-white/90 transition-colors"
        >
          Shop Collection
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
