
"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

export default function Header() {

    const info = useTranslations('information');
    const menu = useTranslations("Menu");

    const [itemActive, setLinkIsActive] = useState(menu('about'));

    const handleToggleActiveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const menuItem = e.currentTarget.getAttribute("data-name");
        if (menuItem) {
            setLinkIsActive(menuItem)
        }
    }

    return (
        <header className='ms:initial md:sticky top-0 ms:w-full md:w-1/2 max-h-screen py-12 md:py-24 ms:overflow-auto'>
            <div>
                <h1 className='text-4xl font-bold dark:text-slate-200'>Henrottay Amaury</h1>
                <h2 className='text-lg'>{info('position')}</h2>
                <p className='ms:w-full md:w-3/4   text-slate-400'>{info('introduction')}</p>
            </div>
            <nav className='ms:py-8 md:py-32'>
                <ul>
                    <li className={`flex items-center ms:py-2 md:py-3`}>
                        <a className={`group/link flex items-center`} data-name={menu('about')} href="#About" onClick={handleToggleActiveLink} >
                            <span className={`block mr-4 h-2 transition-all group-hover/link:w-16 group-hover/link:bg-slate-200 group-focus/link:bg-cyan-400 group-focus/link:w-16 pointer-events-none
                                ${itemActive === menu('about') ? 'bg-cyan-400 w-16' : 'bg-slate-600 w-8'}`}></span>
                            <span className={`text-xs font-bold uppercase tracking-widest  group-hover/link:text-slate-200 group-focus/link:text-cyan-400 pointer-events-none 
                                ${itemActive === menu('about') ? 'text-cyan-400' : 'text-slate-400'}`}>
                                {menu('about')}
                            </span>
                        </a>
                    </li>
                    <li className={`flex items-center py-3`}>
                        <a className={`group/link flex items-center`} data-name={menu('experience')} href="#Experience" onClick={handleToggleActiveLink}>
                            <span className={`block mr-4 h-2 transition-all group-hover/link:w-16 group-hover/link:bg-slate-200 group-focus/link:bg-cyan-400 group-focus/link:w-16 pointer-events-none
                                ${itemActive === menu('experience') ? 'bg-cyan-400 w-16' : 'bg-slate-600 w-8'}`}></span>
                            <span className={`text-xs font-bold uppercase tracking-widest  group-hover/link:text-slate-200 group-focus/link:text-cyan-400 pointer-events-none 
                                ${itemActive === menu('experience') ? 'text-cyan-400' : 'text-slate-400'}`}>
                                {menu('experience')}
                            </span>
                        </a>
                    </li>

                    <li className={`flex items-center py-3`}>
                        <a className={`group/link flex items-center`} data-name={menu('training')} href="#formation" onClick={handleToggleActiveLink}>
                            <span className={`block mr-4 h-2 transition-all group-hover/link:w-16 group-hover/link:bg-slate-200 group-focus/link:bg-cyan-400 group-focus/link:w-16 pointer-events-none
                                ${itemActive === menu('training') ? 'bg-cyan-400 w-16' : 'bg-slate-600 w-8'}`}></span>
                            <span className={`text-xs font-bold uppercase tracking-widest  group-hover/link:text-slate-200 group-focus/link:text-cyan-400 pointer-events-none 
                                ${itemActive === menu('training') ? 'text-cyan-400' : 'text-slate-400'}`}>
                                {menu('training')}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className='text-2xl flex w-1/6 justify-around dark:text-cyan-400 text-cyan-900'>
                <a href="www.linkedin.com/in/amauryhenrottay" target="_blank"> <FaLinkedin /></a>
                <a href="https://www.facebook.com/amaury.henrottay/" target="_blank"><FaFacebookSquare /></a>
                <a href="https://github.com/Amauryh24" target="_blank"><FaGithubSquare /></a>

            </div>
        </header>
    )
}
