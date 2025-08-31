import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import soleilBrilleCover from "@/assets/covers/soleil-brille.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-medium backdrop-blur-sm">
                Dernière sortie
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
                Tant que le soleil brille
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Ce recueil qui sait poser des sourires sur les visages et de la lumière dans les cœurs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                  Get the book
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-white/80 justify-center lg:justify-start">
                <span className="text-2xl font-bold">19,90€</span>
                <span className="text-sm bg-white/20 px-2 py-1 rounded">Livre papier</span>
              </div>
            </div>
          </div>

          {/* Right Content - Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src={soleilBrilleCover}
                alt="Couverture du livre Tant que le soleil brille"
                className="relative w-64 sm:w-80 lg:w-96 rounded-lg shadow-hero animate-gentle-bounce"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;