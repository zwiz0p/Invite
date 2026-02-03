import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Ornament, SmallOrnament } from "./Ornament";
import { RSVPForm } from "./RSVPForm";

export const RSVPSection = () => {

  return (
    <section className="py-24 px-6 relative">
      {/* Large decorative parenthesis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          viewport={{ once: true }}
          className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[50vh] text-ink"
        >
          (
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          viewport={{ once: true }}
          className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[50vh] text-ink"
        >
          )
        </motion.span>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedText>
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-ink-light mb-4">
              Your Response Matters
            </p>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="text-editorial-sm mb-4">
              <span className="text-blush">RSVP</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-xl text-ink-light">
              Please let us know if you'll be joining us
            </p>
          </AnimatedText>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card p-8 md:p-12 border border-border/50 relative"
        >
          <SmallOrnament className="absolute top-6 left-6 text-xl" />
          <SmallOrnament className="absolute top-6 right-6 text-xl" />
          <SmallOrnament className="absolute bottom-6 left-6 text-xl" />
          <SmallOrnament className="absolute bottom-6 right-6 text-xl" />
          
          <RSVPForm />
        </motion.div>
      </div>
    </section>
  );
};
