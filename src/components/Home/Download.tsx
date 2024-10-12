'use client';

import { motion } from 'framer-motion';
import './styles.css';

export default function Download() {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      className='h-96 w-4/5 max-w-3xl m-16 bg-blue-500 mb-56 rounded-full p-12'
    >
      <div className='flex items-center justify-center'>
        <p className='spotlight' data-cont='Today is the day'>
          Today is the day
        </p>
      </div>
    </motion.div>
  );
}
