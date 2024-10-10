import { PageContainer } from '@/components';
import ThemeSwitch from '@/components/DarkMode/ThemeSwitch';
import { Title } from '@/components/Home';

export default function Home() {
  return (
    <PageContainer>
      <div className='p-4 w-full flex flex-row justify-end'>
        <ThemeSwitch />
      </div>
      <Title />
    </PageContainer>
  );
}
