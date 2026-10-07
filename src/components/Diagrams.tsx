/* Pure-SVG / CSS visual components: Android robot, Architecture stack, Activity lifecycle */

export function AndroidRobot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="Android robot">
      <g fill="currentColor">
        <path d="M45 80a55 55 0 0 1 110 0z" />
        <circle cx="75" cy="56" r="5" fill="#0b1a12" opacity="0.85" />
        <circle cx="125" cy="56" r="5" fill="#0b1a12" opacity="0.85" />
        <rect x="40" y="20" width="7" height="32" rx="3.5" transform="rotate(-30 43.5 36)" />
        <rect x="153" y="20" width="7" height="32" rx="3.5" transform="rotate(30 156.5 36)" />
        <rect x="45" y="86" width="110" height="72" rx="12" />
        <rect x="20" y="86" width="17" height="54" rx="8.5" />
        <rect x="163" y="86" width="17" height="54" rx="8.5" />
        <rect x="70" y="160" width="18" height="34" rx="9" />
        <rect x="112" y="160" width="18" height="34" rx="9" />
      </g>
    </svg>
  );
}

const layers = [
  {
    n: 1,
    title: "Applications",
    en: "User-facing apps",
    items: ["Home", "Contacts", "Camera", "Browser", "Play Store", "Your Apps"],
    cls: "from-brand-400 to-emerald-500 text-emerald-950",
  },
  {
    n: 2,
    title: "Application Framework",
    en: "APIs for developers",
    items: [
      "Activity Manager",
      "Window Manager",
      "Content Providers",
      "View System",
      "Notification Mgr",
      "Package Mgr",
      "Resource Mgr",
      "Location Mgr",
    ],
    cls: "from-teal-400 to-cyan-500 text-teal-950",
  },
  {
    n: 3,
    title: "Android Runtime (ART) + Native Libraries",
    en: "Dex bytecode · AOT/JIT · C/C++ libraries",
    items: [
      "ART",
      "Core Libraries",
      "SQLite",
      "WebKit",
      "OpenGL ES",
      "Media Framework",
      "SSL",
      "libc (Bionic)",
    ],
    cls: "from-sky-500 to-indigo-500 text-white",
  },
  {
    n: 4,
    title: "HAL — Hardware Abstraction Layer",
    en: "Standard interfaces to device hardware",
    items: ["Camera HAL", "Audio HAL", "Bluetooth HAL", "Sensors HAL", "Wi-Fi HAL"],
    cls: "from-violet-500 to-fuchsia-500 text-white",
  },
  {
    n: 5,
    title: "Linux Kernel",
    en: "Drivers · Power · Security · Binder IPC",
    items: [
      "Display",
      "Camera",
      "Wi-Fi",
      "Audio",
      "Flash Memory",
      "Binder (IPC)",
      "Power Mgmt",
    ],
    cls: "from-slate-700 to-slate-900 text-slate-100",
  },
];

