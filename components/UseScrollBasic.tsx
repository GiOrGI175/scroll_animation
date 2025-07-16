'use client';

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

export default function UseScrollBasic() {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest);
  });

  const background = useTransform(scrollYProgress, [0, 1], ['#fff', '#6366F1']);

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        background,
        x: '-50%',
        y: '-50%',
      }}
      className='fixed left-1/2 top-0 h-4 w-screen bg-indigo-500'
    ></motion.div>
  );
}
