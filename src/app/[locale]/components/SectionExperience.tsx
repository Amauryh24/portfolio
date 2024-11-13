import { nav, MENU } from '@/lib/constant';
import React from 'react'
import TPLCard from './TPLCard'
import { useMessages, useTranslations } from 'next-intl';


export default function SectionExperience() {
    // https://next-intl-docs.vercel.app/docs/usage/messages
    const t = useTranslations(nav.EXPERIENCE);
    const title = useTranslations(MENU);
    const messages = useMessages();
    const keys = Object.keys(messages[nav.EXPERIENCE]);
    return (
        <section id={nav.EXPERIENCE} className='pt-24'>
            <h2 className='text-2xl '>{title(`${nav.EXPERIENCE.toLowerCase()}`)}</h2>
            <ul className='flex flex-col gap-4 '>
                {
                    keys.map((key) => (
                        <TPLCard key={key}
                            title={t(`${key}.role`)}
                            subtitle={t(`${key}.employeur`)}
                            year={t(`${key}.date`)}
                            summary={t(`${key}.description`)}
                            technos={t.raw(`${key}.technologies`)}
                        />
                    ))
                }
            </ul>

        </section>
    )
}
