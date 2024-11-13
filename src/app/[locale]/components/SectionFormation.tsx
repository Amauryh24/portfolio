"use client"
import { nav, MENU } from '@/lib/constant';
import TPLCard from './TPLCard'
import { useMessages, useTranslations } from 'next-intl';



export default function SectionFormation() {
    const t = useTranslations('Formations');
    const messages = useMessages();
    const keys = Object.keys(messages.Formations);


    // const t = useTranslations(nav.TRAINING);
    const title = useTranslations(MENU);
    // const messages = useMessages();
    // const keys = Object.keys(messages[nav.TRAINING]);


    return (
        <section id="formation" className='py-24'>
            <h2 className='text-2xl '>{title(`${nav.TRAINING.toLowerCase()}`)}</h2>
            {
                keys.map((key) => (
                    <TPLCard key={key}
                        title={t(`${key}.diplome`)}
                        subtitle={t(`${key}.etablissement`)}
                        year={t(`${key}.date`)}
                        summary={t(`${key}.description`)}
                        technos={t.raw(`${key}.technologies`)}
                    />
                ))
            }

        </section>
    )
}
