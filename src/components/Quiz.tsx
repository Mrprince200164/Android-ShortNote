import { useState } from "react";
import { quiz, oneLiners } from "../data/notes";

export function Quiz() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <div className="print-page-break rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-black text-2xl dark:from-brand-400 dark:to-emerald-600">
          ❓
        </div>
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
            Bonus
          </p>
          <h2 className="si text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
            ප්‍රශ්න සහ පිළිතුරු (Q&amp;A)
          </h2>
          <p className="text-[13px] text-slate-500 dark:text-slate-400">
            පිළිතුර බලන්න ප්‍රශ්නය ඔබන්න
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {quiz.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
            >
              <button
                onClick={() => toggle(i)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition ${
                  isOpen
                    ? "bg-brand-50 dark:bg-brand-400/10"
                    : "bg-slate-50/70 hover:bg-slate-100 dark:bg-white/[0.02] dark:hover:bg-white/[0.06]"
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="si flex-1 text-[14.5px] font-semibold text-slate-800 dark:text-slate-100">
                  {item.q}
                </span>
                <span
                  className={`text-brand-600 transition-transform dark:text-brand-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="si border-t border-slate-200 px-4 py-3 text-[14.5px] text-slate-700 dark:border-white/10 dark:text-slate-300">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-7 rounded-2xl bg-ink-950 p-5 text-white">
        <h3 className="si text-sm font-bold text-brand-300">⚡ One-liners — අවසන් පුනරීක්ෂණය</h3>
        <ul className="mt-3 space-y-2">
          {oneLiners.map((l, i) => (
            <li key={i} className="flex gap-3 text-[13px] font-medium text-slate-200">
              <span className="font-mono text-brand-400">{String(i + 1).padStart(2, "0")}</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
