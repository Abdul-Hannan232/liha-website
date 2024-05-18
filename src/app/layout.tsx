
import ManagedModal from '@components/common/modal/managed-modal';
import { ManagedUIContext } from '@contexts/ui.context';
import { Inter, Manrope } from 'next/font/google';
import { dir } from 'i18next';
// import { languages } from '../i18n/settings';
import ManagedDrawer from '@components/common/drawer/managed-drawer';
import { Metadata } from 'next';
import ToasterProvider from 'src/app/provider/toaster-provider';
import Providers from 'src/app/provider/provider';
// import  "./[lang]/globals.css"
import  "./globals.css"
import AntiqueRefinedLayout from '@layouts/antique-refined/layout';

// external
import 'react-toastify/dist/ReactToastify.css';

// base css file
import '@assets/css/scrollbar.css';
import '@assets/css/swiper-carousel.css';
import '@assets/css/custom-plugins.css';
import '@assets/css/rc-drawer.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: {
    template: 'LIHA | %s',
    default: 'LIHA',
  },
};

// export async function generateStaticParams() {
//   return languages.map((lang) => ({ lang }));
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
    <html dir={dir('en')}>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Providers>
          <ManagedUIContext>
          {/* <AntiqueRefinedLayout> */}
            {children}
            {/* </ AntiqueRefinedLayout > */}
            <ManagedModal />
            <ManagedDrawer />
            <ToasterProvider />
          </ManagedUIContext>
        </Providers>
      </body>
    </html>
    </>
  );
}
