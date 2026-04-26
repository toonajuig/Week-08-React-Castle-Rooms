const tabs = [
  { id: "home", label: "Home" },
  { id: "castle", label: "Castle Rooms" },
  { id: "counter", label: "Counter" },
  { id: "toggle", label: "Toggle" },
  { id: "form", label: "Form" },
];

export default function Navbar({ activeTab, onTabChange }) {
  return (
    <header className="border-b border-slate-700 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <h1 className="mb-3 text-center text-lg font-bold text-white">
          React State Examples
        </h1>

        <nav className="overflow-x-auto">
          <ul className="flex min-w-max items-center justify-center gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    onClick={() => onTabChange(tab.id)}
                    className={`rounded-md border px-4 py-2 text-sm font-semibold ${
                      isActive
                        ? "border-yellow-300 bg-yellow-300 text-slate-900"
                        : "border-slate-600 bg-slate-700 text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
