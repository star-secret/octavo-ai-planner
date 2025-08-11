import React from 'react';

interface SmallPreviewProps {
  htmlContent: string;
  showHtmlPreview: boolean;
  scrollTop?: number;
}

export function SmallPreview({ htmlContent, showHtmlPreview, scrollTop = 0 }: SmallPreviewProps) {
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

  // HTML 미리보기가 있을 때는 축소된 HTML을 고정 위치로 보여줌
  return (
    <div className="absolute bg-white h-screen left-[154px] overflow-hidden shadow-[0px_1.411px_1.411px_0px_rgba(0,0,0,0.25)] top-[78px] w-[187px]">
      {/* 축소된 HTML 미리보기 - 고정 위치 (스크롤 없음) */}
      <div className="w-full h-full overflow-hidden">
        <div 
          className="origin-top-left"
          style={{ 
            transform: `scale(0.15) translateY(${-(scrollTop * 0.6)}px)`, // 0.6 속도로 왼쪽 스크롤 동기화
            width: '1247px',  // 187px / 0.15 = 1247px (정확한 계산)
            height: '15000px' // 100vh / 0.15 = 6667px → 15000px로 증가하여 흰색 배경 방지
          }}
        >
          <iframe
            srcDoc={htmlContent}
            className="w-full h-full border-0"
            title="Small HTML Preview"
            sandbox="allow-scripts allow-same-origin"
            style={{
              backgroundColor: 'transparent' // iframe 배경을 투명하게 설정
            }}
          />
        </div>
      </div>
      
      {/* 파란색 박스 - 가운데 미리보기가 보여주는 위치를 왼쪽 작은 미리보기에서 정확하게 표시 */}
      {/* 
        수학적 계산 (정확한 위치 매칭):
        - 가운데 스크롤: scrollTop * 1.0 (100%)
        - 왼쪽 스크롤: translateY(-(scrollTop * 0.6)) (60% 속도)
        - 파란색 박스 위치: 가운데의 현재 위치를 왼쪽에서 찾는 정확한 계산
        - 공식: (scrollTop * 0.6) - (scrollTop * 0.6) = 0 (왼쪽 스크롤과 상대적 위치)
      */}
      <div 
        className="absolute border-2 border-blue-500 pointer-events-none"
        style={{
          left: '0px',
          top: `${scrollTop * 0.06}px`, // 스케일 0.15에 맞춰 정확한 위치 계산
          width: '187px',
          height: `${window.innerHeight * 0.15}px`, // 화면 높이의 15%로 정확한 비율
          zIndex: 10,
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
}
