# OCTAVO - AI Planner for Product Detail Pages

## 🚀 프로젝트 소개

OCTAVO는 AI 기반 상품 상세페이지 기획 도구입니다. 사용자가 상품 정보를 입력하면 AI가 최적화된 상세페이지를 생성하고, 실시간으로 미리보기와 편집이 가능합니다.

## ✨ 주요 기능

### 🎨 **AI 기반 페이지 생성**
- 상품명, 카테고리, 이미지 입력
- 상품의 장점 및 특징 관리
- 디자인 레퍼런스 URL 연동
- AI가 자동으로 최적화된 페이지 생성

### 🔍 **실시간 미리보기**
- **메인 미리보기**: 860px 너비의 전체 페이지 미리보기
- **작은 미리보기**: 187px 너비의 축소된 미리보기 (18% 스케일)
- **스크롤 동기화**: 메인과 작은 미리보기가 완벽하게 연동
- **파란색 박스**: 현재 보이는 영역을 정확하게 표시

### ✏️ **편집 기능**
- 모든 텍스트 요소 실시간 편집
- 이미지 업로드 및 교체
- 변경사항 실시간 저장
- HTML/CSS 직접 편집 지원

### 📱 **반응형 디자인**
- 다양한 화면 크기 지원
- 모바일 최적화
- Tailwind CSS 기반 스타일링

## 🛠️ 기술 스택

### **Frontend**
- **Next.js 14**: React 기반 풀스택 프레임워크
- **TypeScript**: 타입 안전성 보장
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **shadcn/ui**: 고품질 UI 컴포넌트

### **Backend & API**
- **Figma API**: 디자인 파일 연동
- **Axios**: HTTP 클라이언트
- **Next.js API Routes**: 서버 사이드 로직

### **개발 도구**
- **ESLint**: 코드 품질 관리
- **PostCSS**: CSS 전처리
- **pnpm**: 패키지 매니저

## 📁 프로젝트 구조

```
my-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 메인 AI Planner 페이지
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   └── globals.css        # 전역 스타일
│   ├── components/             # React 컴포넌트
│   │   ├── ui/                # 기본 UI 컴포넌트
│   │   └── ai-planner/        # AI Planner 전용 컴포넌트
│   │       ├── Sidebar.tsx    # 좌측 사이드바
│   │       ├── Header.tsx     # 상단 헤더
│   │       ├── InputForm.tsx  # 입력 폼
│   │       ├── PreviewArea.tsx # 메인 미리보기
│   │       ├── SmallPreview.tsx # 작은 미리보기
│   │       └── index.ts       # 컴포넌트 내보내기
│   ├── data/                  # 데이터 파일
│   │   └── htmlTemplates.ts   # HTML 템플릿 정의
│   └── lib/                   # 유틸리티 함수
│       └── utils.ts           # 공통 유틸리티
├── public/                     # 정적 파일
│   ├── html-templates/        # HTML 템플릿 파일
│   │   ├── concept.html       # 통합된 concept 페이지
│   │   ├── concept_1.html     # Concept 1
│   │   ├── concept_2.html     # Concept 2
│   │   ├── concept_3.html     # Concept 3
│   │   └── concept_4.html     # Concept 4
│   ├── images/                # 이미지 파일
│   │   ├── concept_1/         # Concept 1 이미지
│   │   ├── concept_2/         # Concept 2 이미지
│   │   ├── concept_3/         # Concept 3 이미지
│   │   └── concept_4/         # Concept 4 이미지
│   └── common.css             # 공통 CSS
└── package.json               # 프로젝트 설정
```

## 🚀 시작하기

### **1. 저장소 클론**
```bash
git clone [your-repository-url]
cd my-app
```

### **2. 의존성 설치**
```bash
pnpm install
```

### **3. 개발 서버 실행**
```bash
pnpm dev
```

### **4. 브라우저에서 확인**
```
http://localhost:3000
```

## 🔧 환경 설정

### **필요한 환경 변수**
```env
# Figma API (선택사항)
FIGMA_ACCESS_TOKEN=your_figma_token
FIGMA_FILE_KEY=your_file_key
```

### **Next.js 설정**
- `next.config.ts`에서 이미지 도메인 설정
- Tailwind CSS 자동 설정
- TypeScript 엄격 모드 활성화

## 📱 사용법

### **1. 상품 정보 입력**
- 상품명, 카테고리 입력
- 상품 이미지 업로드
- 상품의 장점 추가/편집
- 디자인 레퍼런스 URL 입력

### **2. AI 기획 시작**
- "AI 기획 시작 ✨" 버튼 클릭
- AI가 자동으로 최적화된 페이지 생성
- 실시간으로 결과 확인

### **3. 미리보기 및 편집**
- **메인 미리보기**: 전체 페이지 확인
- **작은 미리보기**: 전체 구조 파악
- **실시간 편집**: 텍스트 및 이미지 수정
- **변경사항 저장**: 수정된 내용 저장

## 🎯 주요 컴포넌트

### **PreviewArea**
- 860px 너비의 메인 HTML 미리보기
- iframe을 통한 안전한 HTML 렌더링
- 스크롤 이벤트 감지 및 동기화

### **SmallPreview**
- 187px 너비의 축소된 미리보기
- 18% 스케일로 전체 페이지 구조 표시
- 메인 스크롤과 완벽한 동기화
- 파란색 박스로 현재 보이는 영역 표시

### **InputForm**
- 상품 정보 입력 폼
- 동적 장점 추가/삭제 기능
- 이미지 업로드 지원

## 🔄 스크롤 동기화 시스템

### **동작 원리**
1. **메인 미리보기**에서 스크롤 이벤트 감지
2. **스크롤 위치**를 `scrollTop` 상태로 관리
3. **작은 미리보기**에 `scrollTop * 0.18` 비율로 전달
4. **파란색 박스**가 정확한 위치에 표시

### **정확도 보장**
- **스케일 비율**: 18% (0.18)
- **위치 계산**: `scrollTop * 0.18`
- **박스 크기**: `window.innerHeight * 0.18`

## 🎨 디자인 시스템

### **색상 팔레트**
- **Primary**: #667eea (파란색)
- **Secondary**: #764ba2 (보라색)
- **Accent**: #ff6b6b (빨간색)
- **Background**: #f5f5f5 (연한 회색)

### **타이포그래피**
- **Font Family**: Pretendard (한글 최적화)
- **Font Weights**: 400 (Regular), 700 (Bold)
- **Responsive**: 모바일/데스크톱 최적화

## 🚧 개발 로드맵

### **Phase 1: 기본 기능** ✅
- [x] AI Planner 기본 구조
- [x] 미리보기 시스템
- [x] 스크롤 동기화
- [x] 기본 편집 기능

### **Phase 2: 고급 기능** 🔄
- [ ] AI 템플릿 생성
- [ ] 고급 편집 도구
- [ ] 템플릿 저장/불러오기
- [ ] 협업 기능

### **Phase 3: 확장** 📋
- [ ] 다국어 지원
- [ ] 테마 시스템
- [ ] 플러그인 아키텍처
- [ ] 클라우드 동기화

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- **프로젝트**: OCTAVO AI Planner
- **개발자**: [Your Name]
- **이메일**: [your.email@example.com]
- **GitHub**: [your-github-username]

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
