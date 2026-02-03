import { motion } from "framer-motion";
import { AnimatedText, AnimatedLetter } from "./AnimatedText";
import { Ornament, SpinningBadge } from "./Ornament";

export const HeroSection = () => {
  const titleWords = ["Farewell"];
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 overflow-hidden">
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold/30 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background decorative text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <motion.span 
          className="font-display text-[20vw] md:text-[25vw] text-blush font-bold"
          animate={{ 
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          NCC
        </motion.span>
      </motion.div>

      {/* Spinning badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="absolute top-20 right-10 md:right-20 hidden md:block"
      >
        <SpinningBadge text="NCC AIRWING RTU" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <AnimatedText delay={0}>
          <motion.p 
            className="font-sans text-sm uppercase tracking-[0.3em] text-ink-light mb-8"
            animate={{ letterSpacing: ["0.3em", "0.35em", "0.3em"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            A Ceremonial Invitation
          </motion.p>
        </AnimatedText>

        <div className="mb-8 overflow-hidden">
          {titleWords.map((word, i) => (
            <AnimatedLetter key={i} delay={0.2 + i * 0.1}>
              <motion.span 
                className="text-editorial"
                whileHover={{ 
                  scale: 1.05, 
                  color: "hsl(var(--blush))",
                  transition: { duration: 0.3 }
                }}
              >
                {word}
              </motion.span>
            </AnimatedLetter>
          ))}
        </div>

        <AnimatedText delay={0.4}>
          <motion.h2 
            className="font-display text-3xl md:text-5xl italic text-ink-light mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ceremony
          </motion.h2>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <p className="font-body text-2xl md:text-3xl text-ink-light mb-2">For Our</p>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <motion.h3 
            className="font-display text-4xl md:text-6xl text-blush mb-12"
            animate={{ 
              textShadow: [
                "0 0 0px hsl(var(--blush))",
                "0 0 20px hsl(var(--blush) / 0.3)",
                "0 0 0px hsl(var(--blush))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            PYAARE SENIORS
          </motion.h3>
        </AnimatedText>

        <Ornament className="mb-12" />

        <AnimatedText delay={0.8}>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold">
            Scroll to continue
          </p>
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-4 text-gold text-2xl"
          >
            ↓
          </motion.div>
        </AnimatedText>
      </div>
    </section>
  );
};