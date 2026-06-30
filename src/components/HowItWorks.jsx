import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { 
  ShoppingBag, 
  CheckSquare, 
  Flame, 
  Bike, 
  HeartHandshake 
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "You Place Order",
      subtitle: "Choose Food",
      description: "Browse menu, customize ingredients, and securely checkout."
    },
    {
      number: 2,
      icon: <CheckSquare className="w-6 h-6" />,
      title: "Restaurant Accepts",
      subtitle: "Order Confirmed",
      description: "The kitchen receives and confirms your custom specifications."
    },
    {
      number: 3,
      icon: <Flame className="w-6 h-6" />,
      title: "Chef Prepares",
      subtitle: "Cooked Fresh",
      description: "Expert chefs cook your meal using fresh, organic ingredients."
    },
    {
      number: 4,
      icon: <Bike className="w-6 h-6" />,
      title: "Partner Picks Up",
      subtitle: "En Route",
      description: "A delivery rider collects the hot-locked meal for delivery."
    },
    {
      number: 5,
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Delivered Fresh",
      subtitle: "At Your Door",
      description: "Receive your fresh and delicious meal right at your doorstep."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#06261E] relative overflow-hidden border-t border-white/5">
      <Container className="relative z-10">
        <SectionTitle
          light={true}
          badgeText="How It Works"
          title="From *Kitchen* to Your Doorstep"
          subtitle="A premium, reliable ecosystem structured to prepare and deliver fresh culinary experiences flawlessly."
        />

        {/* Timeline Container */}
        <div className="relative mt-16 md:mt-24">
          
          {/* Desktop Connecting SVG Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-12 hidden lg:block z-0 px-[10%]">
            <svg className="w-full h-2" fill="none">
              {/* Dim baseline dashed stroke */}
              <line 
                x1="0%" 
                y1="50%" 
                x2="100%" 
                y2="50%" 
                stroke="rgba(255, 255, 255, 0.08)" 
                strokeWidth="3" 
                strokeDasharray="8 8" 
              />
              {/* Animated fill-in green stroke */}
              <motion.line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#82C341"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "linear" }}
              />
            </svg>
          </div>

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step Circle & Icon Wrapper */}
                <div className="relative mb-6">
                  {/* Core Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-brand-primary text-brand-offwhite flex items-center justify-center border-4 border-white/5 shadow-lg relative z-10 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-2 -right-1 w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center text-xs font-bold font-display shadow-md z-20">
                    {step.number}
                  </div>
                </div>

                {/* Subtitle tag */}
                <span className="text-[11px] uppercase tracking-wider text-brand-secondary font-bold mb-1.5 font-display block">
                  {step.subtitle}
                </span>
                
                {/* Step Title */}
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-xs md:text-sm text-brand-offwhite/80 max-w-[200px] leading-relaxed font-sans">
                  {step.description}
                </p>

                {/* Mobile vertical down arrow indicator */}
                {index < 4 && (
                  <div className="lg:hidden mt-6 text-brand-secondary animate-bounce">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
