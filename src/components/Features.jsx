import React from 'react';
import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { 
  Clock, 
  Leaf, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Droplet, 
  Cpu, 
  Headphones 
} from 'lucide-react';

const Features = () => {
  const featuresData = [
    {
      icon: <Clock className="w-6 h-6 text-brand-secondary" />,
      title: "Fast Delivery",
      description: "State-of-the-art hot-lock thermal bags ensure your gourmet meals arrive steaming hot within 30 minutes."
    },
    {
      icon: <Leaf className="w-6 h-6 text-brand-secondary" />,
      title: "Healthy Food",
      description: "Dietician-approved options tailored for calorie control, keto, vegan, protein-rich, and healthy lifestyles."
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-secondary" />,
      title: "Real-Time Tracking",
      description: "Follow your order from prep to doorstep with ultra-precise GPS coordinates and minute-by-minute updates."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-secondary" />,
      title: "Secure Payments",
      description: "Bank-grade encrypted checkouts supporting credit cards, net banking, UPI, and instant refund wallets."
    },

    {
      icon: <Droplet className="w-6 h-6 text-brand-secondary" />,
      title: "Fresh Ingredients",
      description: "Hand-picked farm-fresh vegetables, organic proteins, and pure oils. Zero artificial preservatives added."
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-secondary" />,
      title: "AI Recommendations",
      description: "Smart taste profiling that learns your preferences to curate personalized meals matching your dietary goals."
    },
    {
      icon: <Headphones className="w-6 h-6 text-brand-secondary" />,
      title: "Customer Support",
      description: "Dedicated 24/7 concierge support desk to instantly assist with orders, dietary queries, and requests."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#06261E] relative overflow-hidden border-t border-white/5">
      <Container className="relative z-10">
        <SectionTitle
          light={true}
          badgeText="Features"
          title="Everything You *Love*, All in One Place"
          subtitle="Discover the premium benefits that set HomeBites apart from traditional delivery applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              variant="glass"
              className="flex flex-col text-left items-start border border-white/5 hover:border-brand-secondary/20"
              delay={(index % 4) * 0.1}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/10">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-brand-offwhite/80 leading-relaxed font-sans">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
