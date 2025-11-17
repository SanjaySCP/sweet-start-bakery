import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Award, Heart, Sparkles, Star, MapPin, Phone, Mail } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import vanillaCake from "@/assets/vanilla-cake.jpg";
import rainbowCake from "@/assets/rainbow-cake.jpg";
import redVelvetCake from "@/assets/red-velvet-cake.jpg";
import indianFusionCake from "@/assets/indian-fusion-cake.jpg";
import mangoCake from "@/assets/mango-cake.jpg";
import blackForestCake from "@/assets/black-forest-cake.jpg";
import strawberryCake from "@/assets/strawberry-cake.jpg";
import coffeeCake from "@/assets/coffee-cake.jpg";
import butterscotchCake from "@/assets/butterscotch-cake.jpg";
import bakeryInterior from "@/assets/bakery-interior.jpg";
import CakeGallery from "@/components/CakeGallery";

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

  const allCakes = [
    { name: "Indian Fusion Elegance", image: indianFusionCake, description: "Traditional motifs with modern artistry" },
    { name: "Chocolate Berry Delight", image: chocolateCake, description: "Rich chocolate ganache with fresh berries" },
    { name: "Vanilla Rose Elegance", image: vanillaCake, description: "Delicate vanilla with edible flowers" },
    { name: "Mango Paradise", image: mangoCake, description: "Fresh tropical mango layers" },
    { name: "Black Forest Classic", image: blackForestCake, description: "Chocolate, cherries, and cream perfection" },
    { name: "Strawberry Dream", image: strawberryCake, description: "Light and fresh strawberry delight" },
    { name: "Coffee Mocha", image: coffeeCake, description: "Rich espresso buttercream layers" },
    { name: "Butterscotch Heaven", image: butterscotchCake, description: "Caramel drip with crunchy nuts" },
    { name: "Rainbow Celebration", image: rainbowCake, description: "Colorful layers of pure joy" },
    { name: "Red Velvet Classic", image: redVelvetCake, description: "Traditional red velvet perfection" },
  ];

  const testimonials = [
    { name: "Priya Sharma", text: "The wedding cake was absolutely stunning! Every guest asked where we got it.", rating: 5 },
    { name: "Rahul Mehta", text: "Best birthday cake ever. The detail and flavor are unmatched.", rating: 5 },
    { name: "Anjali Kapoor", text: "Worth every penny! The custom design exceeded our expectations.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCake}
            alt="Elegant wedding cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              Cakes and Tales
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-light tracking-wide px-4">
              Where Every Cake Tells a Story
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-elegant w-full sm:w-auto"
              >
                Explore Our Collection
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div 
              id="feature-1" 
              data-animate 
              className={`text-center transition-all duration-700 ${isVisible['feature-1'] ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Award Winning</h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2">Recognized as the city's finest for 3 years</p>
            </div>

            <div 
              id="feature-2" 
              data-animate 
              className={`text-center transition-all duration-700 delay-100 ${isVisible['feature-2'] ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Made with Love</h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2">Handcrafted with premium ingredients</p>
            </div>

            <div 
              id="feature-3" 
              data-animate 
              className={`text-center transition-all duration-700 delay-200 sm:col-span-2 md:col-span-1 ${isVisible['feature-3'] ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Custom Designs</h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2">Bring your vision to life with bespoke creations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Mobile First with Horizontal Scroll */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div 
            id="gallery-header" 
            data-animate 
            className={`text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 transition-all duration-700 ${isVisible['gallery-header'] ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Signature Collection</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">Swipe to explore our handcrafted masterpieces</p>
          </div>

          <div 
            id="gallery-scroll" 
            data-animate 
            className={`transition-all duration-700 ${isVisible['gallery-scroll'] ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <CakeGallery cakes={allCakes} />
          </div>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div 
              id="about-image" 
              data-animate 
              className={`transition-all duration-700 order-2 md:order-1 ${isVisible['about-image'] ? 'animate-slide-in-right' : 'opacity-0'}`}
            >
              <img
                src={bakeryInterior}
                alt="Bakery interior"
                className="rounded-2xl shadow-elegant w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div 
              id="about-text" 
              data-animate 
              className={`transition-all duration-700 order-1 md:order-2 ${isVisible['about-text'] ? 'animate-fade-in' : 'opacity-0'}`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Founded in 2018, Cakes and Tales has become the premier destination for celebration cakes. 
                Our master pastry chef brings 15 years of expertise to every creation.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                We believe every cake should be a masterpiece. Using only the finest ingredients and traditional 
                techniques combined with modern artistry, we create cakes that taste as amazing as they look.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="text-center p-4 sm:p-6 bg-background rounded-xl shadow-soft">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-background rounded-xl shadow-soft">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">1000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Cakes Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div 
            id="testimonials-header" 
            data-animate 
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible['testimonials-header'] ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">Stories from our happy customers</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`transition-all duration-700 delay-${index * 100} ${isVisible[`testimonial-${index}`] ? 'animate-fade-in-up' : 'opacity-0'}`}
              >
                <Card className="p-6 sm:p-8 h-full hover-scale shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 italic text-muted-foreground">"{testimonial.text}"</p>
                  <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div 
            id="contact" 
            data-animate 
            className={`transition-all duration-700 ${isVisible['contact'] ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Let's Create Magic</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 px-2">
              Contact us today to discuss your dream cake and make your celebration unforgettable.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <p className="font-semibold text-sm sm:text-base">Call Us</p>
                <p className="text-sm sm:text-base text-muted-foreground">+91 98765 43210</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <p className="font-semibold text-sm sm:text-base">Email Us</p>
                <p className="text-sm sm:text-base text-muted-foreground">hello@cakesandtales.in</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <p className="font-semibold text-sm sm:text-base">Visit Us</p>
                <p className="text-sm sm:text-base text-muted-foreground">Mumbai, Maharashtra</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-7 rounded-full transition-all duration-300 hover:scale-105 shadow-elegant w-full sm:w-auto"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="bg-chocolate text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Cakes and Tales</h3>
          <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
            Handcrafted with love since 2018
          </p>
          <p className="text-xs sm:text-sm text-white/60">
            © 2024 Cakes and Tales. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
