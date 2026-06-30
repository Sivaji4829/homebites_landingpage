import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { Target, Eye, Sparkles } from 'lucide-react';
import aboutBg from '../assets/about_bg.webp';

const About = () => {
  const cardsData = [
    {
      icon: <Target className="w-8 h-8 text-brand-secondary" />,
      title: "Our Mission",
      description: "To make restaurant-quality, healthy, and premium meals accessible to everyone, helping you maintain a balanced and delicious lifestyle.",
      borderColor: "border-brand-secondary/20"
    },
    {
      icon: <Eye className="w-8 h-8 text-brand-secondary" />,
      title: "Our Vision",
      description: "To redefine food delivery by creating a seamless link between trusted local kitchens, passionate chefs, and health-conscious food lovers.",
      borderColor: "border-brand-secondary/20"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-secondary" />,
      title: "Why HomeBites",
      description: "We believe in pure ingredients, complete culinary hygiene, prompt delivery, and personalized recommendations crafted by AI.",
      borderColor: "border-brand-secondary/20"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#06261E] relative overflow-hidden border-t border-white/5">
      {/* Premium Food-Themed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />

      <Container className="relative z-10">
        <SectionTitle
          light={true}
          badgeText="About Us"
          title="Redefining the *Culinary* Experience"
          subtitle="HomeBites is not just another delivery app. We are a premium ecosystem crafted to elevate how you eat, connect, and enjoy daily nourishment."
        />

        {/* Brand explanation paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-base md:text-lg text-brand-offwhite/85 leading-relaxed font-sans">
            HomeBites bridges the gap between premium lifestyle needs and everyday meals. We select only the highest-rated kitchens, partner with elite local chefs, and implement strict quality checks. The result is freshly cooked, nutritious, and appetizing food delivered with advanced hot-lock logistics to retain kitchen-fresh flavors.
          </p>
        </motion.div>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              variant="glass"
              className={`flex flex-col text-left items-start border ${card.borderColor}`}
              delay={index * 0.15}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                {card.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-brand-offwhite/80 leading-relaxed font-sans">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
