import { useEffect, useState, createContext } from "react";
import { IntlProvider } from "react-intl";

export const localeDefault = "zh-CN";

export const supportedLocales = {
  "zh-CN": {
    name: "Chinese Simplified",
  },
  en: {
    name: "English",
  },
  "ja-JP": {
    name: "Japanese",
  },
};

/**
 * 合并当前语言和默认语言 实现翻译内容缺失时的回退
 * @param {Object} defaultMessages - 默认语言的消息对象
 * @param {Object} currentMessages - 当前语言的消息对象
 * @returns {Object} 合并后的消息对象
 */
const defaultMessageMerge = (defaultMessages, currentMessages) => {
  // 处理模块导入的格式 确保获取实际的消息对象
  const defaultMsgs = defaultMessages?.default || defaultMessages || {};
  const currentMsgs = currentMessages?.default || currentMessages || {};

  if (!defaultMsgs) return currentMsgs;
  if (!currentMsgs) return defaultMsgs;

  const merged = { ...defaultMsgs };

  const deepMerge = (target, source) => {
    Object.keys(source).forEach((key) => {
      if (
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key])
      ) {
        // 如果是对象，递归合并
        if (!target[key] || typeof target[key] !== "object") {
          target[key] = {};
        }
        deepMerge(target[key], source[key]);
      } else if (
        source[key] !== undefined &&
        source[key] !== null &&
        source[key] !== ""
      ) {
        // 如果当前语言有有效值，使用当前语言的值
        target[key] = source[key];
      }
      // 如果当前语言的值为 undefined、null 或空字符串，保持默认语言的值
    });
  };

  deepMerge(merged, currentMsgs);
  return merged;
};

/**
 * Gets the user's browser locale and returns a supported locale.
 * @returns {string} A supported locale string, or the default locale if no match is found
 */
const getBrowserLocale = () => {
  if (typeof window === "undefined") return localeDefault;

  const browserLang = window.navigator.language;

  if (Object.keys(supportedLocales).includes(browserLang)) {
    return browserLang;
  }
  // 匹配语言代码
  const languageCode = browserLang.split("-")[0];
  const match = Object.keys(supportedLocales).find((locale) =>
    locale.startsWith(languageCode),
  );
  return match || localeDefault;
};

export const LocaleContext = createContext({
  locale: "",
  setLocale: () => {},
});

export default function I18n(props) {
  const [locale, setLocale] = useState(() => {
    // 检查是否在浏览器环境中 确保只在浏览器环境中操作 localStorage
    if (typeof window !== "undefined" && window.localStorage) {
      const savedLocale = localStorage.getItem("locale");
      // 如果没有保存的语言设置，使用浏览器语言
      return savedLocale || getBrowserLocale();
    }
    return localeDefault;
  });
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("locale", locale);
    }

    setMessages(null);

    const loadLocaleMessages = async () => {
      try {
        // 总是加载默认语言 作为回退
        const defaultMessages = await import(
          `@/i18n/lang/${localeDefault}.json`
        );

        if (locale === localeDefault) {
          // 如果当前语言就是默认语言则直接使用
          setMessages(defaultMessages.default || defaultMessages);
        } else {
          // 如果是其他语言，加载当前语言并与默认语言合并
          try {
            const currentMessages = await import(`@/i18n/lang/${locale}.json`);
            const mergedMessages = defaultMessageMerge(
              defaultMessages,
              currentMessages,
            );
            setMessages(mergedMessages);
          } catch (err) {
            // 如果当前语言加载失败，使用默认语言
            console.warn(
              `Failed to load messages for locale ${locale}, falling back to ${localeDefault}:`,
              err,
            );
            setMessages(defaultMessages.default || defaultMessages);
          }
        }
      } catch (err) {
        console.error(
          `Error loading default messages for locale ${localeDefault}:`,
          err,
        );
      }
    };

    loadLocaleMessages();
  }, [locale]);

  return !messages ? null : (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        localeDefault={localeDefault}
        messages={messages}
        key={locale}
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
