import Link from "next/link";
import { LogoMark } from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#0F1F3C] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark size={36} />
          <span className="hidden sm:block text-white font-semibold text-sm tracking-wide">
            Tampa Bay Business Forum
          </span>
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">
            About
          </Link>
          <Link href="/members" className="text-white/70 hover:text-white text-sm transition-colors">
            Members
          </Link>
          <Link
            href="/apply"
            className="bg-[#BF9040] hover:bg-[#D4AA5A] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
