'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function QRCode() {
  return (
    <motion.div
      whileHover={{ scale: 2.4 }}
      className='h-24 w-24 rounded-xl bg-slate-100 fixed bottom-4 left-4'
      style={{ transformOrigin: 'bottom left' }}
    >
      <Image
        className='w-full p-2'
        src='/assets/qr-code.svg'
        width={0}
        height={0}
        // sizes='50vw'
        alt='Picture of the failed email verification'
      />
    </motion.div>
  );
}
