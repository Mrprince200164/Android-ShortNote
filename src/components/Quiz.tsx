import { useMemo, useState } from "react";
import { quiz, oneLiners } from "../data/notes";

export function Quiz() {
  const [openIds, setOpenIds] = useState<number[]>([1]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Core Android", "RecyclerView & Adapters", "Networking & APIs", "Code Snippets", "Architecture & Logic"];

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(quiz.map((q) => q.id ?? 0));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const filteredQuiz = useMemo(() => {
    const q = search.trim().toLowerCase();
    return quiz.filter((item) => {
      const matchCat =
        activeCategory === "All" ||
        item.category?.toLowerCase() === activeCategory.toLowerCase();
      const matchText =
        !q ||
        item.q.toLowerCase().includes(q) ||
        item.a.toLowerCase().includes(q) ||
        (item.code && item.code.toLowerCase().includes(q));
      return matchCat && matchText;
    });
  }, [search, activeCategory]);

  return (
    <div className="print-page-break rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 dark:border-white/10 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-600 text-2xl text-white shadow-md shadow-brand-500/20">
            🎓
          </div>
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
              Official Viva Q&amp;A Archive
            </p>
            <h2 className="si text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
              Android Viva විභාග ප්‍රශ්න සහ පිළිතුරු 60
            </h2>
            <p className="si text-[13px] text-slate-500 dark:text-slate-400">
              Android Viva.pdf හි සියලුම ප්‍රශ්න, කේත ඛණ්ඩ (Code Snippets) සහ ආදර්ශ පිළිතුරු
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            සියල්ල විවෘත කරන්න
          </button>
          <button
            onClick={collapseAll}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            සියල්ල වසන්න
          </button>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="mt-5 space-y-3">
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ප්‍රශ්න සොයන්න… (Ex: Glide, Retrofit, ViewHolder, Q46, LankaFresh)"
            className="si w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-brand-400 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:focus:bg-white/10"
          />
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm opacity-50">
            🔍
          </span>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                activeCategory === cat
                  ? "bg-brand-500 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Question Counter */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>ප්‍රශ්න {filteredQuiz.length} ක් හමු විය</span>
        <span className="font-mono">Total Archive: 60 Questions</span>
      </div>

      {/* Accordion Questions List */}
      <div className="mt-3 space-y-2.5">
        {filteredQuiz.map((item) => {
          const id = item.id ?? 0;
          const isOpen = openIds.includes(id);

          return (
            <div
              key={id}
              className="overflow-hidden rounded-2xl border border-slate-200 transition-all hover:border-slate-300 dark:border-white/10 dark:hover:border-white/20"
            >
              <button
                onClick={() => toggle(id)}
                className={`flex w-full items-start gap-3 px-4 py-3.5 text-left transition ${
                  isOpen
                    ? "bg-brand-50/70 dark:bg-brand-400/10"
                    : "bg-slate-50/50 hover:bg-slate-100/70 dark:bg-white/[0.02] dark:hover:bg-white/[0.05]"
                }`}
              >
                <span className="flex h-6 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-[11px] font-mono font-bold text-white shadow-xs">
                  {id}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.category && (
                      <span className="rounded-md bg-slate-200/80 dark:bg-white/10 px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-slate-600 dark:text-slate-300">
                        {item.category}
                      </span>
                    )}
                    {item.code && (
                      <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300">
                        Code Snippet
                      </span>
                    )}
                  </div>
                  <h3 className="si mt-1 text-[14.5px] font-semibold text-slate-800 dark:text-slate-100 leading-snug">
                    {item.q}
                  </h3>
                </div>

                <span
                  className={`mt-1 text-brand-600 transition-transform duration-200 dark:text-brand-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-ink-950/40 space-y-3">
                  {item.code && (
                    <div className="rounded-xl border border-slate-800 bg-ink-950 p-3">
                      <div className="flex items-center gap-1.5 border-b border-white/10 pb-1.5 mb-2">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span className="h-2 w-2 rounded-full bg-brand-400" />
                        <span className="font-mono text-[10.5px] text-slate-400 ml-1">Examiner Code Card</span>
                      </div>
                      <pre className="thin-scroll overflow-x-auto text-[12.5px] font-mono text-brand-200 leading-relaxed whitespace-pre-wrap">
                        <code>{item.code}</code>
                      </pre>
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400">
                      Answer / විභාග පිළිතුර:
                    </span>
                    <p className="si mt-1 text-[14.5px] leading-relaxed text-slate-700 dark:text-slate-200">
                      {item.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredQuiz.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-400 dark:border-white/10">
            සොයන ලද වචනයට ගැළපෙන Viva ප්‍රශ්න හමු නොවුණි 🤔
          </div>
        )}
      </div>

      {/* One-Liners Rapid Revision */}
      <div className="mt-8 rounded-3xl bg-ink-950 p-6 text-white shadow-xl shadow-brand-950/20">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400 text-lg">
            ⚡
          </span>
          <div>
            <h3 className="si text-base font-bold text-brand-300">
              One-Liners — විභාගයට පෙර කඩිනම් පුනරීක්ෂණය
            </h3>
            <p className="text-[12px] text-slate-400">
              HDP II සහ Viva විභාගයේ අනිවාර්යයෙන්ම මතක තබා ගත යුතු ප්‍රධාන කරුණු 21
            </p>
          </div>
        </div>

        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {oneLiners.map((l, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 rounded-xl bg-white/[0.04] p-3 text-[13px] font-medium text-slate-200 transition hover:bg-white/[0.07]"
            >
              <span className="font-mono text-xs font-bold text-brand-400 shrink-0">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span className="si leading-relaxed">{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
