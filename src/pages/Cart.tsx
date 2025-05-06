
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/CartItem';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { items, totalPrice } = useCart();

  // Reset page position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-serif mb-8">Your Cart</h1>
        <div className="text-center py-16 max-w-md mx-auto">
          <div className="mb-6 flex justify-center">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-serif mb-8">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="border-b pb-3 mb-4 hidden sm:grid grid-cols-12 text-sm font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-3 text-right">Subtotal</div>
            <div className="col-span-1"></div>
          </div>

          <div className="divide-y">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-muted rounded-lg p-6">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{totalPrice >= 999 ? 'Free' : '$29.99'}</span>
              </div>
              <div className="border-t pt-3 font-medium flex justify-between">
                <span>Total</span>
                <span>${(totalPrice >= 999 ? totalPrice : totalPrice + 29.99).toFixed(2)}</span>
              </div>
            </div>
            
            <Button asChild className="w-full">
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
            
            <div className="mt-4 text-center">
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
