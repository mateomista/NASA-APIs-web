
import { Play } from 'next/font/google';
import { Spacer } from '@nextui-org/react';
import Instagram from '@/app/ui/svgs/instagram.svg'
import Github from '@/app/ui/svgs/gitsvg.svg'
import Linkedin from '@/app/ui/svgs/linkedin.svg'
import Gmail from '@/app/ui/svgs/gmail.svg'


export const play = Play({
    subsets: ['latin'],
    display: 'swap',
    weight: '700',
  });
  
  export const Navbar = () => {
    return (
      <div className="navbar">
        <a href="/" className={`${play.className} antialased`}>NASA</a>
        <Spacer flex={1} />
        <div className="nav-links">
          <a href="/potd" className={`${play.className} antialased`}>Picture Of The Day</a>
          <a href="/rovers" className={`${play.className} antialased`}>Mars Rovers</a>
          <a className='caja-icono' href="https://www.instagram.com/mateomista5/"><Instagram color="white"/></a>
          <a className='caja-icono' href="https://www.linkedin.com/in/mateo-mista"><Linkedin color="white"/></a>
          <a className='caja-icono' href="https://github.com/mateomista"><Github color="white"/></a>
          <a className='caja-icono' href="https://www.mateomista5@gmail.com"><Gmail color="white"/></a>
          
        </div>
      </div>
    );
  };