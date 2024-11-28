'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ComponentFramerMotion: React.FC = () => {
  const MotionDiv = motion.div;

  return (
    <div className="relative [perspective:1500px]">
      <MotionDiv
        className="relative w-[500px] h-[500px]"
        animate={{ rotateY: [0, 360] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
       
        <div className="absolute inset-0 flex items-center justify-center bg-transparent [backface-visibility:hidden]">
          <Image
            src="/images/logoBgTransparent.webp"
            alt="Logo"
            width={400}
            height={400}
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center bg-transparent [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image src="/images/roadmap.webp" alt="Foto" width={500} height={500} className='rounded-xl'/>
        </div>
      </MotionDiv>
    </div>
  );
};

export default ComponentFramerMotion;
