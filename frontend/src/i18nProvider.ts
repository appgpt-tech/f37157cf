// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Users":{"name":"users","fields":{"Name":"Name","Surname":"Surname","Consumptionofalcohol":"Consumptionofalcohol","Id":"Id"}},"GraphParameters":{"name":"graphParameters","fields":{"Daysofweek":"Daysofweek","Drinkingamount":"Drinkingamount","Id":"Id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    