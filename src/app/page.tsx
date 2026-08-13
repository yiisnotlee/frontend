// src/app/page.tsx
// 디자인 토큰(폰트 / 타이포그래피 유틸 / 컬러 팔레트)이
// 실제로 잘 적용되고 있는지 눈으로 확인하기 위한 스타일 가이드 페이지입니다.

const SAMPLE_KR = "다람쥐 헌 쳇바퀴에 타고파";
const SAMPLE_EN = "The quick brown fox";

type TypeRow = {
  className: string;
  label: string;
  sample?: string;
};

const pretendardRows: TypeRow[] = [
  { className: "h-64-eb", label: "h-64-eb · 64px / EB(800)" },
  { className: "sh-36-sb", label: "sh-36-sb · 36px / SB(600)" },
  { className: "sh-32-sb", label: "sh-32-sb · 32px / SB(600)" },
  { className: "sh-24-m", label: "sh-24-m · 24px / M(500)" },
  { className: "b-24-sb", label: "b-24-sb · 24px / SB(600)" },
  { className: "b-20-r", label: "b-20-r · 20px / R(400)" },
  { className: "b-16-sb", label: "b-16-sb · 16px / SB(600)" },
  { className: "b-16-m", label: "b-16-m · 16px / M(500)" },
  { className: "b-16-r", label: "b-16-r · 16px / R(400)" },
  { className: "b-14-m", label: "b-14-m · 14px / M(500)" },
  { className: "b-14-r", label: "b-14-r · 14px / R(400)" },
  { className: "c-10-m", label: "c-10-m · 10px / M(500)" },
];

const gmarketRows: TypeRow[] = [
  { className: "g-b-16-sb", label: "g-b-16-sb · 16px / SB" },
  { className: "g-b-14-m", label: "g-b-14-m · 14px / M" },
  { className: "g-b-10-m", label: "g-b-10-m · 10px / M" },
];

const specialRows: TypeRow[] = [
  { className: "kcc-40", label: "kcc-40 · KCC-Kimhwanki", sample: SAMPLE_KR },
  {
    className: "own-96",
    label: "own-96 · Ownglyph_seabreeze",
    sample: SAMPLE_KR,
  },
  {
    className: "covered-96",
    label: "covered-96 · Covered By Your Grace",
    sample: SAMPLE_EN,
  },
  { className: "grape-40", label: "grape-40 · Grape Nuts", sample: SAMPLE_EN },
];

const blueScale = [
  { name: "--blue-100", value: "#dbeafe" },
  { name: "--blue-300", value: "#86b1f8" },
  { name: "--blue-500", value: "#3b82f6" },
  { name: "--blue-700", value: "#0047ab" },
  { name: "--blue-900", value: "#002868" },
];

const grayScale = [
  { name: "--gray-0", value: "#ffffff" },
  { name: "--gray-100", value: "#f0f2f5" },
  { name: "--gray-200", value: "#d2d4d8" },
  { name: "--gray-300", value: "#b5b7ba" },
  { name: "--gray-400", value: "#97999d" },
  { name: "--gray-500", value: "#797c7f" },
  { name: "--gray-600", value: "#5c5e62" },
  { name: "--gray-700", value: "#3e4144" },
  { name: "--gray-800", value: "#202327" },
  { name: "--gray-900", value: "#000000" },
];

const semanticColors = [
  { name: "--color-light", varName: "var(--color-light)" },
  { name: "--color-light-medium", varName: "var(--color-light-medium)" },
  { name: "--color-medium", varName: "var(--color-medium)" },
  { name: "--color-primary", varName: "var(--color-primary)" },
  { name: "--color-dark", varName: "var(--color-dark)" },
];

const gradients = [
  { name: "--bg-grad", varName: "var(--bg-grad)" },
  { name: "--logo-grad", varName: "var(--logo-grad)" },
  { name: "--subbg-grad", varName: "var(--subbg-grad)" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="sh-32-sb"
      style={{ marginBottom: "1rem", marginTop: "3rem" }}
    >
      {children}
    </h2>
  );
}

