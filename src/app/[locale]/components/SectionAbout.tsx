import { nav, MENU } from '@/lib/constant';
import { useTranslations, useMessages } from 'next-intl';

function SectionAbout() {
    const t = useTranslations(nav.ABOUT);
    const title = useTranslations(MENU);
    const messages = useMessages();
    const keys = Object.keys(messages[nav.ABOUT]);
    return (
        <section id={nav.ABOUT} className='pt-24'>
            <h2 className='text-2xl '>{title(nav.ABOUT.toLowerCase())}</h2>
            {
                keys.map((key) => (
                    <p className='dark:text-slate-400 text-slate-500' key={key}>{t(key)}</p>
                ))
            }
        </section>
    )
}

export default SectionAbout