import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "Un soleil en nuages et nuançe.",
    author: "Aline",
    role: "Lectrice passionnée"
  },
  {
    id: 2,
    rating: 4,
    quote: "Une bouffée d'espoir à chaque page.",
    author: "Sami",
    role: "Critique littéraire"
  },
  {
    id: 3,
    rating: 5,
    quote: "Jolie lecture, fondée sur la douceur.",
    author: "Lila",
    role: "Libraire"
  }
];

const StarRating = ({ rating, author }: { rating: number; author: string }) => {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} étoiles sur 5 par ${author}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-primary text-primary"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Ce que disent nos lecteurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les témoignages de ceux qui ont découvert nos livres et partagent leurs émotions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gradient-card p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 group hover:scale-105 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-primary/20 text-6xl font-playfair leading-none mb-4">"</div>
                <blockquote className="text-lg text-foreground italic font-medium leading-relaxed">
                  {testimonial.quote}
                </blockquote>
              </div>

              {/* Rating */}
              <div className="mb-4 flex justify-center">
                <StarRating rating={testimonial.rating} author={testimonial.author} />
              </div>

              {/* Author */}
              <div className="space-y-1">
                <cite className="text-primary font-semibold not-italic">
                  {testimonial.author}
                </cite>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
              </div>

              {/* Decorative element */}
              <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Quote Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-secondary/30 rounded-2xl p-8 lg:p-12">
            <div className="text-primary/30 text-8xl font-playfair leading-none mb-6">"</div>
            <blockquote className="text-2xl lg:text-3xl font-playfair italic text-foreground leading-relaxed mb-8">
              Ces livres ne sont pas seulement des mots sur papier, ils sont des rayons de soleil 
              qui illuminent nos journées les plus sombres.
            </blockquote>
            <cite className="text-primary font-semibold text-lg not-italic">
              La communauté Soleil qui brille
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;