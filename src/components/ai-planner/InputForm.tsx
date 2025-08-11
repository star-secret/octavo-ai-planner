import React from 'react';
import Image from 'next/image';

// 이미지 상수들
const imgEllipse5 = "http://localhost:3845/assets/26ab013fb7ebc1d8ae422786d40dd53c6f6e8d8b.svg";
const imgMdiQuestionMarkCircleOutline = "http://localhost:3845/assets/66c55ece5f2a2ddda4f9ff4b2cd69cff8292a0d6.svg";
const imgMaterialSymbolsSearch = "http://localhost:3845/assets/f38b3b412ab5573e8af47fe0bba35652a9d33aaf.svg";
const img0405062 = "http://localhost:3845/assets/eb7a3cc23dc1ff675f75287c6c7ff071089cf6f5.png";
const imgImage9 = "http://localhost:3845/assets/24b1ae9a289902903b7c935665a76bc6796c75e6.png";
const imgTdesignFileAdd = "http://localhost:3845/assets/ea463f1c3a5c351cb6a1d978e20569a46e4edbf7.svg";

interface InputFormProps {
  formData: {
    productName: string;
    category: string;
    advantages: string[];
    referenceUrl: string;
  };
  onInputChange: (field: string, value: string | string[]) => void;
  onAddAdvantage: () => void;
  onUpdateAdvantage: (index: number, value: string) => void;
  onRemoveAdvantage: (index: number) => void;
  onStartPlanning: () => void;
}

