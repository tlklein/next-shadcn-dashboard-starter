import { SearchParams } from 'nuqs/server';
import ProfileViewPage from '@/features/profile/components/profile-view-page';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Product'
};

export default async function Page({ searchParams }: pageProps) {
  return <ProfileViewPage />;
}
