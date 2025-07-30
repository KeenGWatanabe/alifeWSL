'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Logo = () => {
  const router = useRouter();

  return (
  <div className="relative h-[40px] w-[40px]">
    <Image
        alt="Logo"
        fill
        src="/images/logo.png"
        className="object-contain"
    /> 
    </div> 
  );
};

export default Logo;