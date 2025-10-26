import './globals.css';
import Navbar from './components/Navbar/Navbar';
import { Raleway } from 'next/font/google';
import Providers from './components/Providers/Providers';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Cargás solo lo que usás
  variable: '--font-raleway',
});

export const metadata = {
  title: 'Hernán Chuctaya – Desarrollador',
  description: 'Portafolio y blog personal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={raleway.variable}>
      <head />
      <body>
        <Providers>
          <Navbar />
          <main className="container" style={{ padding: '2rem 0', marginTop: '70px' }}>
            {children}
          </main>
          <footer style={{ padding: '2rem 0', borderTop: '1px solid #eee', marginTop: '3rem' }}>
            <div className="container">
              <p>&copy; {new Date().getFullYear()} Hernán Chuctaya</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
