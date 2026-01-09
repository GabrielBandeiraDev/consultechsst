import { motion } from "framer-motion";
import { Rocket, Clock, PiggyBank, Brain, Target, Award } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Rocket,
      title: "Agilidade na Entrega",
      description: "Processos automatizados que aceleram a implementação de treinamentos.",
      color: "from-primary to-accent",
    },
    {
      icon: PiggyBank,
      title: "Redução de Custos",
      description: "Economia significativa sem comprometer a qualidade dos resultados.",
      color: "from-secondary to-accent",
    },
    {
      icon: Brain,
      title: "IA + Expertise Humana",
      description: "O melhor dos dois mundos: inteligência artificial com toque humano.",
      color: "from-accent to-primary",
    },
    {
      icon: Clock,
      title: "Atualização Contínua",
      description: "Conteúdos sempre atualizados conforme as mudanças do mercado.",
      color: "from-primary to-secondary",
    },
    {
      icon: Target,
      title: "Personalização Total",
      description: "Soluções moldadas às necessidades específicas de cada cliente.",
      color: "from-secondary to-primary",
    },
    {
      icon: Award,
      title: "Qualidade Comprovada",
      description: "Metodologias testadas e aprovadas por empresas de diversos setores.",
      color: "from-accent to-secondary",
    },
  ];

  return (
    <section id="diferenciais" className="section-padding bg-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Por que nos escolher?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            Diferenciais que fazem a
            <span className="text-gradient"> diferença</span>
          </h2>
          <p className="text-background/70 text-lg">
            Combinamos tecnologia avançada com expertise consultiva para entregar 
            resultados excepcionais aos nossos clientes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" 
                   style={{ background: `linear-gradient(135deg, hsl(var(--${diff.color.split(' ')[0].replace('from-', '')})), hsl(var(--${diff.color.split(' ')[1].replace('to-', '')})))` }} 
              />
              <div className="glass rounded-2xl p-6 h-full hover:bg-background/10 transition-colors duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${diff.color} flex items-center justify-center mb-5`}>
                  <diff.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-bold text-background mb-3">
                  {diff.title}
                </h3>
                <p className="text-background/70">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
