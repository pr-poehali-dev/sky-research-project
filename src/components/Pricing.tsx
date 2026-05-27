const details = [
  {
    icon: "📅",
    label: "Дата",
    value: "11 июля 2026 года",
    note: "Суббота",
  },
  {
    icon: "🕕",
    label: "Время",
    value: "16:00",
    note: "Сбор гостей с 15:30",
  },
  {
    icon: "📍",
    label: "Место",
    value: "Кафе «Валенок»",
    note: "Посёлок Апраксино",
  },
  {
    icon: "👗",
    label: "Дресс-код",
    value: "Праздничный",
    note: "Нежные и пастельные тона",
  },
];

export function Pricing() {
  return (
    <section id="details" className="py-32 px-6" style={{ background: "hsl(var(--card))" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-sm uppercase tracking-widest font-medium block mb-4"
            style={{ color: "hsl(var(--rose))" }}>
            Детали торжества
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
            Всё, что нужно знать 🎀
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {details.map((item, i) => (
            <div
              key={i}
              className="reveal text-center p-8 rounded-3xl border hover:shadow-md transition-all duration-500"
              style={{
                borderColor: "hsl(var(--border))",
                background: "hsl(var(--background))",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div className="text-4xl mb-4 float-1" style={{ animationDelay: `${i * 0.7}s` }}>
                {item.icon}
              </div>
              <div className="text-xs uppercase tracking-widest mb-2 font-medium"
                style={{ color: "hsl(var(--muted-foreground))" }}>
                {item.label}
              </div>
              <div className="font-serif text-lg font-semibold mb-1">{item.value}</div>
              <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{item.note}</div>
            </div>
          ))}
        </div>

        {/* Main invite card */}
        <div className="reveal rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(330,35%,40%) 0%, hsl(270,30%,45%) 50%, hsl(40,70%,50%) 100%)",
            color: "white",
          }}>
          <div className="absolute top-4 left-4 text-3xl float-1">✨</div>
          <div className="absolute top-4 right-4 text-3xl float-2">🌸</div>
          <div className="absolute bottom-4 left-8 text-2xl float-3">💫</div>
          <div className="absolute bottom-4 right-8 text-2xl float-1">🌷</div>

          <div className="text-5xl mb-6 sparkle-anim">🎉</div>
          <h3 className="font-serif text-3xl md:text-4xl mb-4 italic">
            Я буду рада вас видеть!
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Пожалуйста, сообщите мне о своём присутствии до 10 июня —
            чтобы я могла подготовиться к встрече с вами!
          </p>
          <a
            href="#confirm"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "white", color: "hsl(var(--primary))" }}
          >
            ✉️ Подтвердить приход
          </a>
        </div>
      </div>
    </section>
  );
}