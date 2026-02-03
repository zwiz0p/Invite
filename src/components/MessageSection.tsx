import { motion } from "framer-motion";
import { AnimatedText, FadeIn } from "./AnimatedText";
import { Ornament, SmallOrnament } from "./Ornament";

export const MessageSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--blush) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--blush) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--blush) / 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-1/4 text-[40vh] font-display text-blush/5 font-bold rotate-[-15deg]"
        >
          (
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -right-20 top-1/2 text-[40vh] font-display text-blush/5 font-bold rotate-[15deg]"
        >
          )
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gold/20 text-2xl"
          style={{
            left: `${10 + i * 25}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
      ))}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatedText>
          <motion.p 
            className="font-display text-2xl md:text-3xl italic text-ink-light mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Respected Seniors,
          </motion.p>
        </AnimatedText>

        <Ornament className="mb-12" />

        <AnimatedText delay={0.1}>
          <motion.p 
            className="font-body text-xl md:text-2xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-gold"
              animate={{ 
                textShadow: [
                  "0 0 0px hsl(var(--gold))",
                  "0 0 10px hsl(var(--gold) / 0.5)",
                  "0 0 0px hsl(var(--gold))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Warm greetings from your juniors
            </motion.span>
          </motion.p>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-lg md:text-xl leading-relaxed text-ink-light mb-8">
            With heartfelt respect and gratitude, we are organizing this Farewell Ceremony 
            in your honor — to celebrate not just your time in NCC, but the{" "}
            <motion.span 
              className="text-blush font-display italic inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
            >
              memories
            </motion.span>,{" "}
            <motion.span 
              className="text-blush font-display italic inline-block"
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              guidance
            </motion.span>,{" "}
            <motion.span 
              className="text-blush font-display italic inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
            >
              motivation
            </motion.span>, and{" "}
            <motion.span 
              className="text-blush font-display italic inline-block"
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              bond
            </motion.span> that you shared with all of us.
          </p>
        </AnimatedText>

        <FadeIn delay={0.3}>
          <motion.div 
            className="my-16 py-12 px-8 bg-blush/10 relative"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px -20px hsl(var(--blush) / 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SmallOrnament className="absolute top-4 left-4 text-2xl" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <SmallOrnament className="absolute bottom-4 right-4 text-2xl" />
            </motion.div>
            <motion.p 
              className="font-display text-2xl md:text-3xl italic leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              "Sach kahen toh, aap log sirf seniors nahi the."
            </motion.p>
          </motion.div>
        </FadeIn>

        <AnimatedText delay={0.4}>
          <p className="font-body text-lg md:text-xl leading-relaxed text-ink-light mb-8">
            You were mentors when we were confused, teammates during training, 
            and sometimes like elder siblings when we needed support or encouragement.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <p className="font-body text-lg md:text-xl leading-relaxed text-ink-light mb-12">
            This farewell is not just a function for us. It is a small, sincere way 
            of saying <motion.span 
              className="font-display text-2xl text-gold inline-block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              thank you
            </motion.span> for 
            everything you have given us, knowingly and unknowingly.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <motion.p 
            className="font-display text-xl md:text-2xl italic text-blush"
            whileHover={{ scale: 1.02 }}
          >
            Your presence on this day will mean more to us than words can properly express.
          </motion.p>
        </AnimatedText>
      </div>
    </section>
  );
};