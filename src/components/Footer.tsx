import { motion } from "framer-motion";
import logoConsultech from "@/assets/logo-consultech.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center">
            <img src={logoConsultech} alt="ConsulTech SST" className="h-10 brightness-0 invert" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {["Início", "Sobre", "Serviços", "Diferenciais", "Contato"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="text-background/50 text-sm text-center">
            © 2025 ConsulTech SST. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
