"use client"
import { THEME } from '@/lib/constant';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { GrLanguage } from "react-icons/gr";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";



export default function LanguageSwitcher() {

    const t = useTranslations('Configuration');

    // Manage langage
    const router = useRouter();
    const pathname = usePathname();
    const handleLanguageToggle = () => {
        const newLocale = pathname.startsWith('/fr') ? 'en' : 'fr';
        router.push(`/${newLocale}${pathname.slice(3)}`);
    };

    // Manage theme
    const [darkMode, setIsDarkMode] = useState<boolean>(true);
    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add(THEME.dark.toLowerCase());
            localStorage.setItem("theme", THEME.dark);

        } else {
            root.classList.remove(THEME.dark.toLowerCase());
            localStorage.setItem("theme", THEME.light);

        }
    }, [darkMode]);


    const handleThemeToggle = () => {
        setIsDarkMode(!darkMode);
    };


    return (

        <div className='fixed top-4 right-8'>
            <button className='bg-cyan-900/60 rounded-full px-3 py-1 m-2 text-cyan-400 text-sm font-semibold flex items-center' onClick={handleLanguageToggle}>
                <GrLanguage className='mr-2' />
                {pathname.startsWith('/fr') ? t('language.english') : t('language.french')}
            </button>
            <button className='bg-cyan-900/60 rounded-full px-3 py-1 m-2 text-cyan-400 text-sm font-semibold flex items-center' onClick={handleThemeToggle}>
                {darkMode ? <MdOutlineLightMode className='mr-2' /> : <MdDarkMode className='mr-2' />}
                {darkMode ? t('theme.light') : t('theme.dark')}
            </button>
        </div>
    );
};