export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0F1F3C] border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">
          © {year} Tampa Bay Business Forum. All rights reserved.
        </p>
        <p className="text-white/40 text-xs">Membership by invitation only.</p>
      </div>
    </footer>
  );
}
