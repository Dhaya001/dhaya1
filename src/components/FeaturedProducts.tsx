
import ProductCard from './ProductCard';
import { useProducts } from '@/hooks/use-products';

const FeaturedProducts = () => {
  const { products, isLoading } = useProducts();
  
  // Get featured products (for simplicity, just take the first 4 products)
  const featuredProducts = products.slice(0, 4);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-3xl font-serif mb-8 text-center">Featured Products</h2>
        <div className="product-grid">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="aspect-square bg-muted rounded-md mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl font-serif mb-8 text-center">Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
