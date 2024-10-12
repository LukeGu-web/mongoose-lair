import { PageContainer } from '@/components';
import { Features, Screenshots, Title } from '@/components/Home';
import Download from '@/components/Home/Download';

export default function Home() {
  return (
    <PageContainer>
      <Title />
      <Screenshots />
      <Features />
      <Download />
    </PageContainer>
  );
}
