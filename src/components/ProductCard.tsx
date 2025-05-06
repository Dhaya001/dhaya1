
import { Link } from 'react-router-dom';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square rounded-md overflow-hidden bg-muted mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover hover-zoom"
          />
        </div>
        <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
