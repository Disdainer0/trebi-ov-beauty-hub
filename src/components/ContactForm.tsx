import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Ďakujeme za vašu správu!",
      description: "Ozveme sa vám čo najskôr.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Kontakt
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Objednajte sa ešte dnes
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Vyplňte formulár alebo nás kontaktujte priamo. Tešíme sa na vás!
            </p>

            <div className="space-y-6">
              <a 
                href="tel:+421904393431" 
                className="flex items-center gap-4 p-4 rounded-xl bg-card hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 rounded-xl gradient-rose flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefón</p>
                  <p className="font-semibold text-foreground">+421 904 393 431</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresa</p>
                  <p className="font-semibold text-foreground">M. R. Štefánika 2329</p>
                  <p className="text-sm text-muted-foreground">075 01 Trebišov</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Otváracie hodiny</p>
                  <p className="font-semibold text-foreground">Po - Pi: 9:00 - 18:00</p>
                  <p className="text-sm text-muted-foreground">So: podľa dohody</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-20 h-20 rounded-full gradient-rose flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  Ďakujeme!
                </h3>
                <p className="text-muted-foreground">
                  Vaša správa bola odoslaná. Ozveme sa vám čo najskôr.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  Objednávkový formulár
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Vyplňte svoje údaje a my sa vám ozveme
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Meno a priezvisko *
                    </label>
                    <Input
                      required
                      placeholder="Vaše meno"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefón *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+421 ..."
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="vas@email.sk"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Služba
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Vyberte službu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cleaning">Čistenie pleti</SelectItem>
                      <SelectItem value="eyebrows">Úprava obočia</SelectItem>
                      <SelectItem value="mezotherapy">Mezoterapia</SelectItem>
                      <SelectItem value="antiaging">Anti-aging</SelectItem>
                      <SelectItem value="manicure">Manikúra & Pedikúra</SelectItem>
                      <SelectItem value="massage">Masáže tváre</SelectItem>
                      <SelectItem value="natural">Prírodná kozmetika</SelectItem>
                      <SelectItem value="permanent">Permanentný make-up</SelectItem>
                      <SelectItem value="other">Iná služba</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Správa
                  </label>
                  <Textarea
                    placeholder="Vaša správa alebo preferovaný termín..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-rose text-primary-foreground hover:opacity-90 py-6 text-lg"
                >
                  {isSubmitting ? (
                    "Odosielam..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Odoslať objednávku
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
