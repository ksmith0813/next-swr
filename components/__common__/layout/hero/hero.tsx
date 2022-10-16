import Image from 'next/image';
import BackgroundImage from 'public/web.png';

export const Hero = () => (
  <div className='hero-container'>
    <Image src={BackgroundImage} className='hero-image' alt='Hero' layout='fill' priority id='site-logo' />
    <div className='hero'>Next.js | SWR | GraphQL | Tailwind</div>
  </div>
);
