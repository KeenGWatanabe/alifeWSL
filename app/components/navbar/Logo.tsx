'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
  <div className="relative h-[40px] w-[40px]">
    <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        sizes="(max-width: 768px) 100px, 100px" // Adjusted sizes
        src="/images/logo.png"
      /> 
    </div> 
  );
};

export default Logo;