import React from 'react';

interface SmallPreviewProps {
  htmlContent: string;
  showHtmlPreview: boolean;
  scrollTop?: number;
}

export function SmallPreview({ htmlContent, showHtmlPreview, scrollTop = 0 }: SmallPreviewProps) {
  return (
    <div className="absolute bg-white left-[154px] overflow-hidden shadow-[0px_1.411px_1.411px_0px_rgba(0,0,0,0.25)] top-[63px] bottom-0 w-[187px]">
      {/* HTML 미리보기 또는 SVG 미리보기 */}
      {showHtmlPreview && htmlContent ? (
        <div className="w-full h-full overflow-hidden">
          <div 
            className="origin-top-left"
            style={{ 
              transform: `scale(0.15) translateY(${-(scrollTop * 0.6)}px)`, // 0.6 속도로 왼쪽 스크롤 동기화
              width: '1247px',  // 187px / 0.15 = 1247px (정확한 계산)
              height: '15000px' // 충분한 높이로 흰색 배경 방지
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
          
          {/* 파란색 박스 - 가운데 미리보기가 보여주는 위치를 왼쪽 작은 미리보기에서 정확하게 표시 */}
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
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="/images/preview.svg"
            alt="Small Preview"
            className="max-w-full max-h-full object-contain"
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
        </div>
      )}
    </div>
  );
}
