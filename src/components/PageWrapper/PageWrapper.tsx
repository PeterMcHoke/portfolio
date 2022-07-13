import { ReactElement } from 'react';
import Footer from '../Footer';

export default function PageWrapper({ children }: { children: any }) {
  return (
    <div className=" bg-gradient-radial from-primary to-primaryLighter text-white">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
