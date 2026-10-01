import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import hi from "./locales/hi.json";
import zh from "./locales/zh.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";
import tg from "./locales/tg.json";
import ru from "./locales/ru.json";
import de from "./locales/de.json";
import ja from "./locales/ja.json";
import tr from "./locales/tr.json";
import uz from "./locales/uz.json";
import fa from "./locales/fa.json";
import ko from "./locales/ko.json";
import it from "./locales/it.json";
import supplemental from "./locales/supplemental.json";

const savedLanguage =
    localStorage.getItem("shifopath-language") || "en";

const syncDocumentLanguage = (language) => {
    document.documentElement.lang = language;
    document.documentElement.dir = ["ar", "fa"].includes(language) ? "rtl" : "ltr";
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            hi: { translation: hi },
            zh: { translation: zh },
            es: { translation: es },
            fr: { translation: fr },
            ar: { translation: ar },
            tg: { translation: tg },
            ru: { translation: ru },
            de: { translation: de },
            ja: { translation: ja },
            tr: { translation: tr },
            uz: { translation: uz },
            fa: { translation: fa },
            ko: { translation: ko },
            it: { translation: it }
        },

        lng: savedLanguage,

        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

syncDocumentLanguage(savedLanguage);
i18n.on("languageChanged", syncDocumentLanguage);

Object.entries(supplemental).forEach(([language, translations]) => {
    i18n.addResourceBundle(language, "translation", translations, true, true);
});

export default i18n;