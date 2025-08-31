import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import soleilBrilleCover from "@/assets/covers/soleil-brille.png";
import ressacRimesCover from "@/assets/covers/ressac-rimes.png";
import cultiverLumiereCover from "@/assets/covers/cultiver-lumiere.png";
import apprendreAubeCover from "@/assets/covers/apprendre-aube.png";
import delicatesseVentCover from "@/assets/covers/delicatesse-vent.png";

const books = [
  {
    id: 1,
    title: "Tant que le soleil brille",
    cover: soleilBrilleCover,
    format: "Livre papier",
    price: "19,90€"
  },
  {
    id: 2,
    title: "Ressac des rimes",
    cover: ressacRimesCover,
    format: "E-book",
    price: "9,90€"
  },
  {
    id: 3,
    title: "Cultiver sa lumière",
    cover: cultiverLumiereCover,
    format: "Livre papier",
    price: "22,90€"
  },
  {
    id: 4,
    title: "Apprendre à l'aube",
    cover: apprendreAubeCover,
    format: "E-book",
    price: "12,90€"
  },
  {
    id: 5,
    title: "Délicatesse du vent",
    cover: delicatesseVentCover,
    format: "Livre papier",
    price: "18,90€"
  }
];

const BooksCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, books.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Notre collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos livres et e-books qui apportent lumière et inspiration dans votre quotidien
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
            aria-label="Livre précédent"
            aria-controls="books-carousel"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
            aria-label="Livre suivant"
            aria-controls="books-carousel"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-12">
            <div
              id="books-carousel"
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
              role="region"
              aria-label="Carrousel de livres"
            >
              {books.map((book) => (
                <div
                  key={book.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 group"
                >
                  <div className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <div className="relative mb-4">
                      <img
                        src={book.cover}
                        alt={`Couverture du livre ${book.title}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                          <Eye className="inline w-3 h-3 mr-1" />
                          Lire
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-playfair font-semibold text-lg text-foreground line-clamp-2">
                        {book.title}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                          {book.format}
                        </span>
                        <span className="font-semibold text-primary text-lg">
                          {book.price}
                        </span>
                      </div>
                      
                      <Button variant="cta" className="w-full">
                        Découvrir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir tous les livres
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BooksCarousel;