
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This is where you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Message sent!',
        description: 'Thank you for your message. We\'ll get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-muted py-12 mb-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-serif text-center">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Store Hours</h3>
                <div className="text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Visit Our Showroom</h3>
                <address className="text-muted-foreground not-italic">
                  <p>123 Furniture Avenue</p>
                  <p>Designer District</p>
                  <p>New York, NY 10001</p>
                </address>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Contact</h3>
                <div className="text-muted-foreground">
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@cozyhome.com</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Customer Service</h3>
                <p className="text-muted-foreground">
                  For order inquiries, returns, or other customer service matters, please email 
                  <a href="mailto:support@cozyhome.com" className="text-primary hover:underline ml-1">
                    support@cozyhome.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="mt-12 h-80 bg-muted">
        <div className="h-full flex items-center justify-center">
          <p className="text-muted-foreground">Interactive map would go here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
