export const site = {
  nameKo: "강우현",
  nameEn: "KANG Woohyun",
  nav: [
    { href: "https://tadak.applemincho.com", label: "타닥" },
    { href: "https://latex.applemincho.com", label: "LaTeX" },
  ],
} as const;

export const activities = [
  { period: "2019.03.~2021.02.", description: "인천진산과학고등학교 조기졸업" },
  { period: "2019.07.", description: "Pre-URP 프로그램 참여" },
  {
    period: "2021.03.~",
    description: "KAIST 전산학부 전공 (수리과학과 복수전공)",
  },
  { period: "2022.03.~2023.12.", description: "KAIST 수리과학과 학생회 집행부" },
  { period: "2022.09.~", description: "KAIST 수학문제연구회 활동" },
  { period: "2024.04.~2025.10.", description: "대한민국 육군 병장 만기 전역" },
  { period: "2026.01.", description: "2025 겨울학기 KAIST 몰입캠프 참가" },
  { period: "2026.07.", description: "2026 여름학기 KAIST 몰입캠프 운영진" },
] as const;

export type Work = {
  href: string;
  title: string;
  description: string;
  code?: boolean;
};

export const works: Work[] = [
  {
    href: "https://applemincho-latex.tistory.com/3",
    title: "〈레이텍 입문부터 활용까지〉",
    description: "한국어 LaTeX 가이드북",
  },
  {
    href: "https://github.com/KangWH/kopunct",
    title: "kopunct",
    description: "한국어 입력 보조 LaTeX 패키지",
    code: true,
  },
  {
    href: "https://grad-log.applemincho.com",
    title: "졸업로그",
    description: "KAIST 졸업예비사정 도우미",
  },
  {
    href: "https://kangwh.github.io/KAIST-MathSci-SubjectsMap/",
    title: "카이수리맵",
    description: "KAIST 수리과학과 개설과목 로드맵",
  },
  {
    href: "https://tadak.applemincho.com",
    title: "타닥",
    description: "macOS 및 iOS용 한글 입력기",
  },
];
