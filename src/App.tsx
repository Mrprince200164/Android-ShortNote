import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { sections } from "./data/notes";
import { SectionCard, sectionText } from "./components/SectionCard";
import { Quiz } from "./components/Quiz";
import { AndroidRobot } from "./components/Diagrams";

const THEME_KEY = "android-note-theme";
const DONE_KEY = "android-note-done";

function useLocalState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore */
    }
  }, [key, value]);
  return [value, setValue] as const;
}

export default function App() {
  const [dark, setDark] = useLocalState<boolean>(THEME_KEY, false);
  const [done, setDone] = useLocalState<string[]>(DONE_KEY, []);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(sections[0].id);
  const [navOpen, setNavOpen] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const onScroll = useCallback(() => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    setReadProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    let current = sections[0].id;
    for (const s of sections) {
      const el = refs.current[s.id];
      if (el && el.getBoundingClientRect().top <= 140) current = s.id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const registerRef = useCallback((id: string, el: HTMLElement | null) => {
    refs.current[id] = el;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections.filter((s) => sectionText(s).includes(q));
  }, [query]);

  const handlePrint = () => {
    const wasDark = document.documentElement.classList.contains("dark");
    if (wasDark) document.documentElement.classList.remove("dark");
    window.print();
    window.addEventListener(
      "afterprint",
      () => {
        if (wasDark) document.documentElement.classList.add("dark");
      },
      { once: true },
    );
  };

  const toggleDone = (id: string) =>
    setDone((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const donePct = Math.round((done.length / sections.length) * 100);

  const NavList = ({ onPick }: { onPick?: () => void }) => (
    <ul className="space-y-1">
      {filtered.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            onClick={() => {
              setActive(s.id);
              onPick?.();
            }}
            className={`group flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] font-semibold transition ${
              active === s.id
                ? "bg-brand-100 text-brand-800 dark:bg-brand-400/15 dark:text-brand-200"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5"
            }`}
          >
            <span className="font-mono text-[11px] opacity-60">{String(i + 1).padStart(2, "0")}</span>
            <span className="si flex-1 truncate">{s.title}</span>
            {done.includes(s.id) && <span className="text-brand-500">✓</span>}
          </a>
        </li>
      ))}
      {filtered.length === 0 && (
        <li className="px-3 py-2 text-xs text-slate-400">සොයන ලද වචනය හමු නොවුණි 🤔</li>
      )}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-50 via-white to-brand-50/40 text-slate-900 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950 dark:text-slate-100">
      {/* reading progress */}
      <div className="no-print fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand-400 to-emerald-600 transition-[width] duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* ---------- header ---------- */}
      <header className="no-print sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/80">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-emerald-600 text-emerald-950 shadow-md shadow-brand-500/30">
              <AndroidRobot className="h-6 w-6" />
            </span>
            <span className="leading-none">
              <span className="block text-sm font-extrabold tracking-tight">Android කෙටි සටහන</span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
                Full Short Note
              </span>
            </span>
          </a>

          <div className="relative ml-auto hidden max-w-xs flex-1 sm:block">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="සොයන්න… (ART, API, Activity)"
              className="si w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-[13px] outline-none transition focus:border-brand-400 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:focus:bg-white/10"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50">🔍</span>
          </div>

          <button
            onClick={() => setDark(!dark)}
            title="Dark / Light"
            className="rounded-xl border border-slate-200 px-2.5 py-2 text-sm transition hover:border-brand-400 dark:border-white/10"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={handlePrint}
            className="hidden rounded-xl bg-brand-500 px-3 py-2 text-xs font-bold text-white transition hover:bg-brand-600 sm:block"
          >
            🖨 PDF
          </button>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="rounded-xl border border-slate-200 px-2.5 py-2 text-sm lg:hidden dark:border-white/10"
          >
            ☰
          </button>
        </div>

        {navOpen && (
          <div className="max-h-[60vh] overflow-y-auto border-t border-slate-200 px-4 py-3 lg:hidden dark:border-white/10">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="සොයන්න…"
              className="si mb-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[13px] outline-none dark:border-white/10 dark:bg-white/5"
            />
            <NavList onPick={() => setNavOpen(false)} />
          </div>
        )}
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-500/20" />
        <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-teal-500/10" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-700 dark:border-brand-400/30 dark:bg-white/5 dark:text-brand-300">
              ICT · තොරතුරු තාක්ෂණය
            </span>
            <h1 className="si mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Android Operating System —{" "}
              <span className="bg-gradient-to-r from-brand-500 to-emerald-600 bg-clip-text text-transparent">
                සම්පූර්ණ කෙටි සටහන
              </span>
            </h1>
            <p className="si mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              Android OS එක ගැන ඔබ දැනගත යුතු සියල්ල — ඉතිහාසය, architecture, versions,
              components, activity lifecycle, app development, APK/AAB, Android vs iOS, වාසි-අවාසි
              සහ විභාග Q&amp;A. සිංහල පැහැදිලි කිරීම් + ඉංග්‍රීසි තාක්ෂණික වචන.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#intro"
                className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:bg-brand-600"
              >
                📖 සටහන කියවන්න
              </a>
              <button
                onClick={handlePrint}
                className="no-print rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-brand-400 dark:border-white/15"
              >
                ⬇️ PDF ලෙස save කරන්න
              </button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: "විෂය", v: `${sections.length}` },
                { k: "Architecture layers", v: "5" },
                { k: "Main components", v: "4" },
                { k: "Versions ආවරණය", v: "1.0 → 16" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-slate-200 bg-white/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-lg font-extrabold text-brand-600 dark:text-brand-300">{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {s.k}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden justify-self-center lg:block">
            <div className="animate-floaty rounded-[2.5rem] border border-slate-200 bg-white/70 p-10 shadow-2xl shadow-brand-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <AndroidRobot className="mx-auto h-56 w-56 text-brand-400" />
              <div className="mt-6 space-y-2 text-center font-mono text-[11px] text-slate-500 dark:text-slate-400">
                <p>kernel: <span className="text-brand-500">linux</span></p>
                <p>runtime: <span className="text-brand-500">ART</span></p>
                <p>language: <span className="text-brand-500">kotlin</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- body ---------- */}
      <main className="mx-auto flex max-w-7xl gap-8 px-4 pb-20">
        <aside className="no-print hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white/70 p-3 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="mb-2 px-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Contents
              </p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-brand-500 transition-all"
                  style={{ width: `${donePct}%` }}
                />
              </div>
              <p className="mt-1 text-[10px] font-semibold text-slate-400">
                කියවූ ප්‍රතිශතය {donePct}%
              </p>
            </div>
            <NavList />
            <div className="mt-3 border-t border-slate-200 pt-3 dark:border-white/10">
              <a
                href="#summary"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] font-semibold text-brand-700 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-400/10"
              >
                ❓ ප්‍රශ්න සහ පිළිතුරු
              </a>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 space-y-6">
          <div className="sm:hidden">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="සොයන්න… (ART, API, Activity)"
                className="si w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-[13px] outline-none focus:border-brand-400 dark:border-white/10 dark:bg-white/5"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50">🔍</span>
            </div>
          </div>

          {query && (
            <p className="si rounded-xl bg-brand-50 px-4 py-2.5 text-[13px] font-semibold text-brand-800 dark:bg-brand-400/10 dark:text-brand-200">
              “{query}” සඳහා ගැළපෙන කොටස් {filtered.length}ක් හමු විය
            </p>
          )}

          {filtered.map((s) => (
            <SectionCard
              key={s.id}
              section={s}
              index={sections.indexOf(s)}
              done={done.includes(s.id)}
              onToggleDone={() => toggleDone(s.id)}
              registerRef={registerRef}
            />
          ))}

          <div id="summary">
            <Quiz />
          </div>

          {/* summary paragraph block for exam writing */}
          <div className="print-page-break rounded-3xl border border-brand-300 bg-gradient-to-br from-brand-500 to-emerald-600 p-6 text-white shadow-xl shadow-brand-500/20">
            <h3 className="si text-lg font-extrabold">✍️ විභාගයට ලියන ආකාරය</h3>
            <p className="si mt-3 text-[14.5px] leading-relaxed text-white/95">
              “Android යනු Google සමාගම විසින් නඩත්තු කරන, Linux kernel මත පදනම් වූ open source
              mobile operating system එකකි. එය 2003 දී Android Inc. මඟින් ආරම්භ කර 2005 දී Google
              විසින් අත්පත් කර ගන්නා ලද අතර පළමු Android device එක 2008 දී නිකුත් විය. Android
              architecture ස්ථර 5කින් සමන්විත වන අතර Applications, Application Framework, Android
              Runtime (ART), HAL සහ Linux Kernel ඒවායි. Activity, Service, Broadcast Receiver සහ
              Content Provider යනු ප්‍රධාන application components 4 වේ. Android Studio IDE එක
              තුළ Kotlin හෝ Java භාෂාවෙන් app සාදා .apk / .aab ලෙස package කර Google Play හරහා
              බෙදා හරියි.”
            </p>
            <p className="mt-4 rounded-xl bg-white/15 px-4 py-2.5 text-[13px] font-semibold">
              මතක තබා ගන්න: Open Source · Linux Kernel · 5 Layers · 4 Components · ART · Google
              Play
            </p>
          </div>
        </div>
      </main>

      <footer className="no-print border-t border-slate-200 bg-white/60 py-8 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center">
          <AndroidRobot className="h-10 w-10 text-brand-400" />
          <p className="si text-[13px] text-slate-500 dark:text-slate-400">
            Android Operating System — සම්පූර්ණ කෙටි සටහන · ICT / GIT විභාග සඳහා
          </p>
          <p className="text-[11px] text-slate-400">
            Data: AOSP · Google Developers documentation (versions &amp; API levels) — study notes
            only.
          </p>
        </div>
      </footer>

      {readProgress > 8 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="no-print fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40 transition hover:-translate-y-1 hover:bg-brand-600"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
