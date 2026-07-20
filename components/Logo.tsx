import Image from "next/image";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/tbbf-logo.svg"
      alt="TBBF"
      width={size}
      height={size}
      className="rounded-sm"
      style={{ width: size, height: size }}
    />
  );
}
