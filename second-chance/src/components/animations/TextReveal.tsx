import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  /** Delay before animation starts */
  delay?: number;
  /** Stagger delay between each word */
  staggerDelay?: number;
  /** Duration for each word's animation */
  wordDuration?: number;
  /** Element tag to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.06,
  wordDuration = 0.5,
  as = 'div',
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: wordDuration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const MotionTag = motion[as as 'div'] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={wordVariants} style={{ display: 'inline-block' }}>
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};
