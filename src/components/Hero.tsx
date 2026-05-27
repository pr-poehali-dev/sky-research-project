import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full float-1"
        style={{ background: "radial-gradient(circle, hsla(330,50%,80%,0.4) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full float-2"
        style={{ background: "radial-gradient(circle, hsla(40,70%,80%,0.4) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(270,30%,85%,0.2) 0%, transparent 70%)" }} />

      <div ref={ref} className="reveal max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 reveal-scale visible"
          style={{ background: "hsla(330,50%,60%,0.12)", border: "1px solid hsla(330,50%,60%,0.25)" }}>
          <span className="text-2xl float-1">🌸</span>
          <span className="text-sm font-medium" style={{ color: "hsl(var(--rose))" }}>
            Юбилей · 45 лет
          </span>
          <span className="text-2xl float-2">✨</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-balance mb-6">
          <span className="shimmer-text">45 прекрасных</span>
          <br />
          <span className="italic text-foreground">лет вместе</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
          style={{ color: "hsl(var(--muted-foreground))" }}>
          Дорогая именинница, с радостью приглашаем вас на торжество в честь
          вашего замечательного юбилея!
        </p>

        <p className="font-serif text-2xl md:text-3xl italic mb-10"
          style={{ color: "hsl(var(--rose))" }}>
          «45 — это расцвет, мудрость и красота»
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#details"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 pulse-glow"
            style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
          >
            🎉 Узнать детали праздника
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#program"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-colors duration-300"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Программа вечера
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>
          листайте ниже
        </span>
        <div className="w-px h-12" style={{ background: "hsl(var(--border))" }} />
      </div>
    </section>
  );
}