export function ArchitectureStack() {
  return (
    <div className="space-y-2">
      {layers.map((l) => (
        <div
          key={l.n}
          className={`print-page-break rounded-2xl bg-gradient-to-r ${l.cls} p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5`}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h4 className="text-base font-bold tracking-tight sm:text-lg">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/25 text-xs font-extrabold">
                {l.n}
              </span>
              {l.title}
            </h4>
            <span className="text-[11px] font-medium opacity-80">{l.en}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {l.items.map((it) => (
              <span
                key={it}
                className="rounded-lg bg-black/10 px-2 py-1 text-[11px] font-semibold ring-1 ring-white/20"
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-semibold text-slate-400">
        <span>▲ ඉහළ ස්ථර = user ට ආසන්නයි</span>
        <span className="text-slate-300 dark:text-slate-600">|</span>
        <span>පහළ ස්ථර = hardware ට ආසන්නයි</span>
      </div>
    </div>
  );
}

function Box({
  x,
  y,
  w = 140,
  label,
  tone = "callback",
}: {
  x: number;
  y: number;
  w?: number;
  label: string;
  tone?: "callback" | "state" | "destroy";
}) {
  const fill =
    tone === "state"
      ? "#0f766e"
      : tone === "destroy"
        ? "#9f1239"
        : tone === "callback"
          ? "#15803d"
          : "#15803d";
  return (
    <g>
      <rect x={x} y={y} width={w} height={46} rx={14} fill={fill} opacity="0.95" />
      <text
        x={x + w / 2}
        y={y + 28}
        textAnchor="middle"
        fill="white"
        fontSize="15"
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({ d, label }: { d: string; label?: string }) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke="#94a3b8"
        strokeWidth="2.5"
        markerEnd="url(#arrowHead)"
        strokeLinecap="round"
      />
      {label && (
        <text
          x={0}
          y={0}
          fill="#64748b"
          fontSize="11"
          fontFamily="'JetBrains Mono', monospace"
        >
          {label}
        </text>
      )}
    </g>
  );
}

export function LifecycleDiagram() {
  return (
    <div className="print-page-break overflow-x-auto rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-ink-900">
      <svg viewBox="0 0 660 330" className="min-w-[560px]">
        <defs>
          <marker
            id="arrowHead"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="4.5"
            orient="auto"
          >
            <path d="M0,0 L9,4.5 L0,9 z" fill="#94a3b8" />
          </marker>
        </defs>

        <Box x={20} y={40} label="onCreate()" />
        <Box x={180} y={40} label="onStart()" />
        <Box x={340} y={40} label="onResume()" />
        <g>
          <rect
            x={500}
            y={40}
            width={140}
            height={46}
            rx={14}
            fill="#3ddc84"
            stroke="#052e1b"
            strokeWidth="2"
          />
          <text
            x={570}
            y={68}
            textAnchor="middle"
            fill="#052e1b"
            fontSize="14"
            fontWeight="700"
            fontFamily="'JetBrains Mono', monospace"
          >
            App Running
          </text>
        </g>

        <Box x={500} y={150} label="onPause()" tone="state" />
        <Box x={340} y={150} label="onStop()" tone="state" />
        <Box x={340} y={260} label="onDestroy()" tone="destroy" />
        <Box x={20} y={150} label="onRestart()" tone="callback" />

        <Arrow d="M160,63 L176,63" />
        <Arrow d="M320,63 L336,63" />
        <Arrow d="M480,63 L496,63" />
        <Arrow d="M570,86 L570,146" />
        <Arrow d="M500,173 L484,173" />
        <Arrow d="M410,196 L410,256" />
        <Arrow d="M340,173 L164,173" />
        <Arrow d="M90,150 C90,110 150,88 236,88" />

        <text
          x={330}
          y={322}
          textAnchor="middle"
          fill="#94a3b8"
          fontSize="12"
          fontFamily="Inter, sans-serif"
        >
          onRestart() නැවත onStart() වෙත යයි · onDestroy() අවසාන අවස්ථාවයි
        </text>
      </svg>
    </div>
  );
}

export function DataFlowDiagram() {
  const steps = [
    {
      num: "01",
      icon: "🌐",
      title: "Backend REST API",
      tech: "Spring Boot / Node / PHP",
      desc: "Server endpoint වෙතින් JSON දත්ත සපයයි (Ex: /api/v1/products)",
      badge: "HTTP GET / POST",
      color: "border-sky-500/40 bg-sky-50 dark:bg-sky-950/30 text-sky-900 dark:text-sky-200",
    },
    {
      num: "02",
      icon: "⚡",
      title: "Retrofit + OkHttp",
      tech: "apiService.getProducts().enqueue()",
      desc: "Background thread එකක asynchronous HTTP call එකක් යවා JSON response එක ලබා ගනී",
      badge: "Async Callback",
      color: "border-indigo-500/40 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200",
    },
    {
      num: "03",
      icon: "📄",
      title: "JSON Response & Gson",
      tech: "GsonConverterFactory",
      desc: "JSON string එක parse කර Java objects වලට ස්වයංක්‍රීයව පරිවර්තනය කරයි",
      badge: "@SerializedName mapping",
      color: "border-amber-500/40 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200",
    },
    {
      num: "04",
      icon: "📦",
      title: "Data Models (POJO)",
      tech: "List<ProductModel> / CategoryModel",
      desc: "UI එකෙන් වෙන්ව දත්ත structured ලෙස තබා ගන්නා model objects සාදයි",
      badge: "Clean Architecture",
      color: "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200",
    },
    {
      num: "05",
      icon: "🔄",
      title: "Adapter",
      tech: "ProductAdapter.updateList()",
      desc: "Model objects ගෙන ViewHolders වල ඇති UI components වලට bind කරයි",
      badge: "ViewHolder Pattern",
      color: "border-purple-500/40 bg-purple-50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200",
    },
    {
      num: "06",
      icon: "📱",
      title: "RecyclerView + LayoutManager",
      tech: "GridLayoutManager(this, 2)",
      desc: "Views recycle කරමින් තිරය මත items 2-column grid එකක් ලෙස වේගයෙන් render කරයි",
      badge: "View Recycling",
      color: "border-teal-500/40 bg-teal-50 dark:bg-teal-950/30 text-teal-900 dark:text-teal-200",
    },
    {
      num: "07",
      icon: "🖼️",
      title: "Android UI & Glide",
      tech: "Glide.with(ctx).load().into(img)",
      desc: "පරිශීලකයාට පෙනෙන අවසන් තිරය; images cache වී සුමටව දර්ශනය වේ",
      badge: "User Interface",
      color: "border-brand-500/40 bg-brand-50 dark:bg-brand-950/30 text-brand-900 dark:text-brand-200",
    },
  ];

  return (
    <div className="print-page-break my-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-white/10">
        <div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Viva Architecture Flow · Question #60
          </span>
          <h4 className="si text-lg font-bold text-slate-900 dark:text-white">
            Android End-to-End Data Flow Architecture
          </h4>
        </div>
        <span className="rounded-full bg-brand-500/10 px-3 py-1 font-mono text-xs font-semibold text-brand-700 dark:text-brand-300">
          Backend → UI Pipeline
        </span>
      </div>

      <div className="relative space-y-3">
        {steps.map((st, i) => (
          <div key={st.num} className="relative">
            <div
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border p-4 transition-all hover:scale-[1.01] ${st.color}`}
            >
              <div className="flex items-start sm:items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 dark:bg-ink-900 shadow-sm text-xl">
                  {st.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-extrabold opacity-75">{st.num}</span>
                    <h5 className="font-bold text-sm sm:text-base">{st.title}</h5>
                  </div>
                  <p className="si mt-0.5 text-[13px] opacity-90">{st.desc}</p>
                </div>
              </div>
              <div className="flex sm:flex-col items-start sm:items-end justify-between gap-1 shrink-0">
                <span className="rounded-lg bg-black/10 dark:bg-white/10 px-2.5 py-1 font-mono text-[11px] font-semibold">
                  {st.tech}
                </span>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider opacity-70">
                  {st.badge}
                </span>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <span className="font-mono text-xs font-extrabold text-slate-400 dark:text-slate-500">
                  ↓
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 dark:bg-ink-950/60 p-3 text-center border border-slate-200/60 dark:border-white/5">
        <p className="si text-xs text-slate-600 dark:text-slate-300">
          💡 <strong>විභාගයේදී කෙටියෙන් පැහැදිලි කිරීමට:</strong> Backend API එකෙන් Retrofit හරහා asynchronous request එකක් යවා, ലഭෙන JSON response එක Gson මඟින් Models බවට හරවා, ProductAdapter හරහා RecyclerView එක මඟින් UI එකේ පෙන්වයි.
        </p>
      </div>
    </div>
  );
}
