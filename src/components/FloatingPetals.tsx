import { useEffect, useState } from "react";

const symbols = ["🌸", "✨", "🌷", "💫", "🌺", "⭐", "🌹", "💖"];

interface Petal {
  id: number;
  symbol: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      size: 0.8 + Math.random() * 0.8,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal select-none"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            fontSize: `${p.size}rem`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
