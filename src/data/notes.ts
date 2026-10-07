export type ListItem = { si: string; en?: string };

export type Block =
  | { type: "p"; si: string; en?: string }
  | { type: "list"; items: ListItem[]; ordered?: boolean }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "code"; code: string; caption?: string }
  | { type: "note"; tone: "tip" | "warn" | "info"; title: string; si: string }
  | { type: "stack" }
  | { type: "lifecycle" }
  | { type: "facts" }
  | { type: "dataflow" };

export type Section = {
  id: string;
  category?: "hdp" | "viva" | "general";
  icon: string;
  title: string;
  subtitle: string;
  blocks: Block[];
};

export type QuizItem = {
  id?: number;
  q: string;
  a: string;
  category?: string;
  code?: string;
};

export const quickFacts: { label: string; value: string }[] = [
  {
    "label": "OS Type",
    "value": "Mobile / Embedded Operating System"
  },
  {
    "label": "Developer",
    "value": "Google + Open Handset Alliance (OHA)"
  },
  {
    "label": "Kernel",
    "value": "Modified Linux Kernel"
  },
  {
    "label": "Languages",
    "value": "Java, Kotlin (Logic) / XML (UI)"
  },
  {
    "label": "Official IDE",
    "value": "Android Studio (IntelliJ based)"
  },
  {
    "label": "Build System",
    "value": "Gradle (Project-level & Module-level)"
  },
  {
    "label": "Runtime Engine",
    "value": "ART (Android Runtime) — AOT + JIT hybrid"
  },
  {
    "label": "First Release",
    "value": "Android 1.0 (2008) — HTC Dream (G1)"
  },
  {
    "label": "Latest Version",
    "value": "Android 16 (API Level 36)"
  },
  {
    "label": "Packaging",
    "value": ".apk (Installation) / .aab (Play Store Bundle)"
  },
  {
    "label": "REST Client",
    "value": "Retrofit + OkHttp + Gson"
  },
  {
    "label": "Image Loading",
    "value": "Glide Library (Async Cache & Load)"
  }
];

