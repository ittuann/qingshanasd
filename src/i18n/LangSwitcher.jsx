import { useContext, useState } from "react";
import { LocaleContext } from "@/i18n/i18n";
import "remixicon/fonts/remixicon.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-500 hover:text-primary"
        aria-label="切换语言"
      >
        <i className="ri-translate-ai-2 text-xl"></i>
      </button>

      {isOpen && (
        <div className="absolute mt-2 z-50 md:transform md:-translate-x-1/2 md:left-1/2 left-0">
          <Select
            value={locale}
            onValueChange={(value) => {
              setLocale(value);
              setIsOpen(false);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language">
                {locales[locale]?.name || "Language"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.keys(locales).map((loc) => (
                <SelectItem value={loc} key={loc}>
                  {locales[loc].name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
