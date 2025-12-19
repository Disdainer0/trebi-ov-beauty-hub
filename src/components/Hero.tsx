import { Sparkles, Star, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-light/20 via-background to-secondary/30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Decorative Icons */}
      <Sparkles className="absolute top-32 left-[20%] w-6 h-6 text-accent opacity-60 animate-float" />
      <Star className="absolute top-48 right-[25%] w-5 h-5 text-primary opacity-50 animate-float" style={{ animationDelay: "0.5s" }} />
      <Heart className="absolute bottom-32 right-[15%] w-7 h-7 text-primary opacity-40 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground mb-8 opacity-0 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Profesionálna kozmetika v Trebišove</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Vaša krása,</span>
            <br />
            <span className="text-gradient">naša vášeň</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Doprajte si luxusnú starostlivosť o pleť a telo v príjemnom prostredí. 
            Individuálny prístup a najmodernejšie procedúry pre vašu dokonalú krásu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button onClick={scrollToContact} size="lg" className="gradient-rose text-primary-foreground hover:opacity-90 px-8 py-6 text-lg">
              Objednať sa online
            </Button>
            <Button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} variant="outline" size="lg" className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/5">
              Naše služby
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-semibold text-gradient">10+</div>
              <p className="text-sm text-muted-foreground mt-2">Rokov skúseností</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-semibold text-gradient">500+</div>
              <p className="text-sm text-muted-foreground mt-2">Spokojných klientov</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-semibold text-gradient">20+</div>
              <p className="text-sm text-muted-foreground mt-2">Typov procedúr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