export const quiz: QuizItem[] = [
  {
    "id": 1,
    "q": "What is an Activity? (Activity එකක් යනු කුමක්ද?)",
    "a": "An Activity represents a single screen in an Android application with a user interface (UI) where the user can interact with the app. (පරිශීලකයාට app එක සමඟ interact විය හැකි එක් තිරයක් Activity එකකින් නිරූපණය වේ.)",
    "category": "Core Android"
  },
  {
    "id": 2,
    "q": "What is a Fragment? (Fragment එකක් යනු කුමක්ද?)",
    "a": "A Fragment is a reusable part of an Activity's UI. It has its own lifecycle and can be used to create modular, dynamic multi-pane screens. (Activity එකක UI එකේ නැවත භාවිත කළ හැකි කොටසකි. එයට වෙනම lifecycle එකක් පවතී.)",
    "category": "Core Android"
  },
  {
    "id": 3,
    "q": "Why use Fragments? (Fragments භාවිත කරන්නේ ඇයි?)",
    "a": "Fragments make the application more modular, allow different UI sections to be reused across activities, and adapt easily to tablets and multi-pane layouts. (App එක modular කිරීමට, තිර ප්‍රමාණය අනුව UI වෙනස් කිරීමට සහ කේතය නැවත භාවිත කිරීමට උපකාරී වේ.)",
    "category": "Core Android"
  },
  {
    "id": 4,
    "q": "What is RecyclerView? (RecyclerView එකක් යනු කුමක්ද?)",
    "a": "RecyclerView is an advanced, flexible Android component used to efficiently display a large list or grid of items by reusing (recycling) item views as the user scrolls. (විශාල items ලැයිස්තුවක් memory කාර්යක්ෂමව පෙන්වීමට views recycle කරමින් ක්‍රියාත්මක වන ප්‍රධාන UI component එකකි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 5,
    "q": "Why use RecyclerView instead of a normal ListView? (ListView වෙනුවට RecyclerView යොදන්නේ ඇයි?)",
    "a": "RecyclerView provides better performance by recycling views, enforces the ViewHolder pattern to avoid repeated findViewById calls, supports multiple layout managers (Linear, Grid, Staggered), and has built-in item animations. (ViewHolder අනිවාර්ය කර findViewById නැවත නැවත කැඳවීම නවත්වයි, LayoutManagers මඟින් Linear සහ Grid පහසුවෙන් සකසයි, scrolling performance ඉහළයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 6,
    "q": "What is an Adapter? (Adapter එකක් යනු කුමක්ද?)",
    "a": "An Adapter acts as a bridge between the data source (ArrayList, Models) and the UI component (RecyclerView, ListView). It converts data items into view objects. (දත්ත එකතුව (Data) සහ UI තිරය අතර පාලමක් ලෙස ක්‍රියා කර, data items views බවට පරිවර්තනය කරයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 7,
    "q": "What is ViewHolder? (ViewHolder එකක් යනු කුමක්ද?)",
    "a": "A ViewHolder is a static wrapper class that holds references to all the views inside a single item row (e.g. TextView, ImageView), eliminating the need for costly repeated findViewById() calls during scrolling. (තනි row එකක ඇති views වල references මතකයේ තබා ගෙන, scroll කිරීමේදී findViewById නැවත කැඳවීම වළක්වයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 8,
    "q": "What is onCreateViewHolder()? (onCreateViewHolder හි කාර්යය කුමක්ද?)",
    "a": "It inflates the XML layout for a new RecyclerView item row (using LayoutInflater) and returns a new ViewHolder instance containing these views. (නව item row එකක් සඳහා XML layout එක inflate කර ViewHolder object එකක් සාදා return කරයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 9,
    "q": "What is onBindViewHolder()? (onBindViewHolder හි කාර්යය කුමක්ද?)",
    "a": "It binds the actual data of a specific item from the dataset (at the given position) to the UI views inside the ViewHolder. (අදාළ position එකේ ඇති model data රැගෙන ViewHolder එකේ TextView, ImageView ආදියට bind කරයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 10,
    "q": "What is getItemCount()? (getItemCount හි කාර්යය කුමක්ද?)",
    "a": "It returns the total number of items in the dataset that the RecyclerView should display. (RecyclerView එකෙහි ප්‍රදර්ශනය කළ යුතු මුළු items ගණන return කරයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 11,
    "q": "What is an Intent? (Intent එකක් යනු කුමක්ද?)",
    "a": "An Intent is a messaging object used to communicate between Android components (e.g., opening another Activity, starting a background service, or sending a broadcast). (Android components අතර සන්නිවේදනය කිරීමට (වෙනත් Activity එකක් විවෘත කිරීමට / Services ඇරඹීමට) යොදන messaging object එකයි.)",
    "category": "Core Android"
  },
  {
    "id": 12,
    "q": "What is onCreate()? (onCreate() ක්‍රමවේදයේ කාර්යය කුමක්ද?)",
    "a": "onCreate() is the first lifecycle callback executed when an Activity is created. It is used to initialize UI components, call setContentView(layout), bind variables, and set listeners. (Activity එකක් මුලින්ම create වන විට ක්‍රියාත්මක වන callback එකයි; UI initialize කිරීමට සහ setContentView ඇමතීමට යොදයි.)",
    "category": "Core Android"
  },
  {
    "id": 13,
    "q": "What is onResume()? (onResume() ක්‍රමවේදයේ කාර්යය කුමක්ද?)",
    "a": "onResume() is called when the Activity comes to the foreground and is fully ready for user interaction. It is the ideal place to resume animations and start sensor listeners. (Activity එක foreground එකට පැමිණ user interaction සඳහා සම්පූර්ණයෙන්ම සූදානම් වූ විට ක්‍රියාත්මක වේ.)",
    "category": "Core Android"
  },
  {
    "id": 14,
    "q": "What is onPause()? (onPause() ක්‍රමවේදයේ කාර්යය කුමක්ද?)",
    "a": "onPause() is called when the Activity is partially obscured by another activity (like a dialog or incoming call). It is used to pause animations, save lightweight unsaved edits, and release hardware resources. (වෙනත් Activity එකකින් හෝ dialog එකකින් screen එක අර්ධ වශයෙන් වැසුණු විට ක්‍රියාත්මක වේ; animations pause කිරීමට යොදයි.)",
    "category": "Core Android"
  },
  {
    "id": 15,
    "q": "What is Retrofit? (Retrofit යනු කුමක්ද?)",
    "a": "Retrofit is a type-safe HTTP client library for Android and Java (developed by Square) used to seamlessly consume RESTful APIs and communicate with web backends. (Android හි REST APIs සමඟ පහසුවෙන් සහ ආරක්ෂිතව සන්නිවේදනය කිරීමට යොදන type-safe HTTP client library එකකි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 16,
    "q": "Why is Retrofit used in LankaFresh? (LankaFresh වැනි apps වල Retrofit යොදන්නේ ඇයි?)",
    "a": "Retrofit connects the Android application with the backend API to retrieve products and category data, handles asynchronous background requests, and automatically parses JSON into Model objects using Gson. (Backend API එකෙන් products සහ categories දත්ත ලබා ගැනීමට, async calls කිරීමට සහ JSON to Java object auto-conversion සඳහා යොදයි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 17,
    "q": "What is an API? (API එකක් යනු කුමක්ද?)",
    "a": "API (Application Programming Interface) allows two software systems to communicate with each other. In mobile development, the Android frontend communicates with the backend database/server through RESTful APIs. (මෘදුකාංග පද්ධති දෙකක් අතර සන්නිවේදනය කිරීමට ඇති අතුරුමුහුණතයි; mobile app එක සහ server එක අතර data හුවමාරුවට යොදයි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 18,
    "q": "What is JSON? (JSON යනු කුමක්ද?)",
    "a": "JSON (JavaScript Object Notation) is a lightweight, human-readable text-based data interchange format commonly used to transfer data between servers and mobile clients. (Server එක සහ Android app එක අතර දත්ත හුවමාරු කර ගැනීමට යොදා ගන්නා lightweight text data format එකයි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 19,
    "q": "What is Gson? (Gson යනු කුමක්ද?)",
    "a": "Gson is a Java library by Google that converts JSON strings into Java objects (deserialization) and Java objects into JSON format (serialization). (JSON දත්ත Java objects බවටත්, Java objects නැවත JSON බවටත් පරිවර්තනය කරන Google library එකකි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 20,
    "q": "What is Glide? (Glide යනු කුමක්ද?)",
    "a": "Glide is a fast, efficient open-source image-loading and caching library for Android designed to load remote images from URLs into ImageViews smoothly. (Image URLs වලින් පින්තූර async ලෙස බාගත කර, cache කර ImageViews වලට සුමටව load කරන library එකකි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 21,
    "q": "Why use Glide? (Glide භාවිත කරන්නේ ඇයි?)",
    "a": "Glide handles background downloading, memory and disk caching, automatic image resizing to fit views, prevents OutOfMemory (OOM) errors, and supports placeholder images. (Memory/Disk caching, OOM errors වැළැක්වීම, image resizing සහ smooth scrolling සහතික කිරීම සඳහා යොදයි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 22,
    "q": "What is a Model class? (Model class එකක් යනු කුමක්ද?)",
    "a": "A Model class (or POJO - Plain Old Java Object) represents the structure of data used by the app, such as ProductModel and CategoryModel, containing private fields, getters, and setters. (App එකෙහි දත්ත ව්‍යුහය (fields, getters, setters) නිරූපණය කරන Java class එකකි - Ex: ProductModel, CategoryModel.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 23,
    "q": "What is @SerializedName? (@SerializedName annotation එකේ කාර්යය කුමක්ද?)",
    "a": "@SerializedName is a Gson annotation that maps a specific JSON key to a Java variable when the variable name differs from the JSON field name. (JSON field name එක සහ Java variable name එක වෙනස් වන විට ඒවා නිවැරදිව map කිරීමට Gson මඟින් සපයන annotation එකයි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 24,
    "q": "What is RecyclerView.Adapter? (RecyclerView.Adapter යනු කුමක්ද?)",
    "a": "It is the abstract base adapter class provided by Android that manages ViewHolder creation, data binding, and item count calculations for a RecyclerView. (RecyclerView එකක ViewHolders සෑදීම සහ Model දත්ත සමඟ ඒවා සම්බන්ධ කිරීම පාලනය කරන base class එකයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 25,
    "q": "What is LinearLayoutManager? (LinearLayoutManager යනු කුමක්ද?)",
    "a": "It is a LayoutManager that arranges RecyclerView items in a single linear direction—either vertically (like a list) or horizontally. (RecyclerView items තනි තීරුවක් (Vertical) හෝ පේළියක් (Horizontal) ලෙස පෙළගස්වන layout manager එකයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 26,
    "q": "What is GridLayoutManager? (GridLayoutManager යනු කුමක්ද?)",
    "a": "GridLayoutManager displays RecyclerView items in a 2-dimensional grid format with rows and columns (e.g. 2 columns for product catalogs). (Items rows සහ columns සහිත grid එකක් ආකාරයෙන් ප්‍රදර්ශනය කරන layout manager එකයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 27,
    "q": "Why use GridLayoutManager(this, 2)? (GridLayoutManager(this, 2) යොදන්නේ ඇයි?)",
    "a": "The parameter 2 specifies the span count, meaning items (such as products) will be displayed in exactly two columns across the screen. (අගය 2 මඟින් තිරය මත items තීරු දෙකක් (two columns) ලෙස display කිරීමට span count එක නියම කරයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 28,
    "q": "How does category filtering work? (Category filtering ක්‍රියාත්මක වන්නේ කෙසේද?)",
    "a": "When a category is selected, its category ID is compared against the category ID of each item in the product list. Only matching items are added to a filtered list and passed to the adapter. (තෝරාගත් category ID එක සෑම product එකකම category ID එක සමඟ සංසන්දනය කර, ගැළපෙන products පමණක් filtered list එකකට දමා adapter එක update කරයි.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 29,
    "q": "Why keep fullProductList? (fullProductList එකක් වෙනම තබා ගන්නේ ඇයි?)",
    "a": "It retains the master list of all products downloaded from the server so filtering can happen instantaneously in local memory without making repetitive server requests. (Server එකෙන් ලබා ගත් සම්පූර්ණ product list එක මතකයේ තබා ගෙන, නැවත API requests නොයවා local memory තුළ filter කිරීමට උපකාරී වේ.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 30,
    "q": "What happens when a category is clicked? (Category එකක් click කළ විට සිදුවන්නේ කුමක්ද?)",
    "a": "The category ID is passed to the filter function; products matching that ID are filtered into a new list; the adapter's updateList() is called; and notifyDataSetChanged() refreshes the screen. (Category ID එක filter function එකට ගොස්, ගැළපෙන list එක adapter එකට යවා, notifyDataSetChanged() මඟින් තිරය refresh කරයි.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 31,
    "q": "What is notifyDataSetChanged()? (notifyDataSetChanged() යනු කුමක්ද?)",
    "a": "It notifies the RecyclerView that the underlying dataset has changed and instructs it to redraw all visible item views on the screen. (දත්ත වෙනස් වී ඇති බව RecyclerView එකට දන්වා තිරයේ ඇති views නැවත ඇඳීමට (refresh) උපදෙස් දෙයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 32,
    "q": "What is a Callback in Retrofit? (Retrofit හි Callback එකක් යනු කුමක්ද?)",
    "a": "A Callback is an interface that handles the asynchronous result of a network request, providing onResponse() for success and onFailure() for network errors. (Network call එකක asynchronous ප්‍රතිඵලය handle කරන interface එකයි; සාර්ථක වූ විට onResponse() ද අසාර්ථක වූ විට onFailure() ද කැඳවයි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 33,
    "q": "What is onResponse()? (onResponse() ක්‍රමවේදයේ කාර්යය කුමක්ද?)",
    "a": "onResponse() is executed when the web server returns an HTTP response (such as 200 OK or 404), allowing the app to process response.body(). (Server එකෙන් HTTP response එකක් ලැබුණු විට ක්‍රියාත්මක වන callback එකයි; response body එක මෙහිදී කියවයි.)",
    "category": "Networking & APIs"
  },
  {
    "id": 34,
    "q": "What is onFailure()? (onFailure() ක්‍රමවේදයේ කාර්යය කුමක්ද?)",
    "a": "onFailure() is executed when the network request completely fails before reaching the server, such as due to no internet, DNS failure, or timeout. (Network connection නොමැති වීම, timeout වීම හෝ server එකට connect වීමට නොහැකි වූ විට ක්‍රියාත්මක වේ.)",
    "category": "Networking & APIs"
  },
  {
    "id": 35,
    "q": "What is ViewPager2? (ViewPager2 යනු කුමක්ද?)",
    "a": "ViewPager2 is an Android UI widget that allows users to swipe left and right between pages, screens, or slides (commonly used for onboarding and banner sliders). (තිරය මත slides හෝ pages අතර left/right swipe කිරීමට ඉඩ දෙන widget එකකි; banner slider සඳහා යොදයි.)",
    "category": "Core Android"
  },
  {
    "id": 36,
    "q": "Why use Handler in the banner slider? (Banner slider එකේ Handler යොදන්නේ ඇයි?)",
    "a": "A Handler allows code execution to be scheduled after a specific delay (e.g. postDelayed 3000ms), enabling promotional banners to auto-scroll continuously. (යම් කාල පරතරයකට (delay) පසු කේතයක් ධාවනය කිරීමට Handler යොදයි; banners ස්වයංක්‍රීයව scroll කිරීමට මෙය උපකාරී වේ.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 37,
    "q": "What is ArrayList? (ArrayList යනු කුමක්ද?)",
    "a": "ArrayList is a dynamic, resizable array collection in Java used to store an ordered sequence of objects that can grow or shrink at runtime. (ප්‍රමාණය වෙනස් කළ හැකි dynamic Java collection එකකි; runtime එකේදී objects එකතු කිරීමට/ඉවත් කිරීමට යොදයි.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 38,
    "q": "Why use List<ProductModel>? (List<ProductModel> යොදන්නේ ඇයි?)",
    "a": "It provides a type-safe generic collection to store and manipulate multiple product objects, ensuring compile-time type safety. (Product objects ගණනාවක් type-safe ලෙස එකතු කර තබා ගැනීමට සහ හැසිරවීමට generic interface එකක් ලෙස යොදයි.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 39,
    "q": "What is setAdapter()? (setAdapter() ක්‍රමවේදයේ කාර්යය කුමක්ද?)",
    "a": "setAdapter() binds an Adapter instance to a RecyclerView or ListView so that the view knows how to populate and render its data items. (Adapter එක RecyclerView එකට සම්බන්ධ කර දත්ත තිරය මත ඇඳීමට උපදෙස් දෙයි.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 40,
    "q": "What is findViewById()? (findViewById() ක්‍රමවේදයේ කාර්යය කුමක්ද?)",
    "a": "findViewById() traverses the XML layout hierarchy to find a UI widget by its unique integer resource ID (e.g. R.id.my_button) and casts it to a View object. (XML layout එකේ ඇති UI widget එකක් එහි R.id අගය මඟින් සොයාගෙන Java variable එකකට සම්බන්ධ කරයි.)",
    "category": "Core Android"
  },
  {
    "id": 41,
    "q": "What is setContentView()? (setContentView() ක්‍රමවේදයේ කාර්යය කුමක්ද?)",
    "a": "setContentView() sets the specified XML layout file (e.g., R.layout.activity_main) as the active visual interface for an Activity. (Activity එකෙහි ප්‍රදර්ශනය කළ යුතු XML layout file එක නියම කර තිරයට පෙන්වයි.)",
    "category": "Core Android"
  },
  {
    "id": 42,
    "q": "What is Android Manifest? (AndroidManifest.xml හි කාර්යය කුමක්ද?)",
    "a": "AndroidManifest.xml is the root configuration file that declares essential application metadata to the Android OS, including package name, activities, permissions, services, and hardware features. (App එකේ activities, permissions, services සහ package name ඇතුළු සියලු මූලික තොරතුරු OS එකට ප්‍රකාශ කරන ප්‍රධාන config ගොනුවයි.)",
    "category": "Core Android"
  },
  {
    "id": 43,
    "q": "Why is Internet permission required? (Internet permission අවශ්‍ය වන්නේ ඇයි?)",
    "a": "Because the app must open network sockets to communicate with backend REST servers, fetch data, and load remote image URLs. Declared as android.permission.INTERNET. (App එක server එක සමඟ communicate කර data හා images ලබා ගැනීමට network sockets විවෘත කිරීමට OS අවසරය අවශ්‍ය වේ.)",
    "category": "Core Android"
  },
  {
    "id": 44,
    "q": "What is Context? (Context යනු කුමක්ද?)",
    "a": "Context represents the environment/state of the application and provides access to Android system services, application resources (strings, drawables), databases, and layout inflation. (Application එකේ current state එක නිරූපණය කරන සහ system resources, layouts, services වෙත ප්‍රවේශය සපයන ප්‍රධාන object එකයි.)",
    "category": "Core Android"
  },
  {
    "id": 45,
    "q": "Why pass Context to an Adapter? (Adapter එකට Context pass කරන්නේ ඇයි?)",
    "a": "The Adapter requires Context to inflate XML layouts (LayoutInflater.from(context)), access application resources, load images using Glide (Glide.with(context)), and launch new activities. (Layout inflate කිරීමට, resources ලබා ගැනීමට, Glide මඟින් image load කිරීමට සහ toasts/intents පෙන්වීමට Adapter එකට Context අවශ්‍ය වේ.)",
    "category": "RecyclerView & Adapters"
  },
  {
    "id": 46,
    "q": "Examiner shows: CategoryModel c = list.get(position); (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It retrieves the CategoryModel object at the specified index position from the category list inside onBindViewHolder(). (List එකෙහි අදාළ position එකේ ඇති CategoryModel object එක ලබා ගනී.)",
    "category": "Code Snippets",
    "code": "CategoryModel c = list.get(position);"
  },
  {
    "id": 47,
    "q": "Examiner shows: holder.txtName.setText(c.getName()); (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It extracts the category name string from the model and sets it as the text of the TextView inside the ViewHolder. (Category model එකෙන් නම ලබාගෙන ViewHolder එකේ TextView එක තුළ ප්‍රදර්ශනය කරයි.)",
    "category": "Code Snippets",
    "code": "holder.txtName.setText(c.getName());"
  },
  {
    "id": 48,
    "q": "Examiner shows: productAdapter.updateList(filteredList); (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It passes the newly filtered product list to the adapter and refreshes the RecyclerView to display only matching items. (Filter කරන ලද නව product list එක ProductAdapter එකට යවා UI එක refresh කරයි.)",
    "category": "Code Snippets",
    "code": "productAdapter.updateList(filteredList);"
  },
  {
    "id": 49,
    "q": "Examiner shows: if (p.getCategoryId() == categoryId) (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It checks whether the product's category ID matches the ID of the category selected by the user. (Product එකේ category ID එක user තෝරාගත් category ID එකට සමාන දැයි පරීක්ෂා කරයි.)",
    "category": "Code Snippets",
    "code": "if (p.getCategoryId() == categoryId)"
  },
  {
    "id": 50,
    "q": "Examiner shows: apiService.getProducts().enqueue(...) (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It initiates an asynchronous background HTTP GET request via Retrofit to retrieve product data from the server without freezing the UI thread. (UI thread එක block නොවන පරිදි background thread එකක async API request එකක් server එකට යවයි.)",
    "category": "Code Snippets",
    "code": "apiService.getProducts().enqueue(new Callback<List<ProductModel>>() { ... });"
  },
  {
    "id": 51,
    "q": "Examiner shows: Glide.with(context).load(fullUrl).into(holder.img); (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "Glide asynchronously downloads the image from fullUrl, caches it in memory/disk, and displays it into the target ImageView inside the ViewHolder. (Glide මඟින් URL එකෙන් image එක async ලෙස බාගත කර, cache කර, ViewHolder එකේ ImageView එකට load කරයි.)",
    "category": "Code Snippets",
    "code": "Glide.with(context)\\n    .load(fullUrl)\\n    .into(holder.img);"
  },
  {
    "id": 52,
    "q": "Examiner shows: if (response.isSuccessful() && response.body() != null) (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It verifies that the server returned an HTTP 2xx success status code and that the response payload contains actual non-null data. (API request එක සාර්ථකව (HTTP 200) සිදුවී ඇති බවත් response එකේ data ඇති බවත් තහවුරු කරයි.)",
    "category": "Code Snippets",
    "code": "if (response.isSuccessful() && response.body() != null)"
  },
  {
    "id": 53,
    "q": "Examiner shows: productRecycler.setLayoutManager(new GridLayoutManager(this, 2)); (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It configures the product RecyclerView to display items arranged in a 2-column grid layout across the screen. (Products RecyclerView එක තීරු 2ක් (two columns) සහිත grid එකක් ලෙස පෙන්වීමට සකසයි.)",
    "category": "Code Snippets",
    "code": "productRecycler.setLayoutManager(\\n    new GridLayoutManager(this, 2)\\n);"
  },
  {
    "id": 54,
    "q": "Examiner shows: private List<ProductModel> fullProductList = new ArrayList<>(); (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It instantiates an in-memory ArrayList to hold the master, unfiltered list of all products fetched from the API. (API එකෙන් ලැබෙන සියලුම products master copy එකක් ලෙස memory එකේ තබා ගැනීමට list එකක් සාදයි.)",
    "category": "Code Snippets",
    "code": "private List<ProductModel> fullProductList = new ArrayList<>();"
  },
  {
    "id": 55,
    "q": "Examiner shows: txtStatus.setVisibility(View.GONE); (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It completely hides the status TextView and removes it from the layout flow so it occupies zero screen space. (Status TextView එක තිරයෙන් සම්පූර්ණයෙන්ම සඟවා layout ඉඩ අත්හරියි.)",
    "category": "Code Snippets",
    "code": "txtStatus.setVisibility(View.GONE);"
  },
  {
    "id": 56,
    "q": "Examiner shows: txtStatus.setVisibility(View.VISIBLE); (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It makes the status TextView visible on screen (e.g., to notify the user of loading states or empty results). (Status TextView එක තිරය මත දර්ශනය කරවයි.)",
    "category": "Code Snippets",
    "code": "txtStatus.setVisibility(View.VISIBLE);"
  },
  {
    "id": 57,
    "q": "Examiner shows: new Callback<List<ProductModel>>() (මෙම කේතයෙන් සිදුවන්නේ කුමක්ද?)",
    "a": "It creates an anonymous callback listener that receives either a successful list of ProductModel objects (onResponse) or an error (onFailure) from Retrofit. (Retrofit වෙතින් ProductModel list එකක් ලැබෙන විට එය handle කිරීමට callback එකක් නිර්මාණය කරයි.)",
    "category": "Code Snippets",
    "code": "new Callback<List<ProductModel>>() {\\n    @Override\\n    public void onResponse(Call<List<ProductModel>> call, Response<List<ProductModel>> response) { ... }\\n    @Override\\n    public void onFailure(Call<List<ProductModel>> call, Throwable t) { ... }\\n}"
  },
  {
    "id": 58,
    "q": "Examiner asks: Why do we use ProductModel instead of directly using UI components? (UI components වෙනුවට ProductModel යොදන්නේ ඇයි?)",
    "a": "ProductModel represents pure data separately from UI logic (Separation of Concerns). This makes code cleaner, testable, maintainable, allows data reuse across multiple screens, and protects against UI lifecycle changes. (දත්ත සහ UI presentation වෙන් කර තැබීම (clean architecture) මඟින් code එක maintain කිරීමට, test කිරීමට සහ reusable කිරීමට පහසු වේ.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 59,
    "q": "Examiner asks: What is the difference between Product and ProductModel? (Product සහ ProductModel අතර වෙනස කුමක්ද?)",
    "a": "ProductModel is specifically designed to model external REST API JSON payloads (using annotations like @SerializedName), while Product represents an internal business domain or local SQLite database entity. (ProductModel යනු REST API JSON response එක map කිරීමට යොදන model එකයි; Product යනු app එකේ local entity එකක් හෝ domain object එකකි.)",
    "category": "Architecture & Logic"
  },
  {
    "id": 60,
    "q": "Examiner asks: Explain the overall Android data flow. (සම්පූර්ණ Android Data Flow එක පැහැදිලි කරන්න.)",
    "a": "The Android app sends an async HTTP request via Retrofit → Backend REST API returns JSON data → Gson converts JSON into Model objects (ProductModel) → Adapter (ProductAdapter) receives the models → Adapter binds data into ViewHolders → RecyclerView renders rows via LayoutManager → Android UI displays final interactive screen with Glide loading images. (Backend API → Retrofit → JSON Response → ProductModel → Adapter → RecyclerView → Android UI)",
    "category": "Architecture & Logic"
  }
];

