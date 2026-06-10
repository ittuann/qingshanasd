import { useContext, useState } from "react";
import { supportedLocales, LocaleContext } from "@/i18n/i18n";
import "remixicon/fonts/remixicon.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LangSwitcher() {
  const { locale, setLocale } = useContext(LocaleContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-primary flex items-center text-gray-500"
        aria-label="Language Switcher"
      >
        <i className="ri-translate-ai-2 text-xl"></i>
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 mt-2 md:left-1/2 md:-translate-x-1/2 md:transform">
          <Select
            value={locale}
            onValueChange={(value) => {
              setLocale(value);
              setIsOpen(false);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language">
                {supportedLocales[locale]?.name || "Language"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.keys(supportedLocales).map((loc) => (
                <SelectItem value={loc} key={loc}>
                  {supportedLocales[loc].name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
