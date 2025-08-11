import React from 'react';
import Image from 'next/image';

// 이미지 상수들
const imgPhListBold = "http://localhost:3845/assets/f6e0eaf6d934a122f44ae750d9ccc8567a9a1f73.svg";
const imgVector = "http://localhost:3845/assets/038c3bcfe564e26545dec0a4a02c0cbfaf0c40cf.svg";
const imgFamiconsSettingsSharp = "http://localhost:3845/assets/86cce428c22d273cc50744f9b78f79e85d701805.svg";

export function Sidebar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-screen items-center justify-between left-0 pb-[70px] pt-[30px] px-[30px] top-0 w-[72px]">
      <div className="box-border content-stretch flex flex-col gap-[45px] items-center justify-start p-0 relative shrink-0 w-full">
        <div className="relative shrink-0 size-5">
          <Image
            alt="메뉴"
            className="block max-w-none size-full"
            src={imgPhListBold}
            width={20}
            height={20}
          />
        </div>
        <div className="relative shrink-0 size-5">
          <div className="relative size-full">
            <div className="absolute inset-[12.5%]">
              <Image
                alt="편집"
                className="block max-w-none size-full"
                src={imgVector}
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-5">
        <Image
          alt="설정"
          className="block max-w-none size-full"
          src={imgFamiconsSettingsSharp}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
