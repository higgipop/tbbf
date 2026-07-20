export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TBBF"
    >
      <rect width="200" height="200" fill="transparent" />
      <rect
        x="10"
        y="10"
        width="180"
        height="180"
        fill="none"
        stroke="#BF9040"
        strokeWidth="7"
      />
      <text
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="82"
        fill="#FFFFFF"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan x="57" y="60">T</tspan>
        <tspan x="143" y="60">B</tspan>
        <tspan x="57" y="148">B</tspan>
        <tspan x="143" y="148">F</tspan>
      </text>
    </svg>
  );
}
