import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    date: "10 SEP",
    year: "2025",
    title: "Atelier d'écriture",
    location: "Paris",
    description: "Venez découvrir les secrets de l'écriture poétique dans un cadre intimiste et inspirant."
  },
  {
    id: 2,
    date: "05 OCT",
    year: "2025",
    title: "Séance dédicace",
    location: "Lyon",
    description: "Rencontrez l'auteur et repartez avec votre exemplaire dédicacé de nos dernières parutions."
  },
  {
    id: 3,
    date: "12 NOV",
    year: "2025",
    title: "Rencontre live",
    location: "Bordeaux",
    description: "Une soirée littéraire unique pour échanger autour de nos œuvres et de vos impressions."
  }
];

const Events = () => {
  return (
    <section className="py-16 bg-brand-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Prochains événements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez-nous lors de nos événements littéraires et découvrez l'univers de nos auteurs
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="bg-background rounded-xl shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date Header */}
              <div className="bg-primary text-primary-foreground p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.year}</span>
                </div>
                <div className="text-2xl font-playfair font-bold">
                  {event.date}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{event.location}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-2">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="cta" size="lg">
            Voir tous les événements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;