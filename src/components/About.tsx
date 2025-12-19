import { Award, Clock, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certifikované produkty",
    description: "Používame len overené a kvalitné kozmetické značky",
  },
  {
    icon: Clock,
    title: "Flexibilné termíny",
    description: "Prispôsobíme sa vášmu rozvrhu a potrebám",
  },
  {
    icon: Users,
    title: "Individuálny prístup",
    description: "Každý klient dostane procedúru na mieru",
  },
  {
    icon: Heart,
    title: "S láskou k práci",
    description: "Robíme to, čo nás baví a napĺňa",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              O nás
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Vaša krása je naším poslaním
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              ZV Cosmetics je profesionálny kozmetický salón v srdci Trebišova. 
              Už viac ako 10 rokov pomáhame našim klientom cítiť sa krásne a sebavedomé.
            </p>
            <p className="text-muted-foreground mb-8">
              Náš tím skúsených kozmetičiek používa najmodernejšie technológie a 
              prémiové produkty, aby sme vám poskytli tú najlepšiu starostlivosť. 
              Každá návšteva u nás je zážitkom pre telo aj dušu.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl gradient-rose opacity-80" />
                <div className="h-64 rounded-2xl bg-secondary flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="font-heading text-5xl font-semibold text-primary mb-2">10+</div>
                    <p className="text-muted-foreground text-sm">Rokov skúseností</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-64 rounded-2xl bg-secondary flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="font-heading text-5xl font-semibold text-accent mb-2">★</div>
                    <p className="text-muted-foreground text-sm">5-hviezdičkové hodnotenie</p>
                  </div>
                </div>
                <div className="h-48 rounded-2xl gradient-gold opacity-60" />
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-4 border-primary/20 -z-10" />
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
