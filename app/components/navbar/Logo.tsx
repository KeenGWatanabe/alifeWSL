'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Logo = () => {
  const router = useRouter();

  return (
    <div className="relative h-[40px] w-[120px]">
      <Image
        onClick={() => router.push('/')}
        src="/images/logo.png"
        alt="Your Company Logo"
        fill
        priority // Add this for above-the-fold images
        sizes="(max-width: 768px) 100px, 120px" // Adjusted sizes
        className="object-contain"
        quality={85} // Optional: optimize quality
      /> 
    </div> 
  );
};

export default Logo;