export function InputForm({
  formData,
  onInputChange,
  onAddAdvantage,
  onUpdateAdvantage,
  onRemoveAdvantage,
  onStartPlanning
}: InputFormProps) {
  return (
    <div className="absolute bg-white h-screen right-0 overflow-clip top-[78px] w-[481px]">
      <div className="absolute box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 top-[41px] translate-x-[-50%] w-[422px]" style={{ left: "calc(50% - 0.5px)" }}>
        
        {/* 상품명 입력 */}
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black text-[16px] text-left text-nowrap">
                상품명
              </div>
              <div className="relative shrink-0 size-[5px]">
                <Image
                  alt="필수"
                  className="block max-w-none size-full"
                  src={imgEllipse5}
                  width={5}
                  height={5}
                />
              </div>
            </div>
            <div className="relative shrink-0 size-[17px]">
              <Image
                alt="도움말"
                className="block max-w-none size-full"
                src={imgMdiQuestionMarkCircleOutline}
                width={17}
                height={17}
              />
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="relative rounded-[10px] shrink-0 w-full">
              <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip px-[15px] py-[11px] relative w-full">
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => onInputChange('productName', e.target.value)}
                  placeholder="상품명을 입력하세요"
                  className="flex-1 font-normal text-[16px] text-black bg-transparent border-none outline-none placeholder:text-[#bbbbbb]"
                />
                <div className="relative shrink-0 size-6">
                  <Image
                    alt="검색"
                    className="block max-w-none size-full"
                    src={imgMaterialSymbolsSearch}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[10px]"></div>
            </div>
          </div>
        </div>

        {/* 상품 카테고리 입력 */}
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black text-[16px] text-left text-nowrap">
              상품 카테고리
            </div>
            <div className="relative shrink-0 size-[5px]">
              <Image
                alt="필수"
                className="block max-w-none size-full"
                src={imgEllipse5}
                width={5}
                height={5}
              />
            </div>
          </div>
          <div className="relative rounded-[10px] shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip px-[15px] py-[11px] relative w-full">
              <input
                type="text"
                value={formData.category}
                onChange={(e) => onInputChange('category', e.target.value)}
                placeholder="카테고리를 입력하세요"
                className="flex-1 font-normal text-[16px] text-black bg-transparent border-none outline-none placeholder:text-[#bbbbbb]"
              />
              <div className="relative shrink-0 size-6">
                <Image
                  alt="검색"
                  className="block max-w-none size-full"
                  src={imgMaterialSymbolsSearch}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[10px]"></div>
          </div>
        </div>

        {/* 상품이미지 입력 */}
        <div className="bg-white box-border content-stretch flex flex-col gap-3.5 h-[177px] items-start justify-start p-0 relative shrink-0 w-[422px]">
          <div className="box-border content-stretch flex flex-row gap-3.5 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black text-[16px] text-left text-nowrap">
              상품이미지
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="h-[124px] relative rounded-[10px] shrink-0 w-full">
              <div className="h-[124px] overflow-clip relative w-full">
                <div className="absolute box-border content-stretch flex flex-row gap-1.5 items-start justify-start left-[9px] p-0 top-[9px]">
                  <div
                    className="bg-cover bg-no-repeat rounded-[10px] shrink-0 size-[105px] cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ backgroundImage: `url('${img0405062}')` }}
                    onClick={() => alert('이미지 업로드 기능을 추가할 수 있습니다')}
                  />
                  <div
                    className="bg-cover bg-no-repeat rounded-[10px] shrink-0 size-[104px] cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ backgroundImage: `url('${imgImage9}')` }}
                    onClick={() => alert('이미지 업로드 기능을 추가할 수 있습니다')}
                  />
                </div>
              </div>
              <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[10px]"></div>
            </div>
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bbbbbb] text-[12px] text-left text-nowrap">
              상품이 선명하게 나온 이미지를 첨부해주세요(목업이미지 등)
            </div>
          </div>
        </div>

        {/* 상품의 장점 입력 */}
        <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row gap-3.5 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black text-[16px] text-left text-nowrap">
              상품의 장점
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="h-[146px] relative rounded-[10px] shrink-0 w-full">
              <div className="h-[146px] overflow-clip relative w-full">
                <div className="absolute flex flex-col font-normal justify-center leading-[0] left-4 not-italic text-[#bbbbbb] text-[16px] text-left text-nowrap top-[63px] translate-y-[-50%] w-[300px]">
                  <ol className="list-decimal space-y-2">
                    {formData.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={advantage}
                          onChange={(e) => onUpdateAdvantage(index, e.target.value)}
                          placeholder={`장점 ${index + 1}`}
                          className="flex-1 font-normal text-[16px] text-black bg-transparent border-none outline-none placeholder:text-[#bbbbbb]"
                        />
                        <button
                          onClick={() => onRemoveAdvantage(index)}
                          className="text-red-500 hover:text-red-700 text-sm px-2 py-1 rounded"
                          disabled={formData.advantages.length <= 1}
                        >
                          삭제
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>
                <button
                  onClick={onAddAdvantage}
                  className="absolute left-4 bottom-4 text-blue-500 hover:text-blue-700 text-sm px-2 py-1 rounded border border-blue-300 hover:border-blue-500"
                >
                  + 장점 추가
                </button>
                <div className="absolute left-[362px] size-[19px] top-[110px]"></div>
                <div className="absolute left-[385px] size-[19px] top-[111px]">
                  <Image
                    alt="파일 추가"
                    className="block max-w-none size-full"
                    src={imgTdesignFileAdd}
                    width={19}
                    height={19}
                  />
                </div>
              </div>
              <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[10px]"></div>
            </div>
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bbbbbb] text-[12px] text-left text-nowrap">
              강조하고 싶은 상품의 장점을 적어주세요.
            </div>
          </div>
        </div>

        {/* 디자인 레퍼런스 입력 */}
        <div className="box-border content-stretch flex flex-col gap-[5px] h-[91px] items-start justify-start p-0 relative shrink-0 w-[422px]">
          <div className="box-border content-stretch flex flex-row gap-3.5 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black text-[16px] text-left text-nowrap">
              디자인 레퍼런스:
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="h-[47px] relative rounded-[10px] shrink-0 w-full">
              <div className="h-[47px] overflow-clip relative w-full">
                <input
                  type="url"
                  value={formData.referenceUrl}
                  onChange={(e) => onInputChange('referenceUrl', e.target.value)}
                  placeholder="https://example.com"
                  className="absolute bg-white block h-[27px] left-3.5 rounded-[5px] top-2 w-[304px] px-3 py-1 border border-gray-300 focus:border-blue-500 focus:outline-none text-[14px]"
                />
              </div>
              <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[10px]"></div>
            </div>
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bbbbbb] text-[12px] text-left text-nowrap">
              타사 상세페이지 URL 을 넣으면 옥타보가 비슷한 느낌을 재연해요.
            </div>
          </div>
        </div>

        {/* AI 기획 시작 버튼 */}
        <button 
          onClick={onStartPlanning}
          className="bg-[#22202a] block cursor-pointer h-[59px] overflow-clip relative rounded-[5px] shrink-0 w-[422px] hover:bg-[#2d2a36] transition-colors"
        >
          <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[162px] not-italic text-white text-[16px] text-left text-nowrap top-[29.5px] translate-y-[-50%]">
            <p className="block leading-[normal] whitespace-pre">AI 기획 시작 ✨</p>
          </div>
        </button>
      </div>
    </div>
  );
}
