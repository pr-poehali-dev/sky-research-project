export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md"
      style={{ background: "hsla(340,30%,97%,0.85)", borderBottom: "1px solid hsl(var(--border))" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl float-1">🌸</span>
          <span className="font-serif text-lg font-semibold">Юбилей · 45</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#details", label: "О вечере" },
            { href: "#program", label: "Программа" },
            { href: "#confirm", label: "Подтвердить" },
          ].map((link) => (
            <a key={link.href} href={link.href}
              className="text-sm transition-colors duration-300 hover:opacity-70"
              style={{ color: "hsl(var(--foreground))" }}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#confirm"
          className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
          style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}>
          Я приду! 🎉
        </a>
      </div>
    </header>
  );
}
