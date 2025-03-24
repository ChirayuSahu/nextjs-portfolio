import React from 'react'
import Image from 'next/image'
import { Spotlight } from './ui/spotlight-new'
import BlurText from './ui/BlurText'
import AnimatedContent from './ui/AnimatedContent/AnimatedContent'
import CustomButon from './ui/CustomButon'
import { socialData } from '@/data/socialData'

function Hero() {

  return (
    <>
      <div className='relative flex flex-col justify-center items-center bg-black text-white min-h-screen overflow-hidden'>
        <div className='absolute z-100 w-full'>
          <Spotlight />
        </div>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div className="flex flex-col items-center p-4 max-w-7xl  mx-auto relative z-10 w-full md:pt-0">
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 50 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className='py-10'>
                <Image
                  src={'/hero.png'}
                  height={220}
                  width={220}
                  alt=''
                  className='rounded-full'
                />
              </div>
            </AnimatedContent>
            <BlurText
              text="Hello there,"
              delay={15}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-7xl font-bold text-center"
            />
            <br />
            <BlurText
              text="this is Chirayu."
              delay={15}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-7xl font-bold text-center"
            />
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 50 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto animate-shine'>
                scroll down to know more about me!
              </p>
            </AnimatedContent>
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 50 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className='p-4'>
                <CustomButon text="Download CV" />
              </div>
              <div className='flex flex-grow items-center justify-center py-2 mx-auto'>
                {socialData.map((item, index) => (
                  <a href={item.url} key={index} className='p-1' target='_blank'>
                    {item.icon}
                    </a>
                ))}
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero