import Image from 'next/image';
import ThemeSwitch from '../DarkMode/ThemeSwitch';

export default function Header() {
  return (
    <div className='py-6 w-full flex flex-row justify-end'>
      <Image
        className='absolute left-2 top-4'
        src='/assets/icon.png'
        width={80}
        height={80}
        alt='Brand icon'
      />
      <ThemeSwitch />
    </div>
  );
}
