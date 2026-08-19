const HEIGHTS = [70, 58, 64, 50, 40, 30, 20, 12, 16, 9, 11, 8, 6, 6, 5, 4, 4, 3, 3, 3];

export default function WaveAnimation({
  className = "",
  label = "Day 1 → Day 21",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={`${className}`}>
      <div className="flex h-24 items-end gap-[3px] sm:h-32">
        {HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="animate-drift-slow w-full rounded-full bg-ink/70"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.15}s`,
              opacity: 0.35 + (1 - i / HEIGHTS.length) * 0.65,
              backgroundColor: i < 3 ? "var(--wine)" : "var(--ink)",
            }}
          />
        ))}
      </div>
      {label && (
        <p className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.25em] text-stone">
          <span>{label.split("→")[0]}</span>
          <span>{label.split("→")[1]}</span>
        </p>
      )}
    </div>
  );
}
