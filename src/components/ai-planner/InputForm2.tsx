import React, { useState } from 'react';

interface InputForm2Props {
  onStartPlanning: () => void;
}

export default function InputForm2({ onStartPlanning }: InputForm2Props) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [options, setOptions] = useState('');
  const [sellingPoints, setSellingPoints] = useState(['']);

  const addSellingPoint = () => {
    if (sellingPoints.length < 10) {
      setSellingPoints([...sellingPoints, '']);
    }
  };

  const updateSellingPoint = (index: number, value: string) => {
    const newPoints = [...sellingPoints];
    newPoints[index] = value;
    setSellingPoints(newPoints);
  };

  const removeSellingPoint = (index: number) => {
    if (sellingPoints.length > 1) {
      const newPoints = sellingPoints.filter((_, i) => i !== index);
      setSellingPoints(newPoints);
    }
  };

  return (
    <div className="bg-white relative w-full h-full">
      <div className="absolute top-[41px] left-1/2 transform -translate-x-1/2 w-[422px] flex flex-col gap-5">
        {/* 상품명 */}
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex flex-row gap-[5px] items-center">
            <div className="flex flex-row gap-[3px] items-center">
              <div className="font-['Pretendard:Medium',_sans-serif] text-[#424242] text-[16px]">
                상품명
              </div>
              <div className="w-[5px] h-[5px] bg-[#ff6b6b] rounded-full"></div>
            </div>
            <div className="w-[17px] h-[17px] text-[#424242]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
              </svg>
            </div>
          </div>
          <div className="h-[45px] w-full rounded-[10px] border border-slate-300">
            <div className="h-full px-[15px] py-2.5 flex items-center">
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="예시: 씨없는 고당도 포도 샤인머스킷"
                className="w-full text-[16px] text-[#bbbbbb] placeholder-[#bbbbbb] bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* 상품 카테고리 */}
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex flex-row gap-[3px] items-center">
            <div className="font-['Pretendard:Medium',_sans-serif] text-[#424242] text-[16px]">
              상품 카테고리
            </div>
            <div className="w-[5px] h-[5px] bg-[#ff6b6b] rounded-full"></div>
          </div>
          <div className="h-[45px] w-full rounded-[10px] border border-slate-300">
            <div className="h-full px-[15px] py-2.5 flex items-center justify-between">
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="카테고리명 검색"
                className="flex-1 text-[16px] text-[#bbbbbb] placeholder-[#bbbbbb] bg-transparent border-none outline-none"
              />
              <div className="w-6 h-6 text-[#424242]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 옵션(종류) */}
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex flex-row gap-[3px] items-center">
            <div className="font-['Pretendard:Medium',_sans-serif] text-[#424242] text-[16px]">
              옵션(종류)
            </div>
            <div className="w-[5px] h-[5px] bg-[#ff6b6b] rounded-full"></div>
          </div>
          <div className="h-[45px] w-full rounded-[10px] border border-slate-300">
            <div className="h-full px-[15px] py-2.5 flex items-center">
              <input
                type="text"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
                placeholder="예시: 백도,황도,딱딱이 ( , 로 구분)"
                className="w-full text-[16px] text-[#bbbbbb] placeholder-[#bbbbbb] bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* 상품 리뷰 */}
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex flex-row gap-3.5 items-center">
            <div className="font-['Pretendard:Medium',_sans-serif] text-[#424242] text-[16px]">
              상품 리뷰
            </div>
          </div>
          <div className="h-14 w-full rounded-[10px] border border-slate-300">
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="w-[16.501px] h-[16.501px] text-[#878787]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <div className="font-['Pretendard:Medium',_sans-serif] text-[#878787] text-[14px] w-[327px]">
                  리뷰 파일을 업로드하면, 맞춤 기획이 됩니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 상품 이미지 */}
        <div className="w-full flex flex-col gap-2.5">
          <div className="flex flex-row gap-3.5 items-center">
            <div className="font-['Pretendard:Medium',_sans-serif] text-[#424242] text-[16px]">
              상품 이미지
            </div>
          </div>
          <div className="h-[124px] w-full rounded-[10px] border border-slate-300">
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col gap-2.5 items-center w-[134px]">
                <div className="w-6 h-6 text-[#878787]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
                  </svg>
                </div>
                <div className="font-['Pretendard:Medium',_sans-serif] text-[#878787] text-[14px] text-center">
                  상품 이미지를 추가해 주세요
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 상품의 셀링 포인트 */}
        <div className="w-full flex flex-col gap-3.5">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[3px] items-center">
              <div className="font-['Pretendard:Medium',_sans-serif] text-[#424242] text-[16px]">
                상품의 셀링 포인트
              </div>
              <div className="w-[5px] h-[5px] bg-[#ff6b6b] rounded-full"></div>
            </div>
            <div className="font-['Pretendard:SemiBold',_sans-serif] text-[#c3c8cf] text-[11px]">
              <span className="text-[#7d8692]">{sellingPoints.filter(p => p.trim()).length}</span>
              <span> / 10</span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2.5">
            {sellingPoints.map((point, index) => (
              <div key={index} className="h-[45px] w-full rounded-[10px] border border-slate-300">
                <div className="h-full px-[15px] py-2.5 flex items-center justify-between">
                  <div className="flex flex-row gap-[5px] h-6 items-center flex-1">
                    <div className="w-6 h-6 text-[#424242]">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => updateSellingPoint(index, e.target.value)}
                      placeholder="모든 과수의 당도가 18brix 이상"
                      className="flex-1 text-[16px] text-[#bbbbbb] placeholder-[#bbbbbb] bg-transparent border-none outline-none"
                    />
                  </div>
                  {index > 0 && (
                    <button
                      onClick={() => removeSellingPoint(index)}
                      className="bg-[#f5f7fb] px-2.5 py-[5px] rounded-[10px] text-[#c3c8ce] text-[12px] font-['Pretendard:SemiBold',_sans-serif] hover:bg-[#e8ecf0] transition-colors"
                    >
                      삭제
                    </button>
                  )}
                </div>
              </div>
            ))}
            {sellingPoints.length < 10 && (
              <button
                onClick={addSellingPoint}
                className="bg-[#f5f7fb] px-2.5 py-[5px] rounded-[10px] text-[#c3c8ce] text-[12px] font-['Pretendard:SemiBold',_sans-serif] hover:bg-[#e8ecf0] transition-colors self-start"
              >
                추가
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
