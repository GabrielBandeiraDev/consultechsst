import { motion } from "framer-motion";
import { GraduationCap, Settings, BarChart3, Headphones, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Treinamentos Personalizados",
      description:
        "Desenvolvemos programas de capacitação sob medida para as necessidades específicas de cada empresa e setor.",
      features: ["Conteúdo customizado", "Metodologia ativa", "Avaliação contínua"],
    },
    {
      icon: Settings,
      title: "Automação de Processos",
      description:
        "Implementamos soluções tecnológicas que automatizam tarefas repetitivas, liberando tempo para o que realmente importa.",
      features: ["Fluxos automatizados", "Integração de sistemas", "Relatórios em tempo real"],
    },
    {
      icon: BarChart3,
      title: "Consultoria Estratégica",
      description:
        "Análise completa dos processos de treinamento da sua empresa com recomendações para otimização e melhoria contínua.",
      features: ["Diagnóstico completo", "Plano de ação", "Acompanhamento"],
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description:
        "Equipe de especialistas disponível para auxiliar em todas as etapas, combinando expertise humana e inteligência artificial.",
      features: ["Suporte 24/7", "IA assistiva", "Atendimento humanizado"],
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-muted/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções completas para
            <span className="text-gradient"> capacitação corporativa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um portfólio completo de serviços que combinam a experiência 
            de consultores especializados com o poder da tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-tech flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary-foreground" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="ghost" 
                className="text-primary hover:text-secondary group/btn p-0"
                asChild
              >
                <a href="https://w.app/pf2mue" target="_blank" rel="noopener noreferrer">
                  Saiba mais
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