export default function Page() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 className="h-64-eb">디자인 토큰 점검</h1>
      <p
        className="b-16-r"
        style={{ color: "var(--gray-600)", marginTop: "0.5rem" }}
      >
        typography.css / color.css 가 globals.css 에 실제로 반영되는지 확인하는
        페이지입니다.
      </p>

      {/* -------------------------------------------------- */}
      {/* 0. body 전역 스타일 점검 (globals.css @layer base)   */}
      {/* -------------------------------------------------- */}
      <SectionTitle>0. body 전역 스타일 (실제 적용 여부)</SectionTitle>
      <div
        style={{
          border: "1px solid var(--gray-200)",
          borderRadius: 8,
          padding: "1.5rem",
        }}
      >
        <p className="b-16-m">
          이 박스는 <code>&lt;body&gt;</code>가 아니라 예시용입니다. 아래 두
          값이 실제로 적용되는지 브라우저 개발자도구로 <code>body</code> 요소를
          직접 확인하세요.
        </p>
        <ul
          className="b-14-r"
          style={{ marginTop: "0.75rem", lineHeight: 1.8 }}
        >
          <li>
            <code>color: var(--color-gray-800)</code> — color.css에는{" "}
            <code>--gray-800</code>만 정의되어 있어{" "}
            <strong style={{ color: "var(--blue-700)" }}>
              적용되지 않을 가능성이 높습니다
            </strong>
            .
          </li>
          <li>
            <code>background-color: var(--color-bg-grad)</code> — color.css에는{" "}
            <code>--bg-grad</code>만 정의되어 있어{" "}
            <strong style={{ color: "var(--blue-700)" }}>
              적용되지 않을 가능성이 높습니다
            </strong>
            .
          </li>
        </ul>
      </div>

      {/* -------------------------------------------------- */}
      {/* 1. 폰트 (font-family) 육안 확인                      */}
      {/* -------------------------------------------------- */}
      <SectionTitle>1. 폰트 (@font-face)</SectionTitle>
      <div style={{ display: "grid", gap: "1rem" }}>
        <div>
          <p className="b-14-m" style={{ color: "var(--gray-500)" }}>
            Pretendard Variable
          </p>
          <p
            style={{
              fontFamily: "var(--font-pretendard)",
              fontSize: "1.75rem",
            }}
          >
            {SAMPLE_KR} / {SAMPLE_EN}
          </p>
        </div>
        <div>
          <p className="b-14-m" style={{ color: "var(--gray-500)" }}>
            GmarketSans (300 / 500 / 700)
          </p>
          <p
            style={{
              fontFamily: "var(--font-gmarket)",
              fontWeight: 300,
              fontSize: "1.5rem",
            }}
          >
            {SAMPLE_KR} 300
          </p>
          <p
            style={{
              fontFamily: "var(--font-gmarket)",
              fontWeight: 500,
              fontSize: "1.5rem",
            }}
          >
            {SAMPLE_KR} 500
          </p>
          <p
            style={{
              fontFamily: "var(--font-gmarket)",
              fontWeight: 700,
              fontSize: "1.5rem",
            }}
          >
            {SAMPLE_KR} 700
          </p>
        </div>
        <div>
          <p className="b-14-m" style={{ color: "var(--gray-500)" }}>
            KCC-Kimhwanki
          </p>
          <p style={{ fontFamily: "var(--font-kcc)", fontSize: "1.75rem" }}>
            {SAMPLE_KR}
          </p>
        </div>
        <div>
          <p className="b-14-m" style={{ color: "var(--gray-500)" }}>
            Ownglyph_seabreeze
          </p>
          <p
            style={{ fontFamily: "var(--font-ownglyph)", fontSize: "1.75rem" }}
          >
            {SAMPLE_KR}
          </p>
        </div>
        <div>
          <p className="b-14-m" style={{ color: "var(--gray-500)" }}>
            Covered By Your Grace / Grape Nuts
          </p>
          <p style={{ fontFamily: "var(--font-covered)", fontSize: "1.75rem" }}>
            {SAMPLE_EN}
          </p>
          <p style={{ fontFamily: "var(--font-grape)", fontSize: "1.75rem" }}>
            {SAMPLE_EN}
          </p>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* 2. 타이포그래피 유틸 클래스                           */}
      {/* -------------------------------------------------- */}
      <SectionTitle>2. 타이포그래피 유틸 클래스 (Pretendard)</SectionTitle>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {pretendardRows.map((row) => (
          <div
            key={row.className}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
              borderBottom: "1px solid var(--gray-100)",
              paddingBottom: "0.5rem",
            }}
          >
            <span
              className="b-14-r"
              style={{ width: 220, flexShrink: 0, color: "var(--gray-500)" }}
            >
              {row.label}
            </span>
            <span className={row.className}>{SAMPLE_KR}</span>
          </div>
        ))}
      </div>

      <SectionTitle>3. 타이포그래피 유틸 클래스 (GmarketSans)</SectionTitle>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {gmarketRows.map((row) => (
          <div
            key={row.className}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
              borderBottom: "1px solid var(--gray-100)",
              paddingBottom: "0.5rem",
            }}
          >
            <span
              className="b-14-r"
              style={{ width: 220, flexShrink: 0, color: "var(--gray-500)" }}
            >
              {row.label}
            </span>
            <span className={row.className}>{SAMPLE_KR}</span>
          </div>
        ))}
      </div>

      <SectionTitle>4. 특수 폰트 유틸 클래스</SectionTitle>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {specialRows.map((row) => (
          <div
            key={row.className}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
              borderBottom: "1px solid var(--gray-100)",
              paddingBottom: "0.5rem",
            }}
          >
            <span
              className="b-14-r"
              style={{ width: 220, flexShrink: 0, color: "var(--gray-500)" }}
            >
              {row.label}
            </span>
            <span className={row.className}>{row.sample}</span>
          </div>
        ))}
      </div>

      {/* -------------------------------------------------- */}
      {/* 5. 컬러 팔레트                                       */}
      {/* -------------------------------------------------- */}
      <SectionTitle>5. Blue Scale</SectionTitle>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {blueScale.map((c) => (
          <div key={c.name} style={{ width: 120 }}>
            <div
              style={{
                height: 64,
                borderRadius: 8,
                background: c.value,
                border: "1px solid var(--gray-200)",
              }}
            />
            <p className="c-10-m" style={{ marginTop: 4 }}>
              {c.name}
            </p>
            <p className="c-10-m" style={{ color: "var(--gray-500)" }}>
              {c.value}
            </p>
          </div>
        ))}
      </div>

      <SectionTitle>6. Grayscale</SectionTitle>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {grayScale.map((c) => (
          <div key={c.name} style={{ width: 100 }}>
            <div
              style={{
                height: 56,
                borderRadius: 8,
                background: c.value,
                border: "1px solid var(--gray-200)",
              }}
            />
            <p className="c-10-m" style={{ marginTop: 4 }}>
              {c.name}
            </p>
          </div>
        ))}
      </div>

      <SectionTitle>7. Semantic Colors</SectionTitle>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {semanticColors.map((c) => (
          <div key={c.name} style={{ width: 140 }}>
            <div
              style={{
                height: 64,
                borderRadius: 8,
                background: c.varName,
                border: "1px solid var(--gray-200)",
              }}
            />
            <p className="c-10-m" style={{ marginTop: 4 }}>
              {c.name}
            </p>
          </div>
        ))}
      </div>

      <SectionTitle>8. Gradients</SectionTitle>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {gradients.map((g) => (
          <div key={g.name} style={{ width: 220 }}>
            <div
              style={{
                height: 120,
                borderRadius: 12,
                background: g.varName,
                border: "1px solid var(--gray-200)",
              }}
            />
            <p className="b-14-m" style={{ marginTop: 6 }}>
              {g.name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
