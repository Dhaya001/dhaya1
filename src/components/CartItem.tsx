
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/hooks/use-cart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeItem, updateQuantity } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b">
      <div className="flex gap-4 items-center mb-4 sm:mb-0">
        <div className="w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-muted-foreground text-sm">${product.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-6 w-full sm:w-auto">
        <div className="flex items-center">
          <label htmlFor={`quantity-${product.id}`} className="sr-only">Quantity</label>
          <select
            id={`quantity-${product.id}`}
            value={quantity}
            onChange={handleQuantityChange}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <p className="font-medium ml-auto sm:ml-0">
          ${(product.price * quantity).toFixed(2)}
        </p>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => removeItem(product.id)}
          className="text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Remove</span>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
