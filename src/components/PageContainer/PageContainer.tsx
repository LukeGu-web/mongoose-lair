export default function PageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className='min-h-screen flex-col items-center justify-start flex'
      style={{ maxWidth: '1280px', margin: '0 auto' }}
    >
      {children}
    </div>
  );
}
