import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Award, Heart, Sparkles, Star, MapPin, Phone, Mail } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import vanillaCake from "@/assets/vanilla-cake.jpg";
import rainbowCake from "@/assets/rainbow-cake.jpg";
import redVelvetCake from "@/assets/red-velvet-cake.jpg";
import bakeryInterior from "@/assets/bakery-interior.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const cakes = [
    { name: "Chocolate Berry Delight", image: chocolateCake, price: "$45", description: "Rich chocolate ganache with fresh berries" },
    { name: "Vanilla Rose Elegance", image: vanillaCake, price: "$50", description: "Delicate vanilla with edible flowers" },
    { name: "Rainbow Celebration", image: rainbowCake, price: "$40", description: "Colorful layers of joy" },
    { name: "Red Velvet Classic", image: redVelvetCake, price: "$42", description: "Traditional red velvet perfection" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", text: "The wedding cake was absolutely stunning! Every guest asked where we got it.", rating: 5 },
    { name: "Michael Chen", text: "Best birthday cake I've ever had. The detail and flavor are unmatched.", rating: 5 },
    { name: "Emily Davis", text: "Worth every penny! The custom design exceeded our expectations.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCake}
            alt="Elegant wedding cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Sweet Delights
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
              Crafting Dreams, One Cake at a Time
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-elegant"
              >
                Order Your Dream Cake
                <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              id="feature-1" 
              data-animate 
              className={`text-center transition-all duration-700 ${isVisible['feature-1'] ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Award Winning</h3>
              <p className="text-muted-foreground">Recognized as the city's finest bakery for 3 consecutive years</p>
            </div>

            <div 
              id="feature-2" 
              data-animate 
              className={`text-center transition-all duration-700 delay-100 ${isVisible['feature-2'] ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Made with Love</h3>
              <p className="text-muted-foreground">Every cake is handcrafted with premium ingredients and care</p>
            </div>

            <div 
              id="feature-3" 
              data-animate 
              className={`text-center transition-all duration-700 delay-200 ${isVisible['feature-3'] ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Custom Designs</h3>
              <p className="text-muted-foreground">Bring your vision to life with our bespoke cake creations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            id="cakes-header" 
            data-animate 
            className={`text-center mb-16 transition-all duration-700 ${isVisible['cakes-header'] ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-5xl font-bold mb-4">Featured Creations</h2>
            <p className="text-xl text-muted-foreground">Discover our most popular cake designs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cakes.map((cake, index) => (
              <div
                key={index}
                id={`cake-${index}`}
                data-animate
                className={`transition-all duration-700 delay-${index * 100} ${isVisible[`cake-${index}`] ? 'animate-scale-in' : 'opacity-0'}`}
              >
                <Card className="overflow-hidden group cursor-pointer hover-scale border-0 shadow-soft hover:shadow-elegant transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cake.name}</h3>
                    <p className="text-muted-foreground mb-3">{cake.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{cake.price}</span>
                      <Button size="sm" className="rounded-full">Order Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              id="about-image" 
              data-animate 
              className={`transition-all duration-700 ${isVisible['about-image'] ? 'animate-slide-in-right' : 'opacity-0'}`}
            >
              <img
                src={bakeryInterior}
                alt="Bakery interior"
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
              />
            </div>
            <div 
              id="about-text" 
              data-animate 
              className={`transition-all duration-700 ${isVisible['about-text'] ? 'animate-fade-in' : 'opacity-0'}`}
            >
              <h2 className="text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018, Sweet Delights has become the premier destination for celebration cakes in our city. 
                Our master pastry chef brings 15 years of European training to every creation.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every cake should be a masterpiece. Using only the finest ingredients and traditional 
                techniques combined with modern artistry, we create cakes that taste as amazing as they look.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Cakes Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            id="testimonials-header" 
            data-animate 
            className={`text-center mb-16 transition-all duration-700 ${isVisible['testimonials-header'] ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`transition-all duration-700 delay-${index * 100} ${isVisible[`testimonial-${index}`] ? 'animate-fade-in-up' : 'opacity-0'}`}
              >
                <Card className="p-8 h-full hover-scale shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic text-muted-foreground">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            id="contact" 
            data-animate 
            className={`transition-all duration-700 ${isVisible['contact'] ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Order?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's create something extraordinary together. Contact us today to discuss your dream cake.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Call Us</p>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Email Us</p>
                <p className="text-muted-foreground">hello@sweetdelights.com</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-muted-foreground">123 Baker Street</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-7 rounded-full transition-all duration-300 hover:scale-105 shadow-elegant"
            >
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chocolate text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Sweet Delights Bakery</h3>
          <p className="text-white/80 mb-6">
            Handcrafted with love since 2018
          </p>
          <p className="text-white/60 text-sm">
            © 2024 Sweet Delights Bakery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
