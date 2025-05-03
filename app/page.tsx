import { ReactElement } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { AboutUs } from '@/app/components/AboutUs';
import { Services } from '@/app/components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';

export default function Home(): ReactElement {
  return (
    <main>
      <Navigation />
      <div className="text-gray-600 antialiased">
        <AboutUs />
        <Services />
        <Gallery />
        <Contact />
      </div>
    </main>

  )
}
