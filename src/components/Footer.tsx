import { Heart, BookOpen, Podcast, Calendar, User } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Livres", href: "#livres", icon: BookOpen },
    { name: "E-books", href: "#ebooks", icon: BookOpen },
    { name: "Podcasts", href: "#podcasts", icon: Podcast },
    { name: "Events", href: "#events", icon: Calendar },
    { name: "About", href: "#about", icon: User },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Soleil qui brille
              </h3>
              <p className="text-white/80 leading-relaxed">
                Nous créons des livres et e-books qui apportent lumière et inspiration 
                dans votre quotidien. Chaque mot est choisi pour illuminer vos journées 
                et réchauffer vos cœurs.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-white/60">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>pour nos lecteurs</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-white">
              Liens rapides
            </h4>
            <nav>
              <ul className="space-y-3">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
                      >
                        <IconComponent className="w-4 h-4 group-hover:text-primary transition-colors duration-200" />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-white">
              Restez en contact
            </h4>
            <div className="space-y-4">
              <p className="text-white/70">
                Suivez-nous pour découvrir nos dernières publications et événements littéraires.
              </p>
              
              <div className="flex flex-col gap-3">
                <a
                  href="#newsletter"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  Newsletter
                  <span className="text-white/40">→</span>
                </a>
                <a
                  href="mailto:contact@soleilquibrille.com"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  contact@soleilquibrille.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Soleil qui brille. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;