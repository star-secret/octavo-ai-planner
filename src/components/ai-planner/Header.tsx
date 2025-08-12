import React from 'react';
import Image from 'next/image';

// 이미지 상수들
const imgEllipse3 = "/images/sidebar vector1.svg";
const img151 = "/images/Frame 3.svg";
const imgBxBell = "/images/Frame 3.svg";

export function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-row items-center justify-between px-[30px] py-3 left-[72px] right-0 top-0">
      <div className="h-[39px] relative shrink-0 w-[147px]">
        <div className="absolute h-[33px] left-px top-[3px] w-[120px]">
          <Image
            alt="물고기 로고"
            className="block max-w-none size-full"
            src={img151}
            width={120}
            height={33}
          />
        </div>
      </div>
      <div className="relative shrink-0 h-6 w-24">
        <Image
          alt="Frame 55"
          className="block max-w-none size-full"
          src="/images/Frame 55.svg"
          width={96}
          height={24}
        />
      </div>
    </div>
  );
}
