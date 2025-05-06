
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="relative h-[50vh] bg-muted">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2080&auto=format&fit=crop"
            alt="Modern interior with furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative container mx-auto h-full flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-medium mb-4">
            Our Story
          </h1>
          <p className="text-white/90 max-w-xl">
            Crafting quality furniture for modern living since 2010.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            At Cozy Home, we believe that furniture should be more than just functional—it should enhance your living
            space and reflect your personal style. Our pieces are thoughtfully designed with both aesthetics and comfort
            in mind, creating the perfect balance between form and function.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col">
              <h3 className="text-xl font-serif mb-3">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To create well-crafted, thoughtfully designed furniture that transforms houses into homes. We're
                dedicated to making quality furniture accessible to everyone.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-serif mb-3">Our Vision</h3>
              <p className="text-muted-foreground mb-4">
                To be the preferred destination for those seeking furniture that combines design, functionality, and
                sustainability, enhancing lives through better living spaces.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-6">Craftsmanship & Quality</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-muted-foreground mb-4">
                  Every piece in our collection is crafted with meticulous attention to detail. We work with skilled
                  artisans and use premium materials to ensure that our furniture not only looks beautiful but stands
                  the test of time.
                </p>
                <p className="text-muted-foreground">
                  From selecting the finest woods to choosing durable fabrics, we never compromise on quality. Our
                  commitment to craftsmanship means that each piece that bears our name is something we're proud of.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2065&auto=format&fit=crop"
                  alt="Furniture craftsman at work"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-6">Sustainability Commitment</h2>
            <p className="text-muted-foreground mb-6">
              We're committed to sustainable practices across our business. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Sourcing wood from sustainably managed forests</li>
              <li>Using water-based, low-VOC finishes</li>
              <li>Implementing energy-efficient manufacturing processes</li>
              <li>Reducing packaging waste and using recyclable materials</li>
              <li>Designing furniture built to last, not end up in landfills</li>
            </ul>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif mb-6">Ready to Transform Your Space?</h2>
            <Button asChild size="lg">
              <Link to="/products">Shop Our Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
