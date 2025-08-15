'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div className="relative h-[40px] w-[120px]">
      <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        width={50}
        height={40}
        src="/images/logo.png"
      /> 
    </div> 
  );
};

export default Logo;