import { useState, useEffect, useCallback } from "react";
import { HeroCard } from "@/components/HeroCard";
import { heroCards, heroSliderConfig } from "@/data/heroCards";

/**
 * Auto-advancing hero slider with crossfade transitions.
 *
 * - Cycles through `heroCards` from `src/data/heroCards.ts`.
 * - Timing controlled by `heroSliderConfig.intervalMs` and `transitionMs`.
 * - Pauses on hover so users can read / click comfortably.
 * - Shows dot indicators for manual navigation.
 */
export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const { intervalMs, transitionMs } = heroSliderConfig;

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroCards.length);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (paused || heroCards.length <= 1) return;
    const timer = setInterval(advance, intervalMs);
    return () => clearInterval(timer);
  }, [paused, intervalMs, advance]);

  if (heroCards.length === 0) return null;

  return (
    <section
      className="relative w-full overflow-hidden flex justify-center"
      style={{ minHeight: "min(65vh, 600px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Container-width wrapper */}
      <div
        className="relative w-full"
        style={{ maxWidth: "var(--container-max)" }}
      >
        {/* Card layers — all stacked, opacity controls visibility */}
        {heroCards.map((card, i) => (
          <div
            key={card.id}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: i === activeIndex ? 1 : 0,
              transition: `opacity ${transitionMs}ms ease-in-out`,
              zIndex: i === activeIndex ? 1 : 0,
              pointerEvents: i === activeIndex ? "auto" : "none",
            }}
            aria-hidden={i !== activeIndex}
          >
            <HeroCard card={card} />
          </div>
        ))}

        {/* Dot indicators */}
        {heroCards.length > 1 && (
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2 z-10">
            {heroCards.map((card, i) => (
              <button
                key={card.id}
                onClick={() => setActiveIndex(i)}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{
                  backgroundColor:
                    i === activeIndex
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.35)",
                }}
                aria-label={`Show slide ${i + 1}: ${card.title}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
