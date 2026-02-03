import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Ornament, SmallOrnament } from "./Ornament";
import { Calendar, Clock, MapPin } from "lucide-react";

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.5 }
  }
};

export const EventDetails = () => {
  const details = [
    { icon: Calendar, label: "Date", value: "16th February 2026" },
    { icon: Clock, label: "Time", value: "TBA" },
    { icon: MapPin, label: "Venue", value: "TBA" },
  ];

  return (
    <section className="py-24 px-6 bg-cream-dark relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-40 h-40 border border-gold/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-64 h-64 border border-blush/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gold/10 rounded-full"
      />

      {/* Floating stars */}
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-gold/30 text-lg"
          style={{
            left: `${20 + i * 15}%`,
            top: `${15 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.span>
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedText>
          <motion.p 
            className="font-sans text-sm uppercase tracking-[0.3em] text-ink-light mb-4"
            animate={{ letterSpacing: ["0.3em", "0.4em", "0.3em"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Mark Your Calendar
          </motion.p>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="text-editorial-sm mb-16">
            Event <motion.span 
              className="italic text-blush inline-block"
              whileHover={{ rotate: -3, scale: 1.05 }}
            >
              Details
            </motion.span>
          </h2>
        </AnimatedText>

        <div className="grid md:grid-cols-3 gap-8 mb-16" style={{ perspective: "1000px" }}>
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.2 + index * 0.15, 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <motion.div
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px -20px hsl(var(--gold) / 0.3)",
                  borderColor: "hsl(var(--gold) / 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-8 bg-card border border-border/50 relative group cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <SmallOrnament className="absolute top-4 right-4" />
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <detail.icon className="w-8 h-8 text-gold mx-auto mb-4" strokeWidth={1.5} />
                </motion.div>
                <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-2">
                  {detail.label}
                </p>
                <motion.p 
                  className="font-display text-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  {detail.value}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <Ornament />
      </div>
    </section>
  );
};