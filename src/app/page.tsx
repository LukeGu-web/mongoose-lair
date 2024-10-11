import { Header, PageContainer } from '@/components';
import { Screenshots, Title } from '@/components/Home';

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <Title />
      <Screenshots />
    </PageContainer>
  );
}
