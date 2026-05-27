export function Philosophy() {
  return (
    <section id="details" className="py-32 px-6" style={{ background: "hsl(var(--card))" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden reveal-left">
            <img
              src="https://cdn.poehali.dev/projects/4050ba9f-16bf-4ac2-8ab7-2d829154dd23/bucket/98bc7804-0b11-42e1-8ab7-05659c4e52c9.jpg"
              alt="Именинница"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-sm"
              style={{ background: "hsla(340,30%,97%,0.9)" }}>
              <p className="text-sm italic leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                «Красота женщины не в её лице — она светится в её душе,
                в заботе, которую она дарит, и в страсти, которую она несёт.»
              </p>
            </div>
            {/* Floating decorations around image */}
            <div className="absolute -top-4 -right-4 text-4xl float-1">🌸</div>
            <div className="absolute -bottom-2 -left-4 text-3xl float-2">✨</div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col gap-8 reveal-right">
            <span className="text-sm uppercase tracking-widest font-medium"
              style={{ color: "hsl(var(--rose))" }}>
              Моё приглашение для вас
            </span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight text-balance">
              Дорогие мои друзья и близкие!
            </h2>
            <div className="space-y-5 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              <p>
                45 лет — это моя особенная дата. Я прошла большой путь,
                наполненный любовью, радостью, открытиями и ростом.
                И всё это время рядом были вы — мои самые дорогие люди.
              </p>
              <p>
                Я хочу отметить этот день именно с вами. Приходите —
                я приготовила для вас тёплый вечер, полный веселья,
                музыки и самых искренних объятий!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: "45", label: "лет красоты" },
                { num: "∞", label: "любви" },
                { num: "1", label: "незаменимая" },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 rounded-2xl reveal-scale"
                  style={{ background: "hsla(330,50%,60%,0.08)", transitionDelay: `${i * 0.15}s` }}>
                  <div className="font-serif text-3xl font-semibold" style={{ color: "hsl(var(--rose))" }}>
                    {item.num}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}