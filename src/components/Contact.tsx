import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@consultechsst.com.br",
      href: "mailto:contato@consultechsst.com.br",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(92) 98599-7836",
      href: "https://w.app/pf2mue",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Manaus, AM",
      href: "#",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vamos conversar sobre
              <span className="text-gradient"> seu projeto?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Entre em contato e descubra como a ConsulTech SST pode transformar 
              os treinamentos da sua empresa. Nossa equipe está pronta para 
              entender suas necessidades e propor soluções personalizadas.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-tech flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      {info.label}
                    </span>
                    <span className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome completo
                    </label>
                    <Input
                      placeholder="Seu nome"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Empresa
                  </label>
                  <Input
                    placeholder="Nome da sua empresa"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input
                    placeholder="(00) 00000-0000"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-tech hover:opacity-90 text-primary-foreground shadow-elevated"
                >
                  Enviar Mensagem
                  <Send className="ml-2" size={18} />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
