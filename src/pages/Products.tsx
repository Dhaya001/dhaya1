
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/use-products';
import { categories } from '@/data/products';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const { products, isLoading } = useProducts({
    category: categoryParam || undefined
  });

  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categoryParam || undefined
  );

  // Reset page position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-serif mb-8">
        {selectedCategory 
          ? `${categories.find(c => c.slug === selectedCategory)?.name || 'Products'}`
          : 'All Products'
        }
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="md:w-1/4">
          <div className="sticky top-24 bg-background">
            <h2 className="font-medium text-lg mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setSelectedCategory(undefined)}
                  className={`text-left w-full px-2 py-1 rounded-md transition-colors ${!selectedCategory ? 'bg-muted font-medium' : 'hover:bg-muted/50'}`}
                >
                  All Products
                </button>
              </li>
              {categories.map(category => (
                <li key={category.slug}>
                  <button 
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`text-left w-full px-2 py-1 rounded-md transition-colors ${selectedCategory === category.slug ? 'bg-muted font-medium' : 'hover:bg-muted/50'}`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="md:w-3/4">
          {isLoading ? (
            <div className="product-grid">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-square bg-muted rounded-md mb-4"></div>
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-1/4"></div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="product-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or check back later for new arrivals.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
