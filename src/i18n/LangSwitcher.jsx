import { useContext } from "react";
import { LocaleContext } from "@/i18n/i18n";
import "remixicon/fonts/remixicon.css";

export const locales = {
  "zh-CN": {
    name: "Chinese Simplified",
  },
  en: {
    name: "English",
  },
};

export default function LangSwitcher() {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <div className="">
      <select
        value={locale}
        onChange={(e) => {
          setLocale(e.target.value);
        }}
        className="pl-2 pr-2 py-1 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {Object.keys(locales).map((loc) => (
          <option value={loc} key={loc}>
            {locales[loc].name}
          </option>
        ))}
      </select>
    </div>
  );
}