export const oneLiners: string[] = [
  "Android = Modified Linux kernel මත පදනම් වූ, Google නඩත්තු කරන open source mobile OS එකකි.",
  "Tools: Android Studio (IDE), Java/Kotlin, XML (UI), Android SDK, සහ Emulator / Real Device.",
  "Package Name: App එක Play Store සහ device එක තුළ අනන්‍යව හඳුනාගන්නා 'Digital Fingerprint' එකයි (lk.jiat.myapp).",
  "AndroidManifest.xml: App එකේ components, permissions, launcher entry ප්‍රකාශ කරන core configuration file එකයි.",
  "Gradle SDKs: compileSdk (build-time APIs), minSdk (අවම OS අවශ්‍යතාවය), targetSdk (runtime behavioral rules & Play Store compliance).",
  "Architecture Layers 5: Applications → Application Framework → ART + Native Libs → HAL → Linux Kernel.",
  "DVM vs JVM: DVM = Register-based, executes .dex, low memory. JVM = Stack-based, executes .class. Modern Android uses ART (AOT+JIT).",
  "R.java: XML resources සහ Java කේතය සම්බන්ධ කරන, auto-generated unique integer IDs අඩංගු bridge class එකයි.",
  "Screen Rotation: Device එක rotate වූ විට Activity එක destroy වී recreate වේ; state රැක ගැනීමට ViewModel හෝ onSaveInstanceState යොදයි.",
  "Process States (Priority): Foreground > Visible > Service > Background / Cached > Empty process.",
  "Activity Lifecycle: onCreate() → onStart() → onResume() → onPause() → onStop() → onRestart() → onDestroy().",
  "Launch Modes: standard (default), singleTop (re-uses top instance), singleTask (one per task), singleInstance (exclusive task).",
  "Intent Flags: FLAG_ACTIVITY_CLEAR_TOP සහ FLAG_ACTIVITY_SINGLE_TOP එකතු කර duplicate instances වැළැක්විය හැක.",
  "Intents: Explicit (same app, exact class name) සහ Implicit (cross-app, action + category + data, intent-filter මඟින් තෝරා ගනී).",
  "Fragments: Activity එකක් මත ක්‍රියාත්මක වන, തමන්ගේම lifecycle එකක් සහිත reusable UI component එකකි (onCreateView හි attachToRoot = false).",
  "Layouts: LinearLayout (gravity/weight), RelativeLayout (relative positioning), TableLayout, FrameLayout, ConstraintLayout (flat hierarchy).",
  "RecyclerView: ListView වෙනුවට views recycle කර memory ඉතිරි කරන dynamic list එකකි. අත්‍යවශ්‍ය methods 3: onCreateViewHolder, onBindViewHolder, getItemCount.",
  "Data Storage: SharedPreferences (key-value), Internal Storage (private files), External Storage (MediaStore/Downloads), SQLite (local database).",
  "Retrofit: Type-safe REST HTTP client එකකි. Call.enqueue() මඟින් background thread එකක asynchronous API requests සිදු කර UI block වීම වළක්වයි.",
  "Glide: Image URL වලින් async ලෙස images download කර, cache කර ImageView එකට efficiently load කරන library එකකි.",
  "Data Flow: Backend API → Retrofit → JSON Response → Model (ProductModel) → Adapter → RecyclerView → Android UI."
];

