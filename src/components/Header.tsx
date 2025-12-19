import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-rose flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">ZV</span>
            </div>
            <div>
              <h1 className="font-heading text-xl font-semibold text-foreground">ZV Cosmetics</h1>
              <p className="text-xs text-muted-foreground">Kozmetika Trebišov</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Domov
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Služby
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              O nás
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Kontakt
            </button>
          </nav>

          {/* Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+421904393431" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-4 h-4" />
              +421 904 393 431
            </a>
            <Button onClick={() => scrollToSection("contact")} className="gradient-rose text-primary-foreground hover:opacity-90">
              Objednať sa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left px-2 py-2 text-foreground hover:text-primary transition-colors">
                Domov
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left px-2 py-2 text-foreground hover:text-primary transition-colors">
                Služby
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left px-2 py-2 text-foreground hover:text-primary transition-colors">
                O nás
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left px-2 py-2 text-foreground hover:text-primary transition-colors">
                Kontakt
              </button>
              <a href="tel:+421904393431" className="flex items-center gap-2 px-2 py-2 text-primary">
                <Phone className="w-4 h-4" />
                +421 904 393 431
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
