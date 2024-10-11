import { Header, PageContainer } from '@/components';
import { Features, Screenshots, Title } from '@/components/Home';

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <Title />
      <Screenshots />
      <Features />
    </PageContainer>
  );
}
