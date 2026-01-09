import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, Shield, Cpu } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "Tecnologia de Ponta",
      description: "Automação inteligente para otimizar cada etapa do processo de treinamento.",
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Soluções personalizadas que evoluem com as necessidades da sua empresa.",
    },
    {
      icon: Shield,
      title: "Expertise Comprovada",
      description: "Anos de experiência em consultoria e treinamentos corporativos.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Consultoria que
              <span className="text-gradient"> transforma</span> resultados
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A ConsulTech SST é uma consultoria especializada em treinamentos corporativos, 
              trazendo uma abordagem inovadora para o setor. Utilizamos tecnologia de ponta 
              para automatizar processos, proporcionando mais eficiência, rapidez e redução 
              de custos considerável em relação ao mercado tradicional.
            </p>

            <div className="space-y-4">
              {[
                "Automação inteligente de processos",
                "Redução significativa de custos",
                "Suporte humano + IA combinados",
                "Agilidade na entrega de conteúdos",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-secondary flex-shrink-0" size={22} />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-tech flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary-foreground" size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
