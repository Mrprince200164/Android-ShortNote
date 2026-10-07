export type ListItem = { si: string; en?: string };

export type Block =
  | { type: "p"; si: string; en?: string }
  | { type: "list"; items: ListItem[]; ordered?: boolean }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "code"; code: string; caption?: string }
  | { type: "note"; tone: "tip" | "warn" | "info"; title: string; si: string }
  | { type: "stack" }
  | { type: "lifecycle" }
  | { type: "facts" };

export type Section = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  blocks: Block[];
};

export const quickFacts: { label: string; value: string }[] = [
  { label: "OS Type", value: "Mobile / Embedded Operating System" },
  { label: "Developer", value: "Google + Open Handset Alliance (OHA)" },
  { label: "Kernel", value: "Modified Linux Kernel" },
  { label: "Written in", value: "Kotlin, Java, C / C++" },
  { label: "License", value: "Apache License 2.0 (AOSP — Open Source)" },
  { label: "First Release", value: "Android 1.0 — 23 Sep 2008 (HTC Dream / T-Mobile G1)" },
  { label: "Latest", value: "Android 16 (API level 36)" },
  { label: "Package Format", value: ".apk → .aab (Android App Bundle)" },
];

export const quiz: { q: string; a: string }[] = [
  {
    q: "Android යනු කුමන ආයතනයක් මුලින්ම සෑදූ OS එකද?",
    a: "Andy Rubin ඇතුළු නිදහන් කණ්ඩායමක් විසින් 2003 දී ආරම්භ කළ Android Inc. ආයතනයයි. 2005 දී Google විසින් එය මිලදී ගන්නා ලදී.",
  },
  {
    q: "Android OS එක මුල් කරගෙන සැකසුණේ මොනවද?",
    a: "ලිපියගත (modified) Linux Kernel එකක්. එම නිසා Android එක open source වන අතර multi-user Linux සුරක්ෂිතතාවය ද උරුම කරගනී.",
  },
  {
    q: "Android Architecture එකේ ප්‍රධාන ස්ථර කීයක්ද? නම් කරන්න.",
    a: "ස්ථර 5කි — (1) Applications, (2) Application Framework, (3) Android Runtime (ART) + Libraries, (4) HAL (Hardware Abstraction Layer), (5) Linux Kernel.",
  },
  {
    q: "Dalvik සහ ART අතර වෙනස මොකක්ද?",
    a: "Dalvik = පරණ runtime එක (JIT only). ART (Android Runtime) = Android 5.0 සිට පවතින නව runtime එක; AOT + JIT compilation, better garbage collection හා වේගවත් performance ලබා දෙයි.",
  },
  {
    q: "Android හි ප්‍රධාන Application Components 4 මොනවාද?",
    a: "Activity (UI තිරය), Service (background task), Broadcast Receiver (system messages ලබා ගැනීම), Content Provider (data share කිරීම).",
  },
  {
    q: "Activity එකක lifecycle methods මොනවාද?",
    a: "onCreate() → onStart() → onResume() → onPause() → onStop() → onRestart() → onDestroy().",
  },
  {
    q: "Intent එකක් යනු අනේක?",
    a: "එක් component එකකින් තවත් component එකක් කැඳවීමට (Activity එකක් විවෘත කිරීමට / service එකක් ආරම්භ කිරීමට) යොදන messaging object එකයි. Explicit සහ Implicit ලෙස වර්ග 2කි.",
  },
  {
    q: "APK සහ AAB යනු?",
    a: "APK (Android Package) — app එක install කිරීමට යොදන package file එක. AAB (Android App Bundle) — Play Store එකට upload කිරීමට යොදන නව format එක; device එකට අවශ්‍ය කොටස් පමණක් බාගත වේ.",
  },
  {
    q: "Android app සෑදීමට භාවිත කරන IDE එක සහ භාෂා?",
    a: "Android Studio (official IDE). භාෂා — Kotlin (නිර්දේශිත) හෝ Java; C/C++ වලින් NDK හරහා ද ලිවිය හැක.",
  },
  {
    q: "AndroidManifest.xml එකේ කාර්යය මොකක්ද?",
    a: "app එකේ සෑම component එකක්ම, permissions (internet, camera…), app name, icon, minimum SDK ආදිය OS එකට නිවේදනය කරන මූලික config file එකයි.",
  },
  {
    q: "Android හි open source වීමේ වාසි මොනවාද?",
    a: "Source code නොමිලේ ලැබේ (AOSP), device makers හට customize කළ හැක (MIUI, One UI…), developer ලාට නිදහන් පරිසරයක්, hardware විශාල පරාසයකට සහය.",
  },
  {
    q: "Android සහ iOS අතර ප්‍රධාන වෙනස 3ක් සඳහන් කරන්න.",
    a: "(1) Android = open source (Linux), iOS = closed source (Darwin/XNU). (2) Android = Google Play සහ වෙනත් stores, iOS = App Store පමණි. (3) Android = බොහෝ නිෂ්පාදකයන්ගේ devices, iOS = Apple devices පමණි.",
  },
];

