import { Sparkles, Eye, Droplets, Sun, Scissors, Heart, Leaf, Wand2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Čistenie pleti",
    description: "Hĺbkové čistenie a hydratácia pre žiarivú pleť",
    price: "od 35€",
  },
  {
    icon: Eye,
    title: "Úprava obočia",
    description: "Profesionálne tvarovanie a farbenie obočia",
    price: "od 15€",
  },
  {
    icon: Droplets,
    title: "Mezoterapia",
    description: "Omladzujúca procedúra s vitamínmi a kyselinou",
    price: "od 80€",
  },
  {
    icon: Sun,
    title: "Anti-aging",
    description: "Omladzujúce procedúry pre redukciu vrások",
    price: "od 60€",
  },
  {
    icon: Scissors,
    title: "Manikúra & Pedikúra",
    description: "Komplexná starostlivosť o ruky a nohy",
    price: "od 25€",
  },
  {
    icon: Heart,
    title: "Masáže tváre",
    description: "Relaxačné a liftingové masáže tváre",
    price: "od 40€",
  },
  {
    icon: Leaf,
    title: "Prírodná kozmetika",
    description: "Procedúry s bio a prírodnou kozmetikou",
    price: "od 45€",
  },
  {
    icon: Wand2,
    title: "Permanentný make-up",
    description: "Trvalý make-up obočia, pier a očných liniek",
    price: "od 150€",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Naše služby
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Profesionálna starostlivosť
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ponúkame široký výber kozmetických služieb pre vašu krásu a pohodu
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl gradient-rose flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <button 
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Objednať →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
