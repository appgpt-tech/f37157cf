// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Book":{"name":"book","fields":{"Title":"Title","Releasedate":"Releasedate","Description":"Description","Id":"Id"}},"Author":{"name":"author","fields":{"Name":"Name","Biography":"Biography","Nationality":"Nationality","Id":"Id"}},"Publisher":{"name":"publisher","fields":{"Name":"Name","Location":"Location","Contactinformation":"Contactinformation","Id":"Id"}},"Genre":{"name":"genre","fields":{"Name":"Name","Shortdescription":"Shortdescription","Id":"Id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    