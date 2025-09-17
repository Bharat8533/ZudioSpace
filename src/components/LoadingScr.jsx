import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LoadingScr = () => {
  const loaderContainer = useRef(null)
  const headingRef = useRef(null)
  const subtextRef = useRef(null)
  const logoRef    = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current.querySelectorAll('span'), {
      y: 60,
      opacity: 0
    })

    tl.to(headingRef.current.querySelectorAll('span'), {
      y: 0,
      duration: 0.3,
      stagger: 0.1,
      opacity: 1,
      ease: 'circ.inOut'
    })

    tl.from(subtextRef.current.querySelectorAll('span'), {
      y : 40,
      opacity : 0,
      ease : 'power1'
    })

    tl.to(subtextRef.current.querySelectorAll('span'), {
      y: 0,
      duration: 1,
      opacity: 1,
      stagger : 0.1,
      ease: 'power1.inOut'
    })

    tl.to(logoRef.current, {
      x : 1500,
      scale : 100,
      duration : 2,
      delay : 1
    })

    tl.to(loaderContainer.current, {
      display : 'none',
    })

  }, [])

  return (
    <div ref={loaderContainer} className='fixed top-0 left-0 right-0 flex justify-center items-center flex-col w-screen h-screen bg-black text-white gap-6 overflow-hidden'>
      <div ref={logoRef}
        className='bg-black w-40 h-40 border border-white rounded-full text-8xl flex justify-center items-center z-10'>
        Z
      </div>

      <h3 ref={headingRef}
        className='flex gap-2 text-4xl font-semibold tracking-widest uppercase p-4 overflow-hidden'>
        {'Welcome to Zudio'.split('').map((char, index) => (
          <span key={index} className='block'>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h3>
      <h5 ref={subtextRef} className='flex gap-2 text-lg overflow-hidden'>
        {
          'Affordable Fashion. Everyday Essentials. Just for You.'.split(' ').map((char, index) => {
            return (
              <span key={index} className='block'>
                {char}
              </span>
            )
          })
        }
        
      </h5>
    </div>
  )
}

export default LoadingScr
