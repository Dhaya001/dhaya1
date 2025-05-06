
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  // Generate a random order ID
  const orderId = `ORD-${Math.floor(Math.random() * 90000) + 10000}`;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-2xl">
      <div className="text-center py-8 mb-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-serif mb-2">Order Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
      </div>
      
      <div className="bg-muted rounded-lg p-6 mb-8">
        <h2 className="text-xl font-medium mb-4">Order Details</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order Number:</span>
            <span className="font-medium">{orderId}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email:</span>
            <span>A confirmation email has been sent</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Estimated Delivery:</span>
            <span>3-7 business days</span>
          </div>
        </div>
      </div>
      
      <div className="text-center space-y-4">
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
        
        <div>
          <Link to="/products" className="text-primary hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
