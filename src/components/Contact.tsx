export function Contact() {
  return (
    <section id="confirm" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-sm uppercase tracking-widest font-medium block mb-4"
            style={{ color: "hsl(var(--terracotta))" }}>
            Подтверждение
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">
            Придёте? 🎊
          </h2>
          <p style={{ color: "hsl(var(--muted-foreground))" }}>
            Сообщите мне о своём присутствии — я буду вас ждать с нетерпением!
          </p>
        </div>

        <div className="reveal text-center p-12 rounded-3xl border"
          style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}>
          <div className="text-6xl mb-6 float-1">🎉</div>
          <p className="mb-8 text-lg" style={{ color: "hsl(var(--muted-foreground))" }}>
            Нажмите кнопку ниже и напишите мне — я буду так рада вас видеть!
          </p>
          <a
            href="https://vk.ru/id542075190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-2xl font-medium text-base transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
          >
            💌 Подтвердить приход
          </a>
        </div>
      </div>
    </section>
  );
}