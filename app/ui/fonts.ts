import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter(
    { subsets: ['latin'] }
    );

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'], //load characters needed for latin based languages 
});