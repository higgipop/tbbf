import Link from "next/link";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0F1F3C] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark size={28} />
          <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
            Tampa Bay Business Forum
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/50">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/members" className="hover:text-white transition-colors">Members</Link>
          <Link href="/apply" className="hover:text-white transition-colors">Apply</Link>
        </nav>
        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Tampa Bay Business Forum
        </p>
      </div>
    </footer>
  );
}
