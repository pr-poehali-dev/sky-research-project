export function Testimonial() {
  return (
    <section className="py-32 px-6" style={{ background: "hsla(330,50%,60%,0.06)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-5xl mb-8 reveal sparkle-anim">💌</div>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-10 text-balance reveal"
          style={{ color: "hsl(var(--foreground))" }}>
          «Ты — сердце нашей семьи. Твоя улыбка освещает нашу жизнь,
          твоя забота согревает самые холодные дни.
          С юбилеем, наша любимая!»
        </blockquote>

        <div className="flex items-center justify-center gap-4 reveal">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
            style={{ background: "hsla(330,50%,60%,0.15)" }}>
            💕
          </div>
          <div className="text-left">
            <p className="font-medium">С безграничной любовью</p>
            <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
              Ваши родные и близкие
            </p>
          </div>
        </div>

        {/* Floating hearts */}
        <div className="relative mt-12 h-16 reveal">
          {["💖", "💗", "💓", "💞", "💝"].map((heart, i) => (
            <span
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${15 + i * 17}%`,
                animation: `float-${(i % 3) + 1} ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {heart}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
