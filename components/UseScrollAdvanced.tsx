'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function UseScrollAdvanced() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '180deg']);

  return (
    <motion.div
      ref={targetRef}
      style={{ rotate }}
      className='mx-auto size-48 bg-indigo-500'
    ></motion.div>
  );
}
