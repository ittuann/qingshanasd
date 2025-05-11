import { useEffect, useState, createContext } from "react";
import { IntlProvider } from "react-intl";

export const defaultLocale = "zh-CN";

export const LocaleContext = createContext({
  locale: "",
  setLocale: () => {},
});

export default function I18n(props) {
  const [locale, setLocale] = useState(() => {
    // 检查是否在浏览器环境中 确保只在浏览器环境中操作 localStorage
    if (typeof window !== "undefined" && window.localStorage) {
      const savedLocale = localStorage.getItem("locale");
      return savedLocale || defaultLocale;
    }
    return defaultLocale;
  });
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("locale", locale);
    }

    setMessages(null);

    import(`@/i18n/lang/${locale}.json`)
      .then((messages_) => setMessages(messages_))
      .catch((err) =>
        console.error(`Error loading messages for locale ${locale}: `, err),
      );
  }, [locale]);

  return !messages ? null : (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
