import React from 'react';
import Image from 'next/image';

// 이미지 상수들
const imgEllipse3 = "http://localhost:3845/assets/7d0f870ea30f4a3bb47fb3084e454cb16b74b15f.png";
const img151 = "http://localhost:3845/assets/36df531db7e90b5b928377ac0e4c893177f220e8.svg";
const imgBxBell = "http://localhost:3845/assets/a42a4e030e27c3483b129733317d05a9ad3f1be1.svg";

export function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-row items-center justify-between px-[30px] py-5 right-0 top-0 w-[1440px]">
      <div className="h-[39px] relative shrink-0 w-[147px]">
        <div className="absolute flex flex-col font-serif h-[34px] justify-center leading-[0] left-[87.41px] not-italic text-[#22202a] text-[40px] text-center top-5 translate-x-[-50%] translate-y-[-50%] w-[116.821px]">
          <p className="block leading-[normal]">Hookable</p>
        </div>
        <div className="absolute h-[33px] left-px top-[3px] w-[26.108px]">
          <Image
            alt="물고기 로고"
            className="block max-w-none size-full"
            src={img151}
            width={26}
            height={33}
          />
        </div>
      </div>
      <div className="box-border content-stretch flex flex-row gap-5 items-center justify-end p-0 relative shrink-0 w-[719.5px]">
        <div className="relative shrink-0 size-6">
          <Image
            alt="알림"
            className="block max-w-none size-full"
            src={imgBxBell}
            width={24}
            height={24}
          />
        </div>
        <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0">
          <div className="bg-[#eef2f8] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[5px] py-[3px] relative rounded-[20px] shrink-0">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4d5154] text-[14px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">PLUS</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[38px]">
            <Image
              alt="프로필"
              className="block max-w-none size-full"
              height="38"
              src={imgEllipse3}
              width="38"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
