import React, { useRef, useEffect, useState } from 'react';

interface PreviewAreaProps {
  htmlContent: string;
  showHtmlPreview: boolean;
  currentTemplate: string;
  onScrollChange?: (scrollTop: number) => void;
}

export function PreviewArea({
  htmlContent,
  showHtmlPreview,
  currentTemplate,
  onScrollChange
}: PreviewAreaProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  // iframe 내부의 스크롤 이벤트를 감지
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !showHtmlPreview) return;

    const handleIframeLoad = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const handleScroll = () => {
            const newScrollTop = iframeDoc.documentElement.scrollTop || iframeDoc.body.scrollTop;
            setScrollTop(newScrollTop);
            if (onScrollChange) {
              onScrollChange(newScrollTop);
            }
          };

          iframeDoc.addEventListener('scroll', handleScroll);
          return () => iframeDoc.removeEventListener('scroll', handleScroll);
        }
      } catch (error) {
        console.log('iframe 접근 제한으로 인해 스크롤 동기화가 제한됩니다.');
      }
    };

    iframe.addEventListener('load', handleIframeLoad);
    return () => iframe.removeEventListener('load', handleIframeLoad);
  }, [showHtmlPreview, onScrollChange]);

  return (
    <div className="absolute bg-white h-screen left-[391px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[78px] w-[860px]">
      {/* HTML 미리보기 */}
      {showHtmlPreview && htmlContent ? (
        <div className="h-full w-full">
          <iframe
            ref={iframeRef}
            srcDoc={htmlContent}
            className="w-full h-full border-0"
            title="HTML Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center text-gray-500">
            <p className="text-lg mb-2">HTML 미리보기</p>
            <p className="text-sm">concept.html을 로드하세요</p>
          </div>
        </div>
      )}
    </div>
  );
}
