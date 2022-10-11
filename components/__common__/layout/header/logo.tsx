import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Signature from 'public/signature.png';

export const Logo = () => {
  const router = useRouter();
  return (
    <div className='w-auto inline-flex cursor-pointer'>
      <Image
        src={Signature}
        alt='Logo'
        layout='fixed'
        width={160}
        height={45}
        priority
        onClick={() => router.push({ pathname: '/' })}
        id='site-logo'
      />
    </div>
  );
};
