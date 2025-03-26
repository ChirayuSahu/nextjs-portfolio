import React from 'react'
import ScrollReveal from './ui/ScrollReveal/ScrollReveal'
import { aboutData } from '@/data/aboutData'
import ScrollVelocity from './ui/ScrollVelocity/ScrollVelocity'

const AboutMe = () => {
    return (
        <>
            <div className='dark text-sm bg-black flex flex-col justify-center px-8 sm:px-32 w-full h-full p-8'>
                {aboutData.map((item: string) => (
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
            <div className='dark bg-black w-full py-8 sm:py-12'>
                <ScrollVelocity
                    texts={['Do Amazing things!']}
                    velocity={50}
                    className="text-white"
                />
            </div>
        </>
    )
}

export default AboutMe