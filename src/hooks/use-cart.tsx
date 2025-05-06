
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';
import { toast } from '@/components/ui/use-toast';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      itemCount: 0,
      totalPrice: 0,
      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.product.id === product.id);
        
        if (existingItem) {
          set(state => ({
            items: state.items.map(item => 
              item.product.id === product.id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
            ),
            itemCount: state.itemCount + quantity,
            totalPrice: state.totalPrice + (product.price * quantity)
          }));
        } else {
          set(state => ({
            items: [...state.items, { product, quantity }],
            itemCount: state.itemCount + quantity,
            totalPrice: state.totalPrice + (product.price * quantity)
          }));
        }

        toast({
          title: "Added to cart",
          description: `${product.name} added to your cart`,
        });
      },
      removeItem: (productId: string) => {
        const { items } = get();
        const itemToRemove = items.find(item => item.product.id === productId);
        
        if (itemToRemove) {
          set(state => ({
            items: state.items.filter(item => item.product.id !== productId),
            itemCount: state.itemCount - itemToRemove.quantity,
            totalPrice: state.totalPrice - (itemToRemove.product.price * itemToRemove.quantity)
          }));

          toast({
            title: "Removed from cart",
            description: `${itemToRemove.product.name} removed from your cart`,
          });
        }
      },
      updateQuantity: (productId: string, quantity: number) => {
        const { items } = get();
        const item = items.find(item => item.product.id === productId);
        
        if (item) {
          const quantityDiff = quantity - item.quantity;
          
          set(state => ({
            items: state.items.map(item => 
              item.product.id === productId 
              ? { ...item, quantity }
              : item
            ),
            itemCount: state.itemCount + quantityDiff,
            totalPrice: state.totalPrice + (item.product.price * quantityDiff)
          }));
        }
      },
      clearCart: () => {
        set({ items: [], itemCount: 0, totalPrice: 0 });
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);
