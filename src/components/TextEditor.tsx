import { useState } from "react";

function TextEditor() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Empty Tab", content: "" },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const addTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: `Empty Tab`,
      content: "",
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const removeTab = (id: number) => {
    const filterTab = tabs.filter((t) => t.id !== id);
    setActiveTab(filterTab.length ? filterTab[0].id : 0);
    setTabs(filterTab);
  };

  const handleContentChange = (id: number, content: string) => {
    setTabs(
      tabs.map((tab) =>
        tab.id === id ? { ...tab, content, title: truncateTitle(content) } : tab
      )
    );
  };

  const truncateTitle = (text: string) => {
    const maxLength = 15;
    if (text.trim() === "") {
      return "Empty Tab";
    }
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3">
      <div className="flex border-b-2 gap-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center justify-center border-t border-l border-r rounded-t-lg px-3 gap-2 max-w-32 ${
              activeTab === tab.id ? "bg-white" : "bg-gray-300"
            }`}
          >
            <button
              className={`py-2 font-semibold text-blue-800 truncate ${
                activeTab === tab.id ? "text-blue-800" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
            <button
              onClick={() => removeTab(tab.id)}
              className="text-xs text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </div>
        ))}
        <button
          onClick={addTab}
          className="px-2 py-2 bg-gray-100 text-black border rounded-t-lg hover:bg-gray-200"
        >
          +
        </button>
      </div>

      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <textarea
                placeholder="Your text here"
                key={tab.id}
                className="w-full h-64 p-2 border-2 border-gray-300 rounded"
                value={tab.content}
                onChange={(e) => handleContentChange(tab.id, e.target.value)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default TextEditor;
