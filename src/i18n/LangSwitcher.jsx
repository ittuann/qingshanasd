import { useContext } from "react";
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

  return (
    <div className="">
      <Select
        value={locale}
        onValueChange={(value) => {
          setLocale(value);
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
  );
}
