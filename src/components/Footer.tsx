import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Ornament } from "./Ornament";

export const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-ink text-cream text-center relative overflow-hidden">
      {/* Animated star background */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-cream/10 text-2xl"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.span>
      ))}

      {/* Decorative background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.span 
          className="font-display text-[30vw] text-cream"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.span>
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <Ornament className="mb-12 [&_span]:text-cream [&_.w-12]:bg-cream/30" />

        <AnimatedText>
          <motion.p 
            className="font-body text-xl mb-2 text-cream/70"
            whileHover={{ scale: 1.02 }}
          >
            With respect and warm regards,
          </motion.p>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <motion.h3 
            className="font-display text-3xl md:text-4xl mb-8 text-blush"
            animate={{ 
              textShadow: [
                "0 0 0px hsl(var(--blush))",
                "0 0 30px hsl(var(--blush) / 0.5)",
                "0 0 0px hsl(var(--blush))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            NCC Airwing RTU
          </motion.h3>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-sans text-sm uppercase tracking-widest text-cream/50 mb-4">
            On behalf of all the Cadets of
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <motion.h4 
            className="font-display text-2xl md:text-3xl mb-12"
            whileHover={{ 
              scale: 1.05,
              color: "hsl(var(--gold))"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            7 RAJ AIR SQN NCC, KOTA
          </motion.h4>
        </AnimatedText>

        <Ornament className="mb-12 [&_span]:text-cream [&_.w-12]:bg-cream/30" />

        <AnimatedText delay={0.4}>
          <motion.p 
            className="font-body text-lg italic text-cream/60"
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            "For the memories, guidance, and inspiration"
          </motion.p>
        </AnimatedText>
      </div>
    </footer>
  );
};