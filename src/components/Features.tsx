const program = [
  {
    icon: "🎊",
    title: "Торжественный приём",
    description: "Встреча гостей, живая музыка и аперитив в уютной атмосфере.",
    time: "18:00",
  },
  {
    icon: "🥂",
    title: "Праздничный ужин",
    description: "Изысканные блюда, тосты за именинницу и тёплые слова от близких.",
    time: "19:00",
  },
  {
    icon: "🎭",
    title: "Развлекательная программа",
    description: "Сюрпризы, конкурсы и весёлые игры — скучать не придётся!",
    time: "20:30",
  },
  {
    icon: "🎂",
    title: "Торт и танцы",
    description: "Торжественное разрезание юбилейного торта и танцы до полуночи.",
    time: "22:00",
  },
];

export function Features() {
  return (
    <section id="program" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <span className="text-sm uppercase tracking-widest font-medium block mb-4"
            style={{ color: "hsl(var(--terracotta))" }}>
            Программа вечера
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
            Этот вечер мы посвящаем вам ✨
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {program.map((item, index) => (
            <div
              key={index}
              className="reveal group p-8 md:p-10 rounded-3xl border transition-all duration-500 hover:shadow-lg"
              style={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl float-1 group-hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.5}s` }}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl">{item.title}</h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full"
                      style={{ background: "hsla(330,50%,60%,0.1)", color: "hsl(var(--rose))" }}>
                      {item.time}
                    </span>
                  </div>
                  <p className="leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="text-center mt-16 reveal">
          <div className="inline-flex items-center gap-3 text-2xl">
            <span className="float-1">🌸</span>
            <span className="float-2">💫</span>
            <span className="float-3">✨</span>
            <span className="float-1">🌷</span>
            <span className="float-2">💖</span>
          </div>
        </div>
      </div>
    </section>
  );
}
