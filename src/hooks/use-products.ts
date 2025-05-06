
import { useState, useEffect } from 'react';
import { Product } from '@/types';
import { products as mockProducts } from '@/data/products';

interface UseProductsOptions {
  category?: string;
  featured?: boolean;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let filteredProducts = [...mockProducts];
        
        // Apply category filter if provided
        if (options.category) {
          filteredProducts = filteredProducts.filter(
            product => product.category === options.category
          );
        }
        
        // Apply featured filter if provided
        if (options.featured) {
          filteredProducts = filteredProducts.filter(
            product => product.featured
          );
        }
        
        setProducts(filteredProducts);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [options.category, options.featured]);

  return { products, isLoading, error };
}

export function useProduct(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setError(new Error('Product ID is required'));
      setIsLoading(false);
      return;
    }

    // Simulate API fetch for a single product
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const product = mockProducts.find(p => p.id === id);
        
        if (!product) {
          throw new Error('Product not found');
        }
        
        setProduct(product);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch product'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, isLoading, error };
}