export const oneLiners: string[] = [
  "Android = Linux kernel based, open source mobile OS (Google).",
  "Started 2003 (Android Inc.) → Google 2005 → Android 1.0 in 2008.",
  "Architecture layers: Apps → Framework → ART/Libraries → HAL → Linux Kernel.",
  "Dalvik (JIT) වෙනුවට Android 5.0 සිට ART (AOT+JIT).",
  "4 Main Components: Activity, Service, Broadcast Receiver, Content Provider.",
  "Activity Lifecycle: onCreate → onStart → onResume → (running) → onPause → onStop → onDestroy.",
  "UI = XML layouts, Logic = Kotlin / Java, Config = AndroidManifest.xml.",
  "Build system = Gradle; IDE = Android Studio; Testing = AVD Emulator / ADB.",
  "Publish: .apk (install) / .aab (Play Store upload).",
  "Version naming: sweets A→Z (Cupcake … Pie), පසුව numbers (10, 11, 12, 13, 14, 15, 16).",
];

export const sections: Section[] = [
  {
    id: "intro",
    icon: "🤖",
    title: "Android හැඳින්වීම",
    subtitle: "What is Android?",
    blocks: [
      {
        type: "p",
        si: "Android යනු Google සමාගම විසින් නඩත්තු කරන, Linux Kernel මත පදනම් වූ open source mobile operating system එකකි. එය මූලික වශයෙන්ම touchscreen smartphones සහ tablets සඳහා නිර්මාණය කළ ද, අද වන විට smart TVs (Android TV), wrist watches (Wear OS), cars (Android Auto / Automotive), cameras, game consoles, door locks සහ IoT devices සඳහා ද භාවිත වේ.",
        en: "Android is an open-source, Linux-kernel based mobile operating system developed by Google, used on phones, tablets, TVs, watches, cars and IoT devices.",
      },
      {
        type: "list",
        items: [
          { si: "නිර්මාණය කළේ — Android Inc. (2003, Andy Rubin, Rich Miner, Nick Sears, Chris White)", en: "Founded by Android Inc. in Palo Alto, California, October 2003." },
          { si: "2005 දී Google විසින් මිලදී ගන්නා ලදී", en: "Google acquired Android Inc. in July 2005 (~US$50 million)." },
          { si: "2007 — Open Handset Alliance (OHA) පිහිටුවන ලදී (Google, HTC, Intel, Motorola, Samsung, Qualcomm ඇතුළු සමාගම් 84ක්)", en: "OHA announced the Android platform on 5 Nov 2007." },
          { si: "පළමු Android phone — HTC Dream (T-Mobile G1), 2008 සැප්තැම්බර් 23", en: "First commercial Android device released September 2008." },
          { si: "අද වන විට ලෝකයේ smartphones වලින් 70%+ ක් Android OS මත ක්‍රියාත්මක වේ", en: "Android holds the largest global mobile OS market share." },
        ],
      },
      {
        type: "note",
        tone: "tip",
        title: "මතක තබා ගන්න (Memory tip)",
        si: "Android = “An Open Mobile Platform”. 3-5-8 නියමය: 2003 ආරම්භය, 2005 Google අතට, 2007 OHA, 2008 පළමු phone, 5 layers, 4 components.",
      },
      { type: "facts" },
    ],
  },
  {
    id: "features",
    icon: "✨",
    title: "Android හි ප්‍රධාන විශේෂාංග",
    subtitle: "Features of Android OS",
    blocks: [
      {
        type: "list",
        items: [
          { si: "Open Source — source code (AOSP) නොමිලේ ලබා ගත හැක; ඕනෑම කෙනෙකුට modify කර භාවිත කළ හැක.", en: "Open source under Apache 2.0 (Android Open Source Project)." },
          { si: "Multi-user / Multi-tasking — එකවර apps කිහිපයක් run කළ හැක; split-screen සහ picture-in-picture සහය.", en: "True multitasking with split screen & PiP." },
          { si: "Beautiful UI — Material Design, dark theme, gesture navigation, widgets, live wallpapers.", en: "Material You, adaptive icons, dynamic color." },
          { si: "Connectivity — Wi-Fi, Bluetooth, NFC, GPS, 4G/5G, Hotspot, USB-C, Infrared.", en: "Wide range of connectivity options." },
          { si: "Storage — internal/external storage සහ සැහැල්ලු SQLite relational database එකක් built-in වේ.", en: "SQLite database engine bundled with the OS." },
          { si: "Media Support — H.264, HEVC, MP3, AAC, AAC+, AMR, JPEG, PNG, GIF, WebP, VP9 ආදිය සඳහා සහය.", en: "Rich audio/video/image codec support." },
          { si: "Notifications — status bar, heads-up, lock-screen සහ rich notifications.", en: "Extensible notification framework." },
          { si: "Multi-language — භාෂා 100+ සහය (අපේ සිංහල ද ඇතුළුව).", en: "Supports 100+ languages including Sinhala." },
          { si: "Google Play Store — app, game, book, movie ලක්ෂ ගණනක් බාගත කළ හැක (3rd party stores ද හැක).", en: "Sideloading .apk files is also allowed." },
          { si: "Security — app sandbox, permissions model, Google Play Protect, biometrics (fingerprint / face), encryption.", en: "Sandboxing + runtime permissions + verified boot." },
          { si: "Google services integration — Gmail, Maps, YouTube, Drive, Assistant, Find My Device.", en: "Deep Google account integration." },
          { si: "Hardware variety — මිල අඩු phone එකක සිට flagship foldable දක්වා ධාවනය වේ.", en: "Runs on a huge range of hardware." },
        ],
      },
      {
        type: "note",
        tone: "info",
        title: "Application Sandbox",
        si: "සෑම app එකක්ම වෙන වෙනම Linux user ID එකක් සමඟ වෙනම sandbox එකක (process එකක) ධාවනය වේ. එමඟින් එක් app එකක් තවත් app එකක දත්ත වෙත අනවසර ප්‍රවේශය වළක්වයි.",
      },
    ],
  },
  {
    id: "architecture",
    icon: "🧱",
    title: "Android Architecture",
    subtitle: "Software Stack — ස්ථර 5",
    blocks: [
      {
        type: "p",
        si: "Android software stack එක ස්ථර (layers) 5කින් සමන්විත වේ. ඉහළින් පහළට — Applications → Application Framework → Android Runtime & Libraries → HAL → Linux Kernel.",
        en: "The Android software stack has 5 layers, each built on top of the one below it.",
      },
      { type: "stack" },
      {
        type: "table",
        head: ["ස්ථරය (Layer)", "කාර්යභාරය", "අඩංගු වන දේ"],
        rows: [
          ["1. Applications", "User ට දෘශ්‍යමාන app එකක් ලෙස", "Home, Contacts, Camera, Browser, Phone, Play Store, ඔබ සෑදූ apps"],
          ["2. Application Framework", "Developers හට API ලබා දීම", "Activity Manager, Window Manager, Content Providers, View System, Notification Manager, Package Manager, Resource Manager, Telephony & Location Manager"],
          ["3. Android Runtime (ART) + Native Libraries", "App ධාවනය කිරීම සහ native කාර්ය", "ART (Dex bytecode), Core Libraries; SQLite, WebKit, OpenGL ES, Media Framework, SSL, libc (Bionic), Surface Manager"],
          ["4. HAL — Hardware Abstraction Layer", "Hardware එකට standard interface දීම", "Camera HAL, Audio HAL, Bluetooth HAL, Sensors HAL, Wi-Fi HAL modules"],
          ["5. Linux Kernel", "Hardware ↔ Software සම්බන්ධ කිරීම + security", "Display, Camera, Wi-Fi, Audio, Flash memory (Binder IPC), Power management drivers"],
        ],
      },
      {
        type: "list",
        items: [
          { si: "Linux Kernel — ධාවක (drivers) මඟින් hardware එක පාලනය කරයි; power management සහ security ද සපයයි.", en: "Foundation layer; handles drivers, memory, process & power management." },
          { si: "Binder IPC — විවිධ app processes අතර සන්නිවේදනය සිදු කරන kernel module එකයි.", en: "Binder = Inter-Process Communication mechanism." },
          { si: "ART — .dex bytecode එක device එකේ machine code බවට compile කරයි (AOT + JIT).", en: "Replaced Dalvik VM in Android 5.0." },
          { si: "HAL — එකම framework code එක විවිධ නිෂ්පාදකයන්ගේ hardware සමඟ වැඩ කිරීමට ඉඩ දෙයි.", en: "Exposes standard interfaces to device capabilities." },
        ],
      },
    ],
  },
  {
    id: "versions",
    icon: "🍬",
    title: "Android Versions & API Levels",
    subtitle: "Cupcake සිට Android 16 දක්වා",
    blocks: [
      {
        type: "p",
        si: "Android 1.0 සිට Android 9 (Pie) දක්වා versions අනුක්‍රමයෙන් අකුරු A–Z අනුව රස කැවිලි (desserts) නම් කළේය. 2019 සිට අංක භාවිත කිරීම ආරම්භ විය (Android 10). සෑම version එකකටම API Level එකක් ඇත.",
        en: "Early versions were dessert-named alphabetically; since 2019 Google uses numbers. Each release has an API level.",
      },
      {
        type: "table",
        head: ["Version", "Name", "API", "අවුරුද්ද", "වැදගත්කම"],
        rows: [
          ["1.0 / 1.1", "— (Astre)", "1 / 2", "2008 / 2009", "පළමු නිකුතුව, HTC Dream"],
          ["1.5", "Cupcake", "3", "2009", "On-screen keyboard, video record, widgets"],
          ["1.6", "Donut", "4", "2009", "CDMA support, text-to-speech, screen sizes"],
          ["2.0 / 2.1", "Eclair", "5–7", "2009–10", "Google Maps navigation, HTML5, live wallpaper"],
          ["2.2", "Froyo", "8", "2010", "Wi-Fi hotspot, USB tethering, JIT compiler"],
          ["2.3", "Gingerbread", "9–10", "2010", "NFC support, improved UI, SIP calling"],
          ["3.0–3.2", "Honeycomb", "11–13", "2011", "Tablet-only UI, holographic design"],
          ["4.0", "Ice Cream Sandwich", "14–15", "2011", "Phone + Tablet එකට, Holo theme, Face Unlock"],
          ["4.1–4.3", "Jelly Bean", "16–18", "2012–13", "Project Butter, Google Now, notifications expand"],
          ["4.4", "KitKat", "19–20", "2013", "අඩු RAM devices, OK Google, ART (experimental)"],
          ["5.0 / 5.1", "Lollipop", "21–22", "2014–15", "ART, Material Design, 64-bit support"],
          ["6.0", "Marshmallow", "23", "2015", "Runtime permissions, fingerprint API, Doze mode"],
          ["7.0 / 7.1", "Nougat", "24–25", "2016", "Multi-window, Direct Reply, Daydream VR"],
          ["8.0 / 8.1", "Oreo", "26–27", "2017", "Picture-in-Picture, notification dots, Project Treble"],
          ["9", "Pie", "28", "2018", "Gesture navigation, Adaptive Battery, Digital Wellbeing"],
          ["10", "Android 10", "29", "2019", "Dark theme, full gestures, Scoped Storage"],
          ["11", "Android 11", "30", "2020", "Chat bubbles, one-time permissions, screen recording"],
          ["12", "Android 12", "31–32", "2021", "Material You, Privacy Dashboard"],
          ["13", "Android 13", "33", "2022", "Per-app languages, themed icons, better tablet UI"],
          ["14", "Android 14", "34", "2023", "Battery health, lockscreen customisation"],
          ["15", "Android 15", "35", "2024", "Private Space, satellite support, edge-to-edge"],
          ["16", "Android 16", "36", "2025", "Live notifications, Material 3 Expressive, faster release"],
        ],
      },
      {
        type: "note",
        tone: "warn",
        title: "Exam tip",
        si: "API Level ගණනය: Android 10 → 29, 11 → 30, 12 → 31, 13 → 33, 14 → 34, 15 → 35, 16 → 36. Lollipop (5.0) = API 21 මතක තබා ගන්න.",
      },
    ],
  },
  {
    id: "components",
    icon: "🧩",
    title: "App Components",
    subtitle: "4 Main Components + Intent",
    blocks: [
      {
        type: "p",
        si: "Android application එකක් සෑදී ඇත්තේ components කිහිපයක එකතුවෙනි. මේවා AndroidManifest.xml හි නිවේදනය කළ යුතුය.",
        en: "An Android app is a collection of components; every component must be declared in AndroidManifest.xml.",
      },
      {
        type: "table",
        head: ["Component", "කාර්යය", "උදාහරණ"],
        rows: [
          ["Activity", "User interface එකක් සහිත තිරයක් (single screen)", "Login screen, Home screen"],
          ["Service", "UI නැතිව background හි දිගටම ක්‍රියාත්මක වේ", "Music player, File download"],
          ["Broadcast Receiver", "System හෝ වෙනත් apps වලින් එන broadcast messages ලබා ගැනීම", "Battery low, SMS arrived, Boot completed"],
          ["Content Provider", "Apps අතර data share කිරීම", "Contacts, Media Store, Call log"],
        ],
      },
      {
        type: "list",
        items: [
          { si: "Intent — components අතර සන්නිවේදනයට යොදන message object එකයි.", en: "Explicit Intent = target named; Implicit Intent = action described, system resolves." },
          { si: "Fragment — Activity එකක් තුළ reusable UI කොටසක් (adaptive layouts සඳහා).", en: "Sub-activity with its own lifecycle." },
          { si: "View / ViewGroup — Button, TextView, ImageView වැනි UI elements සහ Layout containers (LinearLayout, ConstraintLayout).", en: "Building blocks of the UI." },
          { si: "Adapter (RecyclerView / ListView) — list data එක UI එකට බැඳීමට.", en: "Bridge between data source and list UI." },
        ],
      },
      {
        type: "code",
        caption: "Explicit Intent — නව Activity එකක් විවෘත කිරීම (Kotlin)",
        code: 'val intent = Intent(this, SecondActivity::class.java)\nintent.putExtra("USER_NAME", "Kasun")\nstartActivity(intent)',
      },
      {
        type: "code",
        caption: "AndroidManifest.xml උදාහරණයක්",
        code: '<manifest xmlns:android="http://schemas.android.com/apk/res/android">\n  <uses-permission android:name="android.permission.INTERNET"/>\n  <application android:label="MyApp" android:icon="@mipmap/ic_launcher">\n    <activity android:name=".MainActivity" android:exported="true">\n      <intent-filter>\n        <action android:name="android.intent.action.MAIN"/>\n        <category android:name="android.intent.category.LAUNCHER"/>\n      </intent-filter>\n    </activity>\n  </application>\n</manifest>',
      },
    ],
  },
  {
    id: "lifecycle",
    icon: "🔄",
    title: "Activity Lifecycle",
    subtitle: "onCreate() සිට onDestroy() දක්වා",
    blocks: [
      {
        type: "p",
        si: "Activity එකකට උපත සිට විනාශය දක්වා states කිහිපයක් ඇත. එක් එක් state එකට callback methods විශේෂයෙන් ක්‍රියාත්මක වේ.",
        en: "Each state is triggered by a callback method that you override in your Activity subclass.",
      },
      { type: "lifecycle" },
      {
        type: "table",
        head: ["Method", "විස්තරය", "බොහෝ විට කරන දේ"],
        rows: [
          ["onCreate()", "Activity එක නිර්මාණය වන පළමු අවස්ථාවයි", "setContentView(), views initialize, data bind"],
          ["onStart()", "Activity එක user ට පෙනේ", "—"],
          ["onResume()", "Activity එක ඉදිරියෙන් ඇති අතර user අන්තර්ක්‍රියා කරයි", "Animation / sensor start"],
          ["onPause()", "තවත් activity එකක් ඉදිරියට එන විට; app එක තවම දෘශ්‍යමානයි", "Save unsaved data, pause video"],
          ["onStop()", "Activity එක user ට නොපෙනේ", "Release resources, stop network calls"],
          ["onRestart()", "නවතා ඇති activity එක නැවත ආරම්භ වේ", "Refresh data"],
          ["onDestroy()", "Activity එක විනාශ වේ", "Clean up, free memory"],
        ],
      },
      {
        type: "note",
        tone: "tip",
        title: "මතක තබා ගැනීමට",
        si: "C–S–R–P–S–R–D → “Create, Start, Resume, Pause, Stop, Restart, Destroy”. Running state = onResume() සහ onPause() අතර කාලයයි.",
      },
    ],
  },
  {
    id: "development",
    icon: "🛠️",
    title: "App Development Basics",
    subtitle: "Android Studio · Kotlin · Project Structure",
    blocks: [
      {
        type: "list",
        items: [
          { si: "IDE — Android Studio (IntelliJ IDEA මත පදනම්). පැරණි මෙවලම: Eclipse + ADT plugin.", en: "Official IDE: Android Studio." },
          { si: "භාෂා — Kotlin (නිල් නිර්දේශිත), Java, C/C++ (NDK), තුන්වන පාර්ශවය: Flutter (Dart), React Native.", en: "Kotlin is the preferred language since 2017." },
          { si: "SDK — Software Development Kit; අවශ්‍ය පුස්තකාල, debugger, emulator අඩංගුය.", en: "SDK Platform Tools include adb and fastboot." },
          { si: "AVD — Android Virtual Device (Emulator) මඟින් PC එකේම app test කළ හැක.", en: "Emulator for testing without a physical device." },
          { si: "Gradle — project build system එක; dependencies කළමනාකරණය කරයි.", en: "build.gradle / build.gradle.kts files." },
          { si: "ADB — Android Debug Bridge; PC ↔ device සන්නිවේදනයට යොදන command-line මෙවලම.", en: "adb install, adb logcat, adb shell." },
          { si: "Jetpack libraries — Room, ViewModel, LiveData, Navigation, Compose (declarative UI).", en: "Modern Android development toolkit." },
        ],
      },
      {
        type: "table",
        head: ["Folder / File", "අඩංගු වන දේ"],
        rows: [
          ["manifests/", "AndroidManifest.xml — app config සහ permissions"],
          ["java/", "Kotlin/Java source files (Activities, Services…)"],
          ["res/layout/", "UI තිර XML files (activity_main.xml)"],
          ["res/drawable/", "Images, icons, shapes, vector graphics"],
          ["res/values/", "strings.xml, colors.xml, dimens.xml, themes.xml"],
          ["res/mipmap/", "App launcher icons විවිධ resolutions වලට"],
          ["build.gradle(.kts)", "Module/project build configuration සහ dependencies"],
        ],
      },
      {
        type: "code",
        caption: "MainActivity.kt — “Hello Android”",
        code: 'class MainActivity : AppCompatActivity() {\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.activity_main)\n    val tv = findViewById<TextView>(R.id.txtHello)\n    tv.text = "ආයුබෝවන් Android! 🤖"\n  }\n}',
      },
      {
        type: "list",
        ordered: true,
        items: [
          { si: "අදහස (idea) සැකසීම සහ UI design කිරීම" },
          { si: "Android Studio තුළ නව project එකක් සෑදීම" },
          { si: "Layout XML / Compose වලින් UI නිර්මාණය" },
          { si: "Kotlin වලින් logic ලිවීම සහ test කිරීම (emulator / device)" },
          { si: "Debug කිරීම (Logcat, breakpoints)" },
          { si: "Signed .apk / .aab එකක් build කිරීම" },
          { si: "Google Play Console හරහා publish කිරීම" },
        ],
      },
    ],
  },
  {
    id: "apk",
    icon: "📦",
    title: "APK, AAB සහ Play Store",
    subtitle: "Publishing an Android App",
    blocks: [
      {
        type: "table",
        head: ["අංගය", "APK", "AAB (Android App Bundle)"],
        rows: [
          ["විස්තරය", "Install කළ හැකි package file එක", "Play Store එකට upload කරන format එක"],
          ["Extension", ".apk", ".aab"],
          ["Size", "සියලු device සඳහා එක file එකයි (විශාලයි)", "Device එකට අවශ්‍ය කොටස් පමණක් (කුඩායි)"],
          ["Install කිරීම", "කෙලින්ම install කළ හැක (sideload)", "කෙලින්ම install කළ නොහැක"],
          ["භාවිතය", "Manual install, 3rd party stores", "Google Play publishing (2018 සිට අනිවාර්යයි)"],
        ],
      },
      {
        type: "list",
        items: [
          { si: "App signing — app එක publish කිරීමට keystore එකකින් digitally sign කළ යුතුය.", en: "Keystore (jks) + Play App Signing." },
          { si: "Google Play Protect — Play Store එකෙන් ලැබෙන apps ආරක්ෂිතදැයි පරීක්ෂා කරයි.", en: "Built-in malware scanning service." },
          { si: "Sideloading — “Unknown sources” ඉඩ දීමෙන් APK එකක් අතින් install කළ හැක; අවදානම් විය හැක.", en: "Manual APK installation is allowed but risky." },
        ],
      },
    ],
  },
  {
    id: "compare",
    icon: "⚖️",
    title: "Android vs iOS",
    subtitle: "සංසන්දනාත්මක වගුව",
    blocks: [
      {
        type: "table",
        head: ["අංගය", "Android", "iOS"],
        rows: [
          ["Developer", "Google", "Apple"],
          ["Kernel", "Modified Linux Kernel", "Darwin / XNU (Unix-based)"],
          ["Source", "Open source (AOSP)", "Closed source"],
          ["Devices", "Samsung, Xiaomi, Pixel, Oppo ආදි බොහෝ සමාගම්", "iPhone / iPad පමණි"],
          ["App Store", "Google Play + වෙනත් stores / sideload", "App Store පමණි (sideload අවහිර)"],
          ["Language", "Kotlin / Java", "Swift / Objective-C"],
          ["Customisation", "ඉතා වැඩි (launchers, ROMs, root)", "සීමාසහිත"],
          ["Price range", "ඉතා අඩු මිල සිට ඉහළ දක්වා", "ඉහළ මිල පමණි"],
          ["Updates", "Device සහ maker අනුව දෙබිඩි වේ (fragmentation)", "එකවර සියලු devices වලට"],
          ["Market share", "ලොව ප්‍රථමයා (~70%)", "දෙවන ස්ථානයේ (~28%)"],
        ],
      },
    ],
  },
  {
    id: "pros-cons",
    icon: "👍",
    title: "වාසි සහ අවාසි",
    subtitle: "Advantages & Disadvantages",
    blocks: [
      {
        type: "list",
        items: [
          { si: "✅ Open source සහ නොමිලේ — customization සඳහා සම්පූර්ණ නිදහස", en: "Free & open source" },
          { si: "✅ ධාවනය වන device ප්‍රමාණය අති විශාලයි (මිල අඩු phone සිඟ foldable දක්වා)" },
          { si: "✅ ලොකුම app ecosystem — Google Play හි app මිලියන 3+" },
          { si: "✅ Multi-tasking, multi-window, widgets සහ file system ප්‍රවේශය" },
          { si: "✅ Hardware expandability — SD card, dual SIM, USB OTG, replaceable battery" },
          { si: "✅ Developer හට publishing ඉතා ලහුවිලිම (one-time $25 fee)" },
          { si: "✅ Custom ROMs, root access, modular updates" },
        ],
      },
      {
        type: "list",
        items: [
          { si: "⚠️ Fragmentation — විවිධ screen sizes සහ OS versions නිසා testing අපහසුයි", en: "Device fragmentation is the biggest drawback" },
          { si: "⚠️ Malware / fake apps වැඩි අවදානමක් (3rd party stores)" },
          { si: "⚠️ Software updates දේශීය නිෂ්පාදකයා සහ carrier මත රඳා පවතී — ප්‍රමාද විය හැක" },
          { si: "⚠️ බොහෝ විට ඉහළ RAM/battery පරිභෝජනය (background apps)" },
          { si: "⚠️ දැන්වීම් (ads) සහ bloatware වැඩි ප්‍රවණතාවක්" },
          { si: "⚠️ පැරණි devices වලට නව versions ලැබෙන්නේ නැත" },
        ],
      },
    ],
  },
  {
    id: "uses",
    icon: "🌍",
    title: "Android භාවිත වන තැන්",
    subtitle: "Applications / Uses",
    blocks: [
      {
        type: "list",
        items: [
          { si: "Smartphones සහ Tablets — ප්‍රධානම භාවිතය" },
          { si: "Android TV / Google TV — smart television සහ set-top boxes" },
          { si: "Wear OS — smartwatches සහ fitness bands" },
          { si: "Android Auto / Automotive OS — වාහනවල infotainment systems" },
          { si: "Point of Sale (POS) machines, EDC card readers, billing tablets" },
          { si: "Digital kiosks, ATM machines, smart displays" },
          { si: "CCTV / IP cameras, smart door locks, drones" },
          { si: "IoT සහ smart home devices (Google Nest, smart plugs)" },
          { si: "Education & gaming handhelds, e-book readers, VR headsets" },
        ],
      },
    ],
  },
  {
    id: "summary",
    icon: "📝",
    title: "කෙටි සාරාංශය සහ ප්‍රශ්න",
    subtitle: "Revision + Short Q&A",
    blocks: [
      {
        type: "p",
        si: "පහත one-liners මතක තබා ගත් විට Android ගැන කෙටි සටහනක් සම්පූර්ණයෙන්ම ලිවිය හැක. ප්‍රශ්න සියල්ල විවෘත කර බලන්න.",
      },
    ],
  },
];
