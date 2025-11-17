import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Award, Heart, Sparkles, Star, ArrowLeft, Zap, Crown, Cake } from "lucide-react";
import { Link } from "react-router-dom";
import heroCake from "@/assets/hero-cake.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import vanillaCake from "@/assets/vanilla-cake.jpg";
import indianFusionCake from "@/assets/indian-fusion-cake.jpg";
import mangoCake from "@/assets/mango-cake.jpg";
import blackForestCake from "@/assets/black-forest-cake.jpg";

const Demo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(345, 75%, 65%, 0.6)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cakes = [
    { name: "Indian Fusion", image: indianFusionCake, icon: Crown },
    { name: "Chocolate Berry", image: chocolateCake, icon: Heart },
    { name: "Vanilla Rose", image: vanillaCake, icon: Sparkles },
    { name: "Mango Paradise", image: mangoCake, icon: Zap },
    { name: "Black Forest", image: blackForestCake, icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-30"
      />

      {/* Back Button */}
      <Link to="/">
        <Button
          variant="outline"
          className="fixed top-4 left-4 z-50 backdrop-blur-sm bg-background/80 hover:scale-110 transition-transform duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main
        </Button>
      </Link>

      {/* Hero with Parallax */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${mousePosition.y * 0.05}px)`,
        }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
            style={{
              backgroundImage: `url(${heroCake})`,
              transform: `scale(1.1) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-accent/30 to-background" />
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="inline-block">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Cakes and Tales
            </h1>
          </div>
          <p className="text-2xl md:text-4xl mb-8 text-white animate-fade-in-up animation-delay-200">
            Advanced Animation Demo
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full"
            >
              <span className="relative z-10">Explore Magic</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="ml-2 w-5 h-5 animate-bounce-slow" />
            </Button>
          </div>

          {/* Floating icons */}
          <div className="absolute top-20 left-20 animate-float-slow">
            <Cake className="w-12 h-12 text-primary/30" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float animation-delay-1000">
            <Heart className="w-16 h-16 text-accent/30" />
          </div>
        </div>
      </section>

      {/* Feature Cards with 3D Effect */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            id="features-title"
            data-animate
            className={`text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
              isVisible["features-title"] ? "animate-text-reveal" : "opacity-0"
            }`}
          >
            Premium Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Award Winning", delay: 0 },
              { icon: Heart, title: "Made with Love", delay: 200 },
              { icon: Sparkles, title: "Custom Designs", delay: 400 },
            ].map((feature, idx) => (
              <div
                key={idx}
                id={`feature-${idx}`}
                data-animate
                className={`transition-all duration-700 delay-${feature.delay} ${
                  isVisible[`feature-${idx}`] ? "animate-scale-in" : "opacity-0"
                }`}
              >
                <Card
                  className="p-8 text-center relative group cursor-pointer"
                  style={{
                    transform: `perspective(1000px) rotateX(${
                      (mousePosition.y - window.innerHeight / 2) * 0.01
                    }deg) rotateY(${
                      (mousePosition.x - window.innerWidth / 2) * 0.01
                    }deg)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                      <feature.icon className="w-10 h-10 text-primary group-hover:animate-wiggle" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery with Advanced Hover */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            id="gallery-title"
            data-animate
            className={`text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
              isVisible["gallery-title"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Signature Collection
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cakes.map((cake, idx) => (
              <div
                key={idx}
                id={`cake-${idx}`}
                data-animate
                className={`transition-all duration-700 delay-${idx * 100} ${
                  isVisible[`cake-${idx}`] ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                <Card className="relative overflow-hidden group cursor-pointer aspect-square">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <cake.icon className="w-8 h-8 text-primary mb-2 animate-bounce-slow" />
                      <h3 className="text-white font-semibold text-lg">{cake.name}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <Star className="w-6 h-6 text-gold animate-rotate-slow" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Stagger */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            id="testimonials-title"
            data-animate
            className={`text-5xl font-bold text-center mb-16 transition-all duration-1000 ${
              isVisible["testimonials-title"] ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Customer Stories
          </h2>

          <div className="space-y-6">
            {[
              { name: "Priya Sharma", text: "The wedding cake was absolutely stunning!", rating: 5, delay: 0 },
              { name: "Rahul Mehta", text: "Best birthday cake ever. Unmatched detail!", rating: 5, delay: 200 },
              { name: "Anjali Kapoor", text: "Exceeded all our expectations!", rating: 5, delay: 400 },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                id={`testimonial-${idx}`}
                data-animate
                className={`transition-all duration-700 delay-${testimonial.delay} ${
                  isVisible[`testimonial-${idx}`]
                    ? idx % 2 === 0
                      ? "animate-fade-in-left"
                      : "animate-fade-in-right"
                    : "opacity-0"
                }`}
              >
                <Card className="p-8 hover:shadow-elegant transition-all duration-500 group cursor-pointer backdrop-blur-sm bg-card/80">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary group-hover:animate-bounce-slow"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-lg italic mb-4 text-muted-foreground">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Glow Effect */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(345,75%,65%,0.1),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div
            id="cta"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["cta"] ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto]">
              Ready to Experience Magic?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something extraordinary together
            </p>
            <Button
              size="lg"
              className="relative group overflow-hidden bg-primary hover:bg-primary/90 px-12 py-7 rounded-full text-xl animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Sparkles className="w-5 h-5 animate-bounce-slow" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
