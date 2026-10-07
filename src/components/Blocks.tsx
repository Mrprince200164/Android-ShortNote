import type { Block, ListItem } from "../data/notes";
import { quickFacts } from "../data/notes";
import { ArchitectureStack, LifecycleDiagram, DataFlowDiagram } from "./Diagrams";

const toneStyles: Record<string, string> = {
  tip: "border-brand-300 bg-brand-50 text-brand-900 dark:border-brand-400/30 dark:bg-brand-400/10 dark:text-brand-100",
  info: "border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-100",
  warn: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100",
};

const toneIcon: Record<string, string> = { tip: "💡", info: "ℹ️", warn: "⚠️" };

function En({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-0.5 block text-[13px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
      {children}
    </span>
  );
}

function ListItems({ items, ordered }: { items: ListItem[]; ordered?: boolean }) {
  if (ordered) {
    return (
      <ol className="space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-400/20 dark:text-brand-200">
              {i + 1}
            </span>
            <span>
              <span className="si text-[15px] text-slate-700 dark:text-slate-200">{it.si}</span>
              {it.en && <En>{it.en}</En>}
            </span>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
          <span>
            <span className="si text-[15px] text-slate-700 dark:text-slate-200">{it.si}</span>
            {it.en && <En>{it.en}</En>}
          </span>
        </li>
      ))}
    </ul>
  );
}

function DataTable({ head, rows, caption }: { head: string[]; rows: string[][]; caption?: string }) {
  return (
    <div className="print-page-break overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
      <div className="overflow-x-auto thin-scroll">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-brand-500 to-emerald-600 text-white">
              {head.map((h) => (
                <th key={h} className="px-3 py-2.5 text-xs font-bold uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-white/10">
            {rows.map((r, i) => (
              <tr
                key={i}
                className={
                  i % 2
                    ? "bg-slate-50/70 dark:bg-white/[0.03]"
                    : "bg-white dark:bg-transparent"
                }
              >
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={`px-3 py-2.5 align-top ${
                      j === 0
                        ? "font-mono text-[12.5px] font-semibold text-slate-900 dark:text-brand-200"
                        : "si text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="border-t border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
          {caption}
        </p>
      )}
    </div>
  );
}

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <div>
          <p className="si text-[15.5px] text-slate-700 dark:text-slate-200">{block.si}</p>
          {block.en && (
            <p className="mt-1.5 border-l-2 border-brand-300 pl-3 text-[13px] text-slate-500 dark:border-brand-400/40 dark:text-slate-400">
              {block.en}
            </p>
          )}
        </div>
      );
    case "list":
      return <ListItems items={block.items} ordered={block.ordered} />;
    case "table":
      return <DataTable head={block.head} rows={block.rows} caption={block.caption} />;
    case "code":
      return (
        <div className="print-page-break overflow-hidden rounded-2xl border border-slate-800 bg-ink-950">
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
            <span className="ml-1 truncate text-[11px] text-slate-400">{block.caption}</span>
          </div>
          <pre className="thin-scroll overflow-x-auto p-4 text-[12.5px] leading-relaxed text-brand-100">
            <code className="font-mono">{block.code}</code>
          </pre>
        </div>
      );
    case "note":
      return (
        <div className={`print-page-break rounded-2xl border p-4 ${toneStyles[block.tone]}`}>
          <p className="flex items-center gap-2 text-sm font-bold">
            <span>{toneIcon[block.tone]}</span>
            {block.title}
          </p>
          <p className="si mt-1.5 text-[14.5px] leading-relaxed opacity-90">{block.si}</p>
        </div>
      );
    case "stack":
      return <ArchitectureStack />;
    case "lifecycle":
      return <LifecycleDiagram />;
    case "facts":
      return (
        <div className="print-page-break grid gap-2 sm:grid-cols-2">
          {quickFacts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                {f.label}
              </p>
              <p className="mt-0.5 text-[13.5px] font-semibold text-slate-800 dark:text-slate-100">
                {f.value}
              </p>
            </div>
          ))}
        </div>
      );
    case "dataflow":
      return <DataFlowDiagram />;
    default:
      return null;
  }
}
