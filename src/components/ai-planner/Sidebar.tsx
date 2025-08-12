import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// 이미지 상수들
const imgPhListBold = "/images/sidebar_vector1.svg";
const imgVector = "/images/sidebar_vector2.svg";
const imgFamiconsSettingsSharp = "/images/sidebar_vector3.svg";

interface SidebarProps {
  onFormReset?: () => void;
}

export function Sidebar({ onFormReset }: SidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const router = useRouter();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditClick = () => {
    // 폼 초기화 및 편집 모드 전환
    console.log('편집 모드로 전환하고 폼을 초기화합니다!');
    if (onFormReset) {
      onFormReset();
    }
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
      <div className="absolute bg-white box-border content-stretch flex flex-col h-screen items-center justify-between left-0 pb-[70px] pt-[30px] px-[30px] top-0 w-[72px]">
        <div className="box-border content-stretch flex flex-col gap-[45px] items-center justify-start p-0 relative shrink-0 w-full">
          {/* 메뉴 아이콘 - 클릭 시 메뉴패널 열기/닫기 */}
          <div 
            className="relative shrink-0 size-5 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={handleMenuClick}
          >
            <Image
              alt="메뉴"
              className="block max-w-none size-full"
              src={imgPhListBold}
              width={20}
              height={20}
            />
          </div>
          
          {/* 편집 아이콘 - 클릭 시 편집 페이지로 이동 */}
          <div 
            className="relative shrink-0 size-5 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={handleEditClick}
          >
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
        
        {/* 설정 아이콘 - 클릭 시 설정패널 열기/닫기 */}
        <div 
          className="relative shrink-0 size-5 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={handleSettingsClick}
        >
          <Image
            alt="설정"
            className="block max-w-none size-full"
            src={imgFamiconsSettingsSharp}
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* 메뉴패널 */}
      {isMenuOpen && (
        <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg left-[72px] top-0 w-64 h-screen z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">메뉴</h3>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2">
            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">대시보드</div>
            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">프로젝트</div>
            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">템플릿</div>
            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">도움말</div>
          </div>
        </div>
      )}

      {/* 설정패널 */}
      {isSettingsOpen && (
        <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg left-[72px] bottom-0 w-64 h-80 z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">설정</h3>
            <button 
              onClick={() => setIsSettingsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2">
            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">계정 설정</div>
            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">테마 설정</div>
            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">언어 설정</div>
            <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">알림 설정</div>
          </div>
        </div>
      )}
    </>
  );
}
