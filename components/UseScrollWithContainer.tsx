'use client';

import { useScroll, motion } from 'motion/react';
import { useRef } from 'react';

export default function UseScrollWithContainer() {
  const containerRef = useRef(null);

  const targetRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    axis: 'x',
    offset: ['end start', 'start end'],
  });

  return (
    <div
      ref={containerRef}
      className='flex items-center w-screen h-screen overflow-x-scroll bg-indigo-500/50 py-8'
    >
      <div className='w-screen shrink-0'></div>

      <motion.div
        ref={targetRef}
        style={{ opacity: scrollXProgress }}
        className='mx-auto size-48 shrink-0 bg-zinc-50'
      />

      <div className='w-screen shrink-0'></div>
    </div>
  );
}
