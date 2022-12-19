import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const i18n = i18next.createInstance({
  fallbackNS: "common",
  fallbackLng: "pl",
  lng: "en",
  resources: {
    en: {
      common: await import("./locales/en/common.json"),
    },
    pl: {
      common: await import("./locales/pl/common.json"),
    },
  },
  ns: ["common"],
  defaultNS: "common",
});
i18n.languages = ["en", "pl"];
i18n.use(initReactI18next);
i18n.init();
export default i18n;
