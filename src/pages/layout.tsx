import { Inter, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={cn(inter.variable, montserrat.variable)}>{children}</main>
  );
};

export default RootLayout;
