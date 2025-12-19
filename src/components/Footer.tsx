import { Heart, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-rose flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">ZV</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">ZV Cosmetics</h3>
                <p className="text-xs text-background/60">Kozmetika Trebišov</p>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              Profesionálny kozmetický salón v srdci Trebišova. 
              Staráme sa o vašu krásu s láskou a odbornosťou.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigácia</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-background transition-colors text-sm">
                  Domov
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-background transition-colors text-sm">
                  Služby
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-background transition-colors text-sm">
                  O nás
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-background transition-colors text-sm">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a href="tel:+421904393431" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +421 904 393 431
              </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>M. R. Štefánika 2329<br />075 01 Trebišov</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} ZV Cosmetics. Všetky práva vyhradené.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Vytvorené s <Heart className="w-4 h-4 text-primary" /> v Trebišove
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
