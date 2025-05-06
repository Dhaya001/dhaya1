
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import { categories } from '@/data/products';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      
      <FeaturedProducts />
      
      <section className="container mx-auto px-4 md:px-6 py-12">
        <h2 className="text-3xl font-serif mb-8 text-center">Shop by Room</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <CategorySection
              key={category.slug}
              title={category.name}
              description={category.description}
              image={category.image}
              slug={category.slug}
            />
          ))}
        </div>
      </section>
      
      <section className="bg-furniture-beige py-16 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-serif mb-4">Crafted with Care</h2>
              <p className="text-muted-foreground mb-6">
                Each piece of furniture in our collection is thoughtfully designed and crafted with premium materials to ensure lasting quality and timeless style. We believe that your home deserves the very best.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Premium materials and construction</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Sustainably sourced wood</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Ergonomically designed for comfort</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>1-year warranty on all products</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2065&auto=format&fit=crop" 
                alt="Craftsman working on furniture" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-4">Customer Satisfaction, Guaranteed</h2>
          <p className="text-muted-foreground mb-10">
            We stand behind our products and your satisfaction is our top priority. If you're not completely happy with your purchase, we'll make it right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-muted rounded-lg">
              <div className="text-3xl font-serif text-primary mb-2">Free Shipping</div>
              <p>On all orders over $999</p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <div className="text-3xl font-serif text-primary mb-2">Easy Returns</div>
              <p>30-day hassle-free returns</p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <div className="text-3xl font-serif text-primary mb-2">Secure Checkout</div>
              <p>Protected by industry-leading encryption</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
