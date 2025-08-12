'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar, Header, InputForm, PreviewArea, SmallPreview } from '@/components/ai-planner';
import { htmlTemplates } from '@/data/htmlTemplates';

// Figma에서 가져온 이미지 상수
const imgGrommetIconsLinkNext = "http://localhost:3845/assets/69f2bb5b63187d5c6d01d196f05acbc2c41ab156.svg";

// Figma에서 가져온 BeforeStart 컴포넌트
function BeforeStart({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="relative rounded-[5px] size-full cursor-pointer hover:bg-[#e8ecf2] transition-colors"
      data-name="before_start"
      id="node-8_1025"
      onClick={onClick}
    >
      <div className="overflow-clip relative size-full">
        <div
          className="absolute box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
          id="node-8_1020"
          style={{ left: "calc(50% + 0.5px)" }}
        >
          <div
            className="flex flex-col font-['Pretendard:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c3c8ce] text-[16px] text-left text-nowrap"
            id="node-8_1021"
          >
            <p className="block leading-[normal] whitespace-pre">
              AI 상세페이지 만들기
            </p>
          </div>
          <div
            className="relative shrink-0 size-[15px]"
            data-name="grommet-icons:link-next"
            id="node-8_1022"
          >
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgGrommetIconsLinkNext}
            />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c3c8ce] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

export default function Page() {
  const router = useRouter();
  
  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    advantages: [''],
    referenceUrl: ''
  });

  // HTML 미리보기 상태
  const [htmlContent, setHtmlContent] = useState('');
  const [showHtmlPreview, setShowHtmlPreview] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState('concept1');
  const [scrollTop, setScrollTop] = useState(0);

  // BeforeStart 버튼 클릭 핸들러 - 메인페이지로 이동
  const handleBeforeStartClick = () => {
    console.log('AI 상세페이지 만들기 버튼이 클릭되었습니다!');
    // 메인페이지로 이동
    router.push('/');
  };

  // 컴포넌트 마운트 시 concept.html 자동 로드
  useEffect(() => {
    loadConceptHtml();
  }, []);

  // 입력 필드 변경 핸들러
  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 장점 추가 핸들러
  const addAdvantage = () => {
    setFormData(prev => ({
      ...prev,
      advantages: [...prev.advantages, '']
    }));
  };

  // 장점 업데이트 핸들러
  const updateAdvantage = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      advantages: prev.advantages.map((adv, i) => i === index ? value : adv)
    }));
  };

  // 장점 삭제 핸들러
  const removeAdvantage = (index: number) => {
    if (formData.advantages.length > 1) {
      setFormData(prev => ({
        ...prev,
        advantages: prev.advantages.filter((_, i) => i !== index)
      }));
    }
  };

  // AI 기획 시작 핸들러
  const handleStartPlanning = () => {
    console.log('AI 기획 시작:', formData);
    // 여기에 AI 기획 로직 추가
  };

  // HTML 파일 업로드 핸들러
  const handleHtmlFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setHtmlContent(content);
        setShowHtmlPreview(true);
      };
      reader.readAsText(file);
    }
  };

  // URL에서 HTML 로드 핸들러
  const handleLoadHtmlFromUrl = () => {
    const url = prompt('HTML URL을 입력하세요:');
    if (url) {
      fetch(url)
        .then(response => response.text())
        .then(content => {
          setHtmlContent(content);
          setShowHtmlPreview(true);
        })
        .catch(error => {
          console.error('HTML 로드 실패:', error);
          alert('HTML 로드에 실패했습니다.');
        });
    }
  };

  // 기본 보기 핸들러
  const handleShowDefaultView = () => {
    setShowHtmlPreview(false);
    setHtmlContent('');
  };

  // 스크롤 동기화 핸들러
  const handleScrollChange = (scrollTop: number) => {
    // 스크롤 위치를 SmallPreview에 전달
    setScrollTop(scrollTop);
  };

  // concept.html 로드 핸들러
  const loadConceptHtml = async () => {
    try {
      const response = await fetch('/html-templates/concept.html');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const content = await response.text();
      setHtmlContent(content);
      setShowHtmlPreview(true);
      setCurrentTemplate('concept');
    } catch (error) {
      console.error('concept.html 로드 실패:', error);
      // 에러 발생 시 기본 HTML 내용으로 fallback
      const fallbackHtml = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Concept HTML</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .error-message { color: #666; text-align: center; margin-top: 100px; }
            </style>
        </head>
        <body>
            <div class="error-message">
                <h1>Concept HTML</h1>
                <p>concept.html 파일을 로드할 수 없습니다.</p>
                <p>파일이 올바른 위치에 있는지 확인해주세요.</p>
            </div>
        </body>
        </html>
      `;
      setHtmlContent(fallbackHtml);
      setShowHtmlPreview(true);
      setCurrentTemplate('fallback');
    }
  };

  // 템플릿 변경 핸들러 (사용하지 않음)
  const changeTemplate = async (template: string) => {
    setCurrentTemplate(template);
    const templatePath = htmlTemplates[template as keyof typeof htmlTemplates];
    
    try {
      const response = await fetch(templatePath);
      const content = await response.text();
      setHtmlContent(content);
      setShowHtmlPreview(true);
    } catch (error) {
      console.error('템플릿 로드 실패:', error);
      alert('템플릿 로드에 실패했습니다.');
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#f5f5f5] overflow-hidden" style={{ height: '100vh' }}>
      {/* 사이드바 */}
      <Sidebar />
      
      {/* 헤더 */}
      <Header />
      
      {/* 입력 폼 */}
      <InputForm
        formData={formData}
        onInputChange={handleInputChange}
        onAddAdvantage={addAdvantage}
        onUpdateAdvantage={updateAdvantage}
        onRemoveAdvantage={removeAdvantage}
        onStartPlanning={handleStartPlanning}
      />
      
      {/* 미리보기 영역 - Frame 80.svg 이미지 */}
      <div className="absolute h-screen left-[391px] overflow-hidden top-[78px] w-[860px]">
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src="/images/Frame 80.svg" 
            alt="Frame 80" 
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
      </div>
      
      {/* 작은 미리보기 영역 - Frame 80.svg 이미지 */}
      <div className="absolute bg-white h-[240.63px] left-[72px] overflow-hidden top-[78px] w-[187px]">
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src="/images/Frame 80.svg" 
            alt="Frame 80" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* BeforeStart 버튼 - Figma에서 가져온 디자인 (InputForm 영역에 맞게 조정) */}
      <div className="absolute right-[30px] bottom-[30px] w-[422px] h-[59px]">
        <div className="bg-[#f5f7fb] relative rounded-[5px] size-full">
          <BeforeStart onClick={handleBeforeStartClick} />
        </div>
      </div>
    </div>
  );
}