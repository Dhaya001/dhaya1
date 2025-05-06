
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useProduct } from '@/hooks/use-products';
import { useCart } from '@/hooks/use-cart';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading, error } = useProduct(id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Reset page position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="animate-pulse flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="aspect-square bg-muted rounded-md mb-4"></div>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-20 h-20 bg-muted rounded-md"></div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-muted rounded w-1/4 mb-6"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-3/4 mb-6"></div>
            <div className="h-10 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 text-center">
        <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the product you're looking for.
        </p>
        <Link to="/products" className="text-primary hover:underline">
          Return to all products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-4">
        <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
          ← Back to Products
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product images */}
        <div className="md:w-1/2">
          <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Image thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
          <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
          
          <div className="prose max-w-none mb-6 text-muted-foreground">
            <p>{product.description}</p>
          </div>
          
          {/* Product details */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {product.dimensions && (
                <li><span className="font-medium text-foreground">Dimensions:</span> {product.dimensions}</li>
              )}
              {product.material && (
                <li><span className="font-medium text-foreground">Materials:</span> {product.material}</li>
              )}
              <li>
                <span className="font-medium text-foreground">Availability:</span> 
                {product.inStock ? 
                  <span className="text-green-600 ml-1">In Stock</span> : 
                  <span className="text-red-500 ml-1">Out of Stock</span>
                }
              </li>
            </ul>
          </div>
          
          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Available Colors</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <div key={index} className="text-sm border px-3 py-1 rounded-full">
                    {color}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity and Add to Cart */}
          <div className="flex items-end gap-4 mb-6">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                Quantity
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            
            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-grow md:flex-grow-0"
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
          
          {/* Shipping & Returns */}
          <div className="bg-muted p-4 rounded-md text-sm">
            <h3 className="font-medium mb-2">Shipping & Returns</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>Free shipping on orders over $999</li>
              <li>Standard delivery: 3-7 business days</li>
              <li>30-day return policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