export const sections: Section[] = [
  {
    "id": "intro",
    "category": "general",
    "icon": "🤖",
    "title": "01. Android හැඳින්වීම සහ පරිසර පද්ධතිය",
    "subtitle": "What is Android, Target Devices, Open Source & Core Features",
    "blocks": [
      {
        "type": "p",
        "si": "Android යනු modified Linux Kernel එකක් මත පදනම් වූ, Google සමාගම සහ Open Handset Alliance (OHA) විසින් වැඩිදියුණු කරන ලෝකයේ වඩාත්ම ජනප්‍රිය open-source mobile මෙහෙයුම් පද්ධතියයි (Operating System).",
        "en": "Android is an open-source, Linux-based mobile operating system primarily designed for smartphones and tablets, but now powering smart TVs, wearables, and cars."
      },
      {
        "type": "facts"
      },
      {
        "type": "note",
        "tone": "info",
        "title": "Android ඉතිහාසය (Brief History)",
        "si": "2003 දී Andy Rubin, Rich Miner, Nick Sears සහ Chris White විසින් Android Inc. ආරම්භ කළ අතර 2005 දී Google විසින් එය මිලදී ගන්නා ලදී. ප්‍රථම වාණිජ Android දුරකථනය වූ HTC Dream (T-Mobile G1) 2008 සැප්තැම්බර් 23 දින එළිදැක්විණි."
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          {
            "si": "Smartphones සහ Tablets — ලොව පුරා බිලියන 3කට අධික ස්මාර්ට් ජංගම දුරකථන සහ ටැබ්ලට් පරිගණක.",
            "en": "Smartphones & Tablets"
          },
          {
            "si": "Smart TVs (Android TV / Google TV) — රූපවාහිනී තිර සඳහා විශේෂිත UI එකක් සහිතව.",
            "en": "Smart TVs"
          },
          {
            "si": "Smart Watches (Wear OS) — අත් ඔරලෝසු සහ fitness trackers සඳහා සැහැල්ලු runtime.",
            "en": "Wear OS Smartwatches"
          },
          {
            "si": "Car Infotainment (Android Auto / Android Automotive) — මෝටර් රථ පද්ධති සහ navigation සඳහා.",
            "en": "Automotive infotainment"
          }
        ]
      },
      {
        "type": "note",
        "tone": "tip",
        "title": "ප්‍රධාන විශේෂාංග 5 (Key Features)",
        "si": "1. Open Source (AOSP) — කේතය නොමිලේ ලබාගත හැකි අතර device නිෂ්පාදකයන්ට customize කළ හැක. 2. User-Friendly Interface — සරල සහ ආකර්ෂණීය UI. 3. Multitasking — එකවර apps කිහිපයක් කාර්යක්ෂමව ධාවනය. 4. Hardware Integration — GPS, Camera, Bluetooth, Sensors සෘජුව භාවිත කිරීම. 5. Google Play Store — මිලියන ගණනක apps පරිසර පද්ධතිය."
      }
    ]
  },
  {
    "id": "tools-naming",
    "category": "hdp",
    "icon": "🏷️",
    "title": "02. සංවර්ධන මෙවලම් සහ Package Naming",
    "subtitle": "Tools Used, Application ID, Reverse Domain Name & Rules",
    "blocks": [
      {
        "type": "p",
        "si": "Android application එකක් සාර්ථකව නිර්මාණය කිරීම සඳහා නිල මෙවලම් සහ සම්මත නීති රීති (Standards) භාවිත කළ යුතුය.",
        "en": "Android development uses standard tools and enforces a reverse domain naming system for global uniqueness."
      },
      {
        "type": "table",
        "head": [
          "Tool / Element",
          "විස්තරය (Purpose)",
          "උදාහරණ"
        ],
        "rows": [
          [
            "Android Studio",
            "Google හි නිල Integrated Development Environment (IDE)",
            "IntelliJ IDEA මත පදනම් වූ IDE"
          ],
          [
            "Java / Kotlin",
            "Application logic සහ business rules ලිවීමට යොදන භාෂා",
            "Kotlin (Modern Recommended), Java"
          ],
          [
            "XML",
            "පරිශීලක අතුරුමුහුණත (UI Design) සැලසුම් කිරීමට යොදයි",
            "activity_main.xml, colors.xml"
          ],
          [
            "Android SDK",
            "APIs, build tools, platform libraries සහ documentation",
            "Android SDK Build Tools 34+"
          ],
          [
            "Emulator / AVD",
            "පරිගණකය තුළ virtual phone එකක් run කර app එක test කිරීම",
            "Android Virtual Device (AVD), ADB"
          ]
        ],
        "caption": "Android සංවර්ධන මෙවලම් කට්ටලය (Core Tools)"
      },
      {
        "type": "note",
        "tone": "tip",
        "title": "Package Name (Application ID) යනු කුමක්ද?",
        "si": "Package Name යනු ඔබගේ application එක Android device එක තුළ සහ Google Play Store තුළ අනන්‍යව (globally unique) හඳුනා ගැනීමට යොදන string එකකි. මෙය application එකේ digital fingerprint එක ලෙස ක්‍රියා කරයි."
      },
      {
        "type": "code",
        "code": "Naming Convention: suffix.domain.app_name\n\nEx: lk.jiat.myapplication\n    ├── lk            : Top-level country domain (Sri Lanka)\n    ├── jiat          : Organization / Company Brand Name\n    └── myapplication : Unique application name\n\nPlay Store URL: https://play.google.com/store/apps/details?id=lk.jiat.myapplication",
        "caption": "Reverse Domain Name සම්මුතිය සහ Play Store URL"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "si": "Play Store Uniqueness — එකම package name එකෙන් apps දෙකක් Play Store එකට upload කළ නොහැක. කලින් කෙනෙකු upload කර ඇත්නම් එම නම ප්‍රතික්ෂේප වේ.",
            "en": "Guarantees global uniqueness in Play Store"
          },
          {
            "si": "Device Identification — Device එක තුළ app එකක් install කිරීමේදී package name එක පරීක්ෂා කරයි. එකම package name සහිත නව app එකක් දැමුවහොත් පැරණි app එක override වේ.",
            "en": "Prevents app collision on physical device"
          },
          {
            "si": "Automatic Folder Hierarchy — Android Studio මඟින් package name එක අනුව nested folders ස්වයංක්‍රීයව සාදයි (Ex: app/src/main/java/lk/jiat/myapplication).",
            "en": "Generates source directory structure"
          }
        ]
      },
      {
        "type": "note",
        "tone": "warn",
        "title": "වැදගත් නීති (Golden Rules)",
        "si": "1. Lowercase Only: අකුරු සියල්ල simple (lowercase) විය යුතුය. 2. Stay Consistent: එක් වරක් Play Store වෙත publish කළ පසු කිසිවිටෙක package name වෙනස් කළ නොහැක (වෙනස් කළහොත් වෙනම app එකක් ලෙස සැලකේ). 3. Never use 'example' in production: com.example.app වැනි නම් production සඳහා නොගත යුතුය."
      }
    ]
  },
  {
    "id": "project-structure",
    "category": "hdp",
    "icon": "📁",
    "title": "03. Android Project ව්‍යුහය සහ Folders",
    "subtitle": "Project Hierarchy, app module, src/main, AndroidManifest & res",
    "blocks": [
      {
        "type": "p",
        "si": "Android project එකක් යනු source code, resources සහ configuration files වල මනාව පිළියෙළ වූ structured එකතුවකි. Android Studio හි views 3ක් ඇත: Android View (සරල කළ දසුන), Project View (සත්‍ය ගොනු ව්‍යුහය), සහ Packages View.",
        "en": "An Android project organizes source code, build scripts, tests, and non-code resources into standardized modules."
      },
      {
        "type": "table",
        "head": [
          "Folder / File",
          "කාර්යය (Purpose)",
          "අන්තර්ගතය"
        ],
        "rows": [
          [
            "app/",
            "Application එකෙහි main module එක",
            "src/, build.gradle, proguard-rules"
          ],
          [
            "src/main/",
            "සත්‍ය application code එක සහ UI resources",
            "java/, res/, AndroidManifest.xml"
          ],
          [
            "src/test/",
            "JVM මත ධාවනය වන Local Unit Tests",
            "Physical device හෝ emulator අවශ්‍ය නොවේ"
          ],
          [
            "src/androidTest/",
            "Physical device එකක් මත run වන Instrumented UI tests",
            "Espresso, AndroidJUnit4 tests"
          ],
          [
            "AndroidManifest.xml",
            "Core configuration file එක",
            "Activities, Permissions, Services, Launcher activity"
          ],
          [
            "java/ (or kotlin/)",
            "Business logic කේත අඩංගු packages",
            "activity/, adapter/, model/, util/, viewmodel/"
          ],
          [
            "res/layout/",
            "XML Layout files",
            "activity_main.xml, item_row.xml"
          ],
          [
            "res/drawable/",
            "පින්තූර, Vector graphics සහ shape XML files",
            "PNG, JPG, SVG/XML vector drawables"
          ],
          [
            "res/mipmap/",
            "App launcher icons (විවිධ screen densities සඳහා)",
            "ic_launcher.png (mdpi, hdpi, xhdpi, xxhdpi)"
          ],
          [
            "res/values/",
            "නැවත භාවිත කළ හැකි අගයන් (Strings, Colors, Dimens)",
            "strings.xml, colors.xml, themes.xml"
          ],
          [
            "res/menu/",
            "Toolbar සහ Navigation menus",
            "menu_main.xml"
          ],
          [
            "res/raw/",
            "Raw media files (නොවෙනස් කළ ගොනු)",
            "Audio, Video, static JSON files"
          ]
        ],
        "caption": "Android Project ගොනු සහ ඩිරෙක්ටරි ව්‍යුහය"
      },
      {
        "type": "code",
        "code": "<!-- AndroidManifest.xml Sample -->\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\">\n    <!-- Permissions -->\n    <uses-permission android:name=\"android.permission.INTERNET\" />\n    <uses-permission android:name=\"android.permission.POST_NOTIFICATIONS\" />\n\n    <application\n        android:allowBackup=\"true\"\n        android:icon=\"@mipmap/ic_launcher\"\n        android:label=\"@string/app_name\"\n        android:roundIcon=\"@mipmap/ic_launcher_round\"\n        android:theme=\"@style/Theme.MyApplication\">\n        \n        <!-- Launcher Activity: App එක open වන විට මුලින්ම run වන screen එක -->\n        <activity\n            android:name=\".MainActivity\"\n            android:exported=\"true\">\n            <intent-filter>\n                <action android:name=\"android.intent.action.MAIN\" />\n                <category android:name=\"android.intent.category.LAUNCHER\" />\n            </intent-filter>\n        </activity>\n    </application>\n</manifest>",
        "caption": "AndroidManifest.xml ගොනුවේ ව්‍යුහය සහ Launcher Activity"
      }
    ]
  },
  {
    "id": "gradle-build",
    "category": "hdp",
    "icon": "🐘",
    "title": "04. Gradle Build System සහ SDK Configurations",
    "subtitle": "compileSdk, minSdk, targetSdk, dependencies & versioning",
    "blocks": [
      {
        "type": "p",
        "si": "Gradle යනු Android Studio හි නිල build automation මෙවලමයි. Project-level build.gradle (global repositories/plugins) සහ Module-level build.gradle (SDK versions, dependencies) ලෙස ගොනු දෙකක් පවතී.",
        "en": "Gradle automates code compilation, dependency resolution, packaging into APK/AAB, and testing."
      },
      {
        "type": "table",
        "head": [
          "SDK Property",
          "තේරුම සහ කාර්යය",
          "Installation බලපෑම",
          "Runtime බලපෑම"
        ],
        "rows": [
          [
            "compileSdk",
            "App එක compile කිරීමට භාවිත කරන API level එක. නවතම APIs code කිරීමට ඉඩ දෙයි. (Development time only)",
            "බලපෑමක් නැත (No)",
            "බලපෑමක් නැත (No)"
          ],
          [
            "minSdk",
            "App එක install කර run කිරීමට අවශ්‍ය අවම Android OS version එක. මීට අඩු devices වල install කළ නොහැක.",
            "ඔව් (Yes - Blocks)",
            "ඔව් (Yes)"
          ],
          [
            "targetSdk",
            "App එක design කර test කළ target Android version එක. OS එකේ modern security/behavioral rules ක්‍රියාත්මක කරයි.",
            "නැත (No)",
            "ඔව් (Yes - Applies rules)"
          ]
        ],
        "caption": "compileSdk vs minSdk vs targetSdk සංසන්දනය"
      },
      {
        "type": "code",
        "code": "android {\n    namespace 'lk.codehive.myapplication'\n    compileSdk 34 // Android 14 APIs compile-time එකේදී access කළ හැක\n\n    defaultConfig {\n        applicationId \"lk.codehive.myapplication\"\n        minSdk 28       // Android 9.0 ට අඩු phones වල install කළ නොහැක\n        targetSdk 34    // Android 14 හි behavioral rules අනුගමනය කරයි\n        versionCode 1   // Play Store update tracking integer\n        versionName \"1.0\" // Users ලාට පෙනෙන version string එක\n    }\n}\n\ndependencies {\n    implementation 'androidx.appcompat:appcompat:1.6.1'\n    implementation 'androidx.recyclerview:recyclerview:1.3.2'\n    implementation 'com.squareup.retrofit2:retrofit:2.9.0'\n    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'\n    implementation 'com.github.bumptech.glide:glide:4.16.0'\n}",
        "caption": "Module-level build.gradle (app/build.gradle) සැකසුම"
      },
      {
        "type": "note",
        "tone": "tip",
        "title": "Backward Compatibility සංකල්පය",
        "si": "Device OS version එක targetSdk එකට වඩා වැඩි නම්, system එක backward compatibility mode එකක් යොදා app එක බිඳ වැටීමෙන් තොරව ධාවනය කරයි. Google Play Store වෙත app එකක් submit කිරීමට නම් targetSdk එක නිරන්තරයෙන් යාවත්කාලීන විය යුතුය."
      }
    ]
  },
  {
    "id": "architecture-runtime",
    "category": "hdp",
    "icon": "🧱",
    "title": "05. Android Architecture, ART, Dalvik සහ JVM",
    "subtitle": "5 Layers, Virtual Machines, Dalvik vs ART, Stack vs Register",
    "blocks": [
      {
        "type": "p",
        "si": "Android මෙහෙයුම් පද්ධතිය ස්ථර 5කින් සමන්විත මනාව වෙන් කරන ලද architecture එකක් අනුගමනය කරයි. පහළම ස්ථරය hardware වලට ආසන්න වන අතර ඉහළම ස්ථරය user apps වේ.",
        "en": "Android follows a 5-layer architecture from hardware abstraction up to user-facing applications."
      },
      {
        "type": "stack"
      },
      {
        "type": "table",
        "head": [
          "ලක්ෂණය (Feature)",
          "JVM (Java Virtual Machine)",
          "Dalvik Virtual Machine (DVM)"
        ],
        "rows": [
          [
            "Architecture",
            "Stack-based architecture",
            "Register-based architecture (Mobile optimized)"
          ],
          [
            "Executable File",
            ".class bytecode execute කරයි",
            ".dex (Dalvik Executable) execute කරයි"
          ],
          [
            "Memory Usage",
            "වැඩි මතකයක් (RAM) අවශ්‍ය වේ",
            "අඩු මතකයකින් කාර්යක්ෂමව ධාවනය වේ"
          ],
          [
            "Instances",
            "Single process එකක් shared",
            "සෑම Android app එකක්ම වෙනම DVM instance එකක run වේ"
          ],
          [
            "ප්‍රධාන පරිසරය",
            "Desktop සහ Enterprise Server පද්ධති",
            "Memory සීමිත Mobile සහ Embedded devices"
          ]
        ],
        "caption": "JVM සහ Dalvik Virtual Machine (DVM) සංසන්දනය"
      },
      {
        "type": "note",
        "tone": "info",
        "title": "Dalvik වෙනුවට ART (Android Runtime) පැමිණියේ ඇයි?",
        "si": "Android 5.0 (Lollipop) සිට Dalvik වෙනුවට ART හඳුන්වා දෙන ලදී. Dalvik හිදී bytecode එක runtime එකේදී translate කළේ Just-In-Time (JIT) මඟිනි. නමුත් ART හි Ahead-Of-Time (AOT) compilation මඟින් app එක install වන විටදීම native machine code බවට පත් කරයි. இதனால் app startup speed එක 2x ගුණයකින් වැඩි වන අතර බැටරි සහ CPU පරිභෝජනය අඩු වේ. පසුකාලීනව AOT + JIT hybrid profiling එක් කරන ලදී."
      }
    ]
  },
  {
    "id": "ui-xml-rjava",
    "category": "hdp",
    "icon": "🎨",
    "title": "06. UI සැලසුම්කරණය, XML සහ R.java",
    "subtitle": "Separation of Concerns, XML Parsers, R.java Resource Bridge",
    "blocks": [
      {
        "type": "p",
        "si": "Android හි UI සැලසුම් කරන්නේ Java හෝ Kotlin වලින් කේතනය කිරීම වෙනුවට XML (eXtensible Markup Language) මඟිනි. මෙය Presentation layer සහ Business Logic layer එකිනෙකින් වෙන් කරයි.",
        "en": "Separating UI in XML from application logic improves reusability, maintainability, readability, and team collaboration."
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "si": "Code Reusability — එක් layout එකක් screens කිහිපයකට include කරගත හැක.",
            "en": "Reusable layouts"
          },
          {
            "si": "Maintainability & Readability — UI වෙනස් කිරීමේදී logic code එකට හානි සිදු නොවේ.",
            "en": "Clean separation of concerns"
          },
          {
            "si": "Team Collaboration — UI designers ලාට XML හරහාද, developers ලාට Java/Kotlin හරහාද එකවර වැඩ කළ හැක.",
            "en": "Parallel design and development"
          }
        ]
      },
      {
        "type": "note",
        "tone": "tip",
        "title": "R.java හි කාර්යභාරය (The Bridge)",
        "si": "R.java යනු Android build system (aapt) එක මඟින් auto-generate කරනු ලබන class එකකි. ව්‍යාපෘතියේ ඇති සියලුම XML resources (layouts, IDs, strings, drawables, colors) සඳහා unique integer (hexadecimal) IDs සපයයි. XML සහ Java අතර bridge එක ලෙස ක්‍රියා කරයි. Developers ලා කිසිවිටෙක R.java manually වෙනස් නොකළ යුතුය."
      },
      {
        "type": "code",
        "code": "// R.java auto-generated structure:\npublic final class R {\n    public static final class layout {\n        public static final int activity_main = 0x7f0b001c;\n    }\n    public static final class id {\n        public static final int my_button = 0x7f080045;\n        public static final int txt_title  = 0x7f080046;\n    }\n    public static final class string {\n        public static final int app_name  = 0x7f100020;\n    }\n}\n\n// Java code එකේදී භාවිත කරන ආකාරය:\nsetContentView(R.layout.activity_main);\nButton btn = findViewById(R.id.my_button);",
        "caption": "R.java ක්‍රියාකාරීත්වය සහ Java code එකට සම්බන්ධ වීම"
      }
    ]
  },
  {
    "id": "orientation-process",
    "category": "hdp",
    "icon": "🔄",
    "title": "07. Screen Orientation සහ Process States",
    "subtitle": "Screen Rotation, Configuration Changes, Process Priorities",
    "blocks": [
      {
        "type": "p",
        "si": "Android device එකක් rotate කළ විට (Screen Orientation change), default හැසිරීම වන්නේ දැනට පවතින Activity එක destroy වී නැවත අලුතින් create වීමයි (Recreation). මෙහිදී UI components නැවත reload වේ.",
        "en": "On screen rotation, Android destroys and recreates the Activity to reload configuration-specific layouts."
      },
      {
        "type": "table",
        "head": [
          "Orientation Value",
          "විස්තරය (Description)"
        ],
        "rows": [
          [
            "portrait",
            "තිරය vertical (කෙළින්) දිශාවට lock කරයි"
          ],
          [
            "landscape",
            "තිරය horizontal (දිගටි) දිශාවට lock කරයි"
          ],
          [
            "sensor",
            "Device එක හරවන පැත්තට අනුව auto-rotate වේ"
          ],
          [
            "unspecified",
            "System default හැසිරීම භාවිත කරයි"
          ]
        ],
        "caption": "Screen Orientation අගයන් (AndroidManifest.xml හෝ Java)"
      },
      {
        "type": "note",
        "tone": "warn",
        "title": "Application Process States (OS Memory Priority)",
        "si": "RAM මතකය මදි වූ විට Linux Kernel එක මඟින් අඩුම priority ඇති processes kill කර දමයි. ප්‍රමුඛතා අනුපිළිවෙල (Highest to Lowest):"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          {
            "si": "Foreground Process — පරිශීලකයා මේ මොහොතේ interact වන app එක. උපරිම priority ඇත, කිසිවිටෙක kill නොකරයි.",
            "en": "Currently interacting in foreground"
          },
          {
            "si": "Visible Process — Screen එකේ පෙනුනද focus වී නැත (Ex: dialog එකක් පිටුපස ඇති screen එක).",
            "en": "Visible but not in focus"
          },
          {
            "si": "Service Process — Background එකේ සක්‍රීයව run වන service එකක් (Ex: music playback, file download).",
            "en": "Running active background service"
          },
          {
            "si": "Background / Cached Process — Screen එකේ නොපෙනෙන, stopped activities. RAM අවශ්‍ය වූ විට මුලින්ම terminate කරන්නේ මේවායි.",
            "en": "Stopped activities kept for caching"
          },
          {
            "si": "Empty Process — Active components කිසිවක් නැත; නැවත launch වන විට වේගවත් කිරීමට පමණක් තබා ගනී.",
            "en": "No active components, pure caching"
          }
        ]
      }
    ]
  },
  {
    "id": "activity-lifecycle",
    "category": "hdp",
    "icon": "⏳",
    "title": "08. Activity Lifecycle සහ Launch Modes",
    "subtitle": "7 Lifecycle Callbacks, Tasks, Back Stack, Launch Modes & Intent Flags",
    "blocks": [
      {
        "type": "p",
        "si": "Activity එකක් යනු පරිශීලකයාට දර්ශනය වන තනි තිරයකි. Android OS එක විසින් Activity එකක ජීවන චක්‍රය (Lifecycle) callback methods 7ක් හරහා පාලනය කරයි.",
        "en": "An Activity is an entry point for user interaction, managed through a 7-method lifecycle state machine."
      },
      {
        "type": "lifecycle"
      },
      {
        "type": "table",
        "head": [
          "Callback Method",
          "කැඳවෙන අවස්ථාව (When Called)",
          "කළ යුතු කාර්යය (Action)"
        ],
        "rows": [
          [
            "onCreate()",
            "Activity එක ප්‍රථම වරට නිර්මාණය වන විට",
            "UI initialize කිරීම, setContentView() ඇමතීම, variables සැකසීම"
          ],
          [
            "onStart()",
            "Activity එක පරිශීලකයාට තිරයේ දිස්වන විට",
            "UI සූදානම් කිරීම (interaction සඳහා තවම සූදානම් නැත)"
          ],
          [
            "onResume()",
            "Activity එක foreground එකට පැමිණි විට",
            "User interactions පිළිගැනීම, animations සහ sensors ආරම්භ කිරීම"
          ],
          [
            "onPause()",
            "වෙනත් screen/dialog එකකින් අර්ධ වශයෙන් වැසුණු විට",
            "Animations pause කිරීම, සැහැල්ලු data save කිරීම"
          ],
          [
            "onStop()",
            "Activity එක තිරයෙන් සම්පූර්ණයෙන්ම සැඟවුණු විට",
            "Heavy processes නිදහස් කිරීම (Database connections, animations)"
          ],
          [
            "onRestart()",
            "Stop වූ Activity එක නැවත ආරම්භ වීමට පෙර",
            "Stop තත්ත්වයෙන් පසු නැවත start වීමට සූදානම් වීම"
          ],
          [
            "onDestroy()",
            "Activity එක මතකයෙන් සම්පූර්ණයෙන්ම ඉවත් වීමට පෙර",
            "අවසාන resource cleanup කිරීම (listeners, threads ඉවත් කිරීම)"
          ]
        ],
        "caption": "Activity Lifecycle Callback Methods"
      },
      {
        "type": "note",
        "tone": "warn",
        "title": "Duplicate Activity Instances ගැටලුව සහ Back Stack",
        "si": "Android හි default ක්‍රමය (standard launch mode) වන්නේ startActivity() කැඳවන සෑම විටම අලුත් instance එකක් සාදා Back Stack (LIFO stack) එකට දැමීමයි. එකම screen එක නැවත නැවත විවෘත කළහොත් Back button එක එබූ විට user සිරවී ඇති බවක් (stuck) දැනෙන අතර මතකය නාස්ති වේ."
      },
      {
        "type": "table",
        "head": [
          "Launch Mode",
          "හැසිරීම (Behavior)",
          "AndroidManifest.xml Example"
        ],
        "rows": [
          [
            "standard (Default)",
            "සෑම විටම නව instance එකක් සාදයි. Duplicates වලට ඉඩ දෙයි.",
            "android:launchMode=\"standard\""
          ],
          [
            "singleTop",
            "Activity එක stack එකේ ඉහළම (top) තිබේ නම් අලුත් එකක් නොසාදා onNewIntent() කැඳවයි.",
            "android:launchMode=\"singleTop\""
          ],
          [
            "singleTask",
            "Task එක තුළ එකම එක instance එකක් පමණි. මීට ඉහළින් ඇති සියලු activities destroy කර front එකට ගනී.",
            "android:launchMode=\"singleTask\""
          ],
          [
            "singleInstance",
            "Activity එක වෙනමම task එකක තනිවම ධාවනය වේ.",
            "android:launchMode=\"singleInstance\""
          ]
        ],
        "caption": "AndroidManifest.xml Launch Modes"
      },
      {
        "type": "code",
        "code": "// Java Intent Flags මඟින් Duplicate Activity වැළැක්වීම:\nIntent intent = new Intent(this, MainActivity.class);\nintent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);\nstartActivity(intent);\n\n// Reused වූ Activity එකේ නව Intent data ලබා ගැනීම:\n@Override\nprotected void onNewIntent(Intent intent) {\n    super.onNewIntent(intent);\n    setIntent(intent); // Update the active intent\n}",
        "caption": "Intent Flags සහ onNewIntent() භාවිතය"
      }
    ]
  },
  {
    "id": "intents",
    "category": "hdp",
    "icon": "✉️",
    "title": "09. Intents සහ Intent Filters",
    "subtitle": "Explicit vs Implicit Intents, Common Actions, Intent Filters",
    "blocks": [
      {
        "type": "p",
        "si": "Intent එකක් යනු Android components (Activity, Service, Broadcast Receiver) අතර සන්නිවේදනය කිරීමට යොදා ගන්නා මූලික messaging object එකකි. සරලව කිවහොත් 'මට යමක් කිරීමට අවශ්‍යයි' යනුවෙන් Android system එකට කරන නිවේදනයකි.",
        "en": "An Intent is an asynchronous message that activates components within an application or across different apps."
      },
      {
        "type": "table",
        "head": [
          "ලක්ෂණය",
          "Explicit Intent",
          "Implicit Intent"
        ],
        "rows": [
          [
            "Target Component",
            "Target Class එකේ නම පැහැදිලිව දක්වයි (Exact class name)",
            "Component නම නොදක්වයි; Action, Data සහ Category පමණක් දක්වයි"
          ],
          [
            "භාවිත වන අවස්ථාව",
            "Same application එක ඇතුළත screens අතර මාරු වීමට",
            "වෙනත් apps (Browser, Phone dialer, Camera) විවෘත කිරීමට"
          ],
          [
            "ආරක්ෂාව (Security)",
            "ඉතා ආරක්ෂිතයි සහ Predictable",
            "System එක මඟින් matching app එකක් තෝරා ගනී (හෝ App Chooser පෙන්වයි)"
          ],
          [
            "උදාහරණය",
            "new Intent(this, SecondActivity.class)",
            "new Intent(Intent.ACTION_VIEW, Uri.parse(\"...\"))"
          ]
        ],
        "caption": "Explicit vs Implicit Intent සංසන්දනය"
      },
      {
        "type": "code",
        "code": "// 1. Web Page එකක් විවෘත කිරීම:\nIntent webIntent = new Intent(Intent.ACTION_VIEW);\nwebIntent.setData(Uri.parse(\"https://www.google.com\"));\nstartActivity(webIntent);\n\n// 2. දුරකථන අංකයක් Dial කිරීම:\nIntent dialIntent = new Intent(Intent.ACTION_DIAL);\ndialIntent.setData(Uri.parse(\"tel:0771234567\"));\nstartActivity(dialIntent);\n\n// 3. Text share කිරීම (App Chooser සමඟ):\nIntent shareIntent = new Intent(Intent.ACTION_SEND);\nshareIntent.setType(\"text/plain\");\nshareIntent.putExtra(Intent.EXTRA_TEXT, \"Check this out!\");\nstartActivity(Intent.createChooser(shareIntent, \"Share via\"));",
        "caption": "ප්‍රධාන Implicit Intent උදාහරණ"
      },
      {
        "type": "note",
        "tone": "info",
        "title": "Intent Filters (AndroidManifest.xml)",
        "si": "Intent Filter යනු අපගේ Activity එකට හෝ Service එකට ප්‍රතිචාර දැක්විය හැකි Implicit Intents මොනවාදැයි පද්ධතියට ප්‍රකාශ කරන රීතියකි. මෙහි කොටස් 3කි: 1. <action> (ACTION_MAIN, ACTION_VIEW), 2. <category> (LAUNCHER, DEFAULT), 3. <data> (scheme=https, mimeType=text/plain). System එක මේ තුනම match වන apps පමණක් තෝරා ගනී."
      }
    ]
  },
  {
    "id": "fragments",
    "category": "hdp",
    "icon": "🧩",
    "title": "10. Fragments ගැඹුරු හැදෑරීම සහ Dynamic Transactions",
    "subtitle": "Fragment Lifecycle (11 callbacks), onCreateView parameters, Dynamic swap",
    "blocks": [
      {
        "type": "p",
        "si": "Fragment එකක් යනු Activity එකක UI එක තුළ ඇතුළත් කළ හැකි, තමන්ගේම lifecycle එකක් සහිත reusable UI කොටසකි. Single Activity architecture එකක් තුළ බහු තිර සහ tablet layouts සැකසීමට Fragments අත්‍යවශ්‍ය වේ.",
        "en": "A Fragment represents a reusable sub-section of an Activity's user interface, with its own lifecycle."
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          {
            "si": "onAttach() — Fragment එක host Activity එකට attach වූ විට.",
            "en": "Fragment attached to host activity"
          },
          {
            "si": "onCreate() — Fragment object එක create වන විට.",
            "en": "Fragment initialized"
          },
          {
            "si": "onCreateView() — XML layout එක inflate කර View එක සාදන තීරණාත්මක පියවර.",
            "en": "Inflates the XML layout"
          },
          {
            "si": "onViewCreated() — View එක සාදා අවසන් වූ විට (find views, set listeners).",
            "en": "View hierarchy fully created"
          },
          {
            "si": "onStart() → onResume() — Fragment එක visible සහ interactive වන විට.",
            "en": "Visible & active"
          },
          {
            "si": "onPause() → onStop() — Fragment එක partially visible හෝ hidden වූ විට.",
            "en": "Partially obscured / hidden"
          },
          {
            "si": "onDestroyView() — Fragment එකෙහි View එක විනාශ වන විට (Clean view references).",
            "en": "View hierarchy destroyed"
          },
          {
            "si": "onDestroy() → onDetach() — Fragment එක Activity එකෙන් මුළුමනින්ම ගැලවෙන විට.",
            "en": "Completely detached"
          }
        ]
      },
      {
        "type": "code",
        "code": "// 1. Fragment Java Class:\npublic class HomeFragment extends Fragment {\n    @Nullable\n    @Override\n    public View onCreateView(@NonNull LayoutInflater inflater, \n                             @Nullable ViewGroup container, \n                             @Nullable Bundle savedInstanceState) {\n        // attachToRoot must always be false for fragments\n        return inflater.inflate(R.layout.fragment_home, container, false);\n    }\n}\n\n// 2. Activity එක තුළ Fragment එක Dynamic Swap කිරීම:\ngetSupportFragmentManager().beginTransaction()\n    .setReorderingAllowed(true)\n    .replace(R.id.fragment_container_view, SettingFragment.class, null)\n    .commit();",
        "caption": "Fragment onCreateView() සහ Dynamic Fragment Transaction"
      },
      {
        "type": "note",
        "tone": "tip",
        "title": "onCreateView පරාමිති 3 (Viva Question)",
        "si": "1. LayoutInflater inflater: XML layout එක View object එකක් බවට හරවයි. 2. ViewGroup container: Fragment එක රඳවන parent layout එක (FragmentContainerView). 3. attachToRoot = false: Fragment එක parent එකට වහාම attach නොකළ යුතුය; FragmentManager විසින් එය පාලනය කරයි."
      }
    ]
  },
  {
    "id": "layouts",
    "category": "hdp",
    "icon": "📐",
    "title": "11. Android Layouts සහ Positioning නීති",
    "subtitle": "LinearLayout, RelativeLayout, TableLayout, FrameLayout, ConstraintLayout",
    "blocks": [
      {
        "type": "p",
        "si": "Layout එකක් (ViewGroup) යනු තිරය මත UI components (Views) ස්ථානගත කරන ආකාරය තීරණය කරන මූලික container එකයි.",
        "en": "A layout defines the visual structure for a user interface, such as in an Activity or Fragment."
      },
      {
        "type": "table",
        "head": [
          "Layout Type",
          "ප්‍රධාන ලක්ෂණ",
          "ප්‍රධාන Attributes"
        ],
        "rows": [
          [
            "LinearLayout",
            "තනි දිශාවකට පමණක් (Vertical හෝ Horizontal) views පෙළගස්වයි",
            "android:orientation, android:gravity, android:layout_gravity, android:layout_weight"
          ],
          [
            "RelativeLayout",
            "Parent layout එකට හෝ අසල ඇති views වලට සාපේක්ෂව ස්ථානගත කරයි",
            "android:layout_below, android:layout_toRightOf, android:layout_centerInParent"
          ],
          [
            "TableLayout",
            "HTML table එකක් මෙන් Rows සහ Columns ආකාරයට views පෙළගස්වයි",
            "TableRow, android:stretchColumns, android:shrinkColumns"
          ],
          [
            "FrameLayout",
            "තනි view එකක් හෝ එකක් මත එකක් views stack කර තැබීමට යොදයි",
            "Fragment placeholder ලෙස බහුලව යොදයි"
          ],
          [
            "ConstraintLayout",
            "Modern flat hierarchy; anchors/constraints මඟින් සංකීර්ණ UI කාර්යක්ෂමව සාදයි",
            "app:layout_constraintStart_toStartOf, app:layout_constraintTop_toTopOf"
          ],
          [
            "AbsoluteLayout",
            "X සහ Y coordinates මඟින් ස්ථානගත කරයි (දැනට Deprecated)",
            "android:layout_x, android:layout_y (නොගත යුතුය)"
          ]
        ],
        "caption": "Android Layout වර්ග සහ ඒවායේ ලක්ෂණ"
      },
      {
        "type": "note",
        "tone": "tip",
        "title": "Gravity vs Layout_Gravity වෙනස",
        "si": "• android:gravity — අදාළ View එක තුළ ඇති අන්තර්ගතය (Text, Icon) align කිරීමට යොදයි. • android:layout_gravity — Parent layout එක තුළ අදාළ View එකම align වන ස්ථානය තීරණය කරයි. • android:layout_weight — Screen එකේ ඉතිරි ඉඩ proportional ලෙස බෙදා දීමට යොදයි."
      }
    ]
  },
  {
    "id": "events",
    "category": "hdp",
    "icon": "👆",
    "title": "12. Event Handling සහ Event Listeners",
    "subtitle": "Click, Long Click, Focus, Key, Touch, Drag & Context Menus",
    "blocks": [
      {
        "type": "p",
        "si": "UI components සමඟ පරිශීලකයා සිදු කරන interactions (Events) හඳුනාගෙන ඒවාට ප්‍රතිචාර දැක්වීමේ ක්‍රමවේදය Event Handling නම් වේ. Android මේ සඳහා Listener Interfaces භාවිත කරයි.",
        "en": "Event handling captures user actions (clicks, touches, keystrokes) and triggers responsive callback methods."
      },
      {
        "type": "table",
        "head": [
          "Event / Listener",
          "Callback Method",
          "Return Type",
          "විස්තරය (Description)"
        ],
        "rows": [
          [
            "OnClickListener",
            "onClick(View v)",
            "void",
            "බොත්තමක් හෝ view එකක් tap කළ විට"
          ],
          [
            "OnLongClickListener",
            "onLongClick(View v)",
            "boolean",
            "View එකක් ඔබාගෙන සිටි විට (true = consumed, false = triggers click too)"
          ],
          [
            "OnFocusChangeListener",
            "onFocusChange(View v, boolean b)",
            "void",
            "EditText එකකට focus ලැබුණු විට හෝ නැති වූ විට"
          ],
          [
            "OnKeyListener",
            "onKey(View v, int code, KeyEvent e)",
            "boolean",
            "Hardware හෝ Software keyboard key එකක් press වූ විට"
          ],
          [
            "OnTouchListener",
            "onTouch(View v, MotionEvent e)",
            "boolean",
            "ACTION_DOWN, ACTION_MOVE, ACTION_UP touch gestures"
          ],
          [
            "OnDragListener",
            "onDrag(View v, DragEvent e)",
            "boolean",
            "View එකක් drag කර drop කළ විට (ACTION_DROP)"
          ]
        ],
        "caption": "ප්‍රධාන Event Listeners සහ Callbacks"
      },
      {
        "type": "code",
        "code": "// 1. Click Listener (Lambda Expression):\nbutton.setOnClickListener(v -> {\n    Toast.makeText(this, \"Button Clicked!\", Toast.LENGTH_SHORT).show();\n});\n\n// 2. Long Click Listener:\nbtn.setOnLongClickListener(v -> {\n    Toast.makeText(this, \"Long Pressed!\", Toast.LENGTH_SHORT).show();\n    return true; // true = Event එක consume විය; සාමාන්‍ය click එකක් trigger නොවේ\n});\n\n// 3. Touch Listener with MotionEvent:\nview.setOnTouchListener((v, event) -> {\n    if (event.getAction() == MotionEvent.ACTION_DOWN) {\n        // User touched down\n    }\n    return false;\n});",
        "caption": "Android Event Listeners භාවිතය"
      }
    ]
  },
  {
    "id": "lists-webview",
    "category": "hdp",
    "icon": "📋",
    "title": "13. AutoCompleteTextView, ListView සහ WebView",
    "subtitle": "Dropdown Suggestions, Scrollable Lists, In-App Web Browsing",
    "blocks": [
      {
        "type": "p",
        "si": "දත්ත එකතුවක් පරිශීලකයාට ප්‍රදර්ශනය කිරීම සඳහා AutoCompleteTextView සහ ListView භාවිත වන අතර, app එක තුළ වෙබ් අඩවි පෙන්වීමට WebView යොදා ගැනේ.",
        "en": "UI components for displaying collections of items and embedding web content inside native Android apps."
      },
      {
        "type": "code",
        "code": "// 1. AutoCompleteTextView:\nAutoCompleteTextView actv = findViewById(R.id.autoCompleteTextView);\nString[] cities = {\"Colombo\", \"Kandy\", \"Galle\", \"Gampaha\"};\nArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_dropdown_item_1line, cities);\nactv.setAdapter(adapter);\n// android:completionThreshold=\"1\" -> 1 character එකක් type කළ සැණින් suggestions පෙන්වයි\n\n// 2. WebView සැකසුම:\nWebView webView = findViewById(R.id.webView);\nwebView.getSettings().setJavaScriptEnabled(true); // JavaScript enable කිරීම\nwebView.setWebViewClient(new WebViewClient());    // Browser එකට නොගොස් app එක ඇතුළතම open වීම\nwebView.loadUrl(\"https://www.google.com\");\n\n// Back button එක එබූ විට WebView එකේ back පිටුවට යාම:\nif (webView.canGoBack()) {\n    webView.goBack();\n}",
        "caption": "AutoCompleteTextView සහ WebView ක්‍රියාත්මක කිරීම"
      },
      {
        "type": "note",
        "tone": "info",
        "title": "Adapter එකක කාර්යය (The Core Role)",
        "si": "Android UI components වලට Java Array එකක් හෝ List එකක් සෘජුවම කියවිය නොහැක. Adapter එකක් මඟින් දත්ත එකතුවක් රැගෙන ඒවා තනි තනි row views බවට පරිවර්තනය කර UI widget එක වෙත සපයයි."
      }
    ]
  },
  {
    "id": "recyclerview",
    "category": "hdp",
    "icon": "⚡",
    "title": "14. RecyclerView Masterclass",
    "subtitle": "Why RecyclerView > ListView, ViewHolder Pattern, 3 Methods & LayoutManagers",
    "blocks": [
      {
        "type": "p",
        "si": "RecyclerView යනු පැරණි ListView එක වෙනුවට හඳුන්වා දුන්, විශාල දත්ත ලැයිස්තු අතිශය සුමටව සහ memory කාර්යක්ෂමව පෙන්වීමට නිර්මාණය කරන ලද modern component එකකි.",
        "en": "RecyclerView recycles existing views that have scrolled off-screen instead of inflating new views, maximizing performance."
      },
      {
        "type": "table",
        "head": [
          "අංගය (Feature)",
          "සාමාන්‍ය ListView",
          "RecyclerView (Modern Standard)"
        ],
        "rows": [
          [
            "View Recycling",
            "සීමිතයි (මතකය වැඩිපුර ගනී)",
            "සම්පූර්ණයෙන්ම recycle වේ (අතිශය වේගවත්)"
          ],
          [
            "ViewHolder Pattern",
            "විකල්පයි (Optional)",
            "අනිවාර්යයි (Mandatory) — findViewById නාස්තිය නවතී"
          ],
          [
            "Layout Management",
            "Vertical List පමණි",
            "Linear (H/V), Grid (2+ columns), Staggered Grid"
          ],
          [
            "Item Animations",
            "නැත (සංකීර්ණයි)",
            "ස්වයංක්‍රීයව සහය දක්වයි"
          ],
          [
            "Performance",
            "විශාල data වලදී lag වේ",
            "විශාල data වලදීත් 60fps smooth scrolling"
          ]
        ],
        "caption": "ListView සහ RecyclerView සංසන්දනය"
      },
      {
        "type": "note",
        "tone": "tip",
        "title": "අනිවාර්ය Adapter Methods 3 (Examiner's Favorite)",
        "si": "1. onCreateViewHolder(parent, viewType): Layout inflater මඟින් XML row එක inflate කර ViewHolder එකක් සාදයි. 2. onBindViewHolder(holder, position): අදාළ position එකේ data රැගෙන ViewHolder එකේ views වලට bind කරයි. 3. getItemCount(): Dataset එකේ ඇති මුළු items සංඛ්‍යාව return කරයි."
      },
      {
        "type": "code",
        "code": "// Complete RecyclerView Adapter Implementation:\npublic class ProductAdapter extends RecyclerView.Adapter<ProductAdapter.ViewHolder> {\n    private List<ProductModel> list;\n\n    public ProductAdapter(List<ProductModel> list) { this.list = list; }\n\n    @NonNull\n    @Override\n    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {\n        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_product, parent, false);\n        return new ViewHolder(v);\n    }\n\n    @Override\n    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {\n        ProductModel p = list.get(position);\n        holder.txtName.setText(p.getName());\n        holder.txtPrice.setText(\"Rs. \" + p.getPrice());\n    }\n\n    @Override\n    public int getItemCount() { return list.size(); }\n\n    public void updateList(List<ProductModel> newList) {\n        this.list = newList;\n        notifyDataSetChanged(); // Refreshes RecyclerView display\n    }\n\n    public static class ViewHolder extends RecyclerView.ViewHolder {\n        TextView txtName, txtPrice;\n        public ViewHolder(@NonNull View itemView) {\n            super(itemView);\n            txtName = itemView.findViewById(R.id.txtName);\n            txtPrice = itemView.findViewById(R.id.txtPrice);\n        }\n    }\n}",
        "caption": "සම්පූර්ණ RecyclerView Adapter කේතය"
      }
    ]
  },
  {
    "id": "permissions",
    "category": "hdp",
    "icon": "🛡️",
    "title": "15. Android Permissions සහ Runtime Management",
    "subtitle": "Normal vs Dangerous Permissions, Android 6.0+ & Android 13+ Flow",
    "blocks": [
      {
        "type": "p",
        "si": "පරිශීලකයාගේ පෞද්ගලිකත්වය (Privacy) සහ device ආරක්ෂාව තහවුරු කිරීම සඳහා Android පද්ධතිය permissions සංකල්පය භාවිත කරයි. මූලිකව Normal සහ Dangerous ලෙස වර්ග දෙකකි.",
        "en": "Android safeguards user privacy using normal (install-time) and dangerous (runtime-prompted) permissions."
      },
      {
        "type": "table",
        "head": [
          "Permission Type",
          "අවදානම (Risk)",
          "අනුමැතිය ලබන ආකාරය",
          "උදාහරණ"
        ],
        "rows": [
          [
            "Normal Permission",
            "අඩු අවදානමක් (Low risk)",
            "Install කරන විට පද්ධතියෙන් auto-granted වේ",
            "INTERNET, ACCESS_NETWORK_STATE"
          ],
          [
            "Dangerous / Runtime",
            "පෞද්ගලික දත්ත (High risk)",
            "App එක run වන විට user ගෙන් prompt එකක් මඟින් අසයි",
            "POST_NOTIFICATIONS, CAMERA, ACCESS_FINE_LOCATION"
          ]
        ],
        "caption": "Permissions වර්ගීකරණය"
      },
      {
        "type": "code",
        "code": "// Modern Runtime Permission Request (Android 13+ POST_NOTIFICATIONS):\nprivate final ActivityResultLauncher<String> requestPermissionLauncher =\n    registerForActivityResult(new ActivityResultContracts.RequestPermission(), isGranted -> {\n        if (isGranted) {\n            Toast.makeText(this, \"Permission Granted!\", Toast.LENGTH_SHORT).show();\n        } else {\n            Toast.makeText(this, \"Permission Denied!\", Toast.LENGTH_SHORT).show();\n        }\n    });\n\nprivate void checkPermission() {\n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {\n        if (ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS)\n                != PackageManager.PERMISSION_GRANTED) {\n            requestPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS);\n        }\n    }\n}",
        "caption": "Modern ActivityResultLauncher මඟින් Runtime Permission ලබා ගැනීම"
      }
    ]
  },
  {
    "id": "storage",
    "category": "hdp",
    "icon": "💾",
    "title": "16. Android Data Storage ක්‍රම",
    "subtitle": "SharedPreferences, Internal, External & SQLite Database CRUD",
    "blocks": [
      {
        "type": "p",
        "si": "Android application එකක දත්ත ගබඩා කිරීම, කියවීම සහ කළමනාකරණය සඳහා දත්තවල ප්‍රමාණය, සංවේදීතාව සහ අවශ්‍යතාවය අනුව ක්‍රම 4ක් පවතී.",
        "en": "Android provides 4 distinct data storage mechanisms based on lifetime, privacy, and structure."
      },
      {
        "type": "table",
        "head": [
          "Storage Type",
          "දත්ත ආකෘතිය",
          "ස්ථානය සහ ආරක්ෂාව",
          "Uninstall වූ විට"
        ],
        "rows": [
          [
            "SharedPreferences",
            "Key-Value pairs (String, int, boolean)",
            "App private XML directory (User settings)",
            "මැකී යයි (Removed)"
          ],
          [
            "Internal Storage",
            "Private files (.txt, cache)",
            "App private internal memory (/data/user/0/...)",
            "මැකී යයි (Removed)"
          ],
          [
            "External (App Specific)",
            "Files (getExternalFilesDir)",
            "Android/data/lk.jiat... (External storage)",
            "මැකී යයි (Removed)"
          ],
          [
            "External (Public / MediaStore)",
            "Downloads, Photos, DCIM",
            "Public shared directory (MediaStore.Downloads)",
            "රැඳී පවතී (Persists)"
          ],
          [
            "SQLite Database",
            "Structured relational SQL tables",
            "App private relational database",
            "මැකී යයි (Removed)"
          ]
        ],
        "caption": "Android Data Storage ක්‍රම 4 සංසන්දනය"
      },
      {
        "type": "code",
        "code": "// 1. SQLite Database CRUD (SQLiteOpenHelper):\npublic class SQLiteHelper extends SQLiteOpenHelper {\n    private static SQLiteHelper instance;\n    public static synchronized SQLiteHelper getInstance(Context ctx) {\n        if (instance == null) instance = new SQLiteHelper(ctx);\n        return instance;\n    }\n    // onCreate -> CREATE TABLE student (id INTEGER PRIMARY KEY, name TEXT, age TEXT);\n}\n\n// Insert Data:\nSQLiteDatabase db = SQLiteHelper.getInstance(this).getWritableDatabase();\nContentValues values = new ContentValues();\nvalues.put(\"name\", \"Kamal\");\nvalues.put(\"age\", \"22\");\ndb.insert(\"student\", null, values);\n\n// Update Data:\ndb.update(\"student\", values, \"id=?\", new String[]{\"1\"});\n\n// Delete Data:\ndb.delete(\"student\", \"id=?\", new String[]{\"1\"});",
        "caption": "SQLite Database Helper සහ CRUD Operations"
      }
    ]
  },
  {
    "id": "retrofit",
    "category": "hdp",
    "icon": "🌐",
    "title": "17. Networking, HttpURLConnection සහ Retrofit",
    "subtitle": "NetworkOnMainThreadException, Retrofit Client, GsonConverter, Callbacks",
    "blocks": [
      {
        "type": "p",
        "si": "Android හි network operations (HTTP requests) කිසිවිටෙක ප්‍රධාන UI Thread එක මත ධාවනය කළ නොහැක (එසේ කළහොත් NetworkOnMainThreadException හටගනී). ඒ සඳහා asynchronous ක්‍රමවේද අනිවාර්ය වේ.",
        "en": "Network requests must run on worker threads to keep the UI smooth and responsive."
      },
      {
        "type": "table",
        "head": [
          "අංගය",
          "Native HttpURLConnection",
          "Retrofit (Square Library)"
        ],
        "rows": [
          [
            "Type Safety",
            "නැත (Manual strings)",
            "Type-safe interfaces සහ Models"
          ],
          [
            "JSON Parsing",
            "Manual JSONObject / BufferedReader",
            "Gson මඟින් ස්වයංක්‍රීයව Models බවට පත් වේ"
          ],
          [
            "Threading",
            "ExecutorService / AsyncTask manually අවශ්‍යයි",
            "Built-in enqueue() background threading"
          ],
          [
            "Code පිරිසිදුකම",
            "ඉතා දිගු boilerplate code එකක්",
            "ඉතා කෙටි, පිරිසිදු සහ නඩත්තු කිරීමට පහසුයි"
          ]
        ],
        "caption": "HttpURLConnection vs Retrofit සංසන්දනය"
      },
      {
        "type": "code",
        "code": "// 1. Retrofit Client Singleton:\npublic class RetrofitClient {\n    private static Retrofit retrofit;\n    public static final String BASE_URL = \"http://192.168.8.208:8080/api/v1/\";\n    // Android Emulator සඳහා Base URL = \"http://10.0.2.2:8080/api/v1/\"\n\n    public static Retrofit getInstance() {\n        if (retrofit == null) {\n            retrofit = new Retrofit.Builder()\n                    .baseUrl(BASE_URL)\n                    .addConverterFactory(GsonConverterFactory.create())\n                    .build();\n        }\n        return retrofit;\n    }\n}\n\n// 2. Asynchronous Request යැවීම:\napiService.getProducts().enqueue(new Callback<List<ProductModel>>() {\n    @Override\n    public void onResponse(Call<List<ProductModel>> call, Response<List<ProductModel>> response) {\n        if (response.isSuccessful() && response.body() != null) {\n            List<ProductModel> products = response.body();\n            productAdapter.updateList(products);\n        }\n    }\n    @Override\n    public void onFailure(Call<List<ProductModel>> call, Throwable t) {\n        Toast.makeText(context, \"Network Failed: \" + t.getMessage(), Toast.LENGTH_SHORT).show();\n    }\n});",
        "caption": "Retrofit Client සහ Async Enqueue Call"
      }
    ]
  },
  {
    "id": "notifications-fcm",
    "category": "hdp",
    "icon": "🔔",
    "title": "18. Notifications සහ Firebase Cloud Messaging (FCM)",
    "subtitle": "Notification Channels, Android 13 Permission, Direct Reply & Push Notifications",
    "blocks": [
      {
        "type": "p",
        "si": "Notification එකක් යනු application එක open කර නොමැති අවස්ථාවකදී පවා status bar එකෙහි පණිවිඩයක් පෙන්වීමට යොදන ප්‍රබල Android අංගයකි.",
        "en": "Notifications alert users of outside-of-app events and launch target activities via PendingIntents."
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          {
            "si": "Status Bar හි දර්ශනය වීම — App එක closed වුවද message එකක් පෙන්විය හැක.",
            "en": "Appears on status bar when app is closed"
          },
          {
            "si": "Notification Channel (Android 8.0+ / API 26) — සෑම notification එකක්ම channel එකකට අයත් විය යුතුය (Channel ID, Name, Importance).",
            "en": "Mandatory NotificationChannel in Oreo+"
          },
          {
            "si": "POST_NOTIFICATIONS (Android 13+ / API 33) — Notification යැවීමට runtime permission ලබා ගැනීම අනිවාර්ය කර ඇත.",
            "en": "Runtime permission required on Android 13+"
          },
          {
            "si": "Direct Reply (RemoteInput) — Notification එක මතදීම message එකක් type කර reply කිරීමට ඉඩ දීම.",
            "en": "Inline reply via RemoteInput"
          }
        ]
      },
      {
        "type": "code",
        "code": "// Push Notifications via Firebase (FCM):\npublic class MessagingService extends FirebaseMessagingService {\n    @Override\n    public void onNewToken(@NonNull String token) {\n        Log.d(\"FCM\", \"Device Token: \" + token);\n    }\n\n    @Override\n    public void onMessageReceived(@NonNull RemoteMessage message) {\n        String title = message.getNotification() != null ? message.getNotification().getTitle() : \"Alert\";\n        String body = message.getNotification() != null ? message.getNotification().getBody() : \"New Notification\";\n        sendLocalNotification(title, body);\n    }\n}",
        "caption": "Firebase Cloud Messaging (FCM) Service ක්‍රියාත්මක කිරීම"
      }
    ]
  },
  {
    "id": "viva-qa",
    "category": "viva",
    "icon": "🎓",
    "title": "19. Android Viva විභාග ප්‍රශ්න සහ පිළිතුරු (Q1 - Q45)",
    "subtitle": "45 Core Theory, Adapter, Retrofit & Project Questions with Model Answers",
    "blocks": [
      {
        "type": "p",
        "si": "Android Viva විභාගයේදී අසනු ලබන ප්‍රධාන සංකල්ප සහ LankaFresh / E-Commerce ව්‍යාපෘතිය ආශ්‍රිත ප්‍රශ්න 45ක් මෙහි සාකච්ඡා කෙරේ.",
        "en": "Comprehensive coverage of core viva interview questions from Android Viva.pdf."
      },
      {
        "type": "table",
        "head": [
          "Q#",
          "ප්‍රශ්නය (Question)",
          "කෙටි පිළිතුර (Short Answer)"
        ],
        "rows": [
          [
            "Q1",
            "What is an Activity?",
            "පරිශීලකයාට interact විය හැකි තනි screen එකකි (Single UI screen)."
          ],
          [
            "Q2",
            "What is a Fragment?",
            "Activity එකක UI එකේ reusable sub-component එකකි."
          ],
          [
            "Q4",
            "What is RecyclerView?",
            "Items විශාල සංඛ්‍යාවක් views recycle කරමින් කාර්යක්ෂමව පෙන්වන component එකයි."
          ],
          [
            "Q5",
            "Why RecyclerView over ListView?",
            "ViewHolder pattern අනිවාර්ය කරයි, layout managers සහය දක්වයි, memory ඉතිරි කරයි."
          ],
          [
            "Q6",
            "What is an Adapter?",
            "Data source එක සහ UI view අතර පාලමයි (Data → Views convert කරයි)."
          ],
          [
            "Q7",
            "What is ViewHolder?",
            "Row එකේ views references තබාගෙන findViewById නැවත කැඳවීම නවත්වයි."
          ],
          [
            "Q8",
            "onCreateViewHolder?",
            "Item row එකට XML layout එක inflate කර ViewHolder එකක් සාදයි."
          ],
          [
            "Q9",
            "onBindViewHolder?",
            "අදාළ position එකේ data රැගෙන ViewHolder එකේ views වලට bind කරයි."
          ],
          [
            "Q10",
            "getItemCount?",
            "List එකෙහි ඇති මුළු items සංඛ්‍යාව return කරයි."
          ],
          [
            "Q11",
            "What is an Intent?",
            "Components අතර සන්නිවේදනයට යොදන messaging object එකයි."
          ],
          [
            "Q15",
            "What is Retrofit?",
            "REST APIs සමඟ සන්නිවේදනයට යොදන type-safe HTTP client library එකකි."
          ],
          [
            "Q19",
            "What is Gson?",
            "JSON string එකක් Java objects බවටත්, Java objects JSON බවටත් හරවයි."
          ],
          [
            "Q20",
            "What is Glide?",
            "Image URLs වලින් images async download කර, cache කර ImageView එකට පෙන්වයි."
          ],
          [
            "Q23",
            "What is @SerializedName?",
            "JSON field නම Java variable නම සමඟ map කිරීමට යොදන Gson annotation එකයි."
          ],
          [
            "Q27",
            "Why GridLayoutManager(this, 2)?",
            "Items තීරු දෙකක් (two columns) ලෙස තිරය මත පෙළගැස්වීමට."
          ],
          [
            "Q28",
            "Category filtering logic?",
            "Category ID එක product category ID එක සමඟ සසඳා ගැළපෙන ඒවා පමණක් පෙන්වයි."
          ],
          [
            "Q29",
            "Why keep fullProductList?",
            "නැවත server එකෙන් data නොඉල්ලා local memory තුළ filter කිරීමට master copy එක තබා ගනී."
          ],
          [
            "Q31",
            "notifyDataSetChanged()?",
            "දත්ත වෙනස් වූ බව දන්වා RecyclerView එක refresh කරවයි."
          ],
          [
            "Q36",
            "Why Handler in banner slider?",
            "Delay එකක් සහිතව code run කර banners auto-scroll කිරීමට."
          ],
          [
            "Q44",
            "What is Context?",
            "App environment එක නිරූපණය කරන සහ system resources වලට access ලබා දෙන object එකයි."
          ],
          [
            "Q45",
            "Why pass Context to Adapter?",
            "Layouts inflate කිරීමට, Glide මඟින් image load කිරීමට සහ resources ලබා ගැනීමට."
          ]
        ],
        "caption": "Android Viva මූලික ප්‍රශ්න සහ ආදර්ශ පිළිතුරු සාරාංශය"
      }
    ]
  },
  {
    "id": "viva-code",
    "category": "viva",
    "icon": "💻",
    "title": "20. Examiner Code Snippets විග්‍රහය (#46 - #57)",
    "subtitle": "Line-by-line breakdown of examiner code cards shown in Viva",
    "blocks": [
      {
        "type": "p",
        "si": "විභාගයේදී පරීක්ෂකවරයා (Examiner) විසින් කේත පේළියක් පෙන්වා 'What does this do?' යනුවෙන් විමසන ප්‍රධාන අවස්ථා 12 සහ ඒවායේ නිවැරදි විග්‍රහයන් මෙහි දැක්වේ.",
        "en": "Examiner code explanation questions testing real understanding of Android project implementation."
      },
      {
        "type": "table",
        "head": [
          "Q#",
          "Examiner Shows Code",
          "කේතයේ ක්‍රියාකාරීත්වය (Examiner Answer)"
        ],
        "rows": [
          [
            "46",
            "CategoryModel c = list.get(position);",
            "Current RecyclerView position එකේ ඇති CategoryModel object එක list එකෙන් ලබා ගනී."
          ],
          [
            "47",
            "holder.txtName.setText(c.getName());",
            "Category name එක ViewHolder එක ඇතුළේ ඇති TextView එකේ පෙන්වයි."
          ],
          [
            "48",
            "productAdapter.updateList(filteredList);",
            "Filter කළ නව product list එක ProductAdapter එකට යවා UI එක refresh කරයි."
          ],
          [
            "49",
            "if (p.getCategoryId() == categoryId)",
            "Product එකේ category ID එක user තෝරාගත් category ID එකට සමාන දැයි පරීක්ෂා කරයි."
          ],
          [
            "50",
            "apiService.getProducts().enqueue(...)",
            "UI thread එක block නොවන පරිදි background එකේ async HTTP GET request එකක් යවයි."
          ],
          [
            "51",
            "Glide.with(context).load(fullUrl).into(holder.img);",
            "Glide මඟින් URL එකෙන් image එක download කර, cache කර ViewHolder එකේ ImageView එකට load කරයි."
          ],
          [
            "52",
            "if (response.isSuccessful() && response.body() != null)",
            "API call එක සාර්ථක වූ බවත් (HTTP 200) data ලැබී ඇති බවත් තහවුරු කරයි."
          ],
          [
            "53",
            "productRecycler.setLayoutManager(new GridLayoutManager(this, 2));",
            "Product RecyclerView එක තීරු දෙකක් (two columns grid) ලෙස පෙන්වීමට සකසයි."
          ],
          [
            "54",
            "private List<ProductModel> fullProductList = new ArrayList<>();",
            "API එකෙන් එන සියලුම products master copy එකක් ලෙස memory එකේ තබා ගැනීමට list එකක් සාදයි."
          ],
          [
            "55",
            "txtStatus.setVisibility(View.GONE);",
            "Status TextView එක තිරයෙන් සම්පූර්ණයෙන්ම සඟවා layout space එක අත්හරියි."
          ],
          [
            "56",
            "txtStatus.setVisibility(View.VISIBLE);",
            "Status TextView එක තිරය මත දිස්වන සේ සක්‍රීය කරයි."
          ],
          [
            "57",
            "new Callback<List<ProductModel>>()",
            "Retrofit මඟින් ProductModel list එකක් ලැබෙන විට එය async ලෙස භාර ගැනීමට callback එකක් සාදයි."
          ]
        ],
        "caption": "Viva විභාගයේදී අසන කේත ඛණ්ඩ 12"
      }
    ]
  },
  {
    "id": "viva-architecture",
    "category": "viva",
    "icon": "🏗️",
    "title": "21. Android App End-to-End Data Flow (#58 - #60)",
    "subtitle": "Product vs ProductModel, Clean Architecture & Interactive Data Flow",
    "blocks": [
      {
        "type": "p",
        "si": "Android application එකක client-server සන්නිවේදනයේ සිට පරිශීලක අතුරුමුහුණත දක්වා දත්ත ගලායන සම්පූර්ණ architecture එක සහ design තීරණ මෙහි විග්‍රහ කෙරේ.",
        "en": "End-to-end data pipeline from remote database through Retrofit and Adapters to Android UI widgets."
      },
      {
        "type": "table",
        "head": [
          "ප්‍රශ්නය",
          "Examiner අසන ප්‍රශ්නය",
          "නිවැරදි පිළිතුර (Model Answer)"
        ],
        "rows": [
          [
            "Q58",
            "Why use ProductModel instead of UI directly?",
            "Separation of Concerns: Data සහ UI presentation වෙන් කර තැබීම මඟින් code එක maintain කිරීමට, test කිරීමට සහ reusable කිරීමට පහසු වේ."
          ],
          [
            "Q59",
            "What is the difference between Product and ProductModel?",
            "ProductModel යනු external REST API JSON payload එක map කිරීමට යොදන model එකයි. Product යනු app එකේ local business entity එකක් හෝ SQLite table entity එකකි."
          ]
        ],
        "caption": "Model Class Architecture ප්‍රශ්න"
      },
      {
        "type": "dataflow"
      }
    ]
  },
  {
    "id": "compare-pros-cons",
    "category": "general",
    "icon": "⚖️",
    "title": "22. Android vs iOS, වාසි-අවාසි සහ සාරාංශය",
    "subtitle": "Platform Comparison, AOSP Ecosystem, Exam Writing Blueprint",
    "blocks": [
      {
        "type": "p",
        "si": "Android සහ iOS අතර සංසන්දනය සහ විභාගයට පිළිතුරු ලිවීමේදී මතක තබා ගත යුතු මූලික කරුණු.",
        "en": "Operating system comparison between Android and Apple iOS."
      },
      {
        "type": "table",
        "head": [
          "ලක්ෂණය",
          "Android (Google)",
          "iOS (Apple)"
        ],
        "rows": [
          [
            "Kernel",
            "Modified Linux Kernel",
            "Darwin / XNU Kernel"
          ],
          [
            "Source Model",
            "Open Source (AOSP)",
            "Closed Source (Proprietary)"
          ],
          [
            "App Distribution",
            "Google Play Store + Side-loading (APK)",
            "Apple App Store පමණි"
          ],
          [
            "Hardware Variety",
            "බොහෝ නිෂ්පාදකයන් (Samsung, Xiaomi, Pixel)",
            "Apple Devices පමණි (iPhone, iPad)"
          ],
          [
            "Development Languages",
            "Kotlin, Java (Android Studio)",
            "Swift, Objective-C (Xcode)"
          ],
          [
            "Customizability",
            "ඉතා ඉහළයි (Custom ROMs, Launchers)",
            "සීමිතයි (Strict Sandbox)"
          ]
        ],
        "caption": "Android vs iOS සංසන්දනය"
      },
      {
        "type": "note",
        "tone": "tip",
        "title": "Android හි ප්‍රධාන වාසි (Advantages)",
        "si": "1. Open Source (AOSP) — කේතය නිදහසේ භාවිත කළ හැක. 2. Hardware විවිධත්වය — මිල අඩු දුරකථන වල සිට flagships දක්වා. 3. Google Services සමඟ බද්ධ වීම. 4. Multitasking සහ Flexible File System. 5. විශාල developer community එකක් සහ පුළුල් libraries."
      },
      {
        "type": "note",
        "tone": "warn",
        "title": "Android හි අවාසි (Disadvantages)",
        "si": "1. Device Fragmentation — විවිධ screen sizes සහ OS versions නිසා testing අපහසු වීම. 2. Older devices වලට OS updates ප්‍රමාද වීම. 3. Unoptimized apps මඟින් බැටරි සහ RAM පරිභෝජනය වැඩි වීම."
      }
    ]
  }
];
