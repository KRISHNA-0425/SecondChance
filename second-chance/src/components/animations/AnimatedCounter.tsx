import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';

interface AnimatedCounterProps {
  /** Target number to count up to */
  target: number;
  /** Prefix text (e.g., '+', '$', '-') */
  prefix?: string;
  /** Suffix text (e.g., '%', 'x', 'K') */
  suffix?: string;
  /** Duration in seconds */
  duration?: number;
  /** Additional className */
  className?: string;
  /** Number of decimal places */
  decimals?: number;
  /** Start counting when in view */
  once?: boolean;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
  decimals = 0,
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (val) =>
    decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      return controls.stop;
    }
  }, [isInView, target, duration, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
