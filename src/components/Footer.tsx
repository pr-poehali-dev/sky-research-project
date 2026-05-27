export function Footer() {
  return (
    <footer className="py-16 px-6 text-center" style={{ background: "hsl(var(--card))" }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-2xl float-1">🌸</span>
          <span className="font-serif text-xl italic">С любовью, ваша именинница</span>
          <span className="text-2xl float-2">✨</span>
        </div>
        <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
          11 июля 2026 · Кафе «Валенок», пос. Апраксино
        </p>
        <div className="mt-6 text-lg">
          {"💖 💗 💓 💞 💝".split(" ").map((h, i) => (
            <span key={i} className="inline-block mx-1"
              style={{ animation: `float-${(i % 3) + 1} ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>
              {h}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}