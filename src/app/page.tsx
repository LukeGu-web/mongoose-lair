import { PageContainer, QRCode } from '@/components';
import { Features, Screenshots, Title } from '@/components/Home';
import Download from '@/components/Home/Download';

export default function Home() {
  return (
    <PageContainer>
      <Title />
      <Screenshots />
      <Features />
      <Download />
      <div className='hidden md:block'>
        <QRCode />
      </div>
    </PageContainer>
  );
}
