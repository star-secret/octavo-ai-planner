import React, { useRef, useEffect } from 'react';

interface SmallPreviewProps {
  htmlContent: string;
  showHtmlPreview: boolean;
  scrollTop?: number;
}

export function SmallPreview({ htmlContent, showHtmlPreview, scrollTop = 0 }: SmallPreviewProps) {
  const smallPreviewRef = useRef<HTMLDivElement>(null);

  // 메인 스크롤과 연동하여 작은 미리보기도 스크롤
  useEffect(() => {
    if (smallPreviewRef.current && showHtmlPreview) {
      // 메인 스크롤 위치에 비례하여 작은 미리보기도 스크롤
      const smallPreviewScrollTop = scrollTop * 0.12; // 스케일 비율에 맞춰 스크롤
      smallPreviewRef.current.scrollTop = smallPreviewScrollTop;
    }
  }, [scrollTop, showHtmlPreview]);

  if (!showHtmlPreview || !htmlContent) {
    // HTML 미리보기가 없을 때는 기본 안내 메시지 표시
    return (
      <div className="absolute bg-white h-screen left-[154px] overflow-clip shadow-[0px_1.411px_1.411px_0px_rgba(0,0,0,0.25)] top-[78px] w-[187px]">
        <div className="absolute flex flex-col font-semibold h-[11.996px] justify-center leading-[0] not-italic text-[#a7a7a7] text-[4.94px] text-center top-[33.87px] translate-x-[-50%] translate-y-[-50%] w-[132.664px]" style={{ left: "calc(50% - 1.059px)" }}>
          <p className="block leading-[normal]">
            오른쪽에서 채팅을 시작하고 상세페이지 기획을 시작해보세요
          </p>
        </div>
        <div className="absolute bg-[#e4e4e4] h-[162.872px] left-[42px] opacity-50 overflow-clip top-[51px] w-[102.766px]">
          <div className="absolute font-bold inset-[18.94%_30.75%_76.15%_32.28%] leading-[0] not-italic text-[#101010] text-[6.572px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              메인 카피 문구
            </p>
          </div>
          <div className="absolute font-normal inset-[14.39%_33.64%_83.15%_33.27%] leading-[0] not-italic text-[#101010] text-[3.585px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              메인 타이틀에 대한 설명
            </p>
          </div>
          <div className="absolute inset-[30.32%_25.47%_15.29%_25.46%]">
            <div className="absolute bottom-[-1.93%] left-[-1.5%] right-[-1.5%] top-0">
              <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 text-xs">로고</span>
              </div>
            </div>
          </div>
          <div className="absolute font-bold inset-[73.17%_41.22%_24.37%_41.27%] leading-[0] not-italic text-white text-[3.345px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              핵심 차별점 1
            </p>
          </div>
          <div className="absolute font-bold inset-[77.73%_40.35%_19.81%_41.16%] leading-[0] not-italic text-white text-[3.345px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              핵심 차별점 2
            </p>
          </div>
          <div className="absolute bg-[#c4c4c4] inset-[40.05%_27.91%_30.16%_27.9%]"></div>
          <div className="absolute font-bold inset-[34.05%_43.2%_62.27%_43.18%] leading-[0] not-italic text-[#101010] text-[5.377px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">제품명</p>
          </div>
          <div className="absolute font-bold leading-[0] left-[51.4px] not-italic text-[#777777] text-[4.506px] text-center text-nowrap top-[86.59px] translate-x-[-50%]">
            <p className="block leading-[normal] whitespace-pre">제품 이미지</p>
          </div>
        </div>
      </div>
    );
  }

  // HTML 미리보기가 있을 때는 축소된 HTML을 스크롤 가능하게 보여줌
  return (
    <div className="absolute bg-white h-screen left-[154px] overflow-hidden shadow-[0px_1.411px_1.411px_0px_rgba(0,0,0,0.25)] top-[78px] w-[187px]">
      {/* 축소된 HTML 미리보기 - 스크롤 가능 */}
      <div 
        ref={smallPreviewRef}
        className="w-full h-full overflow-y-auto overflow-x-hidden"
        style={{ 
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // IE/Edge
        }}
      >
        <div 
          className="origin-top-left"
          style={{ 
            transform: 'scale(0.12)', // 12% 스케일로 충분한 여유
            width: '1558px',  // 187px / 0.12 = 1558px
            height: '8333px'  // 100vh / 0.12 = 8333px (충분한 높이)
          }}
        >
          <iframe
            srcDoc={htmlContent}
            className="w-full h-full border-0"
            title="Small HTML Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
      
      {/* 파란색 박스 - 가운데 미리보기의 현재 위치를 정확하게 표시 */}
      <div 
        className="absolute border-2 border-blue-500 pointer-events-none"
        style={{
          left: '0px',
          top: `${(scrollTop * 0.12)}px`, // 스케일 비율에 맞춰 정확한 위치 계산
          width: '187px',
          height: `${(window.innerHeight * 0.12)}px`, // 화면 높이의 12%로 정확한 비율
          zIndex: 10,
          backgroundColor: 'transparent'
        }}
      />
      
      {/* 스크롤바 숨기기 (Webkit 브라우저) */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
