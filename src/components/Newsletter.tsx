import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !consent) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs et accepter les conditions.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir une adresse e-mail valide.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Inscription réussie !",
        description: "Merci de vous être inscrit à notre newsletter. Vous recevrez bientôt nos dernières actualités.",
      });
      
      setEmail("");
      setConsent(false);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-brand-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-2xl shadow-card p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
                Restez connecté
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, 
                découvrir nos nouveaux livres et être informé de nos événements littéraires.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div className="space-y-2">
                <label htmlFor="newsletter-email" className="text-sm font-medium text-foreground">
                  Adresse e-mail
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 text-lg"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  className="mt-1"
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  J'accepte de recevoir la newsletter de Soleil qui brille et 
                  confirme avoir pris connaissance de la{" "}
                  <a href="#" className="text-primary hover:underline">
                    politique de confidentialité
                  </a>
                  .
                </label>
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full text-lg h-12"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                    Inscription en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    S'inscrire à la newsletter
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Pas de spam, juste du contenu de qualité. Vous pouvez vous désabonner à tout moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;