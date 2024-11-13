import React from 'react'

interface TPLExperience {
    title: string,
    subtitle: string,
    year: string,
    summary: string,
    technos: string[]
}

export default function TPLCard({ title, subtitle, year, summary, technos }: TPLExperience) {
    //console.log("info data -->", title, subtitle, year, summary, technos);
    // console.log("info data -->", technos);

    return (

        <li className='grid grid-cols-8 gap-3 p-3 m-3'>
            <div className='col-span-2'>
                <p className='dark:text-slate-500 text-slate-400'>{year}</p>
            </div>
            <div className='col-start-3 col-span-6'>
                <h2 className='dark:text-slate-100 text-slate-800 text-xl'>{title}</h2>
                <h3 className='dark:text-slate-500 text-slate-400'>{subtitle}</h3>
                <p className=' dark:text-slate-400 text-slate-500 mt-2'>{summary}</p>
                <ul className='flex flex-wrap'>
                    {
                        technos && technos.map((techno: string, index: number) => (
                            <li key={index} className=' border-2 dark:border-cyan-800 border-slate-500 px-3 py-1 m-1 rounded-full dark:text-cyan-400 text-slate-700 text-sm font-semibold tracking-wider'>{techno}</li>
                        ))
                    }
                </ul>

            </div>

        </li>

    )
}
