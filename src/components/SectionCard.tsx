import { useEffect, useRef, useState } from "react";
import type { Section } from "../data/notes";
import { BlockView } from "./Blocks";

export function sectionText(s: Section): string {
  const parts: string[] = [s.title, s.subtitle];
  for (const b of s.blocks) {
    if (b.type === "p") parts.push(b.si, b.en ?? "");
    else if (b.type === "list") parts.push(...b.items.map((i) => `${i.si} ${i.en ?? ""}`));
    else if (b.type === "table") parts.push(...b.head, ...b.rows.flat());
    else if (b.type === "note") parts.push(b.title, b.si);
    else if (b.type === "code") parts.push(b.code, b.caption ?? "");
  }
  return parts.join(" ").toLowerCase();
}

export function SectionCard({
  section,
  index,
  done,
  onToggleDone,
  registerRef,
}: {
  section: Section;
  index: number;
  done: boolean;
  onToggleDone: () => void;
  registerRef: (id: string, el: HTMLElement | null) => void;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "-40px 0px -80px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id={section.id}
      ref={(el) => {
        ref.current = el;
        registerRef(section.id, el);
      }}
      className="print-page-break scroll-mt-24"
    >
      <div
        className={`rounded-3xl border bg-white p-5 shadow-sm transition-all duration-500 sm:p-7 dark:border-white/10 dark:bg-white/[0.03] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } ${done ? "border-brand-300 dark:border-brand-400/40" : "border-slate-200"}`}
      >
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-emerald-600 text-2xl shadow-md shadow-brand-500/20">
            {section.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
              Section {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="si mt-0.5 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
              {section.title}
            </h2>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400">
              {section.subtitle}
            </p>
          </div>
          <button
            onClick={onToggleDone}
            className={`no-print shrink-0 rounded-full border px-3 py-1.5 text-xs font-bold transition ${
              done
                ? "border-brand-400 bg-brand-400 text-emerald-950"
                : "border-slate-300 text-slate-500 hover:border-brand-400 hover:text-brand-600 dark:border-white/20 dark:text-slate-400"
            }`}
          >
            {done ? "✓ කියවූවා" : "කියවූවාද?"}
          </button>
        </div>

        <div className="mt-5 space-y-5">
          {section.blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
