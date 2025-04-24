export const metadata = {
  title: 'Angu Website',
  description: 'Welcome to the Angu Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
