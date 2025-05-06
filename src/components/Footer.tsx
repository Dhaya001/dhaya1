
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-serif text-xl font-medium mb-4">Cozy Home</h2>
            <p className="text-muted-foreground mb-4">
              Quality furniture for comfortable living.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=living" className="text-muted-foreground hover:text-primary transition-colors">
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="/products?category=dining" className="text-muted-foreground hover:text-primary transition-colors">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link to="/products?category=bedroom" className="text-muted-foreground hover:text-primary transition-colors">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link to="/products?category=office" className="text-muted-foreground hover:text-primary transition-colors">
                  Office
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-medium mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates, promotions, and interior design inspiration.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 rounded-l-md border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Cozy Home Furniture. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
