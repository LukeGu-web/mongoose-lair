'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './styles.css';

export default function Download() {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      className='h-64 sm:h-96 w-full sm:w-4/5 max-w-3xl m-16 bg-blue-500 mb-56 rounded-full p-6 sm:p-12'
    >
      <div className='flex flex-col items-center justify-center gap-4'>
        <p className='spotlight' data-cont='Today is the day'>
          Today is the day
        </p>
        <Image
          className='w-1/3'
          src='/assets/qr-code.svg'
          width={0}
          height={0}
          // sizes='50vw'
          alt='Picture of the failed email verification'
        />
      </div>
    </motion.div>
  );
}
