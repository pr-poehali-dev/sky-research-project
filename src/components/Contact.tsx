import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", coming: "yes", wishes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="confirm" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-sm uppercase tracking-widest font-medium block mb-4"
            style={{ color: "hsl(var(--terracotta))" }}>
            Подтверждение
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">
            Вы придёте? 🎊
          </h2>
          <p style={{ color: "hsl(var(--muted-foreground))" }}>
            Сообщите нам о вашем присутствии — мы будем вас ждать!
          </p>
        </div>

        {sent ? (
          <div className="reveal visible text-center p-12 rounded-3xl border"
            style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}>
            <div className="text-6xl mb-6 sparkle-anim">🎉</div>
            <h3 className="font-serif text-2xl mb-3">Спасибо! Ждём вас!</h3>
            <p style={{ color: "hsl(var(--muted-foreground))" }}>
              Мы очень рады, что вы будете с нами в этот особенный день.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}
            className="reveal p-8 md:p-12 rounded-3xl border space-y-6"
            style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}>
            <div>
              <label className="block text-sm font-medium mb-2">Ваше имя</label>
              <input
                type="text"
                required
                placeholder="Введите ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border outline-none transition-colors duration-300 focus:ring-2"
                style={{
                  borderColor: "hsl(var(--border))",
                  background: "hsl(var(--background))",
                  "--tw-ring-color": "hsla(330,50%,60%,0.3)",
                } as React.CSSProperties}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <input
                type="tel"
                placeholder="+7 (999) 000-00-00"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border outline-none transition-colors duration-300 focus:ring-2"
                style={{
                  borderColor: "hsl(var(--border))",
                  background: "hsl(var(--background))",
                } as React.CSSProperties}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Вы придёте?</label>
              <div className="flex gap-4">
                {[
                  { value: "yes", label: "✅ Да, буду!" },
                  { value: "no", label: "❌ К сожалению, нет" },
                ].map((opt) => (
                  <label key={opt.value}
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl border cursor-pointer transition-all duration-300"
                    style={{
                      borderColor: form.coming === opt.value ? "hsl(var(--rose))" : "hsl(var(--border))",
                      background: form.coming === opt.value ? "hsla(330,50%,60%,0.1)" : "hsl(var(--background))",
                    }}>
                    <input type="radio" name="coming" value={opt.value} className="sr-only"
                      checked={form.coming === opt.value}
                      onChange={() => setForm({ ...form, coming: opt.value })} />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Пожелания имениннице (необязательно)</label>
              <textarea
                rows={3}
                placeholder="Напишите тёплые слова..."
                value={form.wishes}
                onChange={(e) => setForm({ ...form, wishes: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border outline-none transition-colors duration-300 resize-none"
                style={{
                  borderColor: "hsl(var(--border))",
                  background: "hsl(var(--background))",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl font-medium text-base transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
            >
              💌 Отправить ответ
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
