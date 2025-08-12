import React, { useState, useRef, useEffect, useCallback } from 'react';

interface InputForm2Props {
  onStartPlanning: () => void;
  onFormDataChange?: (data: {
    productName: string;
    category: string;
    options: string;
    sellingPoints: string[];
  }) => void;
  onFormReset?: () => void;
}

export default function InputForm2({ onStartPlanning, onFormDataChange, onFormReset }: InputForm2Props) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [options, setOptions] = useState('');
  const [sellingPoints, setSellingPoints] = useState<string[]>([]);
  const [newSellingPoint, setNewSellingPoint] = useState<string>('');
  const [productImages, setProductImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);



  const addSellingPoint = () => {
    if (sellingPoints.length < 10) {
      setSellingPoints([...sellingPoints, '']);
    }
  };

  const handleAddSellingPoint = () => {
    if (newSellingPoint.trim() && sellingPoints.length < 10) {
      setSellingPoints([...sellingPoints, newSellingPoint.trim()]);
      setNewSellingPoint('');
    }
  };

  const updateSellingPoint = (index: number, value: string) => {
    // 40자 이상 입력 방지
    if (value.length > 40) {
      return;
    }
    const newPoints = [...sellingPoints];
    newPoints[index] = value;
    setSellingPoints(newPoints);
  };

  const removeSellingPoint = (index: number) => {
    const newPoints = sellingPoints.filter((_, i) => i !== index);
    setSellingPoints(newPoints);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setProductImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setProductImages(prev => prev.filter((_, i) => i !== index));
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  // 폼 데이터 변경 시 부모 컴포넌트로 전달
  useEffect(() => {
    if (onFormDataChange) {
      onFormDataChange({
        productName,
        category,
        options,
        sellingPoints
      });
    }
  }, [productName, category, options, sellingPoints]);

  // 폼 초기화 함수
  const resetForm = useCallback(() => {
    setProductName('');
    setCategory('');
    setOptions('');
    setSellingPoints([]);
    setNewSellingPoint('');
    setProductImages([]);
    console.log('InputForm2 내부 상태가 초기화되었습니다!');
  }, []);



  return (
    <div className="bg-white relative w-full h-full overflow-y-auto">
      <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[422px] flex flex-col gap-3 pb-32">
        {/* 상품명 */}
        <div className="w-full flex flex-col gap-0.5">
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
                className={`w-full text-[16px] bg-transparent border-none outline-none ${
                  productName ? 'text-[#424242]' : 'text-[#bbbbbb]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* 상품 카테고리 */}
        <div className="w-full flex flex-col gap-0.5">
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
                className={`flex-1 text-[16px] bg-transparent border-none outline-none ${
                  category ? 'text-[#424242]' : 'text-[#bbbbbb]'
                }`}
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
        <div className="w-full flex flex-col gap-0.5">
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
                className={`w-full text-[16px] bg-transparent border-none outline-none ${
                  options ? 'text-[#424242]' : 'text-[#bbbbbb]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* 상품 리뷰 */}
        <div className="w-full flex flex-col gap-0.5">
          <div className="flex flex-row gap-3.0 items-center">
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
        <div className="w-full flex flex-col gap-0.5">
          <div className="flex flex-row gap-3.5 items-center">
            <div className="font-['Pretendard:Medium',_sans-serif] text-[#424242] text-[16px]">
              상품 이미지
            </div>
          </div>
          
          {/* 숨겨진 파일 입력 */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          
          {/* 이미지 업로드 영역 */}
          <div className="min-h-[124px] w-full rounded-[10px] border border-slate-300 p-4">
            {productImages.length === 0 ? (
              // 이미지가 없을 때 업로드 안내
              <div 
                className="h-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors rounded-lg pt-4 pb-4"
                onClick={openFileDialog}
              >
                <div className="flex flex-col gap-2.5 items-center w-[134px]">
                  <div className="w-6 h-6 text-[#878787]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
                    </svg>
                  </div>
                  <div className="font-['Pretendard:Medium',_sans-serif] text-[#878787] text-[14px] text-center whitespace-nowrap">
                    상품 이미지를 추가해 주세요
                  </div>
                </div>
              </div>
            ) : (
              // 이미지가 있을 때 미리보기와 삭제 버튼
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {productImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`상품 이미지 ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      >
                        ✕
                      </button>
                      <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        {image.name}
                      </div>
                    </div>
                  ))}
                </div>
                {productImages.length < 6 && (
                  <button
                    onClick={openFileDialog}
                    className="bg-[#f5f7fb] px-4 py-2 rounded-lg text-[#c3c8ce] text-[14px] font-medium hover:bg-[#e8ecf0] transition-colors"
                  >
                    + 이미지 추가
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 상품의 셀링 포인트 */}
        <div className="w-full flex flex-col gap-0.5">
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
            {/* 입력 박스와 추가 버튼 (맨 위 고정) */}
            <div className="min-h-[45px] w-full rounded-[10px] bg-white flex-shrink-0 relative">
              <div className={`absolute inset-0 rounded-[10px] ${
                newSellingPoint 
                  ? 'bg-gradient-to-b from-[#6A00B4] via-[#C05023] to-[#E35B00] p-[1px]' 
                  : 'border border-slate-300'
              } transition-all duration-200`}>
                {newSellingPoint && (
                  <div className="h-full w-full bg-white rounded-[9px]"></div>
                )}
              </div>
              <div className="relative min-h-[45px] px-[15px] py-2.5 flex items-center justify-between z-10">
                                    <div className="flex flex-row gap-[5px] min-h-6 items-center flex-1">
                      <div className="w-6 h-6 text-[#6A00B4] flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                        </svg>
                      </div>
                  <textarea
                    value={newSellingPoint}
                    onChange={(e) => setNewSellingPoint(e.target.value)}
                    placeholder="모든 과수의 당도가 18brix 이상"
                    maxLength={40}
                    rows={1}
                    className={`flex-1 text-[16px] bg-transparent border-none outline-none resize-none overflow-hidden ${
                      newSellingPoint ? 'text-[#424242]' : 'text-[#bbbbbb]'
                    }`}
                    style={{
                      minHeight: '24px',
                      height: 'auto',
                      overflow: 'hidden'
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = target.scrollHeight + 'px';
                    }}
                  />
                  {/* 40자 제한 안내 메시지 */}
                  {newSellingPoint.length >= 40 && (
                    <div className="absolute top-0 left-0 z-50">
                      {/* 말풍선 본체 */}
                      <div className="bg-white border border-[#ef5050] rounded-lg px-3 py-2 shadow-lg relative">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 text-[#ef5050]">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="12" r="10" fill="#ef5050"/>
                              <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-[#ef5050] text-[13px] font-['Pretendard:Regular',_sans-serif] whitespace-nowrap">
                            최대 40자까지 입력할 수 있습니다.
                          </span>
                        </div>
                        {/* 말풍선 꼬리 */}
                        <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                        <div className="absolute -bottom-2.5 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#ef5050]"></div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleAddSellingPoint}
                  disabled={!newSellingPoint.trim()}
                  className="bg-[#f0e8fc] px-2.5 py-[5px] rounded-[10px] text-[#6A00B4] text-[12px] font-['Pretendard:SemiBold',_sans-serif] hover:bg-[#e0d0f0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  추가
                </button>
              </div>
            </div>

            {/* 기존 셀링포인트 목록 */}
            <div className="space-y-2">
              {sellingPoints.map((point, index) => (
                <div key={index} className="min-h-[45px] w-full rounded-[10px] bg-white flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-[10px] border border-slate-300"></div>
                  <div className="relative min-h-[45px] px-[15px] py-2.5 flex items-center justify-between z-10">
                    <div className="flex flex-row gap-[5px] min-h-6 items-center flex-1">
                      <div className="w-6 h-6 text-[#c3c8ce] flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <div className="flex-1 text-[16px] text-[#242424] break-words font-['Pretendard:Regular',_sans-serif]">
                        {point}
                      </div>
                    </div>
                    <button
                      onClick={() => removeSellingPoint(index)}
                      className="w-6 h-6 text-[#c3c8ce] hover:text-[#a0a6ad] transition-colors flex-shrink-0"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* 아래 여백 */}
      <div className="absolute bottom-0 left-0 right-0 h-8"></div>
    </div>
  );
}
