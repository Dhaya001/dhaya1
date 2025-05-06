
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[70vh] md:h-[80vh] bg-muted">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
          alt="Modern living room with stylish furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-medium max-w-xl leading-tight mb-6">
          Elevate Your Living Space
        </h1>
        <p className="text-white/90 text-lg max-w-lg mb-8">
          Discover our collection of thoughtfully designed furniture that combines style, comfort, and quality craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link to="/products">Shop Collection</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/20 text-white border-white hover:bg-white/30" asChild>
            <Link to="/about">Our Story</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
