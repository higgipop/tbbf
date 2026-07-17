import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-[#0F1F3C] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-[#BF9040] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs tracking-wide">TB</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">
            Tampa Bay Business Forum
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">
            About
          </Link>
          <Link href="/members" className="text-white/70 hover:text-white text-sm transition-colors">
            Members
          </Link>
        </nav>
      </div>
    </header>
  );
}
