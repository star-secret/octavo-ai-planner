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
    <div className="h-full w-full">
      {/* HTML 미리보기 또는 SVG 미리보기 */}
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
          <img
            src="/images/preview.svg"
            alt="Preview"
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
       <div className="absolute bottom-0 left-0 right-0 h-8"></div>
    </div>
  );
}
