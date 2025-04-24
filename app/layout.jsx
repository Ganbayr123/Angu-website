export const metadata = {
  title: 'Angu',
  description: 'Welcome to the Angu Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
