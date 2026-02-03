import { motion } from "framer-motion";

interface OrnamentProps {
  className?: string;
}

export const Ornament = ({ className = "" }: OrnamentProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center justify-center gap-4 ${className}`}
    >
      <span className="text-gold text-xl">✦</span>
      <span className="w-12 h-[1px] bg-gold/50" />
      <span className="text-gold text-xl">✦</span>
      <span className="w-12 h-[1px] bg-gold/50" />
      <span className="text-gold text-xl">✦</span>
    </motion.div>
  );
};

export const SmallOrnament = ({ className = "" }: OrnamentProps) => {
  return (
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`text-gold ${className}`}
    >
      ✦
    </motion.span>
  );
};

export const SpinningBadge = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`relative w-24 h-24 ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text className="fill-ink text-[10px] font-sans uppercase tracking-[0.3em]">
          <textPath href="#circlePath">
            {text} • {text} • {text} •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl">☺</span>
      </div>
    </motion.div>
  );
};
