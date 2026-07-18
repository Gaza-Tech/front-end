import { Navbar } from '@/components/layout/navbar';

export default function MainLayout({
  children,
  chat,
}: {
  children: React.ReactNode;
  chat?: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {chat}
    </>
  );
}
