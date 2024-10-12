'use client';

import { motion } from 'framer-motion';

export default function QRCode() {
  return (
    <motion.div
      whileHover={{ scale: 2.4 }}
      className='h-24 w-24 rounded-xl bg-white fixed bottom-4 left-4'
      style={{ transformOrigin: 'bottom left' }}
    />
  );
}
