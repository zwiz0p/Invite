import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Loader2, Send, Feather } from "lucide-react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZ170AYw7UjqPonKpPQiLMFppmi0Q1iUFdTktz_e6qivqHug1PC_cZ2ZZsUIhMpSFg/exec";

interface RSVPFormProps {
  onSubmit?: (data: { name: string; message: string }) => void;
}

export const RSVPForm = ({ onSubmit }: RSVPFormProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Mouse tracking for elegant hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message.trim()) return;
    
    setIsLoading(true);
    setError(null);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message: message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      setIsSubmitted(true);
      onSubmit?.({ name, message });
    } catch (err) {
      console.error("RSVP submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 relative"
      >
        {/* Animated envelope/letter effect */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative inline-block mb-8"
        >
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-7xl"
          >
            ✉️
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-2 -right-2 text-2xl"
          >
            ✨
          </motion.div>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          Message Received
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-body text-xl text-ink-light mb-2"
        >
          Thank you, <span className="text-blush font-medium">{name}</span>
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-body text-lg text-ink-light/70 italic"
        >
          Your words mean everything to us.
        </motion.p>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: -100,
              x: (i - 2) * 30
            }}
            transition={{ 
              delay: 0.6 + i * 0.1,
              duration: 2,
              ease: "easeOut"
            }}
            className="absolute left-1/2 top-1/2 text-gold text-lg"
          >
            ✦
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Decorative header */}
      <AnimatedText>
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-gold mb-4"
          >
            <Feather className="w-8 h-8" />
          </motion.div>
          <p className="font-body text-lg text-ink-light italic">
            "Leave a note for your juniors..."
          </p>
        </div>
      </AnimatedText>

      {/* Name input */}
      <AnimatedText delay={0.1}>
        <div className="space-y-3">
          <label className="font-sans text-xs uppercase tracking-[0.3em] text-ink-light/70">
            Your Name
          </label>
          <motion.div
            whileFocus={{ scale: 1.01 }}
            className="relative"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Who is writing?"
              required
              className="w-full bg-transparent border-b-2 border-ink/10 py-4 font-display text-2xl 
                         placeholder:text-ink/20 focus:outline-none focus:border-blush
                         transition-all duration-500"
            />
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blush to-gold"
              initial={{ width: "0%" }}
              animate={{ width: name ? "100%" : "0%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </AnimatedText>

      {/* Elegant message box */}
      <AnimatedText delay={0.2}>
        <div className="space-y-4">
          <label className="font-sans text-xs uppercase tracking-[0.3em] text-ink-light/70">
            Your Message
          </label>
          
          <motion.div
            onMouseMove={handleMouseMove}
            className="relative"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none"
              style={{
                background: useTransform(
                  [springX, springY],
                  ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, rgba(212, 165, 165, 0.15), transparent 80%)`
                ),
                opacity: isFocused ? 1 : 0
              }}
            />
            
            <motion.div
              animate={{ 
                boxShadow: isFocused 
                  ? "0 0 0 2px rgba(212, 165, 165, 0.3), 0 10px 40px -10px rgba(0,0,0,0.1)"
                  : "0 0 0 1px rgba(0,0,0,0.05)"
              }}
              className="relative bg-cream/50 rounded-lg overflow-hidden"
            >
              {/* Decorative corner elements */}
              <motion.span 
                className="absolute top-3 left-3 text-gold/30 text-lg"
                animate={{ opacity: isFocused ? 1 : 0.3 }}
              >
                ❝
              </motion.span>
              <motion.span 
                className="absolute bottom-3 right-3 text-gold/30 text-lg"
                animate={{ opacity: isFocused ? 1 : 0.3 }}
              >
                ❞
              </motion.span>

              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Share a memory, a wish, or simply say goodbye..."
                required
                rows={5}
                className="w-full bg-transparent px-8 py-6 font-body text-xl leading-relaxed
                           placeholder:text-ink/25 focus:outline-none
                           transition-all duration-300 resize-none"
              />
              
              {/* Character indicator */}
              <motion.div 
                className="absolute bottom-3 left-8 text-xs text-ink/30 font-sans"
                animate={{ opacity: message.length > 0 ? 1 : 0 }}
              >
                {message.length} characters
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedText>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-center font-body"
        >
          {error}
        </motion.p>
      )}

      {/* Elegant submit button */}
      <AnimatedText delay={0.3}>
        <motion.button
          type="submit"
          disabled={!name || !message.trim() || isLoading}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-5 bg-ink text-cream font-display text-xl tracking-wide
                     disabled:opacity-30 disabled:cursor-not-allowed
                     transition-all duration-300
                     relative overflow-hidden group flex items-center justify-center gap-3
                     shadow-lg hover:shadow-xl"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <motion.span 
                className="relative z-10 flex items-center gap-3"
                whileHover={{ x: -5 }}
              >
                Send Your Message
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send className="w-5 h-5" />
                </motion.span>
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blush to-gold"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </>
          )}
        </motion.button>
      </AnimatedText>

      {/* Subtle footer note */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-ink/40 text-sm font-body italic"
      >
        Your presence in our memories is forever cherished ✦
      </motion.p>
    </form>
  );
};
