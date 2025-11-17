import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Cake {
  name: string;
  image: string;
  description: string;
}

interface CakeGalleryProps {
  cakes: Cake[];
}

const CakeGallery = ({ cakes }: CakeGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="relative group">
      {/* Left Arrow */}
      {canScrollLeft && (
        <Button
          onClick={() => scroll("left")}
          size="icon"
          variant="secondary"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-elegant h-12 w-12 hidden md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth px-4 md:px-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {cakes.map((cake, index) => (
          <div
            key={index}
            className="flex-none w-[85vw] sm:w-[45vw] md:w-[350px] snap-start"
          >
            <Card className="overflow-hidden group/card cursor-pointer hover-scale border-0 shadow-soft hover:shadow-elegant transition-all duration-500 h-full">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{cake.name}</h3>
                    <p className="text-sm text-white/90">{cake.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <Button
          onClick={() => scroll("right")}
          size="icon"
          variant="secondary"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-elegant h-12 w-12 hidden md:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}

      {/* Mobile scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {cakes.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-primary/30"
          />
        ))}
      </div>
    </div>
  );
};

export default CakeGallery;
