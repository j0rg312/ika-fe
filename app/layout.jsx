import './globals.css';
import { Toaster } from 'sonner';
import Header from '../src/components/ui/header/Header';
import Footer from '../src/components/ui/footer/Footer';
import ScrollToTop from '../src/components/ui/ux/scrollToTop/SccrollTop';
 // Mantenemos App.css porque incluye estilos para .app-container y .main-content

export const metadata = {
  title: 'Internet Knowledge Aplied',
  description: 'Internet Knowledge Applied Landing Page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
        <ScrollToTop />
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" richColors theme="light" />
      </body>
    </html>
  );
}
