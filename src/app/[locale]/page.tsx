"use client"

import Header from './components/Header';
import LanguageSwitcher from './components/Configuration';
import SectionAbout from './components/SectionAbout';
import SectionExperience from './components/SectionExperience';
import SectionFormation from './components/SectionFormation';


export default function HomePage() {

  return (

    <div className="md:text-slate-900 md:dark:text-slate-400">
      <div className="mx-auto px-12  gap-4 max-w-screen-xl">
        <div className='md:flex md:justify-between lg:flex-none'>
          <LanguageSwitcher />
          <Header />
          <main className="md:w-1/2 dark:text-slate-300 text-slate-900">
            <SectionAbout />
            <SectionExperience />
            <SectionFormation />
          </main>
        </div>
      </div>
    </div>
  );
}