import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';

const ComingSoon = () => {
  return (
    <section id="contact" className="py-24 bg-[#06261E] relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden glass-card"
        >
          {/* Main Dark Green Banner Container */}
          <div className="px-8 py-16 md:p-20 text-center relative z-10">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              {/* Clean Tag without animations */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary border border-white/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-secondary" />
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-brand-secondary uppercase font-display">Launch Pipeline</span>
              </div>

              {/* Title without glowing effects */}
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
                HomeBites is <span className="text-brand-secondary">Coming Soon</span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm md:text-base lg:text-lg text-brand-offwhite/80 mb-10 leading-relaxed font-sans">
                Our mobile application is in active beta testing. We will soon be launching on the Google Play Store and Apple App Store. Enter your lifestyle diet preferences in our forthcoming waiting list.
              </p>

              {/* Action Store Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-5">
                <Button variant="playstore" className="scale-105" />
                <Button variant="appstore" className="scale-105" />
              </div>

              {/* Subtext */}
              <p className="text-[10px] md:text-xs text-brand-offwhite/40 tracking-widest uppercase font-bold mt-8 font-display">
                Launching Summer 2026 • No QR Code Required
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ComingSoon;
