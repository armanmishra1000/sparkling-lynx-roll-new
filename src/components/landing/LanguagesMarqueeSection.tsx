"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { demoLanguages } from "@/lib/demo-languages";

const PX_PER_SECOND = 120;
const MIN_DURATION_SECONDS = 12;
const FLAG_WIDTH = 20;
const FLAG_HEIGHT = 20;

const LANGUAGE_FLAG_CODES: Record<string, string> = {
  es: "es",
  de: "de",
  en: "gb",
  zh: "cn",
  ja: "jp",
  hi: "in",
  yue: "hk",
  fr: "fr",
  it: "it",
  pt: "pt",
  ar: "sa",
  ru: "ru",
  ko: "kr",
  ur: "pk",
  ta: "lk",
  bn: "bd",
  sv: "se",
  vi: "vn",
  sw: "ke",
  id: "id",
};

const LanguagesMarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [travelDistance, setTravelDistance] = useState<number>(0);

  const languageItems = useMemo(
    () =>
      demoLanguages.map((language) => ({
        id: language.id,
        label: language.nativeName,
        countryCode: LANGUAGE_FLAG_CODES[language.id] ?? "un",
      })),
    [],
  );

  useEffect(() => {
    const calculateDistance = () => {
      const container = containerRef.current;
      const track = trackRef.current;

      if (!container || !track) {
        setTravelDistance(0);
        return;
      }

      const nextDistance = Math.max(track.scrollWidth - container.clientWidth, 0);
      setTravelDistance(nextDistance);
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, [languageItems.length]);

  const shouldAnimate = travelDistance > 0;
  const durationSeconds = Math.max(travelDistance / PX_PER_SECOND, MIN_DURATION_SECONDS);
  const trackStyle = {
    "--marquee-distance": `-${travelDistance}px`,
    "--marquee-duration": `${durationSeconds}s`,
  } as React.CSSProperties;

  return (
    <section className="py-16 bg-white overflow-hidden" aria-label="Supported languages">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-6">
          <p className="text-2xl md:text-4xl font-semibold text-black">
            Learn 20+ languages using Sophie
          </p>
        </div>

        <div className="relative">
          <div ref={containerRef} className="overflow-hidden bg-white">
            <div
              ref={trackRef}
              className={`flex w-max items-center gap-4 p-4 ${shouldAnimate ? "animate-languages-marquee" : ""}`}
              style={trackStyle}
            >
              {languageItems.map((language) => (
                <div
                  key={language.id}
                  className="flex shrink-0 items-center gap-4 rounded-full bg-white px-4 py-2"
                >
                  <Image
                    src={`https://flagcdn.com/w40/${language.countryCode}.png`}
                    alt={`${language.label} flag`}
                    width={FLAG_WIDTH}
                    height={FLAG_HEIGHT}
                    className="sm:h-10 sm:w-10 h-8 w-8 rounded-full object-cover shadow-sm"
                    unoptimized
                  />
                  <span className="font-medium text-black sm:text-xl text-lg">{language.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent md:w-16" />
        </div>
      </div>
    </section>
  );
};

export default LanguagesMarqueeSection;
