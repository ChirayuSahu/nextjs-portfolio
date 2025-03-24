import React from 'react'
import ScrollReveal from './ui/ScrollReveal/ScrollReveal'
import { aboutData } from '@/data/aboutData'

const AboutMe = () => {
    return (
        <>
            <div className='dark text-sm bg-black flex flex-col justify-center px-8 sm:px-32 w-full h-full p-8'>
                {aboutData.map((item: string)=>(
                <ScrollReveal
                    baseOpacity={0.2}
                    enableBlur={true}
                    baseRotation={2}
                    blurStrength={3}
                    textClassName='text-white text-xl sm:text-3xl'
                    key={item}
                >
                    {item}
                    
                </ScrollReveal>
                ))}
            </div>
        </>
    )
}

export default AboutMe