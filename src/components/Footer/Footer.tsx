import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-zinc-200 dark:bg-zinc-700 w-full p-5 flex items-center justify-center gap-6 -mt-16'>
      <Link className='text-stone-700 dark:text-white' href='/about'>
        About
      </Link>
      <Link
        className='text-stone-700 dark:text-white'
        href='/terms-and-conditions'
      >
        Terms and Conditions
      </Link>
      <Link className='text-stone-700 dark:text-white' href='/privacy-policy'>
        Privacy Policy
      </Link>
    </footer>
  );
}
