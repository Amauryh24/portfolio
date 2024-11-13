"use client"
import { THEME, LANG } from '@/lib/constant';
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

    // Manage Theme
    const theme = localStorage.getItem("theme");
    const root = document.documentElement;
    const [isDarkMode, setIsDarkMode] = useState(theme === THEME.dark ? true : false);
    useEffect(() => {

        if (isDarkMode) {
            root.classList.add(THEME.dark.toLowerCase());
            localStorage.setItem("theme", THEME.dark);
        } else {
            root.classList.remove(THEME.dark.toLowerCase());
            localStorage.setItem("theme", THEME.light);
        }
    }, [isDarkMode]);

    const handleThemeToggle = () => setIsDarkMode(!isDarkMode);

    return (
        <div className='fixed top-4 right-8'>
            <button className='bg-cyan-900/60 rounded-full px-3 py-1 m-2 text-cyan-400 text-sm font-semibold flex items-center' onClick={handleLanguageToggle}>
                <GrLanguage className='mr-2' />
                {pathname.startsWith('/fr') ? t('language.english') : t('language.french')}
            </button>
            <button className='bg-cyan-900/60 rounded-full px-3 py-1 m-2 text-cyan-400 text-sm font-semibold flex items-center' onClick={handleThemeToggle}>
                {isDarkMode ? <MdOutlineLightMode className='mr-2' /> : <MdDarkMode className='mr-2' />}
                {isDarkMode ? t('theme.light') : t('theme.dark')}
            </button>
        </div>
    );
};