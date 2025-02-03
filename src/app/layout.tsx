import "./globals.css";
import { Header } from '../app/components/Header';
import { Footer } from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <Header />

        <main className="flex-grow overflow-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
