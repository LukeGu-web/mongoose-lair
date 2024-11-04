import type { Metadata } from 'next';
import { PageContainer, DeleteAccount as Delete } from '@/components';

export const metadata: Metadata = {
  title: 'Delete Account',
  description: 'Wonderful budgeting app - Delete Account',
};

export default function DeleteAccount() {
  return (
    <PageContainer>
      <Delete />
    </PageContainer>
  );
}
