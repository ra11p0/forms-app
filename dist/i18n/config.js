import i18n from "i18next";
(async () => {
    await i18n.init({
        fallbackNS: "common",
        fallbackLng: "en",
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
})();
i18n.languages = ["en", "pl"];
export default i18n;